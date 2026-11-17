/**
 * 生成预览用数据：直接打 to lib/index.js 的路由处理器，把真实工作区内容固化成 test/fixture.js。
 *   node test/preview.mjs "D:\中医"
 */
import { writeFileSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.argv[2] ?? process.cwd())
const host = await import(new URL('../lib/index.js', import.meta.url).href)

let route
host.apply({
  effect(fn) { fn(); return () => {} },
  get: () => ({ list: () => [{ id: 'w1', title: path.basename(root), dir: root }] }),
  webServer: { register(value) { route = value; return () => {} } },
  logger: { info() {}, warn() {} },
})

function call(method, urlPath, body) {
  return new Promise((resolve) => {
    const payload = body === undefined ? [] : [Buffer.from(JSON.stringify(body), 'utf8')]
    const req = { method, url: urlPath, async *[Symbol.asyncIterator]() { yield* payload } }
    const res = {
      status: 0, headers: {}, chunks: [],
      writeHead(status) { this.status = status },
      end(buffer) { resolve({ status: this.status, text: Buffer.from(buffer).toString('utf8') }) },
    }
    route.handler(req, res)
  })
}

const q = encodeURIComponent(root)
const decode = (result) => JSON.parse(result.text).data

const boot = decode(await call('GET', `/tcm/api/bootstrap?root=${q}`))
const sections = {}
const docs = {}
for (const section of boot.sections) {
  const listed = decode(await call('GET', `/tcm/api/section?root=${q}&section=${encodeURIComponent(section.id)}`))
  sections[section.id] = listed
  const rels = []
  for (const book of listed.books) {
    if (book.kind === 'file') rels.push(book.rel)
    else for (const chapter of book.chapters ?? []) rels.push(chapter.rel)
  }
  for (const rel of rels.slice(0, 6)) {
    docs[rel] = decode(await call('GET', `/tcm/api/doc?root=${q}&path=${encodeURIComponent(rel)}`))
  }
}

const fixture = {
  root,
  workspaces: { workspaces: [{ id: 'w1', title: path.basename(root), dir: root }], cwd: root },
  bootstrap: boot,
  sections,
  docs,
  search: { query: '', hits: [] },
}

const out = new URL('./fixture.js', import.meta.url)
writeFileSync(out, `window.__TCM_FIXTURE__ = ${JSON.stringify(fixture, null, 2)}\n`, 'utf8')
console.log(`[preview] fixture written: ${out.pathname} (sections: ${Object.keys(sections).join(', ')})`)
