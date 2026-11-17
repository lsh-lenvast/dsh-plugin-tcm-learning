/**
 * 离线冒烟测试：不启动 DSH，直接验证两个产物。
 *   node test/smoke.mjs <数据根>
 */
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'

const root = path.resolve(process.argv[2] ?? process.cwd())
const require = createRequire(import.meta.url)
let failures = 0
const check = (label, condition, detail = '') => {
  if (condition) {
    console.log(`  ok   ${label}`)
  } else {
    failures += 1
    console.log(`  FAIL ${label} ${detail}`)
  }
}

/* ── 浏览器半 ─────────────────────────────────────────── */
console.log('\n[client] lib/client.js')
const clientCode = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')
let definition
globalThis.window = { __ModuleLoader__: { load(def) { definition = def } } }
new Function('window', clientCode)(globalThis.window)
check('registers a module definition', definition !== undefined)
check('module id is the package name', definition?.id === 'dsh-plugin-tcm-learning', String(definition?.id))

const react = {
  createElement: () => null,
  Fragment: Symbol('Fragment'),
  useState: () => [undefined, () => {}],
  useEffect: () => {},
  useMemo: (fn) => fn(),
  useCallback: (fn) => fn,
  useRef: () => ({ current: undefined }),
  Component: class {},
}
const moduleExports = definition.factory((id) => {
  if (id === 'react') return react
  if (id === 'react/jsx-runtime') return { jsx: () => null, jsxs: () => null, Fragment: react.Fragment }
  throw new Error(`unexpected external: ${id}`)
})
check('exports apply()', typeof moduleExports.apply === 'function')
check('exports inject[]', Array.isArray(moduleExports.inject), JSON.stringify(moduleExports.inject))

const registrations = []
const fakeClientCtx = {
  effect(fn) { const dispose = fn(); return typeof dispose === 'function' ? dispose : () => {} },
  slots: {
    inject(name, fn) { registrations.push(name); const dispose = fn(); return typeof dispose === 'function' ? dispose : () => {} },
    register(options, component) {
      check(`slot ${options.name} has a component`, typeof component === 'function' || typeof component === 'object')
      if (options.name === 'main') check('main key matches sidebar id', options.key === 'tcm-learning', String(options.key))
      if (options.name === 'sidebar.panellist') check('sidebar label present', options.label === '中医学习', String(options.label))
      return () => {}
    },
  },
}
moduleExports.apply(fakeClientCtx)
check('contributes sidebar.panellist', registrations.includes('sidebar.panellist'))
check('contributes main panel', registrations.includes('main'))

/* ── Node 半 ──────────────────────────────────────────── */
console.log('\n[host] lib/index.js')
const host = await import(new URL('../lib/index.js', import.meta.url).href)
check('exports apply()', typeof host.apply === 'function')

let route
const fakeHostCtx = {
  effect(fn) { fn(); return () => {} },
  get(name) {
    if (name === 'workspaceRegistry') {
      return { list: () => [{ id: 'w1', title: path.basename(root), dir: root }] }
    }
    return undefined
  },
  webServer: { register(value) { route = value; return () => {} } },
  logger: { info() {}, warn() {} },
}
host.apply(fakeHostCtx)
check('registers a route', route !== undefined, JSON.stringify(route?.path))
check('route is a prefix at /tcm/api', route?.kind === 'prefix' && route?.path === '/tcm/api')

/** 发一个假请求，收集响应。 */
function call(method, urlPath, body) {
  return new Promise((resolve) => {
    const payload = body === undefined ? [] : [Buffer.from(JSON.stringify(body), 'utf8')]
    const req = {
      method,
      url: urlPath,
      async *[Symbol.asyncIterator]() { yield* payload },
    }
    const res = {
      status: 0,
      headers: {},
      chunks: [],
      writeHead(status, headers) { this.status = status; Object.assign(this.headers, headers) },
      end(buffer) { this.chunks.push(Buffer.from(buffer)); resolve({ status: this.status, text: Buffer.concat(this.chunks).toString('utf8') }) },
    }
    route.handler(req, res)
  })
}

const q = encodeURIComponent(root)
const health = await call('GET', '/tcm/api/health')
check('GET /health -> 200', health.status === 200, health.text.slice(0, 120))

const workspaces = await call('GET', '/tcm/api/workspaces')
check('GET /workspaces -> 200', workspaces.status === 200, workspaces.text.slice(0, 160))

const boot = await call('GET', `/tcm/api/bootstrap?root=${q}`)
check('GET /bootstrap -> 200', boot.status === 200, boot.text.slice(0, 200))
const bootData = JSON.parse(boot.text).data
check('bootstrap lists sections', Array.isArray(bootData?.sections), JSON.stringify(bootData?.sections?.map?.((s) => s.id)))
console.log(`       root=${bootData?.root}`)
console.log(`       sections=${JSON.stringify(bootData?.sections?.map((s) => `${s.id}(${s.docs})`))}`)

for (const section of bootData.sections ?? []) {
  const listed = await call('GET', `/tcm/api/section?root=${q}&section=${encodeURIComponent(section.id)}`)
  check(`GET /section ${section.id} -> 200`, listed.status === 200, listed.text.slice(0, 160))
  const books = JSON.parse(listed.text).data.books
  console.log(`       books=${books.length} ${JSON.stringify(books.slice(0, 4).map((b) => b.name))}`)
  const first = books.find((b) => b.kind === 'file') ?? books[0]
  if (first === undefined) continue
  const rel = first.kind === 'file' ? first.rel : first.chapters?.[0]?.rel
  const doc = await call('GET', `/tcm/api/doc?root=${q}&path=${encodeURIComponent(rel)}`)
  check(`GET /doc ${rel} -> 200`, doc.status === 200, doc.text.slice(0, 160))
  const docData = JSON.parse(doc.text).data
  console.log(`       title=${docData?.title} words=${docData?.words}`)
}

const traversal = await call('GET', `/tcm/api/doc?root=${q}&path=${encodeURIComponent('../../../etc/passwd')}`)
check('rejects path traversal', traversal.status === 400 || traversal.status === 403, traversal.text.slice(0, 120))

const outsider = await call('GET', `/tcm/api/bootstrap?root=${encodeURIComponent('C:\\Windows')}`)
check('rejects untrusted root', outsider.status === 403, outsider.text.slice(0, 120))

const search = await call('GET', `/tcm/api/search?root=${q}&q=${encodeURIComponent('麻黄')}`)
check('GET /search -> 200', search.status === 200, search.text.slice(0, 160))
console.log(`       hits=${JSON.parse(search.text).data.hits.length}`)

console.log(`\n${failures === 0 ? 'ALL PASS' : `${failures} FAILURE(S)`}`)
process.exit(failures === 0 ? 0 : 1)
