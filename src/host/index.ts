/**
 * 中医学习 · Node 半
 *
 * 只做两件事：
 *   1. 在 webserver 上挂一组 /tcm/api/* 路由（读写工作区里的 Markdown）；
 *   2. 提供工作区列表，让浏览器半知道默认数据根在哪。
 *
 * 所有路径都在这里收口：必须落在已登记的工作区（或配置的根）之内，只允许 .md / 目录。
 * 没有任何网络请求、没有模型参与、没有遥测。
 */
import { promises as fs } from 'node:fs'
import * as path from 'node:path'

const PREFIX = '/tcm/api'
const CONFIG_REL = path.join('.tcm', 'config.json')
const TRASH_REL = path.join('.tcm', 'trash')
const MAX_BODY = 8 * 1024 * 1024
const MD = /\.md$/i

interface HostCtx {
  effect(fn: () => () => void, label?: string): void
  get(name: string): any
  webServer: {
    register(route: { kind: 'exact' | 'prefix'; path: string; handler: (req: any, res: any) => void }): () => void
  }
  logger?: { warn(...args: any[]): void; info(...args: any[]): void }
}

export const inject = ['webServer']

/** 一次响应：JSON、不缓存。 */
function send(res: any, status: number, body: unknown): void {
  const text = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'content-length': Buffer.byteLength(text),
  })
  res.end(text)
}

const ok = (res: any, data: unknown) => send(res, 200, { ok: true, data })
const fail = (res: any, status: number, code: string, message: string) =>
  send(res, status, { ok: false, code, message })

/** 读取 JSON 请求体，超过上限直接拒绝。 */
async function readJson(req: any): Promise<any> {
  const chunks: Buffer[] = []
  let total = 0
  for await (const chunk of req) {
    total += chunk.length
    if (total > MAX_BODY) throw Object.assign(new Error('请求体过大'), { status: 413 })
    chunks.push(chunk as Buffer)
  }
  if (total === 0) return {}
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    throw Object.assign(new Error('请求体不是合法 JSON'), { status: 400 })
  }
}

/** Windows 大小写不敏感；统一小写做包含判断。 */
const norm = (p: string) => (process.platform === 'win32' ? p.toLowerCase() : p)

/** 路径是否落在某目录之内（含自身）。 */
function inside(root: string, target: string): boolean {
  const r = norm(path.resolve(root))
  const t = norm(path.resolve(target))
  return t === r || t.startsWith(r.endsWith(path.sep) ? r : r + path.sep)
}

/** 已登记工作区的目录（不同 DSH 版本字段名不一致，逐个探测）。 */
async function workspaceDirs(ctx: HostCtx): Promise<{ id: string; title: string; dir: string }[]> {
  const registry = ctx.get('workspaceRegistry')
  if (registry === undefined || registry === null) return []
  let list: any[] = []
  try {
    const raw = registry.list?.() ?? registry.workspaces?.() ?? []
    list = Array.isArray(raw) ? raw : []
  } catch {
    return []
  }
  const out: { id: string; title: string; dir: string }[] = []
  for (const item of list) {
    if (item === null || item === undefined) continue
    const candidates = [
      item.path, item.dir, item.directory, item.cwd, item.root,
      item.record?.path, item.record?.dir, item.record?.directory,
      item.snapshot?.path, item.snapshot?.dir,
      typeof item === 'string' ? item : undefined,
    ]
    const dir = candidates.find((value: unknown) => typeof value === 'string' && value.length > 0) as string | undefined
    if (dir === undefined) continue
    out.push({
      id: String(item.id ?? item.workspaceId ?? dir),
      title: String(item.title ?? item.displayTitle ?? item.name ?? path.basename(dir)),
      dir,
    })
  }
  return out
}

/**
 * 解析数据根：必须是真实存在、且被信任的目录。
 * 信任集合 = 已登记工作区 ∪ 进程工作目录；其他路径一律拒绝。
 */
async function resolveRoot(ctx: HostCtx, requested: unknown): Promise<string> {
  if (typeof requested !== 'string' || requested.trim() === '') {
    throw Object.assign(new Error('缺少 root 参数'), { status: 400 })
  }
  const resolved = path.resolve(requested.trim())
  let real: string
  try {
    real = await fs.realpath(resolved)
  } catch {
    throw Object.assign(new Error(`目录不存在：${resolved}`), { status: 404 })
  }
  const stat = await fs.stat(real)
  if (!stat.isDirectory()) throw Object.assign(new Error(`不是目录：${real}`), { status: 400 })

  const trusted = new Set<string>([norm(await fs.realpath(process.cwd()))])
  for (const workspace of await workspaceDirs(ctx)) {
    try {
      trusted.add(norm(await fs.realpath(workspace.dir)))
    } catch {
      /* 目录已不存在的登记项跳过 */
    }
  }
  if (!trusted.has(norm(real))) {
    throw Object.assign(new Error(`该目录不是已登记的工作区：${real}`), { status: 403 })
  }
  return real
}

/** 把相对路径安全地拼到根目录下。 */
function safePath(root: string, rel: unknown, options: { allowRoot?: boolean } = {}): string {
  if (typeof rel !== 'string') throw Object.assign(new Error('缺少路径参数'), { status: 400 })
  const cleaned = rel.replace(/\\/g, '/').replace(/^\/+/, '')
  if (cleaned.split('/').some(segment => segment === '..')) {
    throw Object.assign(new Error('路径不合法'), { status: 400 })
  }
  const target = path.resolve(root, cleaned)
  if (!inside(root, target)) throw Object.assign(new Error('路径越界'), { status: 400 })
  if (!options.allowRoot && norm(target) === norm(root)) {
    throw Object.assign(new Error('路径不能是根目录本身'), { status: 400 })
  }
  return target
}

/** 解析 Markdown 开头的 YAML frontmatter（只认简单 key: value）。 */
function parseFrontmatter(text: string): { meta: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text)
  if (match === null) return { meta: {}, body: text }
  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const hit = /^([A-Za-z_][\w-]*)\s*:\s*(.*)$/.exec(line.trim())
    if (hit === null) continue
    meta[hit[1]] = hit[2].replace(/^['"]|['"]$/g, '')
  }
  return { meta, body: text.slice(match[0].length) }
}

/** 文件开头的一小段（够读 frontmatter，不读整本）。 */
async function head(file: string, bytes = 800): Promise<string> {
  let handle: any
  try {
    handle = await fs.open(file, 'r')
    const buffer = Buffer.alloc(bytes)
    const { bytesRead } = await handle.read(buffer, 0, bytes, 0)
    return buffer.subarray(0, bytesRead).toString('utf8')
  } catch {
    return ''
  } finally {
    await handle?.close().catch(() => {})
  }
}

const wordsOf = (bytes: number) => Math.max(1, Math.round(bytes / 3))

async function statOrNull(target: string): Promise<any> {
  try {
    return await fs.stat(target)
  } catch {
    return null
  }
}

async function readConfig(root: string): Promise<{ version: number; sections: Record<string, any> }> {
  try {
    const raw = await fs.readFile(path.join(root, CONFIG_REL), 'utf8')
    const parsed = JSON.parse(raw)
    return {
      version: typeof parsed?.version === 'number' ? parsed.version : 1,
      sections: typeof parsed?.sections === 'object' && parsed.sections !== null ? parsed.sections : {},
    }
  } catch {
    return { version: 1, sections: {} }
  }
}

async function writeConfig(root: string, config: { version: number; sections: Record<string, any> }): Promise<void> {
  const file = path.join(root, CONFIG_REL)
  await fs.mkdir(path.dirname(file), { recursive: true })
  const tmp = `${file}.${process.pid}.tmp`
  await fs.writeFile(tmp, `${JSON.stringify(config, null, 2)}\n`, 'utf8')
  await fs.rename(tmp, file)
}

/** 扫描板块：根目录下的每个文件夹就是一个板块，文件夹名即板块名。 */
async function listSections(root: string) {
  const config = await readConfig(root)
  const entries = await fs.readdir(root, { withFileTypes: true })
  const sections: any[] = []
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue
    const dir = path.join(root, entry.name)
    let docs = 0
    let updatedAt = 0
    const scan = async (folder: string, depth: number) => {
      const items = await fs.readdir(folder, { withFileTypes: true }).catch(() => [])
      for (const item of items) {
        if (item.name.startsWith('.')) continue
        const full = path.join(folder, item.name)
        if (item.isDirectory() && depth < 2) {
          await scan(full, depth + 1)
        } else if (item.isFile() && MD.test(item.name)) {
          docs += 1
          const stat = await statOrNull(full)
          if (stat !== null && stat.mtimeMs > updatedAt) updatedAt = stat.mtimeMs
        }
      }
    }
    await scan(dir, 0)
    const meta = config.sections[entry.name] ?? {}
    sections.push({
      id: entry.name,
      title: typeof meta.title === 'string' && meta.title.trim() !== '' ? meta.title : entry.name,
      color: typeof meta.color === 'string' ? meta.color : null,
      order: Number.isFinite(meta.order) ? meta.order : 1000,
      hidden: meta.hidden === true,
      docs,
      updatedAt,
    })
  }
  sections.sort((a, b) => (a.order - b.order) || a.id.localeCompare(b.id, 'zh-Hans-CN'))
  return {
    sections: sections.filter(section => !section.hidden),
    allSections: sections,
    root,
  }
}

/** 一个板块里的「书」：单个 .md 是一卷，文件夹是一套书（内含多卷）。 */
async function listBooks(root: string, section: string) {
  const dir = safePath(root, section)
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [] as any[])
  const books: any[] = []
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    const stat = await statOrNull(full)
    if (stat === null) continue
    if (entry.isFile() && MD.test(entry.name)) {
      const meta = parseFrontmatter(await head(full)).meta
      books.push({
        kind: 'file',
        name: entry.name,
        rel: `${section}/${entry.name}`,
        title: meta.title ?? entry.name.replace(MD, ''),
        summary: meta.summary ?? meta.description ?? '',
        tags: meta.tags ?? '',
        words: wordsOf(stat.size),
        mtime: stat.mtimeMs,
      })
    } else if (entry.isDirectory()) {
      const items = await fs.readdir(full, { withFileTypes: true }).catch(() => [] as any[])
      const chapters: any[] = []
      for (const item of items.sort((a: any, b: any) => a.name.localeCompare(b.name, 'zh-Hans-CN'))) {
        if (!item.isFile() || !MD.test(item.name)) continue
        const chapterStat = await statOrNull(path.join(full, item.name))
        chapters.push({
          name: item.name,
          rel: `${section}/${entry.name}/${item.name}`,
          title: item.name.replace(MD, ''),
          words: chapterStat === null ? 0 : wordsOf(chapterStat.size),
          mtime: chapterStat?.mtimeMs ?? 0,
        })
      }
      if (chapters.length === 0) continue
      books.push({
        kind: 'dir',
        name: entry.name,
        rel: `${section}/${entry.name}`,
        title: entry.name,
        summary: `${chapters.length} 卷`,
        words: chapters.reduce((sum, chapter) => sum + chapter.words, 0),
        mtime: Math.max(...chapters.map(chapter => chapter.mtime)),
        chapters,
      })
    }
  }
  books.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))
  return { section, books }
}

/** 全文检索：只扫 .md，跳过 .tcm 与隐藏目录。 */
async function search(root: string, query: string) {
  const hits: any[] = []
  const needle = query.toLowerCase()
  const walk = async (dir: string, rel: string, depth: number) => {
    if (hits.length >= 40 || depth > 4) return
    const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [] as any[])
    for (const entry of entries) {
      if (hits.length >= 40) return
      if (entry.name.startsWith('.')) continue
      const full = path.join(dir, entry.name)
      const childRel = rel === '' ? entry.name : `${rel}/${entry.name}`
      if (entry.isDirectory()) {
        await walk(full, childRel, depth + 1)
      } else if (entry.isFile() && MD.test(entry.name)) {
        const stat = await statOrNull(full)
        if (stat === null || stat.size > 2 * 1024 * 1024) continue
        const text = await fs.readFile(full, 'utf8').catch(() => '')
        const index = text.toLowerCase().indexOf(needle)
        if (index < 0) continue
        hits.push({
          rel: childRel,
          section: childRel.split('/')[0],
          title: entry.name.replace(MD, ''),
          snippet: text.slice(Math.max(0, index - 40), index + needle.length + 60).replace(/\s+/g, ' ').trim(),
        })
      }
    }
  }
  await walk(root, '', 0)
  return { query, hits }
}

/** Windows 非法字符净化，得到一个能当文件名的标题。 */
function safeName(input: string, fallback: string): string {
  const cleaned = String(input ?? '')
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80)
  return cleaned === '' ? fallback : cleaned
}

async function ensureUnique(dir: string, base: string, ext = '.md'): Promise<string> {
  let candidate = `${base}${ext}`
  let index = 2
  while ((await statOrNull(path.join(dir, candidate))) !== null) {
    candidate = `${base} (${index})${ext}`
    index += 1
  }
  return candidate
}

/** 删除 = 移入 .tcm/trash（可人工恢复）。 */
async function trash(root: string, target: string): Promise<void> {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const dir = path.join(root, TRASH_REL, stamp)
  await fs.mkdir(dir, { recursive: true })
  await fs.rename(target, path.join(dir, path.basename(target)))
}

async function handle(ctx: HostCtx, req: any, res: any): Promise<void> {
  const url = new URL(req.url ?? '/', 'http://tcm.local')
  const route = url.pathname.slice(PREFIX.length).replace(/\/+$/, '') || '/'
  const method = (req.method ?? 'GET').toUpperCase()
  const q = url.searchParams

  try {
    // 工作区列表：浏览器的入口与设置用它挑数据根
    if (route === '/workspaces' && method === 'GET') {
      const workspaces = await workspaceDirs(ctx)
      return ok(res, { workspaces, cwd: process.cwd() })
    }

    if (route === '/health' && method === 'GET') {
      return ok(res, { plugin: 'dsh-plugin-tcm-learning', pid: process.pid })
    }

    if (route === '/bootstrap' && method === 'GET') {
      const root = await resolveRoot(ctx, q.get('root'))
      const listed = await listSections(root)
      return ok(res, { ...listed, workspace: path.basename(root) })
    }

    if (route === '/section' && method === 'GET') {
      const root = await resolveRoot(ctx, q.get('root'))
      const section = q.get('section')
      if (section === null || section === '') return fail(res, 400, 'BAD_SECTION', '缺少板块名')
      const listed = await listBooks(root, section)
      const config = await readConfig(root)
      const meta = config.sections[section] ?? {}
      return ok(res, {
        section: {
          id: section,
          title: typeof meta.title === 'string' ? meta.title : section,
          color: typeof meta.color === 'string' ? meta.color : null,
          order: Number.isFinite(meta.order) ? meta.order : 1000,
        },
        books: listed.books,
      })
    }

    if (route === '/doc' && method === 'GET') {
      const root = await resolveRoot(ctx, q.get('root'))
      const file = safePath(root, q.get('path'))
      if (!MD.test(file)) return fail(res, 400, 'NOT_MARKDOWN', '只支持 Markdown 文件')
      const [raw, stat] = await Promise.all([fs.readFile(file, 'utf8'), statOrNull(file)])
      if (stat === null) return fail(res, 404, 'NOT_FOUND', '文件不存在')
      const { meta, body } = parseFrontmatter(raw)
      return ok(res, {
        rel: path.relative(root, file).replace(/\\/g, '/'),
        title: meta.title ?? path.basename(file).replace(MD, ''),
        meta,
        content: body,
        raw,
        words: wordsOf(stat.size),
        mtime: stat.mtimeMs,
      })
    }

    if (route === '/doc' && method === 'PUT') {
      const body = await readJson(req)
      const root = await resolveRoot(ctx, body.root)
      const file = safePath(root, body.path)
      if (!MD.test(file)) return fail(res, 400, 'NOT_MARKDOWN', '只支持 Markdown 文件')
      if (typeof body.content !== 'string') return fail(res, 400, 'BAD_CONTENT', 'content 必须是字符串')
      const stat = await statOrNull(file)
      if (stat !== null && typeof body.mtime === 'number' && Math.abs(stat.mtimeMs - body.mtime) > 1) {
        return fail(res, 409, 'CONFLICT', '文件已被别处修改，请重新载入后再保存')
      }
      await fs.mkdir(path.dirname(file), { recursive: true })
      const tmp = `${file}.${process.pid}.tmp`
      await fs.writeFile(tmp, body.content, 'utf8')
      await fs.rename(tmp, file)
      const next = await statOrNull(file)
      return ok(res, { rel: path.relative(root, file).replace(/\\/g, '/'), mtime: next?.mtimeMs ?? 0 })
    }

    // 新建文档：POST /doc {root, section, title, kind}
    if (route === '/doc' && method === 'POST') {
      const body = await readJson(req)
      const root = await resolveRoot(ctx, body.root)
      const section = safeName(body.section, '未分类')
      const title = safeName(body.title, `未命名-${Date.now()}`)
      const dir = safePath(root, section)
      await fs.mkdir(dir, { recursive: true })
      if (body.kind === 'dir') {
        const folder = await ensureUnique(dir, title, '')
        await fs.mkdir(path.join(dir, folder), { recursive: true })
        const chapter = await ensureUnique(path.join(dir, folder), '01-卷首', '.md')
        await fs.writeFile(path.join(dir, folder, chapter), `---\ntitle: ${title}\n---\n\n# ${title}\n\n`, 'utf8')
        return ok(res, { rel: `${section}/${folder}/${chapter}`, kind: 'dir' })
      }
      const file = await ensureUnique(dir, title, '.md')
      await fs.writeFile(path.join(dir, file), `---\ntitle: ${title}\n---\n\n# ${title}\n\n`, 'utf8')
      return ok(res, { rel: `${section}/${file}`, kind: 'file' })
    }

    if (route === '/doc' && method === 'PATCH') {
      const body = await readJson(req)
      const root = await resolveRoot(ctx, body.root)
      const from = safePath(root, body.path)
      const dir = path.dirname(from)
      const nextName = safeName(body.title, path.basename(from).replace(MD, ''))
      const isFile = MD.test(from)
      const to = path.join(dir, isFile ? `${nextName}.md` : nextName)
      if (norm(from) !== norm(to) && (await statOrNull(to)) !== null) {
        return fail(res, 409, 'EXISTS', '同名文件已存在')
      }
      await fs.rename(from, to)
      return ok(res, { rel: path.relative(root, to).replace(/\\/g, '/') })
    }

    if (route === '/doc' && method === 'DELETE') {
      const root = await resolveRoot(ctx, q.get('root'))
      const target = safePath(root, q.get('path'))
      await trash(root, target)
      return ok(res, { trashed: path.relative(root, target).replace(/\\/g, '/') })
    }

    if (route === '/section' && method === 'POST') {
      const body = await readJson(req)
      const root = await resolveRoot(ctx, body.root)
      const name = safeName(body.name, `新板块-${Date.now()}`)
      const dir = safePath(root, name)
      if ((await statOrNull(dir)) !== null) return fail(res, 409, 'EXISTS', '板块已存在')
      await fs.mkdir(dir, { recursive: true })
      return ok(res, { section: { id: name, title: name, docs: 0, updatedAt: 0 } })
    }

    if (route === '/section' && method === 'PATCH') {
      const body = await readJson(req)
      const root = await resolveRoot(ctx, body.root)
      const from = safePath(root, body.from)
      const to = path.join(root, safeName(body.to, path.basename(from)))
      if (norm(from) !== norm(to) && (await statOrNull(to)) !== null) {
        return fail(res, 409, 'EXISTS', '同名板块已存在')
      }
      await fs.rename(from, to)
      const config = await readConfig(root)
      const meta = config.sections[path.basename(from)]
      if (meta !== undefined) {
        delete config.sections[path.basename(from)]
        config.sections[path.basename(to)] = meta
        await writeConfig(root, config)
      }
      return ok(res, { section: { id: path.basename(to), title: path.basename(to) } })
    }

    if (route === '/section' && method === 'DELETE') {
      const root = await resolveRoot(ctx, q.get('root'))
      const target = safePath(root, q.get('name'))
      await trash(root, target)
      const config = await readConfig(root)
      delete config.sections[path.basename(target)]
      await writeConfig(root, config)
      return ok(res, { trashed: path.basename(target) })
    }

    if (route === '/config' && method === 'GET') {
      const root = await resolveRoot(ctx, q.get('root'))
      const config = await readConfig(root)
      const listed = await listSections(root)
      return ok(res, { config, sections: listed.allSections })
    }

    if (route === '/config' && method === 'PUT') {
      const body = await readJson(req)
      const root = await resolveRoot(ctx, body.root)
      const config = await readConfig(root)
      const incoming = body.config?.sections ?? body.sections ?? {}
      for (const [name, meta] of Object.entries(incoming as Record<string, any>)) {
        const dir = safePath(root, name)
        if ((await statOrNull(dir)) === null) continue
        config.sections[name] = {
          title: typeof meta?.title === 'string' && meta.title.trim() !== '' ? meta.title.trim() : name,
          color: typeof meta?.color === 'string' ? meta.color : null,
          order: Number.isFinite(meta?.order) ? meta.order : 1000,
          hidden: meta?.hidden === true,
        }
      }
      await writeConfig(root, config)
      return ok(res, { config })
    }

    if (route === '/search' && method === 'GET') {
      const root = await resolveRoot(ctx, q.get('root'))
      const query = (q.get('q') ?? '').trim()
      if (query === '') return ok(res, { query, hits: [] })
      const result = await search(root, query)
      return ok(res, result)
    }

    return fail(res, 404, 'NO_ROUTE', `未知接口：${method} ${route}`)
  } catch (error: any) {
    const status = typeof error?.status === 'number' ? error.status : 500
    if (status >= 500) ctx.logger?.warn?.('[tcm] api error', error)
    return fail(res, status, status === 500 ? 'INTERNAL' : 'BAD_REQUEST', String(error?.message ?? error))
  }
}

export function apply(ctx: HostCtx): void {
  ctx.effect(
    () => ctx.webServer.register({
      kind: 'prefix',
      path: PREFIX,
      handler: (req: any, res: any) => {
        void handle(ctx, req, res)
      },
    }),
    'tcm-learning: api routes',
  )
  ctx.logger?.info?.('[tcm] 中医学习 API 已挂载于 /tcm/api')
}
