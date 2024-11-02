import { e as eventHandler, u as useAppConfig } from '../nitro/nitro.mjs'

var name = 'web'
var version = '0.0.0'
var type = 'module'
var scripts = {
  build: 'nitro build',
  dev: 'nitro dev --port 3000',
  start: 'wrangler pages dev --port 3000',
  prepare: 'nitro prepare',
  lint: 'biome lint . --write',
  check: 'biome check . --write',
  format: 'biome format . --write',
  typecheck: 'tsc -b --noEmit',
  wrangler: 'wrangler',
}
var dependencies = {
  consola: 'catalog:',
  pathe: 'catalog:',
  'std-env': 'catalog:',
}
var devDependencies = {
  '@biomejs/biome': 'catalog:',
  nitropack: 'catalog:',
  typescript: 'catalog:',
}
const pkg = {
  name: name,
  version: version,
  private: true,
  type: type,
  scripts: scripts,
  dependencies: dependencies,
  devDependencies: devDependencies,
}

const index = eventHandler((event) => {
  const appConfig = useAppConfig(event)
  return `<h1>${appConfig.title} --> ${pkg.name}</h1>
<p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
<p>Learn more from <a href="https://nitro.unjs.io" target="_blank">Nitro Documentation</a></p>
`
})

export { index as default }
