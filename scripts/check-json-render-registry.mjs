import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const catalogSource = fs.readFileSync(path.join(root, 'src/lib/render/catalog.ts'), 'utf8')
const registrySource = fs.readFileSync(path.join(root, 'src/lib/render/registry.tsx'), 'utf8')

function componentSection(source, start, end) {
  const startIndex = source.indexOf(start)
  const endIndex = source.indexOf(end, startIndex)
  if (startIndex < 0 || endIndex < 0) throw new Error(`Could not find ${start}`)
  return source.slice(startIndex, endIndex)
}

function componentNames(source) {
  return new Set(
    [...source.matchAll(/^    ([A-Za-z][A-Za-z0-9_]*):\s*(?=[({])/gm)].map(
      (match) => match[1],
    ),
  )
}

const catalogComponents = componentNames(
  componentSection(catalogSource, 'components: {', 'actions: {'),
)
const registryComponents = componentNames(
  componentSection(registrySource, 'components: {', 'actions: {'),
)

const missing = [...catalogComponents].filter((name) => !registryComponents.has(name)).sort()
const extra = [...registryComponents].filter((name) => !catalogComponents.has(name)).sort()

if (missing.length || extra.length) {
  if (missing.length) console.error(`Missing registry components: ${missing.join(', ')}`)
  if (extra.length) console.error(`Extra registry components: ${extra.join(', ')}`)
  process.exit(1)
}

console.log(`JSON Render registry audit passed: ${catalogComponents.size} components matched.`)
