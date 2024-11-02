import { e as eventHandler } from '../nitro/nitro.mjs'

const index = eventHandler((event) => {
  return { message: 'API Endpoint', path: event.path }
})

export { index as default }
