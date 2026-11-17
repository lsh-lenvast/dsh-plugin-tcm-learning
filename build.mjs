// 构建脚本：把 src/ 打成 DSH 能直接消费的两个产物
//   lib/index.js   - Node half (ESM)
//   lib/client.js  - browser half (window.__ModuleLoader__.load wrapper + CJS factory)
import { build } from 'esbuild'
import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const pkg = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'))
const ID = pkg.name

/** Browser-half shell, identical in shape to the shipped @deepseek-ai/dsh-client-* bundles. */
function wrapClient(code) {
  const body = code
    .split('\n')
    .map(line => (line.length > 0 ? `\t\t${line}` : line))
    .join('\n')
  return `window.__ModuleLoader__.load({
\tid: ${JSON.stringify(ID)},
\tfactory: (require) => {
\t\tvar module = { exports: {} };
\t\tvar exports = module.exports;
${body}
\t\treturn module.exports;
\t}
});
`
}

/** Write esbuild's in-memory output to disk (and wrap the client bundle). */
const emit = {
  name: 'emit',
  setup(build) {
    build.onEnd(async (result) => {
      if (result.errors.length > 0) {
        console.error(`[tcm] build failed: ${result.errors.length} error(s)`)
        return
      }
      for (const file of result.outputFiles ?? []) {
        const rel = path.relative(root, file.path)
        const text = rel.endsWith('client.js') ? wrapClient(file.text) : file.text
        await fs.mkdir(path.dirname(file.path), { recursive: true })
        await fs.writeFile(file.path, text, 'utf8')
        console.log(`[tcm] wrote ${rel} (${(text.length / 1024).toFixed(1)} kB)`)
      }
    })
  },
}

const hostOptions = {
  entryPoints: [path.join(root, 'src/host/index.ts')],
  outfile: path.join(root, 'lib/index.js'),
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node22',
  sourcemap: false,
  write: false,
  logLevel: 'warning',
  plugins: [emit],
}

const clientOptions = {
  entryPoints: [path.join(root, 'src/client/index.tsx')],
  outfile: path.join(root, 'lib/client.js'),
  bundle: true,
  platform: 'browser',
  format: 'cjs',
  target: 'chrome110',
  jsx: 'automatic',
  sourcemap: false,
  write: false,
  logLevel: 'warning',
  // Static module table of the DSH web shell: never bundle a second copy.
  external: [
    'react',
    'react/jsx-runtime',
    'react-dom',
    'react-dom/client',
    '@deepseek-ai/dsh-client-ui-primitives',
    '@deepseek-ai/dsh-client-store',
  ],
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [emit],
}

await Promise.all([build(hostOptions), build(clientOptions)])
console.log('[tcm] done')
