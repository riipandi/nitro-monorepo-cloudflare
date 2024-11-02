// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: ['/*'],
  exclude: ['/', '/.DS_Store', '/favicon.ico'],
}

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from '/Users/ariss/Repository/nitro-monorepo-cloudflare/apps/web/.wrangler/tmp/pages-xt7H5X/bundledWorker-0.8506853867283097.mjs'
import { isRoutingRuleMatch } from '/Users/ariss/Repository/nitro-monorepo-cloudflare/node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/pages-dev-util.ts'
export * from '/Users/ariss/Repository/nitro-monorepo-cloudflare/apps/web/.wrangler/tmp/pages-xt7H5X/bundledWorker-0.8506853867283097.mjs'
var routes = define_ROUTES_default
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url)
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request)
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError('Entry point missing `fetch` handler')
        }
        return worker.fetch(request, env, context)
      }
    }
    return env.ASSETS.fetch(request)
  },
}
export { pages_dev_pipeline_default as default }
//# sourceMappingURL=anmc7bh6q1j.js.map
