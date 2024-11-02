import {
  f,
  d as defineCachedEventHandler,
  u as useAppConfig,
  s as setResponseHeader,
  a as send,
} from '../nitro/nitro.mjs'

function handleBypassCache(event) {
  return !f || event.node.req.url.includes('nocache')
}

const robots_txt = defineCachedEventHandler(
  async (event) => {
    const appConfig = useAppConfig(event)
    setResponseHeader(event, 'Content-Type', 'text/plain')
    return send(
      event,
      `User-Agent: *
Allow: /
Sitemap: ${appConfig.baseURL}/sitemap.xml`
    )
  },
  {
    shouldBypassCache: (e) => handleBypassCache(e),
    maxAge: 60 * 60 * 12 * 30,
  }
)

export { robots_txt as default }
