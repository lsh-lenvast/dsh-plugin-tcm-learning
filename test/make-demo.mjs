/**
 * 只用于截图验证「一层放满、自动换层」：
 *   node test/make-demo.mjs          生成 26 本测试书
 *   node test/make-demo.mjs --clean  删除
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.argv[2] ?? 'D:/中医')
const clean = process.argv.includes('--clean')
const dir = path.join(root, '铺满测试')

if (clean) {
  fs.rmSync(dir, { recursive: true, force: true })
  console.log('cleaned', dir)
} else {
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })
  const names = [
    '麻黄', '桂枝', '荆芥', '防风', '紫苏', '生姜', '香薷', '羌活', '白芷', '细辛',
    '藁本', '苍耳子', '辛夷', '薄荷', '牛蒡子', '蝉蜕', '桑叶', '菊花', '葛根', '柴胡',
    '升麻', '淡豆豉', '浮萍', '木贼', '石膏', '知母',
  ]
  for (const [index, name] of names.entries()) {
    const body = `---\ntitle: ${name}\n---\n\n# ${name}\n\n用于验证书架铺满与换层。\n`
    fs.writeFileSync(path.join(dir, `${String(index + 1).padStart(2, '0')}-${name}.md`), body, 'utf8')
  }
  console.log(`created ${names.length} books in ${dir}`)
}
