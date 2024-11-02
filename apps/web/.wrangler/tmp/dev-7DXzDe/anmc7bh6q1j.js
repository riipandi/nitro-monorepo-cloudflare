function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {}
  for (const [k, v] of Object.entries(esm)) {
    if (k !== 'default') {
      Object.defineProperty(cjs, k, {
        enumerable: true,
        value: v,
      })
    }
  }
  return cjs
}
var __defProp = Object.defineProperty
var __getOwnPropNames = Object.getOwnPropertyNames
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value)
var __name = (target, value) => __defProp(target, 'name', { value, configurable: true })
var __esm = (fn3, res) =>
  function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])((fn3 = 0))), res
  }
var __export = (target, all) => {
  for (var name2 in all) __defProp(target, name2, { get: all[name2], enumerable: true })
}
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value)
  return value
}

// .wrangler/tmp/bundle-fAlUd6/checked-fetch.js
function checkURL(request, init) {
  const url =
    request instanceof URL
      ? request
      : new URL((typeof request === 'string' ? new Request(request, init) : request).url)
  if (url.port && url.port !== '443' && url.protocol === 'https:') {
    if (!urls.has(url.toString())) {
      urls.add(url.toString())
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      )
    }
  }
}
var urls
var init_checked_fetch = __esm({
  '.wrangler/tmp/bundle-fAlUd6/checked-fetch.js'() {
    urls = /* @__PURE__ */ new Set()
    __name(checkURL, 'checkURL')
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray
        checkURL(request, init)
        return Reflect.apply(target, thisArg, argArray)
      },
    })
  },
})

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
  '../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js'() {
    init_cloudflare()
    globalThis.clearImmediate = clearImmediateFallback
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/_internal/utils.mjs
function createNotImplementedError(name2) {
  return new Error(`[unenv] ${name2} is not implemented yet!`)
}
function notImplemented(name2) {
  const fn3 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name2)
  }, 'fn')
  return Object.assign(fn3, { __unenv__: true })
}
var init_utils = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/_internal/utils.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    __name(createNotImplementedError, 'createNotImplementedError')
    __name(notImplemented, 'notImplemented')
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/mock/noop.mjs
var noop_default
var init_noop = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/mock/noop.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    noop_default = Object.assign(() => {}, { __unenv__: true })
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/timers/internal/immediate.mjs
var Immediate
var init_immediate = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/timers/internal/immediate.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    Immediate = class {
      _onImmediate
      _timeout
      constructor(callback, args) {
        this._onImmediate = callback
        if ('setTimeout' in globalThis) {
          this._timeout = setTimeout(callback, 0, ...args)
        } else {
          callback(...args)
        }
      }
      ref() {
        this._timeout?.ref()
        return this
      }
      unref() {
        this._timeout?.unref()
        return this
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false
      }
      [Symbol.dispose]() {
        if ('clearTimeout' in globalThis) {
          clearTimeout(this._timeout)
        }
      }
    }
    __name(Immediate, 'Immediate')
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value)
  })
}
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args)
}
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]()
}
var init_set_immediate = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/timers/internal/set-immediate.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_immediate()
    __name(setImmediateFallbackPromises, 'setImmediateFallbackPromises')
    __name(setImmediateFallback, 'setImmediateFallback')
    setImmediateFallback.__promisify__ = setImmediateFallbackPromises
    __name(clearImmediateFallback, 'clearImmediateFallback')
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/timers/$cloudflare.mjs
var init_cloudflare = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/timers/$cloudflare.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_set_immediate()
  },
})

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
  '../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js'() {
    init_cloudflare()
    globalThis.setImmediate = setImmediateFallback
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/mock/proxy.mjs
function createMock(name2, overrides = {}) {
  fn.prototype.name = name2
  const props = {}
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === 'caller') {
        return null
      }
      if (prop === '__createMock__') {
        return createMock
      }
      if (prop === '__unenv__') {
        return true
      }
      if (prop in overrides) {
        return overrides[prop]
      }
      return (props[prop] = props[prop] || createMock(`${name2}.${prop.toString()}`))
    },
    apply(_target, _this, _args) {
      return createMock(`${name2}()`)
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name2}]`)
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return []
    },
  })
}
var fn, proxy_default
var init_proxy = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/mock/proxy.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    fn = /* @__PURE__ */ __name(() => {}, 'fn')
    __name(createMock, 'createMock')
    proxy_default = createMock('mock')
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/console/index.mjs
import { Writable } from 'node:stream'
var _console,
  _ignoreErrors,
  _stderr,
  _stdout,
  log,
  info,
  trace,
  debug,
  table,
  error,
  warn,
  createTask,
  assert,
  clear,
  count,
  countReset,
  dir,
  dirxml,
  group,
  groupEnd,
  groupCollapsed,
  profile,
  profileEnd,
  time,
  timeEnd,
  timeLog,
  timeStamp,
  Console
var init_console = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/console/index.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_proxy()
    init_noop()
    init_utils()
    init_proxy()
    init_noop()
    _console = globalThis.console
    _ignoreErrors = true
    _stderr = new Writable()
    _stdout = new Writable()
    log = _console?.log ?? noop_default
    info = _console?.info ?? log
    trace = _console?.trace ?? info
    debug = _console?.debug ?? log
    table = _console?.table ?? log
    error = _console?.error ?? log
    warn = _console?.warn ?? error
    createTask = _console?.createTask ?? notImplemented('console.createTask')
    assert = notImplemented('console.assert')
    clear = _console?.clear ?? noop_default
    count = _console?.count ?? noop_default
    countReset = _console?.countReset ?? noop_default
    dir = _console?.dir ?? noop_default
    dirxml = _console?.dirxml ?? noop_default
    group = _console?.group ?? noop_default
    groupEnd = _console?.groupEnd ?? noop_default
    groupCollapsed = _console?.groupCollapsed ?? noop_default
    profile = _console?.profile ?? noop_default
    profileEnd = _console?.profileEnd ?? noop_default
    time = _console?.time ?? noop_default
    timeEnd = _console?.timeEnd ?? noop_default
    timeLog = _console?.timeLog ?? noop_default
    timeStamp = _console?.timeStamp ?? noop_default
    Console = _console?.Console ?? proxy_default.__createMock__('console.Console')
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/console/$cloudflare.mjs
var workerdConsole,
  assert2,
  clear2,
  context,
  count2,
  countReset2,
  createTask2,
  debug2,
  dir2,
  dirxml2,
  error2,
  group2,
  groupCollapsed2,
  groupEnd2,
  info2,
  log2,
  profile2,
  profileEnd2,
  table2,
  time2,
  timeEnd2,
  timeLog2,
  timeStamp2,
  trace2,
  warn2,
  cloudflare_default
var init_cloudflare2 = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/console/$cloudflare.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_console()
    workerdConsole = globalThis['console']
    ;({
      assert: assert2,
      clear: clear2,
      context:
        // @ts-expect-error undocumented public API
        context,
      count: count2,
      countReset: countReset2,
      createTask:
        // @ts-expect-error undocumented public API
        createTask2,
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2,
    } = workerdConsole)
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler: noop_default,
      _stdout,
      _stdoutErrorHandler: noop_default,
      _times: proxy_default,
    })
    cloudflare_default = workerdConsole
  },
})

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
var init_virtual_unenv_global_polyfill_console = __esm({
  '../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js'() {
    init_cloudflare2()
    globalThis.console = cloudflare_default
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/_entry.mjs
var _supportedEntryTypes,
  _PerformanceEntry,
  PerformanceEntry,
  _PerformanceMark,
  PerformanceMark,
  _PerformanceMeasure,
  PerformanceMeasure,
  _PerformanceResourceTiming,
  PerformanceResourceTiming
var init_entry = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/_entry.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    _supportedEntryTypes = [
      'event',
      // PerformanceEntry
      'mark',
      // PerformanceMark
      'measure',
      // PerformanceMeasure
      'resource',
      // PerformanceResourceTiming
    ]
    _PerformanceEntry = class {
      __unenv__ = true
      detail
      entryType = 'event'
      name
      startTime
      constructor(name2, options) {
        this.name = name2
        this.startTime = options?.startTime || performance.now()
        this.detail = options?.detail
      }
      get duration() {
        return performance.now() - this.startTime
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail,
        }
      }
    }
    __name(_PerformanceEntry, '_PerformanceEntry')
    PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry
    _PerformanceMark = class extends _PerformanceEntry {
      entryType = 'mark'
    }
    __name(_PerformanceMark, '_PerformanceMark')
    PerformanceMark = globalThis.PerformanceMark || _PerformanceMark
    _PerformanceMeasure = class extends _PerformanceEntry {
      entryType = 'measure'
    }
    __name(_PerformanceMeasure, '_PerformanceMeasure')
    PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure
    _PerformanceResourceTiming = class extends _PerformanceEntry {
      entryType = 'resource'
      serverTiming = []
      connectEnd = 0
      connectStart = 0
      decodedBodySize = 0
      domainLookupEnd = 0
      domainLookupStart = 0
      encodedBodySize = 0
      fetchStart = 0
      initiatorType = ''
      name = ''
      nextHopProtocol = ''
      redirectEnd = 0
      redirectStart = 0
      requestStart = 0
      responseEnd = 0
      responseStart = 0
      secureConnectionStart = 0
      startTime = 0
      transferSize = 0
      workerStart = 0
    }
    __name(_PerformanceResourceTiming, '_PerformanceResourceTiming')
    PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/_performance.mjs
var _timeOrigin, _Performance, Performance, performance2
var init_performance = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/_performance.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_utils()
    init_proxy()
    init_entry()
    _timeOrigin = Date.now()
    _Performance = class {
      __unenv__ = true
      timeOrigin = _timeOrigin
      eventCounts = /* @__PURE__ */ new Map()
      _entries = []
      _resourceTimingBufferSize = 0
      navigation = proxy_default.__createMock__('PerformanceNavigation')
      timing = proxy_default.__createMock__('PerformanceTiming')
      onresourcetimingbufferfull = null
      now() {
        if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
          return globalThis.performance.now()
        }
        return Date.now() - this.timeOrigin
      }
      clearMarks(markName) {
        this._entries = markName
          ? this._entries.filter((e) => e.name !== markName)
          : this._entries.filter((e) => e.entryType !== 'mark')
      }
      clearMeasures(measureName) {
        this._entries = measureName
          ? this._entries.filter((e) => e.name !== measureName)
          : this._entries.filter((e) => e.entryType !== 'measure')
      }
      clearResourceTimings() {
        this._entries = this._entries.filter(
          (e) => e.entryType !== 'resource' || e.entryType !== 'navigation'
        )
      }
      getEntries() {
        return this._entries
      }
      getEntriesByName(name2, type2) {
        return this._entries.filter((e) => e.name === name2 && (!type2 || e.entryType === type2))
      }
      getEntriesByType(type2) {
        return this._entries.filter((e) => e.entryType === type2)
      }
      mark(name2, options) {
        const entry = new _PerformanceMark(name2, options)
        this._entries.push(entry)
        return entry
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start
        let end
        if (typeof startOrMeasureOptions === 'string') {
          start = this.getEntriesByName(startOrMeasureOptions, 'mark')[0]?.startTime
          end = this.getEntriesByName(endMark, 'mark')[0]?.startTime
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now()
          end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now()
        }
        const entry = new _PerformanceMeasure(measureName, {
          startTime: start,
          detail: { start, end },
        })
        this._entries.push(entry)
        return entry
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize
      }
      toJSON() {
        return this
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError('Performance.addEventListener')
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError('Performance.removeEventListener')
      }
      dispatchEvent(event) {
        throw createNotImplementedError('Performance.dispatchEvent')
      }
    }
    __name(_Performance, '_Performance')
    Performance = globalThis.Performance || _Performance
    performance2 = globalThis.performance || new Performance()
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/_observer.mjs
var _PerformanceObserver,
  PerformanceObserver,
  _PerformanceObserverEntryList,
  PerformanceObserverEntryList
var init_observer = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/_observer.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_utils()
    init_entry()
    _PerformanceObserver = class {
      __unenv__ = true
      _callback = null
      constructor(callback) {
        this._callback = callback
      }
      takeRecords() {
        return []
      }
      disconnect() {
        throw createNotImplementedError('PerformanceObserver.disconnect')
      }
      observe(options) {
        throw createNotImplementedError('PerformanceObserver.observe')
      }
    }
    __name(_PerformanceObserver, '_PerformanceObserver')
    __publicField(_PerformanceObserver, 'supportedEntryTypes', _supportedEntryTypes)
    PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver
    _PerformanceObserverEntryList = class {
      __unenv__ = true
      getEntries() {
        return []
      }
      getEntriesByName(_name, _type) {
        return []
      }
      getEntriesByType(type2) {
        return []
      }
    }
    __name(_PerformanceObserverEntryList, '_PerformanceObserverEntryList')
    PerformanceObserverEntryList =
      globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/index.mjs
var init_performance2 = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/web/performance/index.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_performance()
    init_observer()
    init_entry()
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  return {}
}
var global_this_default
var init_global_this = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/polyfill/global-this.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    __name(getGlobal, 'getGlobal')
    global_this_default = getGlobal()
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/polyfill/performance.mjs
var performance_default
var init_performance3 = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/polyfill/performance.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_performance2()
    init_global_this()
    global_this_default.performance = global_this_default.performance || performance2
    global_this_default.Performance = global_this_default.Performance || Performance
    global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry
    global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark
    global_this_default.PerformanceMeasure =
      global_this_default.PerformanceMeasure || PerformanceMeasure
    global_this_default.PerformanceObserver =
      global_this_default.PerformanceObserver || PerformanceObserver
    global_this_default.PerformanceObserverEntryList =
      global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList
    global_this_default.PerformanceResourceTiming =
      global_this_default.PerformanceResourceTiming || PerformanceResourceTiming
    performance_default = global_this_default.performance
  },
})

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
var init_virtual_unenv_global_polyfill_performance = __esm({
  '../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js'() {
    init_performance3()
    globalThis.performance = performance_default
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/mock/empty.mjs
var empty_default
var init_empty = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/mock/empty.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    empty_default = Object.freeze(
      Object.create(null, {
        __unenv__: { get: () => true },
      })
    )
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/internal/env.mjs
var _envShim, _processEnv, _getEnv, env
var init_env = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/internal/env.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    _envShim = /* @__PURE__ */ Object.create(null)
    _processEnv = globalThis.process?.env
    _getEnv = /* @__PURE__ */ __name(
      (useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis),
      '_getEnv'
    )
    env = new Proxy(_envShim, {
      get(_2, prop) {
        const env23 = _getEnv()
        return env23[prop] ?? _envShim[prop]
      },
      has(_2, prop) {
        const env23 = _getEnv()
        return prop in env23 || prop in _envShim
      },
      set(_2, prop, value) {
        const env23 = _getEnv(true)
        env23[prop] = value
        return true
      },
      deleteProperty(_2, prop) {
        const env23 = _getEnv(true)
        delete env23[prop]
        return true
      },
      ownKeys() {
        const env23 = _getEnv()
        return Object.keys(env23)
      },
    })
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/internal/time.mjs
function _createNextTickWithTimeout() {
  let queue2 = []
  let draining2 = false
  let currentQueue2
  let queueIndex2 = -1
  function cleanUpNextTick2() {
    if (!draining2 || !currentQueue2) {
      return
    }
    draining2 = false
    if (currentQueue2.length > 0) {
      queue2 = [...currentQueue2, ...queue2]
    } else {
      queueIndex2 = -1
    }
    if (queue2.length > 0) {
      drainQueue2()
    }
  }
  __name(cleanUpNextTick2, 'cleanUpNextTick')
  function drainQueue2() {
    if (draining2) {
      return
    }
    const timeout = setTimeout(cleanUpNextTick2)
    draining2 = true
    let len = queue2.length
    while (len) {
      currentQueue2 = queue2
      queue2 = []
      while (++queueIndex2 < len) {
        if (currentQueue2) {
          currentQueue2[queueIndex2]()
        }
      }
      queueIndex2 = -1
      len = queue2.length
    }
    currentQueue2 = void 0
    draining2 = false
    clearTimeout(timeout)
  }
  __name(drainQueue2, 'drainQueue')
  const nextTick23 = /* @__PURE__ */ __name((cb, ...args) => {
    queue2.push(cb.bind(void 0, ...args))
    if (queue2.length === 1 && !draining2) {
      setTimeout(drainQueue2)
    }
  }, 'nextTick2')
  return nextTick23
}
var hrtime, nextTick
var init_time = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/internal/time.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    hrtime = Object.assign(
      /* @__PURE__ */ __name(function hrtime2(startTime) {
        const now = Date.now()
        const seconds = Math.trunc(now / 1e3)
        const nanos = (now % 1e3) * 1e6
        if (startTime) {
          let diffSeconds = seconds - startTime[0]
          let diffNanos = nanos - startTime[0]
          if (diffNanos < 0) {
            diffSeconds = diffSeconds - 1
            diffNanos = 1e9 + diffNanos
          }
          return [diffSeconds, diffNanos]
        }
        return [seconds, nanos]
      }, 'hrtime2'),
      {
        bigint: /* @__PURE__ */ __name(function bigint() {
          return BigInt(Date.now() * 1e6)
        }, 'bigint'),
      }
    )
    nextTick = globalThis.queueMicrotask
      ? (cb, ...args) => {
          globalThis.queueMicrotask(cb.bind(void 0, ...args))
        }
      : _createNextTickWithTimeout()
    __name(_createNextTickWithTimeout, '_createNextTickWithTimeout')
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/internal/process.mjs
function noop() {
  return process
}
var title,
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  prependListener,
  prependOnceListener,
  listeners,
  listenerCount,
  binding,
  _cwd,
  cwd,
  chdir,
  umask,
  getegid,
  geteuid,
  getgid,
  getuid,
  getgroups,
  getBuiltinModule,
  abort,
  allowedNodeEnvironmentFlags,
  arch,
  argv0,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  debugPort,
  dlopen,
  disconnect,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  kill,
  memoryUsage,
  pid,
  platform,
  ppid,
  rawListeners,
  release,
  report,
  resourceUsage,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  setMaxListeners,
  setSourceMapsEnabled,
  stdout,
  stderr,
  stdin,
  traceDeprecation,
  uptime,
  exitCode,
  setUncaughtExceptionCaptureCallback,
  hasUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  loadEnvFile,
  mainModule,
  permission,
  channel,
  throwDeprecation,
  assert3,
  openStdin,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _linkedBinding,
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  _exiting,
  _events,
  _eventsCount,
  _maxListeners,
  process
var init_process = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/internal/process.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_proxy()
    init_empty()
    init_utils()
    init_env()
    init_time()
    init_time()
    title = 'unenv'
    argv = []
    version = ''
    versions = {
      ares: '',
      http_parser: '',
      icu: '',
      modules: '',
      node: '',
      openssl: '',
      uv: '',
      v8: '',
      zlib: '',
    }
    __name(noop, 'noop')
    on = noop
    addListener = noop
    once = noop
    off = noop
    removeListener = noop
    removeAllListeners = noop
    emit = /* @__PURE__ */ __name(function emit2(event) {
      if (event === 'message' || event === 'multipleResolves') {
        return process
      }
      return false
    }, 'emit2')
    prependListener = noop
    prependOnceListener = noop
    listeners = /* @__PURE__ */ __name((name2) => [], 'listeners')
    listenerCount = /* @__PURE__ */ __name(() => 0, 'listenerCount')
    binding = /* @__PURE__ */ __name((name2) => {
      throw new Error('[unenv] process.binding is not supported')
    }, 'binding')
    _cwd = '/'
    cwd = /* @__PURE__ */ __name(function cwd2() {
      return _cwd
    }, 'cwd2')
    chdir = /* @__PURE__ */ __name(function chdir2(dir4) {
      _cwd = dir4
    }, 'chdir2')
    umask = /* @__PURE__ */ __name(function umask2() {
      return 0
    }, 'umask2')
    getegid = /* @__PURE__ */ __name(function getegid2() {
      return 1e3
    }, 'getegid2')
    geteuid = /* @__PURE__ */ __name(function geteuid2() {
      return 1e3
    }, 'geteuid2')
    getgid = /* @__PURE__ */ __name(function getgid2() {
      return 1e3
    }, 'getgid2')
    getuid = /* @__PURE__ */ __name(function getuid2() {
      return 1e3
    }, 'getuid2')
    getgroups = /* @__PURE__ */ __name(function getgroups2() {
      return []
    }, 'getgroups2')
    getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, 'getBuiltinModule')
    abort = notImplemented('process.abort')
    allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set()
    arch = ''
    argv0 = ''
    config = empty_default
    connected = false
    constrainedMemory = /* @__PURE__ */ __name(() => 0, 'constrainedMemory')
    availableMemory = /* @__PURE__ */ __name(() => 0, 'availableMemory')
    cpuUsage = notImplemented('process.cpuUsage')
    debugPort = 0
    dlopen = notImplemented('process.dlopen')
    disconnect = noop
    emitWarning = noop
    eventNames = notImplemented('process.eventNames')
    execArgv = []
    execPath = ''
    exit = notImplemented('process.exit')
    features = /* @__PURE__ */ Object.create({
      inspector: void 0,
      debug: void 0,
      uv: void 0,
      ipv6: void 0,
      tls_alpn: void 0,
      tls_sni: void 0,
      tls_ocsp: void 0,
      tls: void 0,
      cached_builtins: void 0,
    })
    getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], 'getActiveResourcesInfo')
    getMaxListeners = notImplemented('process.getMaxListeners')
    kill = notImplemented('process.kill')
    memoryUsage = Object.assign(
      () => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
      }),
      { rss: () => 0 }
    )
    pid = 1e3
    platform = ''
    ppid = 1e3
    rawListeners = notImplemented('process.rawListeners')
    release = /* @__PURE__ */ Object.create({
      name: '',
      lts: '',
      sourceUrl: void 0,
      headersUrl: void 0,
    })
    report = /* @__PURE__ */ Object.create({
      compact: void 0,
      directory: void 0,
      filename: void 0,
      getReport: notImplemented('process.report.getReport'),
      reportOnFatalError: void 0,
      reportOnSignal: void 0,
      reportOnUncaughtException: void 0,
      signal: void 0,
      writeReport: notImplemented('process.report.writeReport'),
    })
    resourceUsage = notImplemented('process.resourceUsage')
    setegid = notImplemented('process.setegid')
    seteuid = notImplemented('process.seteuid')
    setgid = notImplemented('process.setgid')
    setgroups = notImplemented('process.setgroups')
    setuid = notImplemented('process.setuid')
    setMaxListeners = notImplemented('process.setMaxListeners')
    setSourceMapsEnabled = notImplemented('process.setSourceMapsEnabled')
    stdout = proxy_default.__createMock__('process.stdout')
    stderr = proxy_default.__createMock__('process.stderr')
    stdin = proxy_default.__createMock__('process.stdin')
    traceDeprecation = false
    uptime = /* @__PURE__ */ __name(() => 0, 'uptime')
    exitCode = 0
    setUncaughtExceptionCaptureCallback = notImplemented(
      'process.setUncaughtExceptionCaptureCallback'
    )
    hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(
      () => false,
      'hasUncaughtExceptionCaptureCallback'
    )
    sourceMapsEnabled = false
    loadEnvFile = notImplemented('process.loadEnvFile')
    mainModule = void 0
    permission = {
      has: () => false,
    }
    channel = {
      ref() {},
      unref() {},
    }
    throwDeprecation = false
    assert3 = notImplemented('process.assert')
    openStdin = notImplemented('process.openStdin')
    _debugEnd = notImplemented('process._debugEnd')
    _debugProcess = notImplemented('process._debugProcess')
    _fatalException = notImplemented('process._fatalException')
    _getActiveHandles = notImplemented('process._getActiveHandles')
    _getActiveRequests = notImplemented('process._getActiveRequests')
    _kill = notImplemented('process._kill')
    _preload_modules = []
    _rawDebug = notImplemented('process._rawDebug')
    _startProfilerIdleNotifier = notImplemented('process._startProfilerIdleNotifier')
    _stopProfilerIdleNotifier = notImplemented('process.__stopProfilerIdleNotifier')
    _tickCallback = notImplemented('process._tickCallback')
    _linkedBinding = notImplemented('process._linkedBinding')
    domain = proxy_default.__createMock__('process.domain')
    initgroups = notImplemented('process.initgroups')
    moduleLoadList = []
    reallyExit = noop
    _exiting = false
    _events = []
    _eventsCount = 0
    _maxListeners = 0
    process = {
      // @ts-expect-error
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      exitCode,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      throwDeprecation,
      mainModule,
      permission,
      channel,
      arch,
      argv,
      argv0,
      assert: assert3,
      binding,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      features,
      getBuiltinModule,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      openStdin,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
    }
  },
})

// ../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess,
  getBuiltinModule2,
  workerdProcess,
  env2,
  exit2,
  nextTick2,
  platform2,
  _process,
  cloudflare_default2
var init_cloudflare3 = __esm({
  '../../node_modules/.pnpm/unenv-nightly@2.0.0-20241024-111401-d4156ac/node_modules/unenv-nightly/runtime/node/process/$cloudflare.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_process()
    unpatchedGlobalThisProcess = globalThis['process']
    getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule
    workerdProcess = getBuiltinModule2('node:process')
    ;({ env: env2, exit: exit2, nextTick: nextTick2, platform: platform2 } = workerdProcess)
    _process = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error (not typed)
      _debugEnd,
      _debugProcess,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _linkedBinding,
      _maxListeners,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert3,
      availableMemory,
      binding,
      chdir,
      config,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain,
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exit: exit2,
      exitCode,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList,
      off,
      on,
      once,
      openStdin,
      pid,
      platform: platform2,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      setUncaughtExceptionCaptureCallback,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      umask,
      uptime,
      version,
      versions,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      env: env2,
      getBuiltinModule: getBuiltinModule2,
      nextTick: nextTick2,
    }
    cloudflare_default2 = _process
  },
})

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
var init_virtual_unenv_global_polyfill_process = __esm({
  '../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js'() {
    init_cloudflare3()
    globalThis.process = cloudflare_default2
  },
})

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  'wrangler-modules-watch:wrangler:modules-watch'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
  },
})

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  '../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/modules-watch-stub.js'() {
    init_wrangler_modules_watch()
  },
})

// .wrangler/tmp/pages-xt7H5X/chunks/routes/index.mjs
var routes_exports = {}
__export(routes_exports, {
  default: () => index,
})
var index
var init_routes = __esm({
  '.wrangler/tmp/pages-xt7H5X/chunks/routes/index.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_nitro()
    index = eventHandler((event) => {
      return { message: 'API Endpoint', path: event.path }
    })
  },
})

// .wrangler/tmp/pages-xt7H5X/chunks/routes/index2.mjs
var index2_exports = {}
__export(index2_exports, {
  default: () => index2,
})
var name, version2, type, scripts, dependencies, devDependencies, pkg, index2
var init_index2 = __esm({
  '.wrangler/tmp/pages-xt7H5X/chunks/routes/index2.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_nitro()
    name = 'web'
    version2 = '0.0.0'
    type = 'module'
    scripts = {
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
    dependencies = {
      consola: 'catalog:',
      pathe: 'catalog:',
      'std-env': 'catalog:',
    }
    devDependencies = {
      '@biomejs/biome': 'catalog:',
      nitropack: 'catalog:',
      typescript: 'catalog:',
    }
    pkg = {
      name,
      version: version2,
      private: true,
      type,
      scripts,
      dependencies,
      devDependencies,
    }
    index2 = eventHandler((event) => {
      const appConfig2 = useAppConfig(event)
      return `<h1>${appConfig2.title} --> ${pkg.name}</h1>
<p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
<p>Learn more from <a href="https://nitro.unjs.io" target="_blank">Nitro Documentation</a></p>
`
    })
  },
})

// .wrangler/tmp/pages-xt7H5X/chunks/routes/robots.txt.mjs
var robots_txt_exports = {}
__export(robots_txt_exports, {
  default: () => robots_txt,
})
function handleBypassCache(event) {
  return !f || event.node.req.url.includes('nocache')
}
var robots_txt
var init_robots_txt = __esm({
  '.wrangler/tmp/pages-xt7H5X/chunks/routes/robots.txt.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    init_nitro()
    __name(handleBypassCache, 'handleBypassCache')
    robots_txt = defineCachedEventHandler(
      async (event) => {
        const appConfig2 = useAppConfig(event)
        setResponseHeader(event, 'Content-Type', 'text/plain')
        return send(
          event,
          `User-Agent: *
Allow: /
Sitemap: ${appConfig2.baseURL}/sitemap.xml`
        )
      },
      {
        shouldBypassCache: (e) => handleBypassCache(e),
        maxAge: 60 * 60 * 12 * 30,
      }
    )
  },
})

// .wrangler/tmp/pages-xt7H5X/chunks/nitro/nitro.mjs
function rawHeaders(headers) {
  const rawHeaders2 = []
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h)
      }
    } else {
      rawHeaders2.push(key, headers[key])
    }
  }
  return rawHeaders2
}
function mergeFns(...functions) {
  return (...args) => {
    for (const fn3 of functions) {
      fn3(...args)
    }
  }
}
function createNotImplementedError2(name2) {
  throw new Error(`[unenv] ${name2} is not implemented yet!`)
}
function notImplemented2(name2) {
  const fn3 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError2(name2)
  }, 'fn')
  return Object.assign(fn3, { __unenv__: true })
}
function getLens(b64) {
  const len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }
  let validLen = b64.indexOf('=')
  if (validLen === -1) {
    validLen = len
  }
  const placeHoldersLen = validLen === len ? 0 : 4 - (validLen % 4)
  return [validLen, placeHoldersLen]
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen
}
function toByteArray(b64) {
  let tmp
  const lens = getLens(b64)
  const validLen = lens[0]
  const placeHoldersLen = lens[1]
  const arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
  let curByte = 0
  const len = placeHoldersLen > 0 ? validLen - 4 : validLen
  let i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 255
    arr[curByte++] = (tmp >> 8) & 255
    arr[curByte++] = tmp & 255
  }
  if (placeHoldersLen === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 255
  }
  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 255
    arr[curByte++] = tmp & 255
  }
  return arr
}
function tripletToBase64(num) {
  return (
    lookup$1[(num >> 18) & 63] +
    lookup$1[(num >> 12) & 63] +
    lookup$1[(num >> 6) & 63] +
    lookup$1[num & 63]
  )
}
function encodeChunk(uint8, start, end) {
  let tmp
  const output = []
  for (let i = start; i < end; i += 3) {
    tmp = ((uint8[i] << 16) & 16711680) + ((uint8[i + 1] << 8) & 65280) + (uint8[i + 2] & 255)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}
function fromByteArray(uint8) {
  let tmp
  const len = uint8.length
  const extraBytes = len % 3
  const parts = []
  const maxChunkLength = 16383
  for (let i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength))
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(lookup$1[tmp >> 2] + lookup$1[(tmp << 4) & 63] + '==')
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(lookup$1[tmp >> 10] + lookup$1[(tmp >> 4) & 63] + lookup$1[(tmp << 2) & 63] + '=')
  }
  return parts.join('')
}
function read(buffer, offset, isLE, mLen, nBytes) {
  let e, m
  const eLen = nBytes * 8 - mLen - 1
  const eMax = (1 << eLen) - 1
  const eBias = eMax >> 1
  let nBits = -7
  let i = isLE ? nBytes - 1 : 0
  const d = isLE ? -1 : 1
  let s2 = buffer[offset + i]
  i += d
  e = s2 & ((1 << -nBits) - 1)
  s2 >>= -nBits
  nBits += eLen
  while (nBits > 0) {
    e = e * 256 + buffer[offset + i]
    i += d
    nBits -= 8
  }
  m = e & ((1 << -nBits) - 1)
  e >>= -nBits
  nBits += mLen
  while (nBits > 0) {
    m = m * 256 + buffer[offset + i]
    i += d
    nBits -= 8
  }
  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? Number.NaN : (s2 ? -1 : 1) * Number.POSITIVE_INFINITY
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s2 ? -1 : 1) * m * Math.pow(2, e - mLen)
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  let e, m, c2
  let eLen = nBytes * 8 - mLen - 1
  const eMax = (1 << eLen) - 1
  const eBias = eMax >> 1
  const rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0
  let i = isLE ? 0 : nBytes - 1
  const d = isLE ? 1 : -1
  const s2 = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
  value = Math.abs(value)
  if (Number.isNaN(value) || value === Number.POSITIVE_INFINITY) {
    m = Number.isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log2(value))
    if (value * (c2 = Math.pow(2, -e)) < 1) {
      e--
      c2 *= 2
    }
    value += e + eBias >= 1 ? rt / c2 : rt * Math.pow(2, 1 - eBias)
    if (value * c2 >= 2) {
      e++
      c2 /= 2
    }
    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c2 - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }
  while (mLen >= 8) {
    buffer[offset + i] = m & 255
    i += d
    m /= 256
    mLen -= 8
  }
  e = (e << mLen) | m
  eLen += mLen
  while (eLen > 0) {
    buffer[offset + i] = e & 255
    i += d
    e /= 256
    eLen -= 8
  }
  buffer[offset + i - d] |= s2 * 128
}
function typedArraySupport() {
  try {
    const arr = new Uint8Array(1)
    const proto = {
      foo: () => 42,
    }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch {
    return false
  }
}
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer$1.prototype)
  return buf
}
function Buffer$1(arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number')
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}
function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }
  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }
  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof value
    )
  }
  if (isInstance(value, ArrayBuffer) || (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }
  if (
    typeof SharedArrayBuffer !== 'undefined' &&
    (isInstance(value, SharedArrayBuffer) || (value && isInstance(value.buffer, SharedArrayBuffer)))
  ) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }
  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number')
  }
  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer$1.from(valueOf, encodingOrOffset, length)
  }
  const b2 = fromObject(value)
  if (b2) {
    return b2
  }
  if (
    typeof Symbol !== 'undefined' &&
    Symbol.toPrimitive != null &&
    typeof value[Symbol.toPrimitive] === 'function'
  ) {
    return Buffer$1.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }
  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
      typeof value
  )
}
function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}
function alloc(size, fill2, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill2 !== void 0) {
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill2, encoding)
      : createBuffer(size).fill(fill2)
  }
  return createBuffer(size)
}
function allocUnsafe(size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}
function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }
  if (!Buffer$1.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }
  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)
  const actual = buf.write(string, encoding)
  if (actual !== length) {
    buf = buf.slice(0, actual)
  }
  return buf
}
function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}
function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy2 = new Uint8Array(arrayView)
    return fromArrayBuffer(copy2.buffer, copy2.byteOffset, copy2.byteLength)
  }
  return fromArrayLike(arrayView)
}
function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }
  let buf
  if (byteOffset === void 0 && length === void 0) {
    buf = new Uint8Array(array)
  } else if (length === void 0) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }
  Object.setPrototypeOf(buf, Buffer$1.prototype)
  return buf
}
function fromObject(obj) {
  if (Buffer$1.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)
    if (buf.length === 0) {
      return buf
    }
    obj.copy(buf, 0, 0, len)
    return buf
  }
  if (obj.length !== void 0) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }
  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}
function checked(length) {
  if (length >= K_MAX_LENGTH) {
    throw new RangeError(
      'Attempt to allocate Buffer larger than maximum size: 0x' +
        K_MAX_LENGTH.toString(16) +
        ' bytes'
    )
  }
  return length | 0
}
function byteLength(string, encoding) {
  if (Buffer$1.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
        typeof string
    )
  }
  const len = string.length
  const mustMatch = arguments.length > 2 && arguments[2] === true
  if (!mustMatch && len === 0) {
    return 0
  }
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
function slowToString(encoding, start, end) {
  let loweredCase = false
  if (start === void 0 || start < 0) {
    start = 0
  }
  if (start > this.length) {
    return ''
  }
  if (end === void 0 || end > this.length) {
    end = this.length
  }
  if (end <= 0) {
    return ''
  }
  end >>>= 0
  start >>>= 0
  if (end <= start) {
    return ''
  }
  if (!encoding) {
    encoding = 'utf8'
  }
  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)
      case 'ascii':
        return asciiSlice(this, start, end)
      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)
      case 'base64':
        return base64Slice(this, start, end)
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)
      default:
        if (loweredCase) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}
function swap(b2, n2, m) {
  const i = b2[n2]
  b2[n2] = b2[m]
  b2[m] = i
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir4) {
  if (buffer.length === 0) {
    return -1
  }
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648
  }
  byteOffset = +byteOffset
  if (numberIsNaN(byteOffset)) {
    byteOffset = dir4 ? 0 : buffer.length - 1
  }
  if (byteOffset < 0) {
    byteOffset = buffer.length + byteOffset
  }
  if (byteOffset >= buffer.length) {
    if (dir4) {
      return -1
    } else {
      byteOffset = buffer.length - 1
    }
  } else if (byteOffset < 0) {
    if (dir4) {
      byteOffset = 0
    } else {
      return -1
    }
  }
  if (typeof val === 'string') {
    val = Buffer$1.from(val, encoding)
  }
  if (Buffer$1.isBuffer(val)) {
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir4)
  } else if (typeof val === 'number') {
    val = val & 255
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      return dir4
        ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir4)
  }
  throw new TypeError('val must be string, number or Buffer')
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir4) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase()
    if (
      encoding === 'ucs2' ||
      encoding === 'ucs-2' ||
      encoding === 'utf16le' ||
      encoding === 'utf-16le'
    ) {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }
  function read2(buf, i2) {
    return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize)
  }
  __name(read2, 'read')
  let i
  if (dir4) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) {
          foundIndex = i
        }
        if (i - foundIndex + 1 === valLength) {
          return foundIndex * indexSize
        }
      } else {
        if (foundIndex !== -1) {
          i -= i - foundIndex
        }
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) {
      byteOffset = arrLength - valLength
    }
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false
          break
        }
      }
      if (found) {
        return i
      }
    }
  }
  return -1
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (length) {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  } else {
    length = remaining
  }
  const strLen = string.length
  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = Number.parseInt(string.slice(i * 2, i * 2 + 2), 16)
    if (numberIsNaN(parsed)) {
      return i
    }
    buf[offset + i] = parsed
  }
  return i
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}
function base64Slice(buf, start, end) {
  return start === 0 && end === buf.length
    ? fromByteArray(buf)
    : fromByteArray(buf.slice(start, end))
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []
  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1
    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 192) === 128) {
            tempCodePoint = ((firstByte & 31) << 6) | (secondByte & 63)
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = ((firstByte & 15) << 12) | ((secondByte & 63) << 6) | (thirdByte & 63)
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if (
            (secondByte & 192) === 128 &&
            (thirdByte & 192) === 128 &&
            (fourthByte & 192) === 128
          ) {
            tempCodePoint =
              ((firstByte & 15) << 18) |
              ((secondByte & 63) << 12) |
              ((thirdByte & 63) << 6) |
              (fourthByte & 63)
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533
      bytesPerSequence = 1
    } else if (codePoint > 65535) {
      codePoint -= 65536
      res.push(((codePoint >>> 10) & 1023) | 55296)
      codePoint = 56320 | (codePoint & 1023)
    }
    res.push(codePoint)
    i += bytesPerSequence
  }
  return decodeCodePointsArray(res)
}
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints)
  }
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH)))
  }
  return res
}
function asciiSlice(buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127)
  }
  return ret
}
function latin1Slice(buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}
function hexSlice(buf, start, end) {
  const len = buf.length
  if (!start || start < 0) {
    start = 0
  }
  if (!end || end < 0 || end > len) {
    end = len
  }
  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}
function utf16leSlice(buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) {
    throw new RangeError('offset is not uint')
  }
  if (offset + ext > length) {
    throw new RangeError('Trying to access beyond buffer length')
  }
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer$1.isBuffer(buf)) {
    throw new TypeError('"buffer" argument must be a Buffer instance')
  }
  if (value > max || value < min) {
    throw new RangeError('"value" argument is out of bounds')
  }
  if (offset + ext > buf.length) {
    throw new RangeError('Index out of range')
  }
}
function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)
  let lo = Number(value & BigInt(4294967295))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number((value >> BigInt(32)) & BigInt(4294967295))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)
  let lo = Number(value & BigInt(4294967295))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number((value >> BigInt(32)) & BigInt(4294967295))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) {
    throw new RangeError('Index out of range')
  }
  if (offset < 0) {
    throw new RangeError('Index out of range')
  }
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4)
  }
  write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8)
  }
  write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}
function E$1(sym, getMessage, Base) {
  errors[sym] = /* @__PURE__ */ __name(
    class NodeError extends Base {
      constructor() {
        super()
        Object.defineProperty(this, 'message', {
          value: Reflect.apply(getMessage, this, arguments),
          writable: true,
          configurable: true,
        })
        this.name = `${this.name} [${sym}]`
        this.stack
        delete this.name
      }
      get code() {
        return sym
      }
      set code(value) {
        Object.defineProperty(this, 'code', {
          configurable: true,
          enumerable: true,
          value,
          writable: true,
        })
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`
      }
    },
    'NodeError'
  )
}
function addNumericalSeparator(val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}
function checkBounds(buf, offset, byteLength2) {
  validateNumber(offset, 'offset')
  if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
    boundsError(offset, buf.length - (byteLength2 + 1))
  }
}
function checkIntBI(value, min, max, buf, offset, byteLength2) {
  if (value > max || value < min) {
    const n2 = typeof min === 'bigint' ? 'n' : ''
    let range
      range =
        min === 0 || min === BigInt(0)
          ? `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`
          : `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength2)
}
function validateNumber(value, name2) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name2, 'number', value)
  }
}
function boundsError(value, length, type2) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type2)
    throw new errors.ERR_OUT_OF_RANGE('offset', 'an integer', value)
  }
  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }
  throw new errors.ERR_OUT_OF_RANGE('offset', `>= ${0} and <= ${length}`, value)
}
function base64clean(str) {
  str = str.split('=')[0]
  str = str.trim().replace(INVALID_BASE64_RE, '')
  if (str.length < 2) {
    return ''
  }
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}
function utf8ToBytes(string, units) {
  units = units || Number.POSITIVE_INFINITY
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []
  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189)
          }
          continue
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189)
          }
          continue
        }
        leadSurrogate = codePoint
        continue
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1) {
          bytes.push(239, 191, 189)
        }
        leadSurrogate = codePoint
        continue
      }
      codePoint = (((leadSurrogate - 55296) << 10) | (codePoint - 56320)) + 65536
    } else if (
      leadSurrogate && // valid bmp char, but last char was a lead
      (units -= 3) > -1
    ) {
      bytes.push(239, 191, 189)
    }
    leadSurrogate = null
    if (codePoint < 128) {
      if ((units -= 1) < 0) {
        break
      }
      bytes.push(codePoint)
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) {
        break
      }
      bytes.push((codePoint >> 6) | 192, (codePoint & 63) | 128)
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) {
        break
      }
      bytes.push((codePoint >> 12) | 224, ((codePoint >> 6) & 63) | 128, (codePoint & 63) | 128)
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) {
        break
      }
      bytes.push(
        (codePoint >> 18) | 240,
        ((codePoint >> 12) & 63) | 128,
        ((codePoint >> 6) & 63) | 128,
        (codePoint & 63) | 128
      )
    } else {
      throw new Error('Invalid code point')
    }
  }
  return bytes
}
function asciiToBytes(str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255)
  }
  return byteArray
}
function utf16leToBytes(str, units) {
  let c2, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) {
      break
    }
    c2 = str.charCodeAt(i)
    hi = c2 >> 8
    lo = c2 % 256
    byteArray.push(lo, hi)
  }
  return byteArray
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str))
}
function blitBuffer(src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) {
      break
    }
    dst[i + offset] = src[i]
  }
  return i
}
function isInstance(obj, type2) {
  return (
    obj instanceof type2 ||
    (obj != null &&
      obj.constructor != null &&
      obj.constructor.name != null &&
      obj.constructor.name === type2.name)
  )
}
function numberIsNaN(obj) {
  return obj !== obj
}
function defineBigIntMethod(fn3) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn3
}
function BufferBigIntNotDefined() {
  throw new Error('BigInt not supported')
}
function defaultSetTimeout() {
  throw new Error('setTimeout has not been defined')
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined')
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0)
  }
  if ((cachedSetTimeout === defaultSetTimeout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout
    return setTimeout(fun, 0)
  }
  try {
    return cachedSetTimeout(fun, 0)
  } catch {
    try {
      return cachedSetTimeout.call(null, fun, 0)
    } catch {
      return cachedSetTimeout.call(this, fun, 0)
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker)
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout
    return clearTimeout(marker)
  }
  try {
    return cachedClearTimeout(marker)
  } catch {
    try {
      return cachedClearTimeout.call(null, marker)
    } catch {
      return cachedClearTimeout.call(this, marker)
    }
  }
}
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return
  }
  draining = false
  if (currentQueue.length > 0) {
    queue = [...currentQueue, ...queue]
  } else {
    queueIndex = -1
  }
  if (queue.length > 0) {
    drainQueue()
  }
}
function drainQueue() {
  if (draining) {
    return
  }
  const timeout = runTimeout(cleanUpNextTick)
  draining = true
  let len = queue.length
  while (len) {
    currentQueue = queue
    queue = []
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run()
      }
    }
    queueIndex = -1
    len = queue.length
  }
  currentQueue = null
  draining = false
  runClearTimeout(timeout)
}
function Item(fun, array) {
  this.fun = fun
  this.array = array
}
function noop2() {
  return process$1
}
function getGlobal2() {
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof global !== 'undefined') {
    return global
  }
  return {}
}
function jsonParseTransform(key, value) {
  if (
    key === '__proto__' ||
    (key === 'constructor' && value && typeof value === 'object' && 'prototype' in value)
  ) {
    warnKeyDropped(key)
    return
  }
  return value
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`)
}
function destr(value, options = {}) {
  if (typeof value !== 'string') {
    return value
  }
  const _value = value.trim()
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' &&
    value.endsWith('"') &&
    !value.includes('\\')
  ) {
    return _value.slice(1, -1)
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase()
    if (_lval === 'true') {
      return true
    }
    if (_lval === 'false') {
      return false
    }
    if (_lval === 'undefined') {
      return void 0
    }
    if (_lval === 'null') {
      return null
    }
    if (_lval === 'nan') {
      return Number.NaN
    }
    if (_lval === 'infinity') {
      return Number.POSITIVE_INFINITY
    }
    if (_lval === '-infinity') {
      return Number.NEGATIVE_INFINITY
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError('[destr] Invalid JSON')
    }
    return value
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error('[destr] Possible prototype pollution')
      }
      return JSON.parse(value, jsonParseTransform)
    }
    return JSON.parse(value)
  } catch (error4) {
    if (options.strict) {
      throw error4
    }
    return value
  }
}
function encode(text) {
  return encodeURI('' + text).replace(ENC_PIPE_RE, '|')
}
function encodeQueryValue(input) {
  return encode(typeof input === 'string' ? input : JSON.stringify(input))
    .replace(PLUS_RE, '%2B')
    .replace(ENC_SPACE_RE, '+')
    .replace(HASH_RE, '%23')
    .replace(AMPERSAND_RE, '%26')
    .replace(ENC_BACKTICK_RE, '`')
    .replace(ENC_CARET_RE, '^')
    .replace(SLASH_RE, '%2F')
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D')
}
function decode(text = '') {
  try {
    return decodeURIComponent('' + text)
  } catch {
    return '' + text
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, ' '))
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, ' '))
}
function parseQuery(parametersString = '') {
  const object = {}
  if (parametersString[0] === '?') {
    parametersString = parametersString.slice(1)
  }
  for (const parameter of parametersString.split('&')) {
    const s2 = parameter.match(/([^=]+)=?(.*)/) || []
    if (s2.length < 2) {
      continue
    }
    const key = decodeQueryKey(s2[1])
    if (key === '__proto__' || key === 'constructor') {
      continue
    }
    const value = decodeQueryValue(s2[2] || '')
    if (object[key] === void 0) {
      object[key] = value
    } else if (Array.isArray(object[key])) {
      object[key].push(value)
    } else {
      object[key] = [object[key], value]
    }
  }
  return object
}
function encodeQueryItem(key, value) {
  if (typeof value === 'number' || typeof value === 'boolean') {
    value = String(value)
  }
  if (!value) {
    return encodeQueryKey(key)
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join('&')
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`
}
function stringifyQuery(query) {
  return Object.keys(query)
    .filter((k) => query[k] !== void 0)
    .map((k) => encodeQueryItem(k, query[k]))
    .filter(Boolean)
    .join('&')
}
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === 'boolean') {
    opts = { acceptRelative: opts }
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString)
  }
  return (
    PROTOCOL_REGEX.test(inputString) ||
    (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false)
  )
}
function hasTrailingSlash(input = '', respectQueryAndFragment) {
    return input.endsWith('/')
}
function withoutTrailingSlash(input = '', respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || '/'
}
function withTrailingSlash(input = '', respectQueryAndFragment) {
    return input.endsWith('/') ? input : input + '/'
}
function hasLeadingSlash(input = '') {
  return input.startsWith('/')
}
function withLeadingSlash(input = '') {
  return hasLeadingSlash(input) ? input : '/' + input
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input
  }
  const _base = withoutTrailingSlash(base)
  if (input.startsWith(_base)) {
    return input
  }
  return joinURL(_base, input)
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input
  }
  const _base = withoutTrailingSlash(base)
  if (!input.startsWith(_base)) {
    return input
  }
  const trimmed = input.slice(_base.length)
  return trimmed[0] === '/' ? trimmed : '/' + trimmed
}
function withQuery(input, query) {
  const parsed = parseURL(input)
  const mergedQuery = { ...parseQuery(parsed.search), ...query }
  parsed.search = stringifyQuery(mergedQuery)
  return stringifyParsedURL(parsed)
}
function getQuery(input) {
  return parseQuery(parseURL(input).search)
}
function isEmptyURL(url) {
  return !url || url === '/'
}
function isNonEmptyURL(url) {
  return url && url !== '/'
}
function joinURL(base, ...input) {
  let url = base || ''
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, '')
      url = withTrailingSlash(url) + _segment
    } else {
      url = segment
    }
  }
  return url
}
function parseURL(input = '', defaultProto) {
  const _specialProtoMatch = input.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i)
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ''] = _specialProtoMatch
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: '',
      host: '',
      search: '',
      hash: '',
    }
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input)
  }
  const [, protocol = '', auth, hostAndPath = ''] =
    input.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
  let [, host = '', path = ''] = hostAndPath.match(/([^#/?]*)(.*)?/) || []
  if (protocol === 'file:') {
    path = path.replace(/\/(?=[A-Za-z]:)/, '')
  }
  const { pathname, search, hash: hash2 } = parsePath(path)
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : '',
    host,
    pathname,
    search,
    hash: hash2,
    [protocolRelative]: !protocol,
  }
}
function parsePath(input = '') {
  const [pathname = '', search = '', hash2 = ''] = (
    input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1)
  return {
    pathname,
    search,
    hash: hash2,
  }
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || ''
  const search = parsed.search ? (parsed.search.startsWith('?') ? '' : '?') + parsed.search : ''
  const hash2 = parsed.hash || ''
  const auth = parsed.auth ? parsed.auth + '@' : ''
  const host = parsed.host || ''
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || '') + '//' : ''
  return proto + auth + host + pathname + search + hash2
}
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options }
  } else {
    options = defaults
  }
  const hasher = createHasher(options)
  hasher.dispatch(object)
  return hasher.toString()
}
function createHasher(options) {
  let buff = ''
  let context3 = /* @__PURE__ */ new Map()
  const write3 = /* @__PURE__ */ __name((str) => {
    buff += str
  }, 'write')
  return {
    toString() {
      return buff
    },
    getContext() {
      return context3
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value)
      }
      const type2 = value === null ? 'null' : typeof value
      return this[type2](value)
    },
    object(object) {
      if (object && typeof object.toJSON === 'function') {
        return this.object(object.toJSON())
      }
      const objString = Object.prototype.toString.call(object)
      let objType = ''
      const objectLength = objString.length
      if (objectLength < 10) {
        objType = 'unknown:[' + objString + ']'
      } else {
        objType = objString.slice(8, objectLength - 1)
      }
      objType = objType.toLowerCase()
      let objectNumber = null
      if ((objectNumber = context3.get(object)) === void 0) {
        context3.set(object, context3.size)
      } else {
        return this.dispatch('[CIRCULAR:' + objectNumber + ']')
      }
      if (typeof Buffer2 !== 'undefined' && Buffer2.isBuffer && Buffer2.isBuffer(object)) {
        write3('buffer:')
        return write3(object.toString('utf8'))
      }
      if (objType !== 'object' && objType !== 'function' && objType !== 'asyncfunction') {
        if (this[objType]) {
          this[objType](object)
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType)
        }
      } else {
        let keys = Object.keys(object)
        if (options.unorderedObjects) {
          keys = keys.sort()
        }
        let extraKeys = []
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key)
          })
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key)
          })
        }
        write3('object:' + (keys.length + extraKeys.length) + ':')
        const dispatchForKey = /* @__PURE__ */ __name((key) => {
          this.dispatch(key)
          write3(':')
          if (!options.excludeValues) {
            this.dispatch(object[key])
          }
          write3(',')
        }, 'dispatchForKey')
        for (const key of keys) {
          dispatchForKey(key)
        }
        for (const key of extraKeys) {
          dispatchForKey(key)
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered
      write3('array:' + arr.length + ':')
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry)
        }
        return
      }
      const contextAdditions = /* @__PURE__ */ new Map()
      const entries = arr.map((entry) => {
        const hasher = createHasher(options)
        hasher.dispatch(entry)
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value)
        }
        return hasher.toString()
      })
      context3 = contextAdditions
      entries.sort()
      return this.array(entries, false)
    },
    date(date) {
      return write3('date:' + date.toJSON())
    },
    symbol(sym) {
      return write3('symbol:' + sym.toString())
    },
    unkown(value, type2) {
      write3(type2)
      if (!value) {
        return
      }
      write3(':')
      if (value && typeof value.entries === 'function') {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        )
      }
    },
    error(err) {
      return write3('error:' + err.toString())
    },
    boolean(bool) {
      return write3('bool:' + bool)
    },
    string(string) {
      write3('string:' + string.length + ':')
      write3(string)
    },
    function(fn3) {
      write3('fn:')
      if (isNativeFunction(fn3)) {
        this.dispatch('[native]')
      } else {
        this.dispatch(fn3.toString())
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch('function-name:' + String(fn3.name))
      }
      if (options.respectFunctionProperties) {
        this.object(fn3)
      }
    },
    number(number) {
      return write3('number:' + number)
    },
    xml(xml) {
      return write3('xml:' + xml.toString())
    },
    null() {
      return write3('Null')
    },
    undefined() {
      return write3('Undefined')
    },
    regexp(regex) {
      return write3('regex:' + regex.toString())
    },
    uint8array(arr) {
      write3('uint8array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    uint8clampedarray(arr) {
      write3('uint8clampedarray:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    int8array(arr) {
      write3('int8array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    uint16array(arr) {
      write3('uint16array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    int16array(arr) {
      write3('int16array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    uint32array(arr) {
      write3('uint32array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    int32array(arr) {
      write3('int32array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    float32array(arr) {
      write3('float32array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    float64array(arr) {
      write3('float64array:')
      return this.dispatch(Array.prototype.slice.call(arr))
    },
    arraybuffer(arr) {
      write3('arraybuffer:')
      return this.dispatch(new Uint8Array(arr))
    },
    url(url) {
      return write3('url:' + url.toString())
    },
    map(map) {
      write3('map:')
      const arr = [...map]
      return this.array(arr, options.unorderedSets !== false)
    },
    set(set) {
      write3('set:')
      const arr = [...set]
      return this.array(arr, options.unorderedSets !== false)
    },
    file(file) {
      write3('file:')
      return this.dispatch([file.name, file.size, file.type, file.lastModfied])
    },
    blob() {
      if (options.ignoreUnknown) {
        return write3('[blob]')
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      )
    },
    domwindow() {
      return write3('domwindow')
    },
    bigint(number) {
      return write3('bigint:' + number.toString())
    },
    /* Node.js standard native objects */
    process() {
      return write3('process')
    },
    timer() {
      return write3('timer')
    },
    pipe() {
      return write3('pipe')
    },
    tcp() {
      return write3('tcp')
    },
    udp() {
      return write3('udp')
    },
    tty() {
      return write3('tty')
    },
    statwatcher() {
      return write3('statwatcher')
    },
    securecontext() {
      return write3('securecontext')
    },
    connection() {
      return write3('connection')
    },
    zlib() {
      return write3('zlib')
    },
    context() {
      return write3('context')
    },
    nodescript() {
      return write3('nodescript')
    },
    httpparser() {
      return write3('httpparser')
    },
    dataview() {
      return write3('dataview')
    },
    signal() {
      return write3('signal')
    },
    fsevent() {
      return write3('fsevent')
    },
    tlswrap() {
      return write3('tlswrap')
    },
  }
}
function isNativeFunction(f2) {
  if (typeof f2 !== 'function') {
    return false
  }
  return Function.prototype.toString.call(f2).slice(-nativeFuncLength) === nativeFunc
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64)
}
function hash(object, options = {}) {
  const hashed = typeof object === 'string' ? object : objectHash(object, options)
  return sha256base64(hashed).slice(0, 10)
}
function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {},
  }
  const normalizeTrailingSlash = /* @__PURE__ */ __name(
    (p2) => (options.strictTrailingSlash ? p2 : p2.replace(/\/$/, '') || '/'),
    'normalizeTrailingSlash'
  )
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path])
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path)),
  }
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path]
  if (staticPathNode) {
    return staticPathNode.data
  }
  const sections = path.split('/')
  const params = {}
  let paramsFound = false
  let wildcardNode = null
  let node = ctx.rootNode
  let wildCardParam = null
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode
      wildCardParam = sections.slice(i).join('/')
    }
    const nextNode = node.children.get(section)
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i
        node = node.placeholderChildren.find((c2) => c2.maxDepth === remaining) || null
      } else {
        node = node.placeholderChildren[0] || null
      }
      if (!node) {
        break
      }
      if (node.paramName) {
        params[node.paramName] = section
      }
      paramsFound = true
    } else {
      node = nextNode
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode
    params[node.paramName || '_'] = wildCardParam
    paramsFound = true
  }
  if (!node) {
    return null
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0,
    }
  }
  return node.data
}
function insert(ctx, path, data) {
  let isStaticRoute = true
  const sections = path.split('/')
  let node = ctx.rootNode
  let _unnamedPlaceholderCtr = 0
  const matchedNodes = [node]
  for (const section of sections) {
    let childNode
    if ((childNode = node.children.get(section))) {
      node = childNode
    } else {
      const type2 = getNodeType(section)
      childNode = createRadixNode({ type: type2, parent: node })
      node.children.set(section, childNode)
      if (type2 === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === '*' ? `_${_unnamedPlaceholderCtr++}` : section.slice(1)
        node.placeholderChildren.push(childNode)
        isStaticRoute = false
      } else if (type2 === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode
        childNode.paramName =
          section.slice(
            3
            /* "**:" */
          ) || '_'
        isStaticRoute = false
      }
      matchedNodes.push(childNode)
      node = childNode
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0)
  }
  node.data = data
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node
  }
  return node
}
function remove(ctx, path) {
  let success = false
  const sections = path.split('/')
  let node = ctx.rootNode
  for (const section of sections) {
    node = node.children.get(section)
    if (!node) {
      return success
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || ''
    node.data = null
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection)
      node.parent.wildcardChildNode = null
      node.parent.placeholderChildren = []
    }
    success = true
  }
  return success
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: [],
  }
}
function getNodeType(str) {
  if (str.startsWith('**')) {
    return NODE_TYPES.WILDCARD
  }
  if (str[0] === ':' || str === '*') {
    return NODE_TYPES.PLACEHOLDER
  }
  return NODE_TYPES.NORMAL
}
function toRouteMatcher(router) {
  const table4 = _routerNodeToTable('', router.ctx.rootNode)
  return _createMatcher(table4, router.ctx.options.strictTrailingSlash)
}
function _createMatcher(table4, strictTrailingSlash) {
  return {
    ctx: { table: table4 },
    matchAll: (path) => _matchRoutes(path, table4, strictTrailingSlash),
  }
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map(),
  }
}
function _matchRoutes(path, table4, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith('/')) {
    path = path.slice(0, -1) || '/'
  }
  const matches = []
  for (const [key, value] of _sortRoutesMap(table4.wildcard)) {
    if (path === key || path.startsWith(key + '/')) {
      matches.push(value)
    }
  }
  for (const [key, value] of _sortRoutesMap(table4.dynamic)) {
    if (path.startsWith(key + '/')) {
      const subPath = '/' + path.slice(key.length).split('/').splice(2).join('/')
      matches.push(..._matchRoutes(subPath, value))
    }
  }
  const staticMatch = table4.static.get(path)
  if (staticMatch) {
    matches.push(staticMatch)
  }
  return matches.filter(Boolean)
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a2, b2) => a2[0].length - b2[0].length)
}
function _routerNodeToTable(initialPath, initialNode) {
  const table4 = _createRouteTable()
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes('*') || path.includes(':'))) {
        if (node.data) {
          table4.static.set(path, node.data)
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table4.wildcard.set(path.replace('/**', ''), node.data)
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable('', node)
        if (node.data) {
          subTable.static.set('/', node.data)
        }
        table4.dynamic.set(path.replace(/\/\*|\/:\w+/, ''), subTable)
        return
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace('//', '/'), child)
    }
  }
  __name(_addNode, '_addNode')
  _addNode(initialPath, initialNode)
  return table4
}
function isPlainObject(value) {
  if (value === null || typeof value !== 'object') {
    return false
  }
  const prototype = Object.getPrototypeOf(value)
  if (
    prototype !== null &&
    prototype !== Object.prototype &&
    Object.getPrototypeOf(prototype) !== null
  ) {
    return false
  }
  if (Symbol.iterator in value) {
    return false
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === '[object Module]'
  }
  return true
}
function _defu(baseObject, defaults2, namespace = '.', merger) {
  if (!isPlainObject(defaults2)) {
    return _defu(baseObject, {}, namespace, merger)
  }
  const object = Object.assign({}, defaults2)
  for (const key in baseObject) {
    if (key === '__proto__' || key === 'constructor') {
      continue
    }
    const value = baseObject[key]
    if (value === null || value === void 0) {
      continue
    }
    if (merger && merger(object, key, value, namespace)) {
      continue
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]]
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : '') + key.toString(),
        merger
      )
    } else {
      object[key] = value
    }
  }
  return object
}
function createDefu(merger) {
  return (...arguments_) =>
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p2, c2) => _defu(p2, c2, '', merger), {})
}
function _addListener(target, type2, listener, prepend) {
  _checkListener(listener)
  if (target._events.newListener !== void 0) {
    target.emit('newListener', type2, listener.listener || listener)
  }
  if (!target._events[type2]) {
    target._events[type2] = []
  }
  if (prepend) {
    target._events[type2].unshift(listener)
  } else {
    target._events[type2].push(listener)
  }
  const maxListeners = _getMaxListeners(target)
  if (
    maxListeners > 0 &&
    target._events[type2].length > maxListeners &&
    !target._events[type2].warned
  ) {
    target._events[type2].warned = true
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type2].length} ${type2} listeners added. Use emitter.setMaxListeners() to increase limit`
    )
    warning.name = 'MaxListenersExceededWarning'
    warning.emitter = target
    warning.type = type2
    warning.count = target._events[type2]?.length
    console.warn(warning)
  }
  return target
}
function _removeListener(target, type2, listener) {
  _checkListener(listener)
  if (!target._events[type2] || target._events[type2].length === 0) {
    return target
  }
  const lenBeforeFilter = target._events[type2].length
  target._events[type2] = target._events[type2].filter((fn3) => fn3 !== listener)
  if (lenBeforeFilter === target._events[type2].length) {
    return target
  }
  if (target._events.removeListener) {
    target.emit('removeListener', type2, listener.listener || listener)
  }
  if (target._events[type2].length === 0) {
    delete target._events[type2]
  }
  return target
}
function _removeAllListeners(target, type2) {
  if (!target._events[type2] || target._events[type2].length === 0) {
    return target
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type2]) {
      target.emit('removeListener', type2, _listener.listener || _listener)
    }
  }
  delete target._events[type2]
  return target
}
function _wrapOnce(target, type2, listener) {
  let fired = false
  const wrapper = /* @__PURE__ */ __name((...args) => {
    if (fired) {
      return
    }
    target.removeListener(type2, wrapper)
    fired = true
    return args.length === 0 ? listener.call(target) : listener.apply(target, args)
  }, 'wrapper')
  wrapper.listener = listener
  return wrapper
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners
}
function _listeners(target, type2, unwrap) {
  let listeners3 = target._events[type2]
  if (typeof listeners3 === 'function') {
    listeners3 = [listeners3]
  }
  return unwrap ? listeners3.map((l2) => l2.listener || l2) : listeners3
}
function _checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    )
  }
}
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype)
  Object.assign(__Duplex.prototype, Writable2.prototype)
  return __Duplex
}
function _distinct(obj) {
  const d = {}
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(Boolean)
    }
  }
  return d
}
function hasProp(obj, prop) {
  try {
    return prop in obj
  } catch {
    return false
  }
}
function createError(input) {
  if (typeof input === 'string') {
    return new H3Error(input)
  }
  if (isError(input)) {
    return input
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? '', {
    cause: input.cause || input,
  })
  if (hasProp(input, 'stack')) {
    try {
      Object.defineProperty(err, 'stack', {
        get() {
          return input.stack
        },
      })
    } catch {
      try {
        err.stack = input.stack
      } catch {}
    }
  }
  if (input.data) {
    err.data = input.data
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode)
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode)
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage
  } else if (input.statusText) {
    err.statusMessage = input.statusText
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage)
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.'
      )
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled
  }
  return err
}
function sendError(event, error4, debug4) {
  if (event.handled) {
    return
  }
  const h3Error = isError(error4) ? error4 : createError(error4)
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data,
  }
  if (debug4) {
    responseBody.stack = (h3Error.stack || '').split('\n').map((l2) => l2.trim())
  }
  if (event.handled) {
    return
  }
  const _code = Number.parseInt(h3Error.statusCode)
  setResponseStatus(event, _code, h3Error.statusMessage)
  event.node.res.setHeader('content-type', MIMES.json)
  event.node.res.end(JSON.stringify(responseBody, void 0, 2))
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === 'string') {
    if (event.method === expected) {
      return true
    }
  } else if (expected.includes(event.method)) {
    return true
  }
  return false
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError({
      statusCode: 405,
      statusMessage: 'HTTP method is not allowed.',
    })
  }
}
function getRequestHeaders(event) {
  const _headers = {}
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key]
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(', ') : val
  }
  return _headers
}
function readRawBody(event, encoding = 'utf8') {
  assertMethod(event, PayloadMethods$1)
  const _rawBody =
    event._requestBody ||
    event.web?.request?.body ||
    event.node.req[RawBodySymbol] ||
    event.node.req.rawBody ||
    event.node.req.body
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer2.isBuffer(_resolved)) {
        return _resolved
      }
      if (typeof _resolved.pipeTo === 'function') {
        return new Promise((resolve, reject) => {
          const chunks = []
          _resolved
            .pipeTo(
              new WritableStream({
                write(chunk) {
                  chunks.push(chunk)
                },
                close() {
                  resolve(Buffer2.concat(chunks))
                },
                abort(reason) {
                  reject(reason)
                },
              })
            )
            .catch(reject)
        })
      } else if (typeof _resolved.pipe === 'function') {
        return new Promise((resolve, reject) => {
          const chunks = []
          _resolved
            .on('data', (chunk) => {
              chunks.push(chunk)
            })
            .on('end', () => {
              resolve(Buffer2.concat(chunks))
            })
            .on('error', reject)
        })
      }
      if (_resolved.constructor === Object) {
        return Buffer2.from(JSON.stringify(_resolved))
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer2.from(_resolved.toString())
      }
      return Buffer2.from(_resolved)
    })
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2
  }
  if (
    !Number.parseInt(event.node.req.headers['content-length'] || '') &&
    !String(event.node.req.headers['transfer-encoding'] ?? '')
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean)
      .includes('chunked')
  ) {
    return Promise.resolve(void 0)
  }
  const promise = (event.node.req[RawBodySymbol] = new Promise((resolve, reject) => {
    const bodyData = []
    event.node.req
      .on('error', (err) => {
        reject(err)
      })
      .on('data', (chunk) => {
        bodyData.push(chunk)
      })
      .on('end', () => {
        resolve(Buffer2.concat(bodyData))
      })
  }))
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise
  return result
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return
  }
  const bodyStream = event.web?.request?.body || event._requestBody
  if (bodyStream) {
    return bodyStream
  }
  const _hasRawBody =
    RawBodySymbol in event.node.req ||
    'rawBody' in event.node.req ||
    'body' in event.node.req ||
    '__unenv__' in event.node.req
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false)
        if (_rawBody) {
          controller.enqueue(_rawBody)
        }
        controller.close()
      },
    })
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on('data', (chunk) => {
        controller.enqueue(chunk)
      })
      event.node.req.on('end', () => {
        controller.close()
      })
      event.node.req.on('error', (err) => {
        controller.error(err)
      })
    },
  })
}
function handleCacheHeaders(event, opts) {
  const cacheControls = ['public', ...(opts.cacheControls || [])]
  let cacheMatched = false
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`)
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime)
    const ifModifiedSince = event.node.req.headers['if-modified-since']
    event.node.res.setHeader('last-modified', modifiedTime.toUTCString())
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true
    }
  }
  if (opts.etag) {
    event.node.res.setHeader('etag', opts.etag)
    const ifNonMatch = event.node.req.headers['if-none-match']
    if (ifNonMatch === opts.etag) {
      cacheMatched = true
    }
  }
  event.node.res.setHeader('cache-control', cacheControls.join(', '))
  if (cacheMatched) {
    event.node.res.statusCode = 304
    if (!event.handled) {
      event.node.res.end()
    }
    return true
  }
  return false
}
function sanitizeStatusMessage(statusMessage = '') {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, '')
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode
  }
  if (typeof statusCode === 'string') {
    statusCode = Number.parseInt(statusCode, 10)
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode
  }
  return statusCode
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c2) => splitCookiesString(c2))
  }
  if (typeof cookiesString !== 'string') {
    return []
  }
  const cookiesStrings = []
  let pos = 0
  let start
  let ch
  let lastComma
  let nextStart
  let cookiesSeparatorFound
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1
    }
    return pos < cookiesString.length
  }, 'skipWhitespace')
  const notSpecialChar = /* @__PURE__ */ __name(() => {
    ch = cookiesString.charAt(pos)
    return ch !== '=' && ch !== ';' && ch !== ','
  }, 'notSpecialChar')
  while (pos < cookiesString.length) {
    start = pos
    cookiesSeparatorFound = false
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos)
      if (ch === ',') {
        lastComma = pos
        pos += 1
        skipWhitespace()
        nextStart = pos
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
          cookiesSeparatorFound = true
          pos = nextStart
          cookiesStrings.push(cookiesString.slice(start, lastComma))
          start = pos
        } else {
          pos = lastComma + 1
        }
      } else {
        pos += 1
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start))
    }
  }
  return cookiesStrings
}
function send(event, data, type2) {
  if (type2) {
    defaultContentType(event, type2)
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data)
      }
      resolve()
    })
  })
}
function sendNoContent(event, code2) {
  if (event.handled) {
    return
  }
  if (!code2 && event.node.res.statusCode !== 200) {
    code2 = event.node.res.statusCode
  }
  const _code = sanitizeStatusCode(code2, 204)
  if (_code === 204) {
    event.node.res.removeHeader('content-length')
  }
  event.node.res.writeHead(_code)
  event.node.res.end()
}
function setResponseStatus(event, code2, text) {
  if (code2) {
    event.node.res.statusCode = sanitizeStatusCode(code2, event.node.res.statusCode)
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text)
  }
}
function defaultContentType(event, type2) {
  if (type2 && event.node.res.statusCode !== 304 && !event.node.res.getHeader('content-type')) {
    event.node.res.setHeader('content-type', type2)
  }
}
function sendRedirect(event, location, code2 = 302) {
  event.node.res.statusCode = sanitizeStatusCode(code2, event.node.res.statusCode)
  event.node.res.setHeader('location', location)
  const encodedLoc = location.replace(/"/g, '%22')
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`
  return send(event, html, MIMES.html)
}
function setResponseHeaders(event, headers) {
  for (const [name2, value] of Object.entries(headers)) {
    event.node.res.setHeader(name2, value)
  }
}
function setResponseHeader(event, name2, value) {
  event.node.res.setHeader(name2, value)
}
function isStream(data) {
  if (!data || typeof data !== 'object') {
    return false
  }
  if (typeof data.pipe === 'function') {
    if (typeof data._read === 'function') {
      return true
    }
    if (typeof data.abort === 'function') {
      return true
    }
  }
  if (typeof data.pipeTo === 'function') {
    return true
  }
  return false
}
function isWebResponse(data) {
  return typeof Response !== 'undefined' && data instanceof Response
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== 'object') {
    throw new Error('[h3] Invalid stream provided.')
  }
  event.node.res._data = stream
  if (!event.node.res.socket) {
    event._handled = true
    return Promise.resolve()
  }
  if (hasProp(stream, 'pipeTo') && typeof stream.pipeTo === 'function') {
    return stream
      .pipeTo(
        new WritableStream({
          write(chunk) {
            event.node.res.write(chunk)
          },
        })
      )
      .then(() => {
        event.node.res.end()
      })
  }
  if (hasProp(stream, 'pipe') && typeof stream.pipe === 'function') {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res)
      if (stream.on) {
        stream.on('end', () => {
          event.node.res.end()
          resolve()
        })
        stream.on('error', (error4) => {
          reject(error4)
        })
      }
      event.node.res.on('close', () => {
        if (stream.abort) {
          stream.abort()
        }
      })
    })
  }
  throw new Error('[h3] Invalid or incompatible stream provided.')
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === 'set-cookie') {
      event.node.res.appendHeader(key, splitCookiesString(value))
    } else {
      event.node.res.setHeader(key, value)
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(response.status, event.node.res.statusCode)
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText)
  }
  if (response.redirected) {
    event.node.res.setHeader('location', response.url)
  }
  if (!response.body) {
    event.node.res.end()
    return
  }
  return sendStream(event, response.body)
}
async function proxyRequest(event, target, opts = {}) {
  let body
  let duplex
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event)
      duplex = 'half'
    } else {
      body = await readRawBody(event, false).catch(() => void 0)
    }
  }
  const method = opts.fetchOptions?.method || event.method
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  )
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders,
    },
  })
}
async function sendProxy(event, target, opts = {}) {
  let response
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions,
    })
  } catch (error4) {
    throw createError({
      status: 502,
      statusMessage: 'Bad Gateway',
      cause: error4,
    })
  }
  event.node.res.statusCode = sanitizeStatusCode(response.status, event.node.res.statusCode)
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText)
  const cookies = []
  for (const [key, value] of response.headers.entries()) {
    if (key === 'content-encoding') {
      continue
    }
    if (key === 'content-length') {
      continue
    }
    if (key === 'set-cookie') {
      cookies.push(...splitCookiesString(value))
      continue
    }
    event.node.res.setHeader(key, value)
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      'set-cookie',
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(cookie, opts.cookieDomainRewrite, 'domain')
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(cookie, opts.cookiePathRewrite, 'path')
        }
        return cookie
      })
    )
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response)
  }
  if (response._data !== void 0) {
    return response._data
  }
  if (event.handled) {
    return
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer())
    return event.node.res.end(data)
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk)
    }
  }
  return event.node.res.end()
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null)
  const reqHeaders = getRequestHeaders(event)
  for (const name2 in reqHeaders) {
    if (!ignoredHeaders.has(name2)) {
      headers[name2] = reqHeaders[name2]
    }
  }
  return headers
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers,
    },
  })
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch
  }
  if (globalThis.fetch) {
    return globalThis.fetch
  }
  throw new Error('fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.')
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === 'string' ? { '*': map } : map
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, 'gi'),
    (match, prefix, previousValue) => {
      let newValue
      if (previousValue in _map) {
        newValue = _map[previousValue]
      } else if ('*' in _map) {
        newValue = _map['*']
      } else {
        return match
      }
      return newValue ? prefix + newValue : ''
    }
  )
}
function mergeHeaders$1(defaults2, ...inputs) {
  const _inputs = inputs.filter(Boolean)
  if (_inputs.length === 0) {
    return defaults2
  }
  const merged = new Headers(defaults2)
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value)
      }
    }
  }
  return merged
}
function isEvent(input) {
  return hasProp(input, '__is_event__')
}
function createEvent(req, res) {
  return new H3Event(req, res)
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers()
  for (const [name2, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name2, item)
      }
    } else if (value) {
      headers.set(name2, value)
    }
  }
  return headers
}
function defineEventHandler(handler) {
  if (typeof handler === 'function') {
    handler.__is_handler__ = true
    return handler
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse),
  }
  const _handler = /* @__PURE__ */ __name((event) => {
    return _callHandler(event, handler.handler, _hooks)
  }, '_handler')
  _handler.__is_handler__ = true
  _handler.__resolve__ = handler.handler.__resolve__
  _handler.__websocket__ = handler.websocket
  return _handler
}
function _normalizeArray(input) {
  return input ? (Array.isArray(input) ? input : [input]) : void 0
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event)
      if (event.handled) {
        return
      }
    }
  }
  const body = await handler(event)
  const response = { body }
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response)
    }
  }
  return response.body
}
function isEventHandler(input) {
  return hasProp(input, '__is_handler__')
}
function toEventHandler(input, _2, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      '[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.',
      _route && _route !== '/'
        ? `
     Route: ${_route}`
        : '',
      `
     Handler: ${input}`
    )
  }
  return input
}
function defineLazyEventHandler(factory) {
  let _promise
  let _resolved
  const resolveHandler = /* @__PURE__ */ __name(() => {
    if (_resolved) {
      return Promise.resolve(_resolved)
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r2) => {
        const handler2 = r2.default || r2
        if (typeof handler2 !== 'function') {
          throw new TypeError('Invalid lazy handler result. It should be a function:', handler2)
        }
        _resolved = { handler: toEventHandler(r2.default || r2) }
        return _resolved
      })
    }
    return _promise
  }, 'resolveHandler')
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event)
    }
    return resolveHandler().then((r2) => r2.handler(event))
  })
  handler.__resolve__ = resolveHandler
  return handler
}
function createApp(options = {}) {
  const stack = []
  const handler = createAppEventHandler(stack, options)
  const resolve = createResolver(stack)
  handler.__resolve__ = resolve
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options))
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket()
    },
  }
  return app
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3)
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3)
    }
  } else if (typeof arg1 === 'string') {
    app.stack.push(normalizeLayer({ ...arg3, route: arg1, handler: arg2 }))
  } else if (typeof arg1 === 'function') {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }))
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }))
  }
  return app
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || '/'
    const _reqPath = event._path || event.node.req.url || '/'
    let _layerPath
    if (options.onRequest) {
      await options.onRequest(event)
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue
        }
        _layerPath = _reqPath.slice(layer.route.length) || '/'
      } else {
        _layerPath = _reqPath
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue
      }
      event._path = _layerPath
      event.node.req.url = _layerPath
      const val = await layer.handler(event)
      const _body = val === void 0 ? void 0 : await val
      if (_body !== void 0) {
        const _response = { body: _body }
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true
          await options.onBeforeResponse(event, _response)
        }
        await handleHandlerResponse(event, _response.body, spacing)
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true
          await options.onAfterResponse(event, _response)
        }
        return
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true
          await options.onAfterResponse(event, void 0)
        }
        return
      }
    }
    if (!event.handled) {
      throw createError({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || '/'}.`,
      })
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true
      await options.onAfterResponse(event, void 0)
    }
  })
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath
    for (const layer of stack) {
      if (layer.route === '/' && !layer.handler.__resolve__) {
        continue
      }
      if (!path.startsWith(layer.route)) {
        continue
      }
      _layerPath = path.slice(layer.route.length) || '/'
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue
      }
      let res = { route: layer.route, handler: layer.handler }
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath)
        if (!_res) {
          continue
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || '/', _res.route || '/'),
        }
      }
      return res
    }
  }
}
function normalizeLayer(input) {
  let handler = input.handler
  if (handler.handler) {
    handler = handler.handler
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler)
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route)
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler,
  }
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event)
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val)
    }
    if (isStream(val)) {
      return sendStream(event, val)
    }
    if (val.buffer) {
      return send(event, val)
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === 'function') {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer2.from(arrayBuffer), val.type)
      })
    }
    if (val instanceof Error) {
      throw createError(val)
    }
    if (typeof val.end === 'function') {
      return true
    }
  }
  const valType = typeof val
  if (valType === 'string') {
    return send(event, val, MIMES.html)
  }
  if (valType === 'object' || valType === 'boolean' || valType === 'number') {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json)
  }
  if (valType === 'bigint') {
    return send(event, val.toString(), MIMES.json)
  }
  throw createError({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`,
  })
}
function cachedFn(fn3) {
  let cache
  return () => {
    if (!cache) {
      cache = fn3()
    }
    return cache
  }
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info4) {
      const url = info4.request?.url || info4.url || '/'
      const { pathname } = typeof url === 'string' ? parseURL(url) : url
      const resolved = await evResolver(pathname)
      return resolved?.handler?.__websocket__ || {}
    },
  }
}
function createRouter(opts = {}) {
  const _router = createRouter$1({})
  const routes2 = {}
  let _matcher
  const router = {}
  const addRoute = /* @__PURE__ */ __name((path, handler, method) => {
    let route = routes2[path]
    if (!route) {
      routes2[path] = route = { path, handlers: {} }
      _router.insert(path, route)
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m)
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path)
    }
    return router
  }, 'addRoute')
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || 'all')
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method)
  }
  const matchHandler = /* @__PURE__ */ __name((path = '/', method = 'get') => {
    const qIndex = path.indexOf('?')
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex))
    }
    const matched = _router.lookup(path)
    if (!matched || !matched.handlers) {
      return {
        error: createError({
          statusCode: 404,
          name: 'Not Found',
          statusMessage: `Cannot find any route matching ${path || '/'}.`,
        }),
      }
    }
    let handler = matched.handlers[method] || matched.handlers.all
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router)
      }
      const _matches = _matcher.matchAll(path).reverse()
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method]
          matched.handlers[method] = matched.handlers[method] || handler
          break
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all
          matched.handlers.all = matched.handlers.all || handler
          break
        }
      }
    }
    if (!handler) {
      return {
        error: createError({
          statusCode: 405,
          name: 'Method Not Allowed',
          statusMessage: `Method ${method} is not allowed on this route.`,
        }),
      }
    }
    return { matched, handler }
  }, 'matchHandler')
  const isPreemptive = opts.preemptive || opts.preemtive
  router.handler = eventHandler((event) => {
    const match = matchHandler(event.path, event.method.toLowerCase())
    if ('error' in match) {
      if (isPreemptive) {
        throw match.error
      } else {
        return
      }
    }
    event.context.matchedRoute = match.matched
    const params = match.matched.params || {}
    event.context.params = params
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null
      }
      return res
    })
  })
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path)
    const match = matchHandler(path)
    if ('error' in match) {
      return
    }
    let res = {
      route: match.matched.path,
      handler: match.handler,
    }
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path)
      if (!_res) {
        return
      }
      res = { ...res, ..._res }
    }
    return res
  }
  return router
}
function toNodeListener(app) {
  const toNodeHandle = /* @__PURE__ */ __name(async (req, res) => {
    const event = createEvent(req, res)
    try {
      await app.handler(event)
    } catch (_error) {
      const error4 = createError(_error)
      if (!isError(_error)) {
        error4.unhandled = true
      }
      setResponseStatus(event, error4.statusCode, error4.statusMessage)
      if (app.options.onError) {
        await app.options.onError(error4, event)
      }
      if (event.handled) {
        return
      }
      if (error4.unhandled || error4.fatal) {
        console.error('[h3]', error4.fatal ? '[fatal]' : '[unhandled]', error4)
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error4 })
      }
      await sendError(event, error4, !!app.options.debug)
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error4 })
      }
    }
  }, 'toNodeHandle')
  return toNodeHandle
}
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key]
    const name2 = parentName ? `${parentName}:${key}` : key
    if (typeof subHook === 'object' && subHook !== null) {
      flatHooks(subHook, hooks, name2)
    } else if (typeof subHook === 'function') {
      hooks[name2] = subHook
    }
  }
  return hooks
}
function serialTaskCaller(hooks, args) {
  const name2 = args.shift()
  const task = createTask3(name2)
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  )
}
function parallelTaskCaller(hooks, args) {
  const name2 = args.shift()
  const task = createTask3(name2)
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))))
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0)
  }
}
function createHooks() {
  return new Hookable()
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || ''
  const method = ctx.request?.method || ctx.options?.method || 'GET'
  const url = ctx.request?.url || String(ctx.request) || '/'
  const requestStr = `[${method}] ${JSON.stringify(url)}`
  const statusStr = ctx.response
    ? `${ctx.response.status} ${ctx.response.statusText}`
    : '<no response>'
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ''}`
  const fetchError = new FetchError(message, ctx.error ? { cause: ctx.error } : void 0)
  for (const key of ['request', 'options', 'response']) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key]
      },
    })
  }
  for (const [key, refKey] of [
    ['data', '_data'],
    ['status', 'status'],
    ['statusCode', 'status'],
    ['statusText', 'statusText'],
    ['statusMessage', 'statusText'],
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey]
      },
    })
  }
  return fetchError
}
function isPayloadMethod(method = 'GET') {
  return payloadMethods.has(method.toUpperCase())
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false
  }
  const t2 = typeof value
  if (t2 === 'string' || t2 === 'number' || t2 === 'boolean' || t2 === null) {
    return true
  }
  if (t2 !== 'object') {
    return false
  }
  if (Array.isArray(value)) {
    return true
  }
  if (value.buffer) {
    return false
  }
  return (
    (value.constructor && value.constructor.name === 'Object') || typeof value.toJSON === 'function'
  )
}
function detectResponseType(_contentType = '') {
  if (!_contentType) {
    return 'json'
  }
  const contentType = _contentType.split(';').shift() || ''
  if (JSON_RE.test(contentType)) {
    return 'json'
  }
  if (textTypes.has(contentType) || contentType.startsWith('text/')) {
    return 'text'
  }
  return 'blob'
}
function resolveFetchOptions(request, input, defaults2, Headers2) {
  const headers = mergeHeaders(input?.headers ?? request?.headers, defaults2?.headers, Headers2)
  let query
  if (defaults2?.query || defaults2?.params || input?.params || input?.query) {
    query = {
      ...defaults2?.params,
      ...defaults2?.query,
      ...input?.params,
      ...input?.query,
    }
  }
  return {
    ...defaults2,
    ...input,
    query,
    params: query,
    headers,
  }
}
function mergeHeaders(input, defaults2, Headers2) {
  if (!defaults2) {
    return new Headers2(input)
  }
  const headers = new Headers2(defaults2)
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input)
      ? input
      : new Headers2(input)) {
      headers.set(key, value)
    }
  }
  return headers
}
async function callHooks(context3, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context3)
      }
    } else {
      await hooks(context3)
    }
  }
}
function createFetch$1(globalOptions = {}) {
  const {
    fetch: fetch2 = globalThis.fetch,
    Headers: Headers2 = globalThis.Headers,
    AbortController: AbortController2 = globalThis.AbortController,
  } = globalOptions
  async function onError(context3) {
    const isAbort =
      (context3.error && context3.error.name === 'AbortError' && !context3.options.timeout) || false
    if (context3.options.retry !== false && !isAbort) {
      let retries
      if (typeof context3.options.retry === 'number') {
        retries = context3.options.retry
      } else {
        retries = isPayloadMethod(context3.options.method) ? 0 : 1
      }
      const responseCode = (context3.response && context3.response.status) || 500
      if (
        retries > 0 &&
        (Array.isArray(context3.options.retryStatusCodes)
          ? context3.options.retryStatusCodes.includes(responseCode)
          : retryStatusCodes.has(responseCode))
      ) {
        const retryDelay =
          typeof context3.options.retryDelay === 'function'
            ? context3.options.retryDelay(context3)
            : context3.options.retryDelay || 0
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay))
        }
        return $fetchRaw(context3.request, {
          ...context3.options,
          retry: retries - 1,
        })
      }
    }
    const error4 = createFetchError(context3)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error4, $fetchRaw)
    }
    throw error4
  }
  __name(onError, 'onError')
  const $fetchRaw = /* @__PURE__ */ __name(async function $fetchRaw2(_request, _options = {}) {
    const context3 = {
      request: _request,
      options: resolveFetchOptions(_request, _options, globalOptions.defaults, Headers2),
      response: void 0,
      error: void 0,
    }
    if (context3.options.method) {
      context3.options.method = context3.options.method.toUpperCase()
    }
    if (context3.options.onRequest) {
      await callHooks(context3, context3.options.onRequest)
    }
    if (typeof context3.request === 'string') {
      if (context3.options.baseURL) {
        context3.request = withBase(context3.request, context3.options.baseURL)
      }
      if (context3.options.query) {
        context3.request = withQuery(context3.request, context3.options.query)
        delete context3.options.query
      }
      if ('query' in context3.options) {
        delete context3.options.query
      }
      if ('params' in context3.options) {
        delete context3.options.params
      }
    }
    if (context3.options.body && isPayloadMethod(context3.options.method)) {
      if (isJSONSerializable(context3.options.body)) {
        context3.options.body =
          typeof context3.options.body === 'string'
            ? context3.options.body
            : JSON.stringify(context3.options.body)
        context3.options.headers = new Headers2(context3.options.headers || {})
        if (!context3.options.headers.has('content-type')) {
          context3.options.headers.set('content-type', 'application/json')
        }
        if (!context3.options.headers.has('accept')) {
          context3.options.headers.set('accept', 'application/json')
        }
      } else if (
        // ReadableStream Body
        ('pipeTo' in context3.options.body && typeof context3.options.body.pipeTo === 'function') || // Node.js Stream Body
        typeof context3.options.body.pipe === 'function'
      ) {
        if (!('duplex' in context3.options)) {
          context3.options.duplex = 'half'
        }
      }
    }
    let abortTimeout
    if (!context3.options.signal && context3.options.timeout) {
      const controller = new AbortController2()
      abortTimeout = setTimeout(() => {
        const error4 = new Error('[TimeoutError]: The operation was aborted due to timeout')
        error4.name = 'TimeoutError'
        error4.code = 23
        controller.abort(error4)
      }, context3.options.timeout)
      context3.options.signal = controller.signal
    }
    try {
      context3.response = await fetch2(context3.request, context3.options)
    } catch (error4) {
      context3.error = error4
      if (context3.options.onRequestError) {
        await callHooks(context3, context3.options.onRequestError)
      }
      return await onError(context3)
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout)
      }
    }
    const hasBody =
      (context3.response.body || // https://github.com/unjs/ofetch/issues/324
        // https://github.com/unjs/ofetch/issues/294
        // https://github.com/JakeChampion/fetch/issues/1454
        context3.response._bodyInit) &&
      !nullBodyResponses$1.has(context3.response.status) &&
      context3.options.method !== 'HEAD'
    if (hasBody) {
      const responseType =
        (context3.options.parseResponse ? 'json' : context3.options.responseType) ||
        detectResponseType(context3.response.headers.get('content-type') || '')
      switch (responseType) {
        case 'json': {
          const data = await context3.response.text()
          const parseFunction = context3.options.parseResponse || destr
          context3.response._data = parseFunction(data)
          break
        }
        case 'stream': {
          context3.response._data = context3.response.body || context3.response._bodyInit
          break
        }
        default: {
          context3.response._data = await context3.response[responseType]()
        }
      }
    }
    if (context3.options.onResponse) {
      await callHooks(context3, context3.options.onResponse)
    }
    if (
      !context3.options.ignoreResponseError &&
      context3.response.status >= 400 &&
      context3.response.status < 600
    ) {
      if (context3.options.onResponseError) {
        await callHooks(context3, context3.options.onResponseError)
      }
      return await onError(context3)
    }
    return context3.response
  }, '$fetchRaw2')
  const $fetch = /* @__PURE__ */ __name(async function $fetch2(request, options) {
    const r2 = await $fetchRaw(request, options)
    return r2._data
  }, '$fetch2')
  $fetch.raw = $fetchRaw
  $fetch.native = (...args) => fetch2(...args)
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) =>
    createFetch$1({
      ...globalOptions,
      ...customGlobalOptions,
      defaults: {
        ...globalOptions.defaults,
        ...customGlobalOptions.defaults,
        ...defaultOptions,
      },
    })
  return $fetch
}
function createCall(handle) {
  return /* @__PURE__ */ __name(function callHandle(context3) {
    const req = new IncomingMessage()
    const res = new ServerResponse(req)
    req.url = context3.url || '/'
    req.method = context3.method || 'GET'
    req.headers = {}
    if (context3.headers) {
      const headerEntries =
        typeof context3.headers.entries === 'function'
          ? context3.headers.entries()
          : Object.entries(context3.headers)
      for (const [name2, value] of headerEntries) {
        if (!value) {
          continue
        }
        req.headers[name2.toLowerCase()] = value
      }
    }
    req.headers.host = req.headers.host || context3.host || 'localhost'
    req.connection.encrypted = req.connection.encrypted || context3.protocol === 'https' // @ts-ignore
    req.body = context3.body || null
    req.__unenv__ = context3.context
    return handle(req, res).then(() => {
      let body = res._data
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === 'HEAD') {
        body = null
        delete res._headers['content-length']
      }
      const r2 = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage,
      }
      req.destroy()
      res.destroy()
      return r2
    })
  }, 'callHandle')
}
function createFetch(call, _fetch = global.fetch) {
  return /* @__PURE__ */ __name(async function ufetch(input, init) {
    const url = input.toString()
    if (!url.startsWith('/')) {
      return _fetch(url, init)
    }
    try {
      const r2 = await call({ url, ...init })
      return new Response(r2.body, {
        status: r2.status,
        statusText: r2.statusText,
        headers: Object.fromEntries(
          Object.entries(r2.headers).map(([name2, value]) => [
            name2,
            Array.isArray(value) ? value.join(',') : String(value) || '',
          ])
        ),
      })
    } catch (error4) {
      return new Response(error4.toString(), {
        status: Number.parseInt(error4.statusCode || error4.code) || 500,
        statusText: error4.statusText,
      })
    }
  }, 'ufetch')
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== 'function') {
    return Promise.resolve(value)
  }
  return value
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_))
  } catch (error4) {
    return Promise.reject(error4)
  }
}
function isPrimitive(value) {
  const type2 = typeof value
  return value === null || (type2 !== 'object' && type2 !== 'function')
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value)
  return !proto || proto.isPrototypeOf(Object)
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value)
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value)
  }
  if (typeof value.toJSON === 'function') {
    return stringify(value.toJSON())
  }
  throw new Error('[unstorage] Cannot stringify value!')
}
function checkBufferSupport() {
  if (typeof Buffer2 === 'undefined') {
    throw new TypeError('[unstorage] Buffer is not supported!')
  }
}
function serializeRaw(value) {
  if (typeof value === 'string') {
    return value
  }
  checkBufferSupport()
  const base64 = Buffer2.from(value).toString('base64')
  return BASE64_PREFIX + base64
}
function deserializeRaw(value) {
  if (typeof value !== 'string') {
    return value
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value
  }
  checkBufferSupport()
  return Buffer2.from(value.slice(BASE64_PREFIX.length), 'base64')
}
function prefixStorage(storage2, base) {
  base = normalizeBaseKey(base)
  if (!base) {
    return storage2
  }
  const nsStorage = { ...storage2 }
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = '', ...args) =>
      // @ts-ignore
      storage2[property](base + key, ...args)
  }
  nsStorage.getKeys = (key = '', ...arguments_) =>
    storage2
      .getKeys(base + key, ...arguments_)
      .then((keys) => keys.map((key2) => key2.slice(base.length)))
  return nsStorage
}
function normalizeKey$1(key) {
  if (!key) {
    return ''
  }
  return key.split('?')[0].replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '')
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(':'))
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base)
  return base ? base + ':' : ''
}
function defineDriver(factory) {
  return factory
}
function createStorage(options = {}) {
  const context3 = {
    mounts: { '': options.driver || memory() },
    mountpoints: [''],
    watching: false,
    watchListeners: [],
    unwatch: {},
  }
  const getMount = /* @__PURE__ */ __name((key) => {
    for (const base of context3.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context3.mounts[base],
        }
      }
    }
    return {
      base: '',
      relativeKey: key,
      driver: context3.mounts[''],
    }
  }, 'getMount')
  const getMounts = /* @__PURE__ */ __name((base, includeParent) => {
    return context3.mountpoints
      .filter(
        (mountpoint) =>
          mountpoint.startsWith(base) || (includeParent && base.startsWith(mountpoint))
      )
      .map((mountpoint) => ({
        relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
        mountpoint,
        driver: context3.mounts[mountpoint],
      }))
  }, 'getMounts')
  const onChange = /* @__PURE__ */ __name((event, key) => {
    if (!context3.watching) {
      return
    }
    key = normalizeKey$1(key)
    for (const listener of context3.watchListeners) {
      listener(event, key)
    }
  }, 'onChange')
  const startWatch = /* @__PURE__ */ __name(async () => {
    if (context3.watching) {
      return
    }
    context3.watching = true
    for (const mountpoint in context3.mounts) {
      context3.unwatch[mountpoint] = await watch(context3.mounts[mountpoint], onChange, mountpoint)
    }
  }, 'startWatch')
  const stopWatch = /* @__PURE__ */ __name(async () => {
    if (!context3.watching) {
      return
    }
    for (const mountpoint in context3.unwatch) {
      await context3.unwatch[mountpoint]()
    }
    context3.unwatch = {}
    context3.watching = false
  }, 'stopWatch')
  const runBatch = /* @__PURE__ */ __name((items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map()
    const getBatch = /* @__PURE__ */ __name((mount) => {
      let batch = batches.get(mount.base)
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: [],
        }
        batches.set(mount.base, batch)
      }
      return batch
    }, 'getBatch')
    for (const item of items) {
      const isStringItem = typeof item === 'string'
      const key = normalizeKey$1(isStringItem ? item : item.key)
      const value = isStringItem ? void 0 : item.value
      const options2 =
        isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options }
      const mount = getMount(key)
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2,
      })
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then((r2) => r2.flat())
  }, 'runBatch')
  const storage2 = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      return asyncCall(driver.hasItem, relativeKey, opts)
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      return asyncCall(driver.getItem, relativeKey, opts).then((value) => destr(value))
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options,
            })),
            commonOptions
          ).then((r2) =>
            r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value),
            }))
          )
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(batch.driver.getItem, item.relativeKey, item.options).then(
              (value) => ({
                key: item.key,
                value: destr(value),
              })
            )
          })
        )
      })
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts)
      }
      return asyncCall(driver.getItem, relativeKey, opts).then((value) => deserializeRaw(value))
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage2.removeItem(key)
      }
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      if (!driver.setItem) {
        return
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts)
      if (!driver.watch) {
        onChange('update', key)
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options,
            })),
            commonOptions
          )
        }
        if (!batch.driver.setItem) {
          return
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            )
          })
        )
      })
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage2.removeItem(key, opts)
      }
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts)
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts)
      } else {
        return
      }
      if (!driver.watch) {
        onChange('update', key)
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === 'boolean') {
        opts = { removeMeta: opts }
      }
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      if (!driver.removeItem) {
        return
      }
      await asyncCall(driver.removeItem, relativeKey, opts)
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + '$', opts)
      }
      if (!driver.watch) {
        onChange('remove', key)
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === 'boolean') {
        opts = { nativeOnly: opts }
      }
      key = normalizeKey$1(key)
      const { relativeKey, driver } = getMount(key)
      const meta = /* @__PURE__ */ Object.create(null)
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts))
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(driver.getItem, relativeKey + '$', opts).then((value_) =>
          destr(value_)
        )
        if (value && typeof value === 'object') {
          if (typeof value.atime === 'string') {
            value.atime = new Date(value.atime)
          }
          if (typeof value.mtime === 'string') {
            value.mtime = new Date(value.mtime)
          }
          Object.assign(meta, value)
        }
      }
      return meta
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + '$', value, opts)
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + '$', opts)
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base)
      const mounts = getMounts(base, true)
      let maskedMounts = []
      const allKeys = []
      for (const mount of mounts) {
        const rawKeys = await asyncCall(mount.driver.getKeys, mount.relativeBase, opts)
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key)
          if (!maskedMounts.some((p2) => fullKey.startsWith(p2))) {
            allKeys.push(fullKey)
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p2) => !p2.startsWith(mount.mountpoint)),
        ]
      }
      return base
        ? allKeys.filter((key) => key.startsWith(base) && key[key.length - 1] !== '$')
        : allKeys.filter((key) => key[key.length - 1] !== '$')
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base)
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts)
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || '', opts)
            return Promise.all(keys.map((key) => m.driver.removeItem(key, opts)))
          }
        })
      )
    },
    async dispose() {
      await Promise.all(Object.values(context3.mounts).map((driver) => dispose(driver)))
    },
    async watch(callback) {
      await startWatch()
      context3.watchListeners.push(callback)
      return async () => {
        context3.watchListeners = context3.watchListeners.filter(
          (listener) => listener !== callback
        )
        if (context3.watchListeners.length === 0) {
          await stopWatch()
        }
      }
    },
    async unwatch() {
      context3.watchListeners = []
      await stopWatch()
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base)
      if (base && context3.mounts[base]) {
        throw new Error(`already mounted at ${base}`)
      }
      if (base) {
        context3.mountpoints.push(base)
        context3.mountpoints.sort((a2, b2) => b2.length - a2.length)
      }
      context3.mounts[base] = driver
      if (context3.watching) {
        Promise.resolve(watch(driver, onChange, base))
          .then((unwatcher) => {
            context3.unwatch[base] = unwatcher
          })
          .catch(console.error)
      }
      return storage2
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base)
      if (!base || !context3.mounts[base]) {
        return
      }
      if (context3.watching && base in context3.unwatch) {
        context3.unwatch[base]()
        delete context3.unwatch[base]
      }
      if (_dispose) {
        await dispose(context3.mounts[base])
      }
      context3.mountpoints = context3.mountpoints.filter((key) => key !== base)
      delete context3.mounts[base]
    },
    getMount(key = '') {
      key = normalizeKey$1(key) + ':'
      const m = getMount(key)
      return {
        driver: m.driver,
        base: m.base,
      }
    },
    getMounts(base = '', opts = {}) {
      base = normalizeKey$1(base)
      const mounts = getMounts(base, opts.parents)
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint,
      }))
    },
    // Aliases
    keys: (base, opts = {}) => storage2.getKeys(base, opts),
    get: (key, opts = {}) => storage2.getItem(key, opts),
    set: (key, value, opts = {}) => storage2.setItem(key, value, opts),
    has: (key, opts = {}) => storage2.hasItem(key, opts),
    del: (key, opts = {}) => storage2.removeItem(key, opts),
    remove: (key, opts = {}) => storage2.removeItem(key, opts),
  }
  return storage2
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {}
}
async function dispose(driver) {
  if (typeof driver.dispose === 'function') {
    await asyncCall(driver.dispose)
  }
}
function useStorage(base = '') {
  return base ? prefixStorage(storage, base) : storage
}
function defaultCacheOptions() {
  return {
    name: '_',
    base: '/cache',
    swr: true,
    maxAge: 1,
  }
}
function defineCachedFunction(fn3, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts }
  const pending = {}
  const group4 = opts.group || 'nitro/functions'
  const name2 = opts.name || fn3.name || '_'
  const integrity = opts.integrity || hash([fn3, opts])
  const validate = opts.validate || ((entry) => entry.value !== void 0)
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group4, name2, key + '.json']
      .filter(Boolean)
      .join(':')
      .replace(/:\/$/, ':index')
    let entry =
      (await useStorage()
        .getItem(cacheKey)
        .catch((error4) => {
          console.error(`[nitro] [cache] Cache read error.`, error4)
          useNitroApp().captureError(error4, { event, tags: ['cache'] })
        })) || {}
    if (typeof entry !== 'object') {
      entry = {}
      const error4 = new Error('Malformed data read from cache.')
      console.error('[nitro] [cache]', error4)
      useNitroApp().captureError(error4, { event, tags: ['cache'] })
    }
    const ttl = (opts.maxAge ?? 0) * 1e3
    if (ttl) {
      entry.expires = Date.now() + ttl
    }
    const expired =
      shouldInvalidateCache ||
      entry.integrity !== integrity ||
      (ttl && Date.now() - (entry.mtime || 0) > ttl) ||
      validate(entry) === false
    const _resolve = /* @__PURE__ */ __name(async () => {
      const isPending = pending[key]
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0
          entry.integrity = void 0
          entry.mtime = void 0
          entry.expires = void 0
        }
        pending[key] = Promise.resolve(resolver())
      }
      try {
        entry.value = await pending[key]
      } catch (error4) {
        if (!isPending) {
          delete pending[key]
        }
        throw error4
      }
      if (!isPending) {
        entry.mtime = Date.now()
        entry.integrity = integrity
        delete pending[key]
        if (validate(entry) !== false) {
          let setOpts
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge }
          }
          const promise = useStorage()
            .setItem(cacheKey, entry, setOpts)
            .catch((error4) => {
              console.error(`[nitro] [cache] Cache write error.`, error4)
              useNitroApp().captureError(error4, { event, tags: ['cache'] })
            })
          if (event?.waitUntil) {
            event.waitUntil(promise)
          }
        }
      }
    }, '_resolve')
    const _resolvePromise = expired ? _resolve() : Promise.resolve()
    if (entry.value === void 0) {
      await _resolvePromise
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise)
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error4) => {
        console.error(`[nitro] [cache] SWR handler error.`, error4)
        useNitroApp().captureError(error4, { event, tags: ['cache'] })
      })
      return entry
    }
    return _resolvePromise.then(() => entry)
  }
  __name(get, 'get')
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args)
    if (shouldBypassCache) {
      return fn3(...args)
    }
    const key = await (opts.getKey || getKey)(...args)
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args)
    const entry = await get(
      key,
      () => fn3(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    )
    let value = entry.value
    if (opts.transform) {
      value = (await opts.transform(entry, ...args)) || value
    }
    return value
  }
}
function cachedFunction(fn3, opts = {}) {
  return defineCachedFunction(fn3, opts)
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : ''
}
function escapeKey(key) {
  return String(key).replace(/\W/g, '')
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || [])
    .filter(Boolean)
    .map((h) => h.toLowerCase())
    .sort()
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event)
      if (customKey) {
        return escapeKey(customKey)
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path
      let _pathname
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || 'index'
      } catch {
        _pathname = '-'
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`
      const _headers = variableHeaderNames
        .map((header) => [header, event.node.req.headers[header]])
        .map(([name2, value]) => `${escapeKey(name2)}.${hash(value)}`)
      return [_hashedPath, ..._headers].join(':')
    },
    validate: (entry) => {
      if (!entry.value) {
        return false
      }
      if (entry.value.code >= 400) {
        return false
      }
      if (entry.value.body === void 0) {
        return false
      }
      if (
        entry.value.headers.etag === 'undefined' ||
        entry.value.headers['last-modified'] === 'undefined'
      ) {
        return false
      }
      return true
    },
    group: opts.group || 'nitro/handlers',
    integrity: opts.integrity || hash([handler, opts]),
  }
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const variableHeaders = {}
    for (const header of variableHeaderNames) {
      const value = incomingEvent.node.req.headers[header]
      if (value !== void 0) {
        variableHeaders[header] = value
      }
    }
    const reqProxy = cloneWithProxy(incomingEvent.node.req, {
      headers: variableHeaders,
    })
    const resHeaders = {}
    let _resSendBody
    const resProxy = cloneWithProxy(incomingEvent.node.res, {
      statusCode: 200,
      writableEnded: false,
      writableFinished: false,
      headersSent: false,
      closed: false,
      getHeader(name2) {
        return resHeaders[name2]
      },
      setHeader(name2, value) {
        resHeaders[name2] = value
        return this
      },
      getHeaderNames() {
        return Object.keys(resHeaders)
      },
      hasHeader(name2) {
        return name2 in resHeaders
      },
      removeHeader(name2) {
        delete resHeaders[name2]
      },
      getHeaders() {
        return resHeaders
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === 'string') {
          _resSendBody = chunk
        }
        if (typeof arg2 === 'function') {
          arg2()
        }
        if (typeof arg3 === 'function') {
          arg3()
        }
        return this
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === 'string') {
          _resSendBody = chunk
        }
        if (typeof arg2 === 'function') {
          arg2(void 0)
        }
        if (typeof arg3 === 'function') {
          arg3()
        }
        return true
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode
        if (headers2) {
          if (Array.isArray(headers2) || typeof headers2 === 'string') {
            throw new TypeError('Raw headers  is not supported.')
          }
          for (const header in headers2) {
            const value = headers2[header]
            if (value !== void 0) {
              this.setHeader(header, value)
            }
          }
        }
        return this
      },
    })
    const event = createEvent(reqProxy, resProxy)
    event.fetch = (url, fetchOptions) =>
      fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch,
      })
    event.$fetch = (url, fetchOptions) =>
      fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch,
      })
    event.context = incomingEvent.context
    event.context.cache = {
      options: _opts,
    }
    const body = (await handler(event)) || _resSendBody
    const headers = event.node.res.getHeaders()
    headers.etag = String(headers.Etag || headers.etag || `W/"${hash(body)}"`)
    headers['last-modified'] = String(
      headers['Last-Modified'] ||
        headers['last-modified'] ||
        /* @__PURE__ */ new Date().toUTCString()
    )
    const cacheControl = []
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`)
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`)
      } else {
        cacheControl.push('stale-while-revalidate')
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`)
    }
    if (cacheControl.length > 0) {
      headers['cache-control'] = cacheControl.join(', ')
    }
    const cacheEntry = {
      code: event.node.res.statusCode,
      headers,
      body,
    }
    return cacheEntry
  }, _opts)
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return
      }
      return handler(event)
    }
    const response = await _cachedHandler(event)
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body
    }
    if (
      handleCacheHeaders(event, {
        modifiedTime: new Date(response.headers['last-modified']),
        etag: response.headers.etag,
        maxAge: opts.maxAge,
      })
    ) {
      return
    }
    event.node.res.statusCode = response.code
    for (const name2 in response.headers) {
      const value = response.headers[name2]
      if (name2 === 'set-cookie') {
        event.node.res.appendHeader(name2, splitCookiesString(value))
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name2, value)
        }
      }
    }
    return response.body
  })
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property]
      }
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value
        return true
      }
      return Reflect.set(target, property, value, receiver)
    },
  })
}
function klona(x) {
  if (typeof x !== 'object') return x
  var k,
    tmp,
    str = Object.prototype.toString.call(x)
  if (str === '[object Object]') {
    if (x.constructor !== Object && typeof x.constructor === 'function') {
      tmp = new x.constructor()
      for (k in x) {
        if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
          tmp[k] = klona(x[k])
        }
      }
    } else {
      tmp = {}
      for (k in x) {
        if (k === '__proto__') {
          Object.defineProperty(tmp, k, {
            value: klona(x[k]),
            configurable: true,
            enumerable: true,
            writable: true,
          })
        } else {
          tmp[k] = klona(x[k])
        }
      }
    }
    return tmp
  }
  if (str === '[object Array]') {
    k = x.length
    for (tmp = Array(k); k--; ) {
      tmp[k] = klona(x[k])
    }
    return tmp
  }
  if (str === '[object Set]') {
    tmp = /* @__PURE__ */ new Set()
    x.forEach((val) => {
      tmp.add(klona(val))
    })
    return tmp
  }
  if (str === '[object Map]') {
    tmp = /* @__PURE__ */ new Map()
    x.forEach((val, key) => {
      tmp.set(klona(key), klona(val))
    })
    return tmp
  }
  if (str === '[object Date]') {
    return /* @__PURE__ */ new Date(+x)
  }
  if (str === '[object RegExp]') {
    tmp = new RegExp(x.source, x.flags)
    tmp.lastIndex = x.lastIndex
    return tmp
  }
  if (str === '[object DataView]') {
    return new x.constructor(klona(x.buffer))
  }
  if (str === '[object ArrayBuffer]') {
    return x.slice(0)
  }
  if (str.slice(-6) === 'Array]') {
    return new x.constructor(x)
  }
  return x
}
function isUppercase(char = '') {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0
  }
  return char !== char.toLowerCase()
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS
  const parts = []
  if (!str || typeof str !== 'string') {
    return parts
  }
  let buff = ''
  let previousUpper
  let previousSplitter
  for (const char of str) {
    const isSplitter = splitters.includes(char)
    if (isSplitter === true) {
      parts.push(buff)
      buff = ''
      previousUpper = void 0
      continue
    }
    const isUpper = isUppercase(char)
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff)
        buff = char
        previousUpper = isUpper
        continue
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1)
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)))
        buff = lastChar + char
        previousUpper = isUpper
        continue
      }
    }
    buff += char
    previousUpper = isUpper
    previousSplitter = isSplitter
  }
  parts.push(buff)
  return parts
}
function kebabCase(str, joiner) {
  return str
    ? (Array.isArray(str) ? str : splitByCase(str)).map((p2) => p2.toLowerCase()).join(joiner)
    : ''
}
function snakeCase(str) {
  return kebabCase(str || '', '_')
}
function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase()
  return destr(process2.env[opts.prefix + envKey] ?? process2.env[opts.altPrefix + envKey])
}
function _isObject(input) {
  return typeof input === 'object' && !Array.isArray(input)
}
function applyEnv(obj, opts, parentKey = '') {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key
    const envValue = getEnv(subKey, opts)
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue }
        applyEnv(obj[key], opts, subKey)
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey)
      } else {
        obj[key] = envValue ?? obj[key]
      }
    } else {
      obj[key] = envValue ?? obj[key]
    }
    if (opts.envExpansion && typeof obj[key] === 'string') {
      obj[key] = _expandFromEnv(obj[key])
    }
  }
  return obj
}
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process2.env[key] || match
  })
}
function useRuntimeConfig(event) {
    return _sharedRuntimeConfig
}
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig
  }
  const appConfig$1 = klona(appConfig)
  event.context.nitro.appConfig = appConfig$1
  return appConfig$1
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object)
  for (const name2 of propNames) {
    const value = object[name2]
    if (value && typeof value === 'object') {
      _deepFreeze(value)
    }
  }
  return Object.freeze(object)
}
function createContext(opts = {}) {
  let currentInstance
  let isSingleton = false
  const checkConflict = /* @__PURE__ */ __name((instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error('Context conflict')
    }
  }, 'checkConflict')
  let als
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage()
    } else {
      console.warn('[unctx] `AsyncLocalStorage` is not provided.')
    }
  }
  const _getCurrentInstance = /* @__PURE__ */ __name(() => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore()
      if (instance !== void 0) {
        return instance
      }
    }
    return currentInstance
  }, '_getCurrentInstance')
  return {
    use: () => {
      const _instance = _getCurrentInstance()
      if (_instance === void 0) {
        throw new Error('Context is not available')
      }
      return _instance
    },
    tryUse: () => {
      return _getCurrentInstance()
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance)
      }
      currentInstance = instance
      isSingleton = true
    },
    unset: () => {
      currentInstance = void 0
      isSingleton = false
    },
    call: (instance, callback) => {
      checkConflict(instance)
      currentInstance = instance
      try {
        return als ? als.run(instance, callback) : callback()
      } finally {
        if (!isSingleton) {
          currentInstance = void 0
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance
      const onRestore = /* @__PURE__ */ __name(() => {
        currentInstance = instance
      }, 'onRestore')
      const onLeave = /* @__PURE__ */ __name(
        () => (currentInstance === instance ? onRestore : void 0),
        'onLeave'
      )
      asyncHandlers.add(onLeave)
      try {
        const r2 = als ? als.run(instance, callback) : callback()
        if (!isSingleton) {
          currentInstance = void 0
        }
        return await r2
      } finally {
        asyncHandlers.delete(onLeave)
      }
    },
  }
}
function createNamespace(defaultOpts = {}) {
  const contexts = {}
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts })
      }
      contexts[key]
      return contexts[key]
    },
  }
}
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event)
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers)
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to
      if (target.endsWith('/**')) {
        let targetPath = event.path
        const strpBase = routeRules.redirect._redirectStripBase
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase)
        }
        target = joinURL(target.slice(0, -3), targetPath)
      } else if (event.path.includes('?')) {
        const query = getQuery(event.path)
        target = withQuery(target, query)
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode)
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to
      if (target.endsWith('/**')) {
        let targetPath = event.path
        const strpBase = routeRules.proxy._proxyStripBase
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase)
        }
        target = joinURL(target.slice(0, -3), targetPath)
      } else if (event.path.includes('?')) {
        const query = getQuery(event.path)
        target = withQuery(target, query)
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy,
      })
    }
  })
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {}
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split('?')[0], useRuntimeConfig().app.baseURL)
    )
  }
  return event.context._nitro.routeRules
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse())
}
function requestHasBody(request) {
  return METHOD_WITH_BODY_RE.test(request.method)
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(', ') : String(value)
}
function normalizeFetchResponse(response) {
  if (!response.headers.has('set-cookie')) {
    return response
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers),
  })
}
function normalizeCookieHeader(header = '') {
  return splitCookiesString(joinHeaders(header))
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers()
  for (const [name2, header] of headers) {
    if (name2 === 'set-cookie') {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append('set-cookie', cookie)
      }
    } else {
      outgoingHeaders.set(name2, joinHeaders(header))
    }
  }
  return outgoingHeaders
}
function createNitroApp() {
  const config4 = useRuntimeConfig()
  const hooks = createHooks()
  const captureError = /* @__PURE__ */ __name((error4, context3 = {}) => {
    const promise = hooks.callHookParallel('error', error4, context3).catch((error_) => {
      console.error('Error while capturing another error', error_)
    })
    if (context3.event && isEvent(context3.event)) {
      const errors2 = context3.event.context.nitro?.errors
      if (errors2) {
        errors2.push({ error: error4, context: context3 })
      }
      if (context3.event.waitUntil) {
        context3.event.waitUntil(promise)
      }
    }
  }, 'captureError')
  const h3App = createApp({
    debug: destr(false),
    onError: (error4, event) => {
      captureError(error4, { event, tags: ['request'] })
      return errorHandler(error4, event)
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook('request', event).catch((error4) => {
        captureError(error4, { event, tags: ['request'] })
      })
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook('beforeResponse', event, response).catch((error4) => {
        captureError(error4, { event, tags: ['request', 'response'] })
      })
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook('afterResponse', event, response).catch((error4) => {
        captureError(error4, { event, tags: ['request', 'response'] })
      })
    },
  })
  const router = createRouter({
    preemptive: true,
  })
  const localCall = createCall(toNodeListener(h3App))
  const _localFetch = createFetch(localCall, globalThis.fetch)
  const localFetch = /* @__PURE__ */ __name(
    (input, init) => _localFetch(input, init).then((response) => normalizeFetchResponse(response)),
    'localFetch'
  )
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config4.app.baseURL },
  })
  globalThis.$fetch = $fetch
  h3App.use(createRouteRulesHandler({ localFetch }))
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] }
      const envContext = event.node.req?.__unenv__
      if (envContext) {
        Object.assign(event.context, envContext)
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch })
      event.$fetch = (req, init) =>
        fetchWithEvent(event, req, init, {
          fetch: $fetch,
        })
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = []
        }
        event.context.nitro._waitUntilPromises.push(promise)
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise)
        }
      }
      event.captureError = (error4, context3) => {
        captureError(error4, { event, ...context3 })
      }
    })
  )
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler
    if (h.middleware || !h.route) {
      const middlewareBase = (config4.app.baseURL + (h.route || '/')).replace(/\/+/g, '/')
      h3App.use(middlewareBase, handler)
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, '_'))
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: 'nitro/routes',
          ...routeRules.cache,
        })
      }
      router.use(h.route, handler, h.method)
    }
  }
  h3App.use(config4.app.baseURL, router.handler)
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError,
  }
  return app
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2)
    } catch (error4) {
      nitroApp2.captureError(error4, { tags: ['plugin'] })
      throw error4
    }
  }
}
function useNitroApp() {
  return nitroApp$1
}
function defineNitroErrorHandler(handler) {
  return handler
}
function B() {
  if (globalThis.process?.env)
    for (const e of p) {
      const o = e[1] || e[0]
      if (globalThis.process?.env[o]) return { name: e[0].toLowerCase(), ...e[2] }
    }
  return globalThis.process?.env?.SHELL === '/bin/jsh' && globalThis.process?.versions?.webcontainer
    ? { name: 'stackblitz', ci: false }
    : { name: '', ci: false }
}
function n(e) {
  return e ? e !== 'false' : false
}
function G() {
  const e = F.find((o) => o[0])
  if (e) return { name: e[1] }
}
function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true
    }
  }
  return false
}
var lookup$1,
  revLookup,
  Arr,
  code,
  customInspectSymbol,
  INSPECT_MAX_BYTES,
  K_MAX_LENGTH,
  MAX_ARGUMENTS_LENGTH,
  errors,
  INVALID_BASE64_RE,
  hexSliceLookupTable,
  Buffer2,
  process$1,
  cachedSetTimeout,
  cachedClearTimeout,
  queue,
  draining,
  currentQueue,
  queueIndex,
  _envShim2,
  _processEnv2,
  _getEnv2,
  cwd3,
  _global,
  process2,
  suspectProtoRx,
  suspectConstructorRx,
  JsonSigRx,
  HASH_RE,
  AMPERSAND_RE,
  SLASH_RE,
  EQUAL_RE,
  PLUS_RE,
  ENC_CARET_RE,
  ENC_BACKTICK_RE,
  ENC_PIPE_RE,
  ENC_SPACE_RE,
  PROTOCOL_STRICT_REGEX,
  PROTOCOL_REGEX,
  PROTOCOL_RELATIVE_REGEX,
  JOIN_LEADING_SLASH_RE,
  protocolRelative,
  defaults,
  defaultPrototypesKeys,
  nativeFunc,
  nativeFuncLength,
  __defProp$1,
  __defNormalProp$1,
  __publicField$1,
  WordArray,
  Hex,
  Base64,
  Latin1,
  Utf8,
  BufferedBlockAlgorithm,
  Hasher,
  __defProp$3,
  __defNormalProp$3,
  __publicField$3,
  H,
  K,
  W$1,
  SHA256,
  NODE_TYPES,
  defu,
  defuFn,
  defaultMaxListeners,
  EventEmitter$1,
  EventEmitter2,
  _Readable,
  Readable,
  _Writable,
  Writable2,
  __Duplex,
  _Duplex,
  Duplex,
  Socket,
  IncomingMessage,
  ServerResponse,
  __defProp$2,
  __defNormalProp$2,
  __publicField$2,
  H3Error,
  RawBodySymbol,
  PayloadMethods$1,
  MIMES,
  DISALLOWED_STATUS_CHARS,
  defer,
  setHeaders,
  PayloadMethods,
  ignoredHeaders,
  __defProp2,
  __defNormalProp2,
  __publicField2,
  H3Event,
  eventHandler,
  lazyEventHandler,
  RouterMethods,
  defaultTask,
  _createTask,
  createTask3,
  Hookable,
  FetchError,
  payloadMethods,
  textTypes,
  JSON_RE,
  retryStatusCodes,
  nullBodyResponses$1,
  _globalThis$1,
  fetch,
  Headers$1,
  AbortController,
  nullBodyResponses,
  errorHandler,
  plugins,
  _lazy_A5f45D,
  _lazy_wg1nmQ,
  _lazy_t77chG,
  handlers,
  BASE64_PREFIX,
  storageKeyProperties,
  DRIVER_NAME,
  memory,
  _assets,
  normalizeKey,
  assets$1,
  storage,
  cachedEventHandler,
  inlineAppConfig,
  appConfig,
  NUMBER_CHAR_RE,
  STR_SPLITTERS,
  envExpandRx,
  _inlineRuntimeConfig,
  envOptions,
  _sharedRuntimeConfig,
  _sharedAppConfig,
  _globalThis,
  globalKey,
  defaultNamespace,
  getContext,
  asyncHandlersKey,
  asyncHandlers,
  config2,
  _routeRulesMatcher,
  METHOD_WITH_BODY_RE,
  nitroApp$1,
  r,
  E,
  s,
  t,
  p,
  l,
  I,
  T,
  R,
  C,
  f,
  a,
  _,
  W,
  c,
  A,
  L,
  D,
  O,
  S,
  N,
  u,
  b,
  F,
  P,
  assets,
  publicAssetBases,
  nitroApp,
  cloudflarePages
var init_nitro = __esm({
  '.wrangler/tmp/pages-xt7H5X/chunks/nitro/nitro.mjs'() {
    init_checked_fetch()
    init_modules_watch_stub()
    init_virtual_unenv_global_polyfill_process()
    init_virtual_unenv_global_polyfill_performance()
    init_virtual_unenv_global_polyfill_console()
    init_virtual_unenv_global_polyfill_set_immediate()
    init_virtual_unenv_global_polyfill_clear_immediate()
    globalThis._importMeta_ = globalThis._importMeta_ || { url: 'file:///_entry.js', env: {} }
    __name(rawHeaders, 'rawHeaders')
    __name(mergeFns, 'mergeFns')
    __name(createNotImplementedError2, 'createNotImplementedError')
    __name(notImplemented2, 'notImplemented')
    lookup$1 = []
    revLookup = []
    Arr = typeof Uint8Array === 'undefined' ? Array : Uint8Array
    code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (let i = 0, len = code.length; i < len; ++i) {
      lookup$1[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63
    __name(getLens, 'getLens')
    __name(_byteLength, '_byteLength')
    __name(toByteArray, 'toByteArray')
    __name(tripletToBase64, 'tripletToBase64')
    __name(encodeChunk, 'encodeChunk')
    __name(fromByteArray, 'fromByteArray')
    __name(read, 'read')
    __name(write, 'write')
    customInspectSymbol =
      typeof Symbol === 'function' && typeof Symbol['for'] === 'function'
        ? Symbol['for']('nodejs.util.inspect.custom')
        : null
    INSPECT_MAX_BYTES = 50
    K_MAX_LENGTH = 2147483647
    Buffer$1.TYPED_ARRAY_SUPPORT = typedArraySupport()
    if (
      !Buffer$1.TYPED_ARRAY_SUPPORT &&
      typeof console !== 'undefined' &&
      typeof console.error === 'function'
    ) {
      console.error(
        'This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      )
    }
    __name(typedArraySupport, 'typedArraySupport')
    Object.defineProperty(Buffer$1.prototype, 'parent', {
      enumerable: true,
      get: function () {
        if (!Buffer$1.isBuffer(this)) {
          return
        }
        return this.buffer
      },
    })
    Object.defineProperty(Buffer$1.prototype, 'offset', {
      enumerable: true,
      get: function () {
        if (!Buffer$1.isBuffer(this)) {
          return
        }
        return this.byteOffset
      },
    })
    __name(createBuffer, 'createBuffer')
    __name(Buffer$1, 'Buffer$1')
    Buffer$1.poolSize = 8192
    __name(from, 'from')
    Buffer$1.from = (value, encodingOrOffset, length) => from(value, encodingOrOffset, length)
    Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype)
    Object.setPrototypeOf(Buffer$1, Uint8Array)
    __name(assertSize, 'assertSize')
    __name(alloc, 'alloc')
    Buffer$1.alloc = (size, fill2, encoding) => alloc(size, fill2, encoding)
    __name(allocUnsafe, 'allocUnsafe')
    Buffer$1.allocUnsafe = (size) => allocUnsafe(size)
    Buffer$1.allocUnsafeSlow = (size) => allocUnsafe(size)
    __name(fromString, 'fromString')
    __name(fromArrayLike, 'fromArrayLike')
    __name(fromArrayView, 'fromArrayView')
    __name(fromArrayBuffer, 'fromArrayBuffer')
    __name(fromObject, 'fromObject')
    __name(checked, 'checked')
    Buffer$1.isBuffer = /* @__PURE__ */ __name(function isBuffer(b2) {
      return b2 != null && b2._isBuffer === true && b2 !== Buffer$1.prototype
    }, 'isBuffer')
    Buffer$1.compare = /* @__PURE__ */ __name(function compare(a2, b2) {
      if (isInstance(a2, Uint8Array)) {
        a2 = Buffer$1.from(a2, a2.offset, a2.byteLength)
      }
      if (isInstance(b2, Uint8Array)) {
        b2 = Buffer$1.from(b2, b2.offset, b2.byteLength)
      }
      if (!Buffer$1.isBuffer(a2) || !Buffer$1.isBuffer(b2)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')
      }
      if (a2 === b2) {
        return 0
      }
      let x = a2.length
      let y = b2.length
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a2[i] !== b2[i]) {
          x = a2[i]
          y = b2[i]
          break
        }
      }
      if (x < y) {
        return -1
      }
      if (y < x) {
        return 1
      }
      return 0
    }, 'compare')
    Buffer$1.isEncoding = /* @__PURE__ */ __name(function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    }, 'isEncoding')
    Buffer$1.concat = /* @__PURE__ */ __name(function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      if (list.length === 0) {
        return Buffer$1.alloc(0)
      }
      let i
      if (length === void 0) {
        length = 0
        for (i = 0; i < list.length; ++i) {
          length += list[i].length
        }
      }
      const buffer = Buffer$1.allocUnsafe(length)
      let pos = 0
      for (i = 0; i < list.length; ++i) {
        let buf = list[i]
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer$1.isBuffer(buf)) {
              buf = Buffer$1.from(buf.buffer, buf.byteOffset, buf.byteLength)
            }
            buf.copy(buffer, pos)
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos)
          }
        } else if (Buffer$1.isBuffer(buf)) {
          buf.copy(buffer, pos)
        } else {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        pos += buf.length
      }
      return buffer
    }, 'concat')
    __name(byteLength, 'byteLength')
    Buffer$1.byteLength = byteLength
    __name(slowToString, 'slowToString')
    Buffer$1.prototype._isBuffer = true
    __name(swap, 'swap')
    Buffer$1.prototype.swap16 = /* @__PURE__ */ __name(function swap16() {
      const len = this.length
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
      }
      return this
    }, 'swap16')
    Buffer$1.prototype.swap32 = /* @__PURE__ */ __name(function swap32() {
      const len = this.length
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
      }
      return this
    }, 'swap32')
    Buffer$1.prototype.swap64 = /* @__PURE__ */ __name(function swap64() {
      const len = this.length
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
      }
      return this
    }, 'swap64')
    Buffer$1.prototype.toString = /* @__PURE__ */ __name(function toString() {
      const length = this.length
      if (length === 0) {
        return ''
      }
      if (arguments.length === 0) {
        return utf8Slice(this, 0, length)
      }
      return Reflect.apply(slowToString, this, arguments)
    }, 'toString')
    Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString
    Buffer$1.prototype.equals = /* @__PURE__ */ __name(function equals(b2) {
      if (!Buffer$1.isBuffer(b2)) {
        throw new TypeError('Argument must be a Buffer')
      }
      if (this === b2) {
        return true
      }
      return Buffer$1.compare(this, b2) === 0
    }, 'equals')
    Buffer$1.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      let str = ''
      const max = INSPECT_MAX_BYTES
      str = this.toString('hex', 0, max)
        .replace(/(.{2})/g, '$1 ')
        .trim()
      if (this.length > max) {
        str += ' ... '
      }
      return '<Buffer ' + str + '>'
    }, 'inspect')
    if (customInspectSymbol) {
      Buffer$1.prototype[customInspectSymbol] = Buffer$1.prototype.inspect
    }
    Buffer$1.prototype.compare = /* @__PURE__ */ __name(function compare2(
      target,
      start,
      end,
      thisStart,
      thisEnd
    ) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer$1.from(target, target.offset, target.byteLength)
      }
      if (!Buffer$1.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof target
        )
      }
      if (start === void 0) {
        start = 0
      }
      if (end === void 0) {
        end = target ? target.length : 0
      }
      if (thisStart === void 0) {
        thisStart = 0
      }
      if (thisEnd === void 0) {
        thisEnd = this.length
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }
      start >>>= 0
      end >>>= 0
      thisStart >>>= 0
      thisEnd >>>= 0
      if (this === target) {
        return 0
      }
      let x = thisEnd - thisStart
      let y = end - start
      const len = Math.min(x, y)
      const thisCopy = this.slice(thisStart, thisEnd)
      const targetCopy = target.slice(start, end)
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i]
          y = targetCopy[i]
          break
        }
      }
      if (x < y) {
        return -1
      }
      if (y < x) {
        return 1
      }
      return 0
    }, 'compare2')
    __name(bidirectionalIndexOf, 'bidirectionalIndexOf')
    __name(arrayIndexOf, 'arrayIndexOf')
    Buffer$1.prototype.includes = /* @__PURE__ */ __name(function includes(
      val,
      byteOffset,
      encoding
    ) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    }, 'includes')
    Buffer$1.prototype.indexOf = /* @__PURE__ */ __name(function indexOf(
      val,
      byteOffset,
      encoding
    ) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }, 'indexOf')
    Buffer$1.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf(
      val,
      byteOffset,
      encoding
    ) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }, 'lastIndexOf')
    __name(hexWrite, 'hexWrite')
    __name(utf8Write, 'utf8Write')
    __name(asciiWrite, 'asciiWrite')
    __name(base64Write, 'base64Write')
    __name(ucs2Write, 'ucs2Write')
    Buffer$1.prototype.write = /* @__PURE__ */ __name(function write2(
      string,
      offset,
      length,
      encoding
    ) {
      if (offset === void 0) {
        encoding = 'utf8'
        length = this.length
        offset = 0
      } else if (length === void 0 && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
      } else if (Number.isFinite(offset)) {
        offset = offset >>> 0
        if (Number.isFinite(length)) {
          length = length >>> 0
          if (encoding === void 0) {
            encoding = 'utf8'
          }
        } else {
          encoding = length
          length = void 0
        }
      } else {
        throw new TypeError(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }
      const remaining = this.length - offset
      if (length === void 0 || length > remaining) {
        length = remaining
      }
      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }
      if (!encoding) {
        encoding = 'utf8'
      }
      let loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)
          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)
          case 'ascii':
          case 'latin1':
          case 'binary':
            return asciiWrite(this, string, offset, length)
          case 'base64':
            return base64Write(this, string, offset, length)
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)
          default:
            if (loweredCase) {
              throw new TypeError('Unknown encoding: ' + encoding)
            }
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }, 'write')
    Buffer$1.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0),
      }
    }, 'toJSON')
    __name(base64Slice, 'base64Slice')
    __name(utf8Slice, 'utf8Slice')
    MAX_ARGUMENTS_LENGTH = 4096
    __name(decodeCodePointsArray, 'decodeCodePointsArray')
    __name(asciiSlice, 'asciiSlice')
    __name(latin1Slice, 'latin1Slice')
    __name(hexSlice, 'hexSlice')
    __name(utf16leSlice, 'utf16leSlice')
    Buffer$1.prototype.slice = /* @__PURE__ */ __name(function slice(start, end) {
      const len = this.length
      start = Math.trunc(start)
      end = end === void 0 ? len : Math.trunc(end)
      if (start < 0) {
        start += len
        if (start < 0) {
          start = 0
        }
      } else if (start > len) {
        start = len
      }
      if (end < 0) {
        end += len
        if (end < 0) {
          end = 0
        }
      } else if (end > len) {
        end = len
      }
      if (end < start) {
        end = start
      }
      const newBuf = this.subarray(start, end)
      Object.setPrototypeOf(newBuf, Buffer$1.prototype)
      return newBuf
    }, 'slice')
    __name(checkOffset, 'checkOffset')
    Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = /* @__PURE__ */ __name(
      function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0
        byteLength2 = byteLength2 >>> 0
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length)
        }
        let val = this[offset]
        let mul = 1
        let i = 0
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul
        }
        return val
      },
      'readUIntLE'
    )
    Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = /* @__PURE__ */ __name(
      function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0
        byteLength2 = byteLength2 >>> 0
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length)
        }
        let val = this[offset + --byteLength2]
        let mul = 1
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul
        }
        return val
      },
      'readUIntBE'
    )
    Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = /* @__PURE__ */ __name(
      function readUInt8(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) {
          checkOffset(offset, 1, this.length)
        }
        return this[offset]
      },
      'readUInt8'
    )
    Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = /* @__PURE__ */ __name(
      function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) {
          checkOffset(offset, 2, this.length)
        }
        return this[offset] | (this[offset + 1] << 8)
      },
      'readUInt16LE'
    )
    Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = /* @__PURE__ */ __name(
      function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) {
          checkOffset(offset, 2, this.length)
        }
        return (this[offset] << 8) | this[offset + 1]
      },
      'readUInt16BE'
    )
    Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = /* @__PURE__ */ __name(
      function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) {
          checkOffset(offset, 4, this.length)
        }
        return (
          (this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16)) +
          this[offset + 3] * 16777216
        )
      },
      'readUInt32LE'
    )
    Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = /* @__PURE__ */ __name(
      function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) {
          checkOffset(offset, 4, this.length)
        }
        return (
          this[offset] * 16777216 +
          ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
        )
      },
      'readUInt32BE'
    )
    Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(
      /* @__PURE__ */ __name(function readBigUInt64LE(offset) {
        offset = offset >>> 0
        validateNumber(offset, 'offset')
        const first = this[offset]
        const last = this[offset + 7]
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8)
        }
        const lo =
          first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24
        const hi =
          this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24
        return BigInt(lo) + (BigInt(hi) << BigInt(32))
      }, 'readBigUInt64LE')
    )
    Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(
      /* @__PURE__ */ __name(function readBigUInt64BE(offset) {
        offset = offset >>> 0
        validateNumber(offset, 'offset')
        const first = this[offset]
        const last = this[offset + 7]
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8)
        }
        const hi =
          first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset]
        const lo =
          this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last
        return (BigInt(hi) << BigInt(32)) + BigInt(lo)
      }, 'readBigUInt64BE')
    )
    Buffer$1.prototype.readIntLE = /* @__PURE__ */ __name(function readIntLE(
      offset,
      byteLength2,
      noAssert
    ) {
      offset = offset >>> 0
      byteLength2 = byteLength2 >>> 0
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length)
      }
      let val = this[offset]
      let mul = 1
      let i = 0
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul
      }
      mul *= 128
      if (val >= mul) {
        val -= Math.pow(2, 8 * byteLength2)
      }
      return val
    }, 'readIntLE')
    Buffer$1.prototype.readIntBE = /* @__PURE__ */ __name(function readIntBE(
      offset,
      byteLength2,
      noAssert
    ) {
      offset = offset >>> 0
      byteLength2 = byteLength2 >>> 0
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length)
      }
      let i = byteLength2
      let mul = 1
      let val = this[offset + --i]
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul
      }
      mul *= 128
      if (val >= mul) {
        val -= Math.pow(2, 8 * byteLength2)
      }
      return val
    }, 'readIntBE')
    Buffer$1.prototype.readInt8 = /* @__PURE__ */ __name(function readInt8(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 1, this.length)
      }
      if (!(this[offset] & 128)) {
        return this[offset]
      }
      return (255 - this[offset] + 1) * -1
    }, 'readInt8')
    Buffer$1.prototype.readInt16LE = /* @__PURE__ */ __name(function readInt16LE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 2, this.length)
      }
      const val = this[offset] | (this[offset + 1] << 8)
      return val & 32768 ? val | 4294901760 : val
    }, 'readInt16LE')
    Buffer$1.prototype.readInt16BE = /* @__PURE__ */ __name(function readInt16BE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 2, this.length)
      }
      const val = this[offset + 1] | (this[offset] << 8)
      return val & 32768 ? val | 4294901760 : val
    }, 'readInt16BE')
    Buffer$1.prototype.readInt32LE = /* @__PURE__ */ __name(function readInt32LE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 4, this.length)
      }
      return (
        this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24)
      )
    }, 'readInt32LE')
    Buffer$1.prototype.readInt32BE = /* @__PURE__ */ __name(function readInt32BE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 4, this.length)
      }
      return (
        (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]
      )
    }, 'readInt32BE')
    Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(
      /* @__PURE__ */ __name(function readBigInt64LE(offset) {
        offset = offset >>> 0
        validateNumber(offset, 'offset')
        const first = this[offset]
        const last = this[offset + 7]
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8)
        }
        const val =
          this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24)
        return (
          (BigInt(val) << BigInt(32)) +
          BigInt(
            first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24
          )
        )
      }, 'readBigInt64LE')
    )
    Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(
      /* @__PURE__ */ __name(function readBigInt64BE(offset) {
        offset = offset >>> 0
        validateNumber(offset, 'offset')
        const first = this[offset]
        const last = this[offset + 7]
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8)
        }
        const val =
          (first << 24) + // Overflow
          this[++offset] * 2 ** 16 +
          this[++offset] * 2 ** 8 +
          this[++offset]
        return (
          (BigInt(val) << BigInt(32)) +
          BigInt(
            this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last
          )
        )
      }, 'readBigInt64BE')
    )
    Buffer$1.prototype.readFloatLE = /* @__PURE__ */ __name(function readFloatLE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 4, this.length)
      }
      return read(this, offset, true, 23, 4)
    }, 'readFloatLE')
    Buffer$1.prototype.readFloatBE = /* @__PURE__ */ __name(function readFloatBE(offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 4, this.length)
      }
      return read(this, offset, false, 23, 4)
    }, 'readFloatBE')
    Buffer$1.prototype.readDoubleLE = /* @__PURE__ */ __name(function readDoubleLE(
      offset,
      noAssert
    ) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 8, this.length)
      }
      return read(this, offset, true, 52, 8)
    }, 'readDoubleLE')
    Buffer$1.prototype.readDoubleBE = /* @__PURE__ */ __name(function readDoubleBE(
      offset,
      noAssert
    ) {
      offset = offset >>> 0
      if (!noAssert) {
        checkOffset(offset, 8, this.length)
      }
      return read(this, offset, false, 52, 8)
    }, 'readDoubleBE')
    __name(checkInt, 'checkInt')
    Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = /* @__PURE__ */ __name(
      function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value
        offset = offset >>> 0
        byteLength2 = byteLength2 >>> 0
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1
          checkInt(this, value, offset, byteLength2, maxBytes, 0)
        }
        let mul = 1
        let i = 0
        this[offset] = value & 255
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = (value / mul) & 255
        }
        return offset + byteLength2
      },
      'writeUIntLE'
    )
    Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = /* @__PURE__ */ __name(
      function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value
        offset = offset >>> 0
        byteLength2 = byteLength2 >>> 0
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1
          checkInt(this, value, offset, byteLength2, maxBytes, 0)
        }
        let i = byteLength2 - 1
        let mul = 1
        this[offset + i] = value & 255
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = (value / mul) & 255
        }
        return offset + byteLength2
      },
      'writeUIntBE'
    )
    Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = /* @__PURE__ */ __name(
      function writeUInt8(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
          checkInt(this, value, offset, 1, 255, 0)
        }
        this[offset] = value & 255
        return offset + 1
      },
      'writeUInt8'
    )
    Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = /* @__PURE__ */ __name(
      function writeUInt16LE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
          checkInt(this, value, offset, 2, 65535, 0)
        }
        this[offset] = value & 255
        this[offset + 1] = value >>> 8
        return offset + 2
      },
      'writeUInt16LE'
    )
    Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = /* @__PURE__ */ __name(
      function writeUInt16BE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
          checkInt(this, value, offset, 2, 65535, 0)
        }
        this[offset] = value >>> 8
        this[offset + 1] = value & 255
        return offset + 2
      },
      'writeUInt16BE'
    )
    Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = /* @__PURE__ */ __name(
      function writeUInt32LE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
          checkInt(this, value, offset, 4, 4294967295, 0)
        }
        this[offset + 3] = value >>> 24
        this[offset + 2] = value >>> 16
        this[offset + 1] = value >>> 8
        this[offset] = value & 255
        return offset + 4
      },
      'writeUInt32LE'
    )
    Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = /* @__PURE__ */ __name(
      function writeUInt32BE(value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
          checkInt(this, value, offset, 4, 4294967295, 0)
        }
        this[offset] = value >>> 24
        this[offset + 1] = value >>> 16
        this[offset + 2] = value >>> 8
        this[offset + 3] = value & 255
        return offset + 4
      },
      'writeUInt32BE'
    )
    __name(wrtBigUInt64LE, 'wrtBigUInt64LE')
    __name(wrtBigUInt64BE, 'wrtBigUInt64BE')
    Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(
      /* @__PURE__ */ __name(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
      }, 'writeBigUInt64LE')
    )
    Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(
      /* @__PURE__ */ __name(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
      }, 'writeBigUInt64BE')
    )
    Buffer$1.prototype.writeIntLE = /* @__PURE__ */ __name(function writeIntLE(
      value,
      offset,
      byteLength2,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1)
        checkInt(this, value, offset, byteLength2, limit - 1, -limit)
      }
      let i = 0
      let mul = 1
      let sub = 0
      this[offset] = value & 255
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1
        }
        this[offset + i] = (Math.trunc(value / mul) - sub) & 255
      }
      return offset + byteLength2
    }, 'writeIntLE')
    Buffer$1.prototype.writeIntBE = /* @__PURE__ */ __name(function writeIntBE(
      value,
      offset,
      byteLength2,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1)
        checkInt(this, value, offset, byteLength2, limit - 1, -limit)
      }
      let i = byteLength2 - 1
      let mul = 1
      let sub = 0
      this[offset + i] = value & 255
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1
        }
        this[offset + i] = (Math.trunc(value / mul) - sub) & 255
      }
      return offset + byteLength2
    }, 'writeIntBE')
    Buffer$1.prototype.writeInt8 = /* @__PURE__ */ __name(function writeInt8(
      value,
      offset,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkInt(this, value, offset, 1, 127, -128)
      }
      if (value < 0) {
        value = 255 + value + 1
      }
      this[offset] = value & 255
      return offset + 1
    }, 'writeInt8')
    Buffer$1.prototype.writeInt16LE = /* @__PURE__ */ __name(function writeInt16LE(
      value,
      offset,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768)
      }
      this[offset] = value & 255
      this[offset + 1] = value >>> 8
      return offset + 2
    }, 'writeInt16LE')
    Buffer$1.prototype.writeInt16BE = /* @__PURE__ */ __name(function writeInt16BE(
      value,
      offset,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768)
      }
      this[offset] = value >>> 8
      this[offset + 1] = value & 255
      return offset + 2
    }, 'writeInt16BE')
    Buffer$1.prototype.writeInt32LE = /* @__PURE__ */ __name(function writeInt32LE(
      value,
      offset,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkInt(this, value, offset, 4, 2147483647, -2147483648)
      }
      this[offset] = value & 255
      this[offset + 1] = value >>> 8
      this[offset + 2] = value >>> 16
      this[offset + 3] = value >>> 24
      return offset + 4
    }, 'writeInt32LE')
    Buffer$1.prototype.writeInt32BE = /* @__PURE__ */ __name(function writeInt32BE(
      value,
      offset,
      noAssert
    ) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkInt(this, value, offset, 4, 2147483647, -2147483648)
      }
      if (value < 0) {
        value = 4294967295 + value + 1
      }
      this[offset] = value >>> 24
      this[offset + 1] = value >>> 16
      this[offset + 2] = value >>> 8
      this[offset + 3] = value & 255
      return offset + 4
    }, 'writeInt32BE')
    Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(
      /* @__PURE__ */ __name(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(
          this,
          value,
          offset,
          -BigInt('0x8000000000000000'),
          BigInt('0x7fffffffffffffff')
        )
      }, 'writeBigInt64LE')
    )
    Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(
      /* @__PURE__ */ __name(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(
          this,
          value,
          offset,
          -BigInt('0x8000000000000000'),
          BigInt('0x7fffffffffffffff')
        )
      }, 'writeBigInt64BE')
    )
    __name(checkIEEE754, 'checkIEEE754')
    __name(writeFloat, 'writeFloat')
    Buffer$1.prototype.writeFloatLE = /* @__PURE__ */ __name(function writeFloatLE(
      value,
      offset,
      noAssert
    ) {
      return writeFloat(this, value, offset, true, noAssert)
    }, 'writeFloatLE')
    Buffer$1.prototype.writeFloatBE = /* @__PURE__ */ __name(function writeFloatBE(
      value,
      offset,
      noAssert
    ) {
      return writeFloat(this, value, offset, false, noAssert)
    }, 'writeFloatBE')
    __name(writeDouble, 'writeDouble')
    Buffer$1.prototype.writeDoubleLE = /* @__PURE__ */ __name(function writeDoubleLE(
      value,
      offset,
      noAssert
    ) {
      return writeDouble(this, value, offset, true, noAssert)
    }, 'writeDoubleLE')
    Buffer$1.prototype.writeDoubleBE = /* @__PURE__ */ __name(function writeDoubleBE(
      value,
      offset,
      noAssert
    ) {
      return writeDouble(this, value, offset, false, noAssert)
    }, 'writeDoubleBE')
    Buffer$1.prototype.copy = /* @__PURE__ */ __name(function copy(
      target,
      targetStart,
      start,
      end
    ) {
      if (!Buffer$1.isBuffer(target)) {
        throw new TypeError('argument should be a Buffer')
      }
      if (!start) {
        start = 0
      }
      if (!end && end !== 0) {
        end = this.length
      }
      if (targetStart >= target.length) {
        targetStart = target.length
      }
      if (!targetStart) {
        targetStart = 0
      }
      if (end > 0 && end < start) {
        end = start
      }
      if (end === start) {
        return 0
      }
      if (target.length === 0 || this.length === 0) {
        return 0
      }
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) {
        throw new RangeError('Index out of range')
      }
      if (end < 0) {
        throw new RangeError('sourceEnd out of bounds')
      }
      if (end > this.length) {
        end = this.length
      }
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
      }
      const len = end - start
      if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        this.copyWithin(targetStart, start, end)
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart)
      }
      return len
    }, 'copy')
    Buffer$1.prototype.fill = /* @__PURE__ */ __name(function fill(val, start, end, encoding) {
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start
          start = 0
          end = this.length
        } else if (typeof end === 'string') {
          encoding = end
          end = this.length
        }
        if (encoding !== void 0 && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
          const code2 = val.charCodeAt(0)
          if ((encoding === 'utf8' && code2 < 128) || encoding === 'latin1') {
            val = code2
          }
        }
      } else if (typeof val === 'number') {
        val = val & 255
      } else if (typeof val === 'boolean') {
        val = Number(val)
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }
      if (end <= start) {
        return this
      }
      start = start >>> 0
      end = end === void 0 ? this.length : end >>> 0
      if (!val) {
        val = 0
      }
      let i
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val
        }
      } else {
        const bytes = Buffer$1.isBuffer(val) ? val : Buffer$1.from(val, encoding)
        const len = bytes.length
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len]
        }
      }
      return this
    }, 'fill')
    errors = {}
    __name(E$1, 'E$1')
    E$1(
      'ERR_BUFFER_OUT_OF_BOUNDS',
      (name2) => {
        if (name2) {
          return `${name2} is outside of buffer bounds`
        }
        return 'Attempt to access memory outside buffer bounds'
      },
      RangeError
    )
    E$1(
      'ERR_INVALID_ARG_TYPE',
      (name2, actual) => `The "${name2}" argument must be of type number. Received type ${typeof actual}`,
      TypeError
    )
    E$1(
      'ERR_OUT_OF_RANGE',
      (str, range, input) => {
        let msg = `The value of "${str}" is out of range.`
        let received = input
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input))
        } else if (typeof input === 'bigint') {
          received = String(input)
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received)
          }
          received += 'n'
        }
        msg += ` It must be ${range}. Received ${received}`
        return msg
      },
      RangeError
    )
    __name(addNumericalSeparator, 'addNumericalSeparator')
    __name(checkBounds, 'checkBounds')
    __name(checkIntBI, 'checkIntBI')
    __name(validateNumber, 'validateNumber')
    __name(boundsError, 'boundsError')
    INVALID_BASE64_RE = /[^\w+/-]/g
    __name(base64clean, 'base64clean')
    __name(utf8ToBytes, 'utf8ToBytes')
    __name(asciiToBytes, 'asciiToBytes')
    __name(utf16leToBytes, 'utf16leToBytes')
    __name(base64ToBytes, 'base64ToBytes')
    __name(blitBuffer, 'blitBuffer')
    __name(isInstance, 'isInstance')
    __name(numberIsNaN, 'numberIsNaN')
    hexSliceLookupTable = (() => {
      const alphabet = '0123456789abcdef'
      const table4 = Array.from({ length: 256 })
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16
        for (let j = 0; j < 16; ++j) {
          table4[i16 + j] = alphabet[i] + alphabet[j]
        }
      }
      return table4
    })()
    __name(defineBigIntMethod, 'defineBigIntMethod')
    __name(BufferBigIntNotDefined, 'BufferBigIntNotDefined')
    Buffer2 = globalThis.Buffer || Buffer$1
    notImplemented2('buffer.resolveObjectURL')
    notImplemented2('buffer.transcode')
    notImplemented2('buffer.isUtf8')
    notImplemented2('buffer.isAscii')
    process$1 = {}
    __name(defaultSetTimeout, 'defaultSetTimeout')
    __name(defaultClearTimeout, 'defaultClearTimeout')
    ;(() => {
      try {
        cachedSetTimeout = typeof setTimeout === 'function' ? setTimeout : defaultSetTimeout
      } catch {
        cachedSetTimeout = defaultSetTimeout
      }
      try {
        cachedClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : defaultClearTimeout
      } catch {
        cachedClearTimeout = defaultClearTimeout
      }
    })()
    __name(runTimeout, 'runTimeout')
    __name(runClearTimeout, 'runClearTimeout')
    queue = []
    draining = false
    queueIndex = -1
    __name(cleanUpNextTick, 'cleanUpNextTick')
    __name(drainQueue, 'drainQueue')
    process$1.nextTick = (fun) => {
      const args = Array.from({ length: arguments.length - 1 })
      if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i]
        }
      }
      queue.push(new Item(fun, args))
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue)
      }
    }
    __name(Item, 'Item')
    Item.prototype.run = function () {
      this.fun.apply(null, this.array)
    }
    process$1.title = 'unenv'
    _envShim2 = /* @__PURE__ */ Object.create(null)
    _processEnv2 = globalThis.process?.env
    _getEnv2 = /* @__PURE__ */ __name(
      (useShim) => _processEnv2 || globalThis.__env__ || (useShim ? _envShim2 : globalThis),
      '_getEnv'
    )
    process$1.env = new Proxy(_envShim2, {
      get(_2, prop) {
        const env4 = _getEnv2()
        return env4[prop] ?? _envShim2[prop]
      },
      has(_2, prop) {
        const env4 = _getEnv2()
        return prop in env4 || prop in _envShim2
      },
      set(_2, prop, value) {
        const env4 = _getEnv2(true)
        env4[prop] = value
        return true
      },
      deleteProperty(_2, prop) {
        const env4 = _getEnv2(true)
        delete env4[prop]
      },
      ownKeys() {
        const env4 = _getEnv2()
        return Object.keys(env4)
      },
    })
    process$1.argv = []
    process$1.version = ''
    process$1.versions = {}
    __name(noop2, 'noop')
    process$1.on = noop2
    process$1.addListener = noop2
    process$1.once = noop2
    process$1.off = noop2
    process$1.removeListener = noop2
    process$1.removeAllListeners = noop2
    process$1.emit = noop2
    process$1.prependListener = noop2
    process$1.prependOnceListener = noop2
    process$1.listeners = (name2) => []
    process$1.binding = (name2) => {
      throw new Error('[unenv] process.binding is not supported')
    }
    cwd3 = '/'
    process$1.cwd = () => cwd3
    process$1.chdir = (dir4) => {
      cwd3 = dir4
    }
    process$1.umask = () => 0
    __name(getGlobal2, 'getGlobal')
    _global = getGlobal2()
    _global.process = _global.process || process$1
    process2 = _global.process
    suspectProtoRx =
      /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
    suspectConstructorRx =
      /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
    JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/
    __name(jsonParseTransform, 'jsonParseTransform')
    __name(warnKeyDropped, 'warnKeyDropped')
    __name(destr, 'destr')
    HASH_RE = /#/g
    AMPERSAND_RE = /&/g
    SLASH_RE = /\//g
    EQUAL_RE = /=/g
    PLUS_RE = /\+/g
    ENC_CARET_RE = /%5e/gi
    ENC_BACKTICK_RE = /%60/gi
    ENC_PIPE_RE = /%7c/gi
    ENC_SPACE_RE = /%20/gi
    __name(encode, 'encode')
    __name(encodeQueryValue, 'encodeQueryValue')
    __name(encodeQueryKey, 'encodeQueryKey')
    __name(decode, 'decode')
    __name(decodeQueryKey, 'decodeQueryKey')
    __name(decodeQueryValue, 'decodeQueryValue')
    __name(parseQuery, 'parseQuery')
    __name(encodeQueryItem, 'encodeQueryItem')
    __name(stringifyQuery, 'stringifyQuery')
    PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
    PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
    PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/
    JOIN_LEADING_SLASH_RE = /^\.?\//
    __name(hasProtocol, 'hasProtocol')
    __name(hasTrailingSlash, 'hasTrailingSlash')
    __name(withoutTrailingSlash, 'withoutTrailingSlash')
    __name(withTrailingSlash, 'withTrailingSlash')
    __name(hasLeadingSlash, 'hasLeadingSlash')
    __name(withLeadingSlash, 'withLeadingSlash')
    __name(withBase, 'withBase')
    __name(withoutBase, 'withoutBase')
    __name(withQuery, 'withQuery')
    __name(getQuery, 'getQuery')
    __name(isEmptyURL, 'isEmptyURL')
    __name(isNonEmptyURL, 'isNonEmptyURL')
    __name(joinURL, 'joinURL')
    protocolRelative = Symbol.for('ufo:protocolRelative')
    __name(parseURL, 'parseURL')
    __name(parsePath, 'parsePath')
    __name(stringifyParsedURL, 'stringifyParsedURL')
    defaults = Object.freeze({
      ignoreUnknown: false,
      respectType: false,
      respectFunctionNames: false,
      respectFunctionProperties: false,
      unorderedObjects: true,
      unorderedArrays: false,
      unorderedSets: false,
      excludeKeys: void 0,
      excludeValues: void 0,
      replacer: void 0,
    })
    __name(objectHash, 'objectHash')
    defaultPrototypesKeys = Object.freeze(['prototype', '__proto__', 'constructor'])
    __name(createHasher, 'createHasher')
    nativeFunc = '[native code] }'
    nativeFuncLength = nativeFunc.length
    __name(isNativeFunction, 'isNativeFunction')
    __defProp$1 = Object.defineProperty
    __defNormalProp$1 = /* @__PURE__ */ __name(
      (obj, key, value) =>
        key in obj
          ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value })
          : (obj[key] = value),
      '__defNormalProp$1'
    )
    __publicField$1 = /* @__PURE__ */ __name((obj, key, value) => {
      __defNormalProp$1(obj, typeof key !== 'symbol' ? key + '' : key, value)
      return value
    }, '__publicField$1')
    WordArray = class {
      constructor(words, sigBytes) {
        __publicField$1(this, 'words')
        __publicField$1(this, 'sigBytes')
        words = this.words = words || []
        this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes
      }
      toString(encoder) {
        return (encoder || Hex).stringify(this)
      }
      concat(wordArray) {
        this.clamp()
        if (this.sigBytes % 4) {
          for (let i = 0; i < wordArray.sigBytes; i++) {
            const thatByte = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255
            this.words[(this.sigBytes + i) >>> 2] |=
              thatByte << (24 - ((this.sigBytes + i) % 4) * 8)
          }
        } else {
          for (let j = 0; j < wordArray.sigBytes; j += 4) {
            this.words[(this.sigBytes + j) >>> 2] = wordArray.words[j >>> 2]
          }
        }
        this.sigBytes += wordArray.sigBytes
        return this
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << (32 - (this.sigBytes % 4) * 8)
        this.words.length = Math.ceil(this.sigBytes / 4)
      }
      clone() {
        return new WordArray([...this.words])
      }
    }
    __name(WordArray, 'WordArray')
    Hex = {
      stringify(wordArray) {
        const hexChars = []
        for (let i = 0; i < wordArray.sigBytes; i++) {
          const bite = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255
          hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16))
        }
        return hexChars.join('')
      },
    }
    Base64 = {
      stringify(wordArray) {
        const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const base64Chars = []
        for (let i = 0; i < wordArray.sigBytes; i += 3) {
          const byte1 = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255
          const byte2 = (wordArray.words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255
          const byte3 = (wordArray.words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255
          const triplet = (byte1 << 16) | (byte2 << 8) | byte3
          for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
            base64Chars.push(keyStr.charAt((triplet >>> (6 * (3 - j))) & 63))
          }
        }
        return base64Chars.join('')
      },
    }
    Latin1 = {
      parse(latin1Str) {
        const latin1StrLength = latin1Str.length
        const words = []
        for (let i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << (24 - (i % 4) * 8)
        }
        return new WordArray(words, latin1StrLength)
      },
    }
    Utf8 = {
      parse(utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)))
      },
    }
    BufferedBlockAlgorithm = class {
      constructor() {
        __publicField$1(this, '_data', new WordArray())
        __publicField$1(this, '_nDataBytes', 0)
        __publicField$1(this, '_minBufferSize', 0)
        __publicField$1(this, 'blockSize', 512 / 32)
      }
      reset() {
        this._data = new WordArray()
        this._nDataBytes = 0
      }
      _append(data) {
        if (typeof data === 'string') {
          data = Utf8.parse(data)
        }
        this._data.concat(data)
        this._nDataBytes += data.sigBytes
      }
      _doProcessBlock(_dataWords, _offset) {}
      _process(doFlush) {
        let processedWords
        let nBlocksReady = this._data.sigBytes / (this.blockSize * 4)
        if (doFlush) {
          nBlocksReady = Math.ceil(nBlocksReady)
        } else {
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0)
        }
        const nWordsReady = nBlocksReady * this.blockSize
        const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes)
        if (nWordsReady) {
          for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
            this._doProcessBlock(this._data.words, offset)
          }
          processedWords = this._data.words.splice(0, nWordsReady)
          this._data.sigBytes -= nBytesReady
        }
        return new WordArray(processedWords, nBytesReady)
      }
    }
    __name(BufferedBlockAlgorithm, 'BufferedBlockAlgorithm')
    Hasher = class extends BufferedBlockAlgorithm {
      update(messageUpdate) {
        this._append(messageUpdate)
        this._process()
        return this
      }
      finalize(messageUpdate) {
        if (messageUpdate) {
          this._append(messageUpdate)
        }
      }
    }
    __name(Hasher, 'Hasher')
    __defProp$3 = Object.defineProperty
    __defNormalProp$3 = /* @__PURE__ */ __name(
      (obj, key, value) =>
        key in obj
          ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value })
          : (obj[key] = value),
      '__defNormalProp$3'
    )
    __publicField$3 = /* @__PURE__ */ __name((obj, key, value) => {
      __defNormalProp$3(obj, key + '', value)
      return value
    }, '__publicField$3')
    H = [
      1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635,
      1541459225,
    ]
    K = [
      1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548,
      -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090,
      -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122,
      1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405,
      -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
      1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525,
      -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877,
      958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844,
      -1933114872, -1866530822, -1538233109, -1090935817, -965641998,
    ]
    W$1 = []
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments)
        __publicField$3(this, '_hash', new WordArray([...H]))
      }
      /**
       * Resets the internal state of the hash object to initial values.
       */
      reset() {
        super.reset()
        this._hash = new WordArray([...H])
      }
      _doProcessBlock(M, offset) {
        const H2 = this._hash.words
        let a2 = H2[0]
        let b2 = H2[1]
        let c2 = H2[2]
        let d = H2[3]
        let e = H2[4]
        let f2 = H2[5]
        let g = H2[6]
        let h = H2[7]
        for (let i = 0; i < 64; i++) {
          if (i < 16) {
            W$1[i] = M[offset + i] | 0
          } else {
            const gamma0x = W$1[i - 15]
            const gamma0 =
              ((gamma0x << 25) | (gamma0x >>> 7)) ^
              ((gamma0x << 14) | (gamma0x >>> 18)) ^
              (gamma0x >>> 3)
            const gamma1x = W$1[i - 2]
            const gamma1 =
              ((gamma1x << 15) | (gamma1x >>> 17)) ^
              ((gamma1x << 13) | (gamma1x >>> 19)) ^
              (gamma1x >>> 10)
            W$1[i] = gamma0 + W$1[i - 7] + gamma1 + W$1[i - 16]
          }
          const ch = (e & f2) ^ (~e & g)
          const maj = (a2 & b2) ^ (a2 & c2) ^ (b2 & c2)
          const sigma0 =
            ((a2 << 30) | (a2 >>> 2)) ^ ((a2 << 19) | (a2 >>> 13)) ^ ((a2 << 10) | (a2 >>> 22))
          const sigma1 =
            ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25))
          const t1 = h + sigma1 + ch + K[i] + W$1[i]
          const t2 = sigma0 + maj
          h = g
          g = f2
          f2 = e
          e = (d + t1) | 0
          d = c2
          c2 = b2
          b2 = a2
          a2 = (t1 + t2) | 0
        }
        H2[0] = (H2[0] + a2) | 0
        H2[1] = (H2[1] + b2) | 0
        H2[2] = (H2[2] + c2) | 0
        H2[3] = (H2[3] + d) | 0
        H2[4] = (H2[4] + e) | 0
        H2[5] = (H2[5] + f2) | 0
        H2[6] = (H2[6] + g) | 0
        H2[7] = (H2[7] + h) | 0
      }
      /**
       * Finishes the hash calculation and returns the hash as a WordArray.
       *
       * @param {string} messageUpdate - Additional message content to include in the hash.
       * @returns {WordArray} The finalised hash as a WordArray.
       */
      finalize(messageUpdate) {
        super.finalize(messageUpdate)
        const nBitsTotal = this._nDataBytes * 8
        const nBitsLeft = this._data.sigBytes * 8
        this._data.words[nBitsLeft >>> 5] |= 128 << (24 - (nBitsLeft % 32))
        this._data.words[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 4294967296)
        this._data.words[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal
        this._data.sigBytes = this._data.words.length * 4
        this._process()
        return this._hash
      }
    }
    __name(SHA256, 'SHA256')
    __name(sha256base64, 'sha256base64')
    __name(hash, 'hash')
    NODE_TYPES = {
      NORMAL: 0,
      WILDCARD: 1,
      PLACEHOLDER: 2,
    }
    __name(createRouter$1, 'createRouter$1')
    __name(lookup, 'lookup')
    __name(insert, 'insert')
    __name(remove, 'remove')
    __name(createRadixNode, 'createRadixNode')
    __name(getNodeType, 'getNodeType')
    __name(toRouteMatcher, 'toRouteMatcher')
    __name(_createMatcher, '_createMatcher')
    __name(_createRouteTable, '_createRouteTable')
    __name(_matchRoutes, '_matchRoutes')
    __name(_sortRoutesMap, '_sortRoutesMap')
    __name(_routerNodeToTable, '_routerNodeToTable')
    __name(isPlainObject, 'isPlainObject')
    __name(_defu, '_defu')
    __name(createDefu, 'createDefu')
    defu = createDefu()
    defuFn = createDefu((object, key, currentValue) => {
      if (object[key] !== void 0 && typeof currentValue === 'function') {
        object[key] = currentValue(object[key])
        return true
      }
    })
    defaultMaxListeners = 10
    EventEmitter$1 = /* @__PURE__ */ __name(
      class EventEmitter {
        __unenv__ = true
        _events = /* @__PURE__ */ Object.create(null)
        _maxListeners
        static get defaultMaxListeners() {
          return defaultMaxListeners
        }
        static set defaultMaxListeners(arg) {
          if (typeof arg !== 'number' || arg < 0 || Number.isNaN(arg)) {
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                arg +
                '.'
            )
          }
          defaultMaxListeners = arg
        }
        setMaxListeners(n2) {
          if (typeof n2 !== 'number' || n2 < 0 || Number.isNaN(n2)) {
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                n2 +
                '.'
            )
          }
          this._maxListeners = n2
          return this
        }
        getMaxListeners() {
          return _getMaxListeners(this)
        }
        emit(type2, ...args) {
          if (!this._events[type2] || this._events[type2].length === 0) {
            return false
          }
          if (type2 === 'error') {
            let er
            if (args.length > 0) {
              er = args[0]
            }
            if (er instanceof Error) {
              throw er
            }
            const err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''))
            err.context = er
            throw err
          }
          for (const _listener of this._events[type2]) {
            ;(_listener.listener || _listener).apply(this, args)
          }
          return true
        }
        addListener(type2, listener) {
          return _addListener(this, type2, listener, false)
        }
        on(type2, listener) {
          return _addListener(this, type2, listener, false)
        }
        prependListener(type2, listener) {
          return _addListener(this, type2, listener, true)
        }
        once(type2, listener) {
          return this.on(type2, _wrapOnce(this, type2, listener))
        }
        prependOnceListener(type2, listener) {
          return this.prependListener(type2, _wrapOnce(this, type2, listener))
        }
        removeListener(type2, listener) {
          return _removeListener(this, type2, listener)
        }
        off(type2, listener) {
          return this.removeListener(type2, listener)
        }
        removeAllListeners(type2) {
          return _removeAllListeners(this, type2)
        }
        listeners(type2) {
          return _listeners(this, type2, true)
        }
        rawListeners(type2) {
          return _listeners(this, type2, false)
        }
        listenerCount(type2) {
          return this.rawListeners(type2).length
        }
        eventNames() {
          return Object.keys(this._events)
        }
      },
      'EventEmitter'
    )
    __name(_addListener, '_addListener')
    __name(_removeListener, '_removeListener')
    __name(_removeAllListeners, '_removeAllListeners')
    __name(_wrapOnce, '_wrapOnce')
    __name(_getMaxListeners, '_getMaxListeners')
    __name(_listeners, '_listeners')
    __name(_checkListener, '_checkListener')
    EventEmitter2 = globalThis.EventEmitter || EventEmitter$1
    _Readable = class extends EventEmitter2 {
      __unenv__ = true
      readableEncoding = null
      readableEnded = true
      readableFlowing = false
      readableHighWaterMark = 0
      readableLength = 0
      readableObjectMode = false
      readableAborted = false
      readableDidRead = false
      closed = false
      errored = null
      readable = false
      destroyed = false
      static from(_iterable, options) {
        return new _Readable(options)
      }
      constructor(_opts) {
        super()
      }
      _read(_size) {}
      read(_size) {}
      setEncoding(_encoding) {
        return this
      }
      pause() {
        return this
      }
      resume() {
        return this
      }
      isPaused() {
        return true
      }
      unpipe(_destination) {
        return this
      }
      unshift(_chunk, _encoding) {}
      wrap(_oldStream) {
        return this
      }
      push(_chunk, _encoding) {
        return false
      }
      _destroy(_error, _callback) {
        this.removeAllListeners()
      }
      destroy(error4) {
        this.destroyed = true
        this._destroy(error4)
        return this
      }
      pipe(_destenition, _options) {
        return {}
      }
      compose(stream, options) {
        throw new Error('[unenv] Method not implemented.')
      }
      [Symbol.asyncDispose]() {
        this.destroy()
        return Promise.resolve()
      }
      // eslint-disable-next-line require-yield
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError2('Readable.asyncIterator')
      }
      iterator(options) {
        throw createNotImplementedError2('Readable.iterator')
      }
      map(fn3, options) {
        throw createNotImplementedError2('Readable.map')
      }
      filter(fn3, options) {
        throw createNotImplementedError2('Readable.filter')
      }
      forEach(fn3, options) {
        throw createNotImplementedError2('Readable.forEach')
      }
      reduce(fn3, initialValue, options) {
        throw createNotImplementedError2('Readable.reduce')
      }
      find(fn3, options) {
        throw createNotImplementedError2('Readable.find')
      }
      findIndex(fn3, options) {
        throw createNotImplementedError2('Readable.findIndex')
      }
      some(fn3, options) {
        throw createNotImplementedError2('Readable.some')
      }
      toArray(options) {
        throw createNotImplementedError2('Readable.toArray')
      }
      every(fn3, options) {
        throw createNotImplementedError2('Readable.every')
      }
      flatMap(fn3, options) {
        throw createNotImplementedError2('Readable.flatMap')
      }
      drop(limit, options) {
        throw createNotImplementedError2('Readable.drop')
      }
      take(limit, options) {
        throw createNotImplementedError2('Readable.take')
      }
      asIndexedPairs(options) {
        throw createNotImplementedError2('Readable.asIndexedPairs')
      }
    }
    __name(_Readable, '_Readable')
    Readable = globalThis.Readable || _Readable
    _Writable = class extends EventEmitter2 {
      __unenv__ = true
      writable = true
      writableEnded = false
      writableFinished = false
      writableHighWaterMark = 0
      writableLength = 0
      writableObjectMode = false
      writableCorked = 0
      closed = false
      errored = null
      writableNeedDrain = false
      destroyed = false
      _data
      _encoding = 'utf-8'
      constructor(_opts) {
        super()
      }
      pipe(_destenition, _options) {
        return {}
      }
      _write(chunk, encoding, callback) {
        if (this.writableEnded) {
          if (callback) {
            callback()
          }
          return
        }
        if (this._data === void 0) {
          this._data = chunk
        } else {
          const a2 =
            typeof this._data === 'string'
              ? Buffer2.from(this._data, this._encoding || encoding || 'utf8')
              : this._data
          const b2 =
            typeof chunk === 'string'
              ? Buffer2.from(chunk, encoding || this._encoding || 'utf8')
              : chunk
          this._data = Buffer2.concat([a2, b2])
        }
        this._encoding = encoding
        if (callback) {
          callback()
        }
      }
      _writev(_chunks, _callback) {}
      _destroy(_error, _callback) {}
      _final(_callback) {}
      write(chunk, arg2, arg3) {
        const encoding = typeof arg2 === 'string' ? this._encoding : 'utf-8'
        const cb = typeof arg2 === 'function' ? arg2 : typeof arg3 === 'function' ? arg3 : void 0
        this._write(chunk, encoding, cb)
        return true
      }
      setDefaultEncoding(_encoding) {
        return this
      }
      end(arg1, arg2, arg3) {
        const callback =
          typeof arg1 === 'function'
            ? arg1
            : typeof arg2 === 'function'
              ? arg2
              : typeof arg3 === 'function'
                ? arg3
                : void 0
        if (this.writableEnded) {
          if (callback) {
            callback()
          }
          return this
        }
        const data = arg1 === callback ? void 0 : arg1
        if (data) {
          const encoding = arg2 === callback ? void 0 : arg2
          this.write(data, encoding, callback)
        }
        this.writableEnded = true
        this.writableFinished = true
        this.emit('close')
        this.emit('finish')
        return this
      }
      cork() {}
      uncork() {}
      destroy(_error) {
        this.destroyed = true
        delete this._data
        this.removeAllListeners()
        return this
      }
      compose(stream, options) {
        throw new Error('[h3] Method not implemented.')
      }
    }
    __name(_Writable, '_Writable')
    Writable2 = globalThis.Writable || _Writable
    __Duplex = /* @__PURE__ */ __name(
      class {
        allowHalfOpen = true
        _destroy
        constructor(readable = new Readable(), writable = new Writable2()) {
          Object.assign(this, readable)
          Object.assign(this, writable)
          this._destroy = mergeFns(readable._destroy, writable._destroy)
        }
      },
      '__Duplex'
    )
    __name(getDuplex, 'getDuplex')
    _Duplex = /* @__PURE__ */ getDuplex()
    Duplex = globalThis.Duplex || _Duplex
    Socket = class extends Duplex {
      __unenv__ = true
      bufferSize = 0
      bytesRead = 0
      bytesWritten = 0
      connecting = false
      destroyed = false
      pending = false
      localAddress = ''
      localPort = 0
      remoteAddress = ''
      remoteFamily = ''
      remotePort = 0
      autoSelectFamilyAttemptedAddresses = []
      readyState = 'readOnly'
      constructor(_options) {
        super()
      }
      write(_buffer, _arg1, _arg2) {
        return false
      }
      connect(_arg1, _arg2, _arg3) {
        return this
      }
      end(_arg1, _arg2, _arg3) {
        return this
      }
      setEncoding(_encoding) {
        return this
      }
      pause() {
        return this
      }
      resume() {
        return this
      }
      setTimeout(_timeout, _callback) {
        return this
      }
      setNoDelay(_noDelay) {
        return this
      }
      setKeepAlive(_enable, _initialDelay) {
        return this
      }
      address() {
        return {}
      }
      unref() {
        return this
      }
      ref() {
        return this
      }
      destroySoon() {
        this.destroy()
      }
      resetAndDestroy() {
        const err = new Error('ERR_SOCKET_CLOSED')
        err.code = 'ERR_SOCKET_CLOSED'
        this.destroy(err)
        return this
      }
    }
    __name(Socket, 'Socket')
    IncomingMessage = class extends Readable {
      __unenv__ = {}
      aborted = false
      httpVersion = '1.1'
      httpVersionMajor = 1
      httpVersionMinor = 1
      complete = true
      connection
      socket
      headers = {}
      trailers = {}
      method = 'GET'
      url = '/'
      statusCode = 200
      statusMessage = ''
      closed = false
      errored = null
      readable = false
      constructor(socket) {
        super()
        this.socket = this.connection = socket || new Socket()
      }
      get rawHeaders() {
        return rawHeaders(this.headers)
      }
      get rawTrailers() {
        return []
      }
      setTimeout(_msecs, _callback) {
        return this
      }
      get headersDistinct() {
        return _distinct(this.headers)
      }
      get trailersDistinct() {
        return _distinct(this.trailers)
      }
    }
    __name(IncomingMessage, 'IncomingMessage')
    __name(_distinct, '_distinct')
    ServerResponse = class extends Writable2 {
      __unenv__ = true
      statusCode = 200
      statusMessage = ''
      upgrading = false
      chunkedEncoding = false
      shouldKeepAlive = false
      useChunkedEncodingByDefault = false
      sendDate = false
      finished = false
      headersSent = false
      strictContentLength = false
      connection = null
      socket = null
      req
      _headers = {}
      constructor(req) {
        super()
        this.req = req
      }
      assignSocket(socket) {
        socket._httpMessage = this
        this.socket = socket
        this.connection = socket
        this.emit('socket', socket)
        this._flush()
      }
      _flush() {
        this.flushHeaders()
      }
      detachSocket(_socket) {}
      writeContinue(_callback) {}
      writeHead(statusCode, arg1, arg2) {
        if (statusCode) {
          this.statusCode = statusCode
        }
        if (typeof arg1 === 'string') {
          this.statusMessage = arg1
          arg1 = void 0
        }
        const headers = arg2 || arg1
        if (headers) {
          if (Array.isArray(headers));
          else {
            for (const key in headers) {
              this.setHeader(key, headers[key])
            }
          }
        }
        this.headersSent = true
        return this
      }
      writeProcessing() {}
      setTimeout(_msecs, _callback) {
        return this
      }
      appendHeader(name2, value) {
        name2 = name2.toLowerCase()
        const current = this._headers[name2]
        const all = [
          ...(Array.isArray(current) ? current : [current]),
          ...(Array.isArray(value) ? value : [value]),
        ].filter(Boolean)
        this._headers[name2] = all.length > 1 ? all : all[0]
        return this
      }
      setHeader(name2, value) {
        this._headers[name2.toLowerCase()] = value
        return this
      }
      getHeader(name2) {
        return this._headers[name2.toLowerCase()]
      }
      getHeaders() {
        return this._headers
      }
      getHeaderNames() {
        return Object.keys(this._headers)
      }
      hasHeader(name2) {
        return name2.toLowerCase() in this._headers
      }
      removeHeader(name2) {
        delete this._headers[name2.toLowerCase()]
      }
      addTrailers(_headers) {}
      flushHeaders() {}
      writeEarlyHints(_headers, cb) {
        if (typeof cb === 'function') {
          cb()
        }
      }
    }
    __name(ServerResponse, 'ServerResponse')
    __name(hasProp, 'hasProp')
    __defProp$2 = Object.defineProperty
    __defNormalProp$2 = /* @__PURE__ */ __name(
      (obj, key, value) =>
        key in obj
          ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value })
          : (obj[key] = value),
      '__defNormalProp$2'
    )
    __publicField$2 = /* @__PURE__ */ __name((obj, key, value) => {
      __defNormalProp$2(obj, typeof key !== 'symbol' ? key + '' : key, value)
      return value
    }, '__publicField$2')
    H3Error = class extends Error {
      constructor(message, opts = {}) {
        super(message, opts)
        __publicField$2(this, 'statusCode', 500)
        __publicField$2(this, 'fatal', false)
        __publicField$2(this, 'unhandled', false)
        __publicField$2(this, 'statusMessage')
        __publicField$2(this, 'data')
        __publicField$2(this, 'cause')
        if (opts.cause && !this.cause) {
          this.cause = opts.cause
        }
      }
      toJSON() {
        const obj = {
          message: this.message,
          statusCode: sanitizeStatusCode(this.statusCode, 500),
        }
        if (this.statusMessage) {
          obj.statusMessage = sanitizeStatusMessage(this.statusMessage)
        }
        if (this.data !== void 0) {
          obj.data = this.data
        }
        return obj
      }
    }
    __name(H3Error, 'H3Error')
    __publicField$2(H3Error, '__h3_error__', true)
    __name(createError, 'createError')
    __name(sendError, 'sendError')
    __name(isError, 'isError')
    __name(isMethod, 'isMethod')
    __name(assertMethod, 'assertMethod')
    __name(getRequestHeaders, 'getRequestHeaders')
    RawBodySymbol = Symbol.for('h3RawBody')
    PayloadMethods$1 = ['PATCH', 'POST', 'PUT', 'DELETE']
    __name(readRawBody, 'readRawBody')
    __name(getRequestWebStream, 'getRequestWebStream')
    __name(handleCacheHeaders, 'handleCacheHeaders')
    MIMES = {
      html: 'text/html',
      json: 'application/json',
    }
    DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g
    __name(sanitizeStatusMessage, 'sanitizeStatusMessage')
    __name(sanitizeStatusCode, 'sanitizeStatusCode')
    __name(splitCookiesString, 'splitCookiesString')
    defer = typeof setImmediate === 'undefined' ? (fn3) => fn3() : setImmediate
    __name(send, 'send')
    __name(sendNoContent, 'sendNoContent')
    __name(setResponseStatus, 'setResponseStatus')
    __name(defaultContentType, 'defaultContentType')
    __name(sendRedirect, 'sendRedirect')
    __name(setResponseHeaders, 'setResponseHeaders')
    setHeaders = setResponseHeaders
    __name(setResponseHeader, 'setResponseHeader')
    __name(isStream, 'isStream')
    __name(isWebResponse, 'isWebResponse')
    __name(sendStream, 'sendStream')
    __name(sendWebResponse, 'sendWebResponse')
    PayloadMethods = /* @__PURE__ */ new Set(['PATCH', 'POST', 'PUT', 'DELETE'])
    ignoredHeaders = /* @__PURE__ */ new Set([
      'transfer-encoding',
      'connection',
      'keep-alive',
      'upgrade',
      'expect',
      'host',
      'accept',
    ])
    __name(proxyRequest, 'proxyRequest')
    __name(sendProxy, 'sendProxy')
    __name(getProxyRequestHeaders, 'getProxyRequestHeaders')
    __name(fetchWithEvent, 'fetchWithEvent')
    __name(_getFetch, '_getFetch')
    __name(rewriteCookieProperty, 'rewriteCookieProperty')
    __name(mergeHeaders$1, 'mergeHeaders$1')
    __defProp2 = Object.defineProperty
    __defNormalProp2 = /* @__PURE__ */ __name(
      (obj, key, value) =>
        key in obj
          ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value })
          : (obj[key] = value),
      '__defNormalProp'
    )
    __publicField2 = /* @__PURE__ */ __name((obj, key, value) => {
      __defNormalProp2(obj, typeof key !== 'symbol' ? key + '' : key, value)
      return value
    }, '__publicField')
    H3Event = class {
      constructor(req, res) {
        __publicField2(this, '__is_event__', true)
        __publicField2(this, 'node')
        __publicField2(this, 'web')
        __publicField2(this, 'context', {})
        __publicField2(this, '_method')
        __publicField2(this, '_path')
        __publicField2(this, '_headers')
        __publicField2(this, '_requestBody')
        __publicField2(this, '_handled', false)
        __publicField2(this, '_onBeforeResponseCalled')
        __publicField2(this, '_onAfterResponseCalled')
        this.node = { req, res }
      }
      // --- Request ---
      get method() {
        if (!this._method) {
          this._method = (this.node.req.method || 'GET').toUpperCase()
        }
        return this._method
      }
      get path() {
        return this._path || this.node.req.url || '/'
      }
      get headers() {
        if (!this._headers) {
          this._headers = _normalizeNodeHeaders(this.node.req.headers)
        }
        return this._headers
      }
      // --- Respoonse ---
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent
      }
      respondWith(response) {
        return Promise.resolve(response).then((_response) => sendWebResponse(this, _response))
      }
      // --- Utils ---
      toString() {
        return `[${this.method}] ${this.path}`
      }
      toJSON() {
        return this.toString()
      }
      // --- Deprecated ---
      /** @deprecated Please use `event.node.req` instead. */
      get req() {
        return this.node.req
      }
      /** @deprecated Please use `event.node.res` instead. */
      get res() {
        return this.node.res
      }
    }
    __name(H3Event, 'H3Event')
    __name(isEvent, 'isEvent')
    __name(createEvent, 'createEvent')
    __name(_normalizeNodeHeaders, '_normalizeNodeHeaders')
    __name(defineEventHandler, 'defineEventHandler')
    __name(_normalizeArray, '_normalizeArray')
    __name(_callHandler, '_callHandler')
    eventHandler = defineEventHandler
    __name(isEventHandler, 'isEventHandler')
    __name(toEventHandler, 'toEventHandler')
    __name(defineLazyEventHandler, 'defineLazyEventHandler')
    lazyEventHandler = defineLazyEventHandler
    __name(createApp, 'createApp')
    __name(use, 'use')
    __name(createAppEventHandler, 'createAppEventHandler')
    __name(createResolver, 'createResolver')
    __name(normalizeLayer, 'normalizeLayer')
    __name(handleHandlerResponse, 'handleHandlerResponse')
    __name(cachedFn, 'cachedFn')
    __name(websocketOptions, 'websocketOptions')
    RouterMethods = ['connect', 'delete', 'get', 'head', 'options', 'post', 'put', 'trace', 'patch']
    __name(createRouter, 'createRouter')
    __name(toNodeListener, 'toNodeListener')
    __name(flatHooks, 'flatHooks')
    defaultTask = { run: (function_) => function_() }
    _createTask = /* @__PURE__ */ __name(() => defaultTask, '_createTask')
    createTask3 = typeof console.createTask !== 'undefined' ? console.createTask : _createTask
    __name(serialTaskCaller, 'serialTaskCaller')
    __name(parallelTaskCaller, 'parallelTaskCaller')
    __name(callEachWith, 'callEachWith')
    Hookable = class {
      constructor() {
        this._hooks = {}
        this._before = void 0
        this._after = void 0
        this._deprecatedMessages = void 0
        this._deprecatedHooks = {}
        this.hook = this.hook.bind(this)
        this.callHook = this.callHook.bind(this)
        this.callHookWith = this.callHookWith.bind(this)
      }
      hook(name2, function_, options = {}) {
        if (!name2 || typeof function_ !== 'function') {
          return () => {}
        }
        const originalName = name2
        let dep
        while (this._deprecatedHooks[name2]) {
          dep = this._deprecatedHooks[name2]
          name2 = dep.to
        }
        if (dep && !options.allowDeprecated) {
          let message = dep.message
          if (!message) {
            message =
              `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : '')
          }
          if (!this._deprecatedMessages) {
            this._deprecatedMessages = /* @__PURE__ */ new Set()
          }
          if (!this._deprecatedMessages.has(message)) {
            console.warn(message)
            this._deprecatedMessages.add(message)
          }
        }
        if (!function_.name) {
          try {
            Object.defineProperty(function_, 'name', {
              get: () => '_' + name2.replace(/\W+/g, '_') + '_hook_cb',
              configurable: true,
            })
          } catch {}
        }
        this._hooks[name2] = this._hooks[name2] || []
        this._hooks[name2].push(function_)
        return () => {
          if (function_) {
            this.removeHook(name2, function_)
            function_ = void 0
          }
        }
      }
      hookOnce(name2, function_) {
        let _unreg
        let _function = /* @__PURE__ */ __name((...arguments_) => {
          if (typeof _unreg === 'function') {
            _unreg()
          }
          _unreg = void 0
          _function = void 0
          return function_(...arguments_)
        }, '_function')
        _unreg = this.hook(name2, _function)
        return _unreg
      }
      removeHook(name2, function_) {
        if (this._hooks[name2]) {
          const index3 = this._hooks[name2].indexOf(function_)
          if (index3 !== -1) {
            this._hooks[name2].splice(index3, 1)
          }
          if (this._hooks[name2].length === 0) {
            delete this._hooks[name2]
          }
        }
      }
      deprecateHook(name2, deprecated) {
        this._deprecatedHooks[name2] =
          typeof deprecated === 'string' ? { to: deprecated } : deprecated
        const _hooks = this._hooks[name2] || []
        delete this._hooks[name2]
        for (const hook of _hooks) {
          this.hook(name2, hook)
        }
      }
      deprecateHooks(deprecatedHooks) {
        Object.assign(this._deprecatedHooks, deprecatedHooks)
        for (const name2 in deprecatedHooks) {
          this.deprecateHook(name2, deprecatedHooks[name2])
        }
      }
      addHooks(configHooks) {
        const hooks = flatHooks(configHooks)
        const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]))
        return () => {
          for (const unreg of removeFns.splice(0, removeFns.length)) {
            unreg()
          }
        }
      }
      removeHooks(configHooks) {
        const hooks = flatHooks(configHooks)
        for (const key in hooks) {
          this.removeHook(key, hooks[key])
        }
      }
      removeAllHooks() {
        for (const key in this._hooks) {
          delete this._hooks[key]
        }
      }
      callHook(name2, ...arguments_) {
        arguments_.unshift(name2)
        return this.callHookWith(serialTaskCaller, name2, ...arguments_)
      }
      callHookParallel(name2, ...arguments_) {
        arguments_.unshift(name2)
        return this.callHookWith(parallelTaskCaller, name2, ...arguments_)
      }
      callHookWith(caller, name2, ...arguments_) {
        const event =
          this._before || this._after ? { name: name2, args: arguments_, context: {} } : void 0
        if (this._before) {
          callEachWith(this._before, event)
        }
        const result = caller(name2 in this._hooks ? [...this._hooks[name2]] : [], arguments_)
        if (result instanceof Promise) {
          return result.finally(() => {
            if (this._after && event) {
              callEachWith(this._after, event)
            }
          })
        }
        if (this._after && event) {
          callEachWith(this._after, event)
        }
        return result
      }
      beforeEach(function_) {
        this._before = this._before || []
        this._before.push(function_)
        return () => {
          if (this._before !== void 0) {
            const index3 = this._before.indexOf(function_)
            if (index3 !== -1) {
              this._before.splice(index3, 1)
            }
          }
        }
      }
      afterEach(function_) {
        this._after = this._after || []
        this._after.push(function_)
        return () => {
          if (this._after !== void 0) {
            const index3 = this._after.indexOf(function_)
            if (index3 !== -1) {
              this._after.splice(index3, 1)
            }
          }
        }
      }
    }
    __name(Hookable, 'Hookable')
    __name(createHooks, 'createHooks')
    FetchError = class extends Error {
      constructor(message, opts) {
        super(message, opts)
        this.name = 'FetchError'
        if (opts?.cause && !this.cause) {
          this.cause = opts.cause
        }
      }
    }
    __name(FetchError, 'FetchError')
    __name(createFetchError, 'createFetchError')
    payloadMethods = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
    __name(isPayloadMethod, 'isPayloadMethod')
    __name(isJSONSerializable, 'isJSONSerializable')
    textTypes = /* @__PURE__ */ new Set([
      'image/svg',
      'application/xml',
      'application/xhtml',
      'application/html',
    ])
    JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
    __name(detectResponseType, 'detectResponseType')
    __name(resolveFetchOptions, 'resolveFetchOptions')
    __name(mergeHeaders, 'mergeHeaders')
    __name(callHooks, 'callHooks')
    retryStatusCodes = /* @__PURE__ */ new Set([
      408,
      // Request Timeout
      409,
      // Conflict
      425,
      // Too Early (Experimental)
      429,
      // Too Many Requests
      500,
      // Internal Server Error
      502,
      // Bad Gateway
      503,
      // Service Unavailable
      504,
      // Gateway Timeout
    ])
    nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304])
    __name(createFetch$1, 'createFetch$1')
    _globalThis$1 = (() => {
      if (typeof globalThis !== 'undefined') {
        return globalThis
      }
      if (typeof self !== 'undefined') {
        return self
      }
      if (typeof global !== 'undefined') {
        return global
      }
      throw new Error('unable to locate global object')
    })()
    fetch = _globalThis$1.fetch
      ? (...args) => _globalThis$1.fetch(...args)
      : () => Promise.reject(new Error('[ofetch] global.fetch is not supported!'))
    Headers$1 = _globalThis$1.Headers
    AbortController = _globalThis$1.AbortController
    createFetch$1({ fetch, Headers: Headers$1, AbortController })
    nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304])
    __name(createCall, 'createCall')
    __name(createFetch, 'createFetch')
    errorHandler = defineNitroErrorHandler((error4, event) => {
      const appConfig2 = useAppConfig(event)
      if (event.path.startsWith('/api')) {
        setResponseHeader(event, 'Content-Type', 'application/json')
        return send(
          event,
          JSON.stringify({
            statusCode: error4.statusCode || 500,
            message:
              error4.statusCode === 404
                ? 'Resource not found'
                : error4.message || 'Internal Server Error',
            ...false,
          })
        )
      }
      const htmlBody =
        /* html */
        `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${appConfig2.description}">
    <title>${error4.statusCode} - ${appConfig2.title}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <script src="https://cdn.tailwindcss.com"><\/script>
  </head>
  <body class="bg-gradient-to-br from-white to-gray-100 min-h-screen flex items-center justify-center p-4">
    <main class="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <div class="space-y-6">
        <div class="text-center space-y-4">
          <h1 class="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700">
            ${error4.statusCode}
          </h1>
          <h2 class="text-3xl font-bold text-gray-900">Something went wrong!</h2>
          <p class="text-gray-600 text-lg max-w-xl mx-auto">
            ${error4.message || 'The page you are looking for might have been removed or is temporarily unavailable.'}
          </p>
        </div>

        ${''}

        <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <a href="${appConfig2.baseURL}" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-md w-full">
            Return Home
          </a>
          <button onclick="window.location.reload()" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-all duration-200 shadow hover:shadow-md w-full">
            Try Again
          </button>
        </div>
      </div>
    </main>
  </body>
</html>`
      setResponseHeader(event, 'Content-Type', 'text/html')
      return send(event, htmlBody)
    })
    plugins = []
    _lazy_A5f45D = /* @__PURE__ */ __name(
      () => Promise.resolve().then(() => (init_routes(), routes_exports)),
      '_lazy_A5f45D'
    )
    _lazy_wg1nmQ = /* @__PURE__ */ __name(
      () => Promise.resolve().then(() => (init_index2(), index2_exports)),
      '_lazy_wg1nmQ'
    )
    _lazy_t77chG = /* @__PURE__ */ __name(
      () => Promise.resolve().then(() => (init_robots_txt(), robots_txt_exports)),
      '_lazy_t77chG'
    )
    handlers = [
      { route: '/api', handler: _lazy_A5f45D, lazy: true, middleware: false, method: void 0 },
      { route: '/', handler: _lazy_wg1nmQ, lazy: true, middleware: false, method: void 0 },
      {
        route: '/robots.txt',
        handler: _lazy_t77chG,
        lazy: true,
        middleware: false,
        method: void 0,
      },
    ]
    __name(wrapToPromise, 'wrapToPromise')
    __name(asyncCall, 'asyncCall')
    __name(isPrimitive, 'isPrimitive')
    __name(isPureObject, 'isPureObject')
    __name(stringify, 'stringify')
    __name(checkBufferSupport, 'checkBufferSupport')
    BASE64_PREFIX = 'base64:'
    __name(serializeRaw, 'serializeRaw')
    __name(deserializeRaw, 'deserializeRaw')
    storageKeyProperties = [
      'hasItem',
      'getItem',
      'getItemRaw',
      'setItem',
      'setItemRaw',
      'removeItem',
      'getMeta',
      'setMeta',
      'removeMeta',
      'getKeys',
      'clear',
      'mount',
      'unmount',
    ]
    __name(prefixStorage, 'prefixStorage')
    __name(normalizeKey$1, 'normalizeKey$1')
    __name(joinKeys, 'joinKeys')
    __name(normalizeBaseKey, 'normalizeBaseKey')
    __name(defineDriver, 'defineDriver')
    DRIVER_NAME = 'memory'
    memory = defineDriver(() => {
      const data = /* @__PURE__ */ new Map()
      return {
        name: DRIVER_NAME,
        getInstance: () => data,
        hasItem(key) {
          return data.has(key)
        },
        getItem(key) {
          return data.get(key) ?? null
        },
        getItemRaw(key) {
          return data.get(key) ?? null
        },
        setItem(key, value) {
          data.set(key, value)
        },
        setItemRaw(key, value) {
          data.set(key, value)
        },
        removeItem(key) {
          data.delete(key)
        },
        getKeys() {
          return [...data.keys()]
        },
        clear() {
          data.clear()
        },
        dispose() {
          data.clear()
        },
      }
    })
    __name(createStorage, 'createStorage')
    __name(watch, 'watch')
    __name(dispose, 'dispose')
    _assets = {}
    normalizeKey = /* @__PURE__ */ __name(function normalizeKey2(key) {
      if (!key) {
        return ''
      }
      return key.split('?')[0].replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '')
    }, 'normalizeKey')
    assets$1 = {
      getKeys() {
        return Promise.resolve(Object.keys(_assets))
      },
      hasItem(id) {
        id = normalizeKey(id)
        return Promise.resolve(id in _assets)
      },
      getItem(id) {
        id = normalizeKey(id)
        return Promise.resolve(_assets[id] ? _assets[id].import() : null)
      },
      getMeta(id) {
        id = normalizeKey(id)
        return Promise.resolve(_assets[id] ? _assets[id].meta : {})
      },
    }
    storage = createStorage({})
    storage.mount('/assets', assets$1)
    __name(useStorage, 'useStorage')
    __name(defaultCacheOptions, 'defaultCacheOptions')
    __name(defineCachedFunction, 'defineCachedFunction')
    __name(cachedFunction, 'cachedFunction')
    __name(getKey, 'getKey')
    __name(escapeKey, 'escapeKey')
    __name(defineCachedEventHandler, 'defineCachedEventHandler')
    __name(cloneWithProxy, 'cloneWithProxy')
    cachedEventHandler = defineCachedEventHandler
    __name(klona, 'klona')
    inlineAppConfig = {
      baseURL: 'http://localhost:3000',
      title: 'Nitro Application',
      description: 'Build fast and modern web applications with Nitro',
    }
    appConfig = defuFn(inlineAppConfig)
    NUMBER_CHAR_RE = /\d/
    STR_SPLITTERS = ['-', '_', '/', '.']
    __name(isUppercase, 'isUppercase')
    __name(splitByCase, 'splitByCase')
    __name(kebabCase, 'kebabCase')
    __name(snakeCase, 'snakeCase')
    __name(getEnv, 'getEnv')
    __name(_isObject, '_isObject')
    __name(applyEnv, 'applyEnv')
    envExpandRx = /{{(.*?)}}/g
    __name(_expandFromEnv, '_expandFromEnv')
    _inlineRuntimeConfig = {
      app: {
        baseURL: '/',
      },
      nitro: {
        routeRules: {},
      },
    }
    envOptions = {
      prefix: 'NITRO_',
      altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process2.env.NITRO_ENV_PREFIX ?? '_',
      envExpansion:
        _inlineRuntimeConfig.nitro.envExpansion ?? process2.env.NITRO_ENV_EXPANSION ?? false,
    }
    _sharedRuntimeConfig = _deepFreeze(applyEnv(klona(_inlineRuntimeConfig), envOptions))
    __name(useRuntimeConfig, 'useRuntimeConfig')
    _sharedAppConfig = _deepFreeze(klona(appConfig))
    __name(useAppConfig, 'useAppConfig')
    __name(_deepFreeze, '_deepFreeze')
    new Proxy(/* @__PURE__ */ Object.create(null), {
      get: (_2, prop) => {
        console.warn('Please use `useRuntimeConfig()` instead of accessing config directly.')
        const runtimeConfig = useRuntimeConfig()
        if (prop in runtimeConfig) {
          return runtimeConfig[prop]
        }
        return void 0
      },
    })
    __name(createContext, 'createContext')
    __name(createNamespace, 'createNamespace')
    _globalThis =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
          ? self
          : typeof global !== 'undefined'
            ? global
            : {}
    globalKey = '__unctx__'
    defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace())
    getContext = /* @__PURE__ */ __name(
      (key, opts = {}) => defaultNamespace.get(key, opts),
      'getContext'
    )
    asyncHandlersKey = '__unctx_async_handlers__'
    asyncHandlers =
      _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set())
    getContext('nitro-app', {
      asyncContext: void 0,
      AsyncLocalStorage: void 0,
    })
    config2 = useRuntimeConfig()
    _routeRulesMatcher = toRouteMatcher(createRouter$1({ routes: config2.nitro.routeRules }))
    __name(createRouteRulesHandler, 'createRouteRulesHandler')
    __name(getRouteRules, 'getRouteRules')
    __name(getRouteRulesForPath, 'getRouteRulesForPath')
    METHOD_WITH_BODY_RE = /post|put|patch/i
    __name(requestHasBody, 'requestHasBody')
    __name(joinHeaders, 'joinHeaders')
    __name(normalizeFetchResponse, 'normalizeFetchResponse')
    __name(normalizeCookieHeader, 'normalizeCookieHeader')
    __name(normalizeCookieHeaders, 'normalizeCookieHeaders')
    __name(createNitroApp, 'createNitroApp')
    __name(runNitroPlugins, 'runNitroPlugins')
    nitroApp$1 = createNitroApp()
    __name(useNitroApp, 'useNitroApp')
    runNitroPlugins(nitroApp$1)
    __name(defineNitroErrorHandler, 'defineNitroErrorHandler')
    r = /* @__PURE__ */ Object.create(null)
    E = /* @__PURE__ */ __name(
      (e) =>
        globalThis.process?.env ||
        globalThis._importMeta_.env ||
        globalThis.Deno?.env.toObject() ||
        globalThis.__env__ ||
        (e ? r : globalThis),
      'E'
    )
    s = new Proxy(r, {
      get(e, o) {
        return E()[o] ?? r[o]
      },
      has(e, o) {
        const i = E()
        return o in i || o in r
      },
      set(e, o, i) {
        const g = E(true)
        return (g[o] = i), true
      },
      deleteProperty(e, o) {
        if (!o) return false
        const i = E(true)
        return delete i[o], true
      },
      ownKeys() {
        const e = E(true)
        return Object.keys(e)
      },
    })
    t = (typeof process2 < 'u' && process2.env && 'production') || ''
    p = [
      ['APPVEYOR'],
      ['AWS_AMPLIFY', 'AWS_APP_ID', { ci: true }],
      ['AZURE_PIPELINES', 'SYSTEM_TEAMFOUNDATIONCOLLECTIONURI'],
      ['AZURE_STATIC', 'INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN'],
      ['APPCIRCLE', 'AC_APPCIRCLE'],
      ['BAMBOO', 'bamboo_planKey'],
      ['BITBUCKET', 'BITBUCKET_COMMIT'],
      ['BITRISE', 'BITRISE_IO'],
      ['BUDDY', 'BUDDY_WORKSPACE_ID'],
      ['BUILDKITE'],
      ['CIRCLE', 'CIRCLECI'],
      ['CIRRUS', 'CIRRUS_CI'],
      ['CLOUDFLARE_PAGES', 'CF_PAGES', { ci: true }],
      ['CODEBUILD', 'CODEBUILD_BUILD_ARN'],
      ['CODEFRESH', 'CF_BUILD_ID'],
      ['DRONE'],
      ['DRONE', 'DRONE_BUILD_EVENT'],
      ['DSARI'],
      ['GITHUB_ACTIONS'],
      ['GITLAB', 'GITLAB_CI'],
      ['GITLAB', 'CI_MERGE_REQUEST_ID'],
      ['GOCD', 'GO_PIPELINE_LABEL'],
      ['LAYERCI'],
      ['HUDSON', 'HUDSON_URL'],
      ['JENKINS', 'JENKINS_URL'],
      ['MAGNUM'],
      ['NETLIFY'],
      ['NETLIFY', 'NETLIFY_LOCAL', { ci: false }],
      ['NEVERCODE'],
      ['RENDER'],
      ['SAIL', 'SAILCI'],
      ['SEMAPHORE'],
      ['SCREWDRIVER'],
      ['SHIPPABLE'],
      ['SOLANO', 'TDDIUM'],
      ['STRIDER'],
      ['TEAMCITY', 'TEAMCITY_VERSION'],
      ['TRAVIS'],
      ['VERCEL', 'NOW_BUILDER'],
      ['VERCEL', 'VERCEL', { ci: false }],
      ['VERCEL', 'VERCEL_ENV', { ci: false }],
      ['APPCENTER', 'APPCENTER_BUILD_ID'],
      ['CODESANDBOX', 'CODESANDBOX_SSE', { ci: false }],
      ['STACKBLITZ'],
      ['STORMKIT'],
      ['CLEAVR'],
      ['ZEABUR'],
      ['CODESPHERE', 'CODESPHERE_APP_ID', { ci: true }],
      ['RAILWAY', 'RAILWAY_PROJECT_ID'],
      ['RAILWAY', 'RAILWAY_SERVICE_ID'],
    ]
    __name(B, 'B')
    l = B()
    l.name
    __name(n, 'n')
    I = globalThis.process?.platform || ''
    T = n(s.CI) || l.ci !== false
    R = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY)
    n(s.DEBUG)
    C = t === 'test' || n(s.TEST)
    f = t === 'production'
    n(s.MINIMAL) || T || C || !R
    a = /^win/i.test(I)
    !n(s.NO_COLOR) && (n(s.FORCE_COLOR) || ((R || a) && s.TERM !== 'dumb') || T)
    _ = (globalThis.process?.versions?.node || '').replace(/^v/, '') || null
    Number(_?.split('.')[0]) || null
    W = globalThis.process || /* @__PURE__ */ Object.create(null)
    c = { versions: {} }
    new Proxy(W, {
      get(e, o) {
        if (o === 'env') return s
        if (o in e) return e[o]
        if (o in c) return c[o]
      },
    })
    A = globalThis.process?.release?.name === 'node'
    L = !!globalThis.Bun || !!globalThis.process?.versions?.bun
    D = !!globalThis.Deno
    O = !!globalThis.fastly
    S = !!globalThis.Netlify
    N = !!globalThis.EdgeRuntime
    u = globalThis.navigator?.userAgent === 'Cloudflare-Workers'
    b = !!globalThis.__lagon__
    F = [
      [S, 'netlify'],
      [N, 'edge-light'],
      [u, 'workerd'],
      [O, 'fastly'],
      [D, 'deno'],
      [L, 'bun'],
      [A, 'node'],
      [b, 'lagon'],
    ]
    __name(G, 'G')
    P = G()
    P?.name || ''
    assets = {
      '/.DS_Store': {
        type: 'text/plain; charset=utf-8',
        etag: '"1804-3y++sUAKzaCQmjLBz2v0kvESHgc"',
        mtime: '2024-11-02T15:09:32.224Z',
        size: 6148,
        path: '../.DS_Store',
      },
      '/favicon.ico': {
        type: 'image/vnd.microsoft.icon',
        etag: '"18bb-0bVmevpTs89k8j1TyFCdK54isL0"',
        mtime: '2024-11-02T15:09:32.224Z',
        size: 6331,
        path: '../favicon.ico',
      },
      '/index.html': {
        type: 'text/html; charset=utf-8',
        etag: '"ce-h6gVAW1I1g80sq8V/wHAlEKFo2o"',
        mtime: '2024-11-02T15:09:32.631Z',
        size: 206,
        path: '../index.html',
      },
      '/nitro.json': {
        type: 'application/json',
        etag: '"f2-ExVivec73FruiU2YFnluFGT7isU"',
        mtime: '2024-11-02T15:09:32.618Z',
        size: 242,
        path: '../nitro.json',
      },
    }
    publicAssetBases = {}
    __name(isPublicAssetURL, 'isPublicAssetURL')
    nitroApp = useNitroApp()
    cloudflarePages = {
      async fetch(request, env4, context3) {
        const url = new URL(request.url)
        if (env4.ASSETS && isPublicAssetURL(url.pathname)) {
          return env4.ASSETS.fetch(request)
        }
        let body
        if (requestHasBody(request)) {
          body = Buffer2.from(await request.arrayBuffer())
        }
        globalThis.__env__ = env4
        return nitroApp.localFetch(url.pathname + url.search, {
          context: {
            cf: request.cf,
            waitUntil: (promise) => context3.waitUntil(promise),
            cloudflare: {
              request,
              env: env4,
              context: context3,
            },
          },
          host: url.hostname,
          protocol: url.protocol,
          method: request.method,
          headers: request.headers,
          body,
        })
      },
      scheduled(event, env4, context3) {},
    }
  },
})

// .wrangler/tmp/bundle-fAlUd6/middleware-loader.entry.ts
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()

// .wrangler/tmp/bundle-fAlUd6/middleware-insertion-facade.js
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()

// .wrangler/tmp/pages-xt7H5X/anmc7bh6q1j.js
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()

// .wrangler/tmp/pages-xt7H5X/bundledWorker-0.8506853867283097.mjs
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()
init_nitro()
import { Writable as Writable3 } from 'node:stream'
var __defProp3 = Object.defineProperty
var __defNormalProp3 = /* @__PURE__ */ __name(
  (obj, key, value) =>
    key in obj
      ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value })
      : (obj[key] = value),
  '__defNormalProp'
)
var __name2 = /* @__PURE__ */ __name(
  (target, value) => __defProp3(target, 'name', { value, configurable: true }),
  '__name'
)
var __publicField3 = /* @__PURE__ */ __name((obj, key, value) => {
  __defNormalProp3(obj, typeof key !== 'symbol' ? key + '' : key, value)
  return value
}, '__publicField')
globalThis.clearImmediate = clearImmediateFallback2
function createNotImplementedError3(name2) {
  return new Error(`[unenv] ${name2} is not implemented yet!`)
}
__name(createNotImplementedError3, 'createNotImplementedError')
__name2(createNotImplementedError3, 'createNotImplementedError')
function notImplemented3(name2) {
  const fn22 = /* @__PURE__ */ __name2(() => {
    throw createNotImplementedError3(name2)
  }, 'fn')
  return Object.assign(fn22, { __unenv__: true })
}
__name(notImplemented3, 'notImplemented')
__name2(notImplemented3, 'notImplemented')
var noop_default2 = Object.assign(() => {}, { __unenv__: true })
var Immediate2 = /* @__PURE__ */ __name(
  class {
    _onImmediate
    _timeout
    constructor(callback, args) {
      this._onImmediate = callback
      if ('setTimeout' in globalThis) {
        this._timeout = setTimeout(callback, 0, ...args)
      } else {
        callback(...args)
      }
    }
    ref() {
      this._timeout?.ref()
      return this
    }
    unref() {
      this._timeout?.unref()
      return this
    }
    hasRef() {
      return this._timeout?.hasRef() ?? false
    }
    [Symbol.dispose]() {
      if ('clearTimeout' in globalThis) {
        clearTimeout(this._timeout)
      }
    }
  },
  'Immediate'
)
__name2(Immediate2, 'Immediate')
function setImmediateFallbackPromises2(value) {
  return new Promise((res) => {
    res(value)
  })
}
__name(setImmediateFallbackPromises2, 'setImmediateFallbackPromises')
__name2(setImmediateFallbackPromises2, 'setImmediateFallbackPromises')
function setImmediateFallback2(callback, ...args) {
  return new Immediate2(callback, args)
}
__name(setImmediateFallback2, 'setImmediateFallback')
__name2(setImmediateFallback2, 'setImmediateFallback')
setImmediateFallback2.__promisify__ = setImmediateFallbackPromises2
function clearImmediateFallback2(immediate) {
  immediate?.[Symbol.dispose]()
}
__name(clearImmediateFallback2, 'clearImmediateFallback')
__name2(clearImmediateFallback2, 'clearImmediateFallback')
globalThis.setImmediate = setImmediateFallback2
var fn2 = /* @__PURE__ */ __name2(() => {}, 'fn')
function createMock2(name2, overrides = {}) {
  fn2.prototype.name = name2
  const props = {}
  return new Proxy(fn2, {
    get(_target, prop) {
      if (prop === 'caller') {
        return null
      }
      if (prop === '__createMock__') {
        return createMock2
      }
      if (prop === '__unenv__') {
        return true
      }
      if (prop in overrides) {
        return overrides[prop]
      }
      return (props[prop] = props[prop] || createMock2(`${name2}.${prop.toString()}`))
    },
    apply(_target, _this, _args) {
      return createMock2(`${name2}()`)
    },
    construct(_target, _args, _newT) {
      return createMock2(`[${name2}]`)
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return []
    },
  })
}
__name(createMock2, 'createMock')
__name2(createMock2, 'createMock')
var proxy_default2 = createMock2('mock')
var _console2 = globalThis.console
var _ignoreErrors2 = true
var _stderr2 = new Writable3()
var _stdout2 = new Writable3()
var log3 = _console2?.log ?? noop_default2
var info3 = _console2?.info ?? log3
var trace3 = _console2?.trace ?? info3
var debug3 = _console2?.debug ?? log3
var table3 = _console2?.table ?? log3
var error3 = _console2?.error ?? log3
var warn3 = _console2?.warn ?? error3
var createTask4 = _console2?.createTask ?? notImplemented3('console.createTask')
var assert4 = notImplemented3('console.assert')
var clear3 = _console2?.clear ?? noop_default2
var count3 = _console2?.count ?? noop_default2
var countReset3 = _console2?.countReset ?? noop_default2
var dir3 = _console2?.dir ?? noop_default2
var dirxml3 = _console2?.dirxml ?? noop_default2
var group3 = _console2?.group ?? noop_default2
var groupEnd3 = _console2?.groupEnd ?? noop_default2
var groupCollapsed3 = _console2?.groupCollapsed ?? noop_default2
var profile3 = _console2?.profile ?? noop_default2
var profileEnd3 = _console2?.profileEnd ?? noop_default2
var time3 = _console2?.time ?? noop_default2
var timeEnd3 = _console2?.timeEnd ?? noop_default2
var timeLog3 = _console2?.timeLog ?? noop_default2
var timeStamp3 = _console2?.timeStamp ?? noop_default2
var Console2 = _console2?.Console ?? proxy_default2.__createMock__('console.Console')
var workerdConsole2 = globalThis['console']
var {
  assert: assert22,
  clear: clear22,
  // @ts-expect-error undocumented public API
  context: context2,
  count: count22,
  countReset: countReset22,
  // @ts-expect-error undocumented public API
  createTask: createTask22,
  debug: debug22,
  dir: dir22,
  dirxml: dirxml22,
  error: error22,
  group: group22,
  groupCollapsed: groupCollapsed22,
  groupEnd: groupEnd22,
  info: info22,
  log: log22,
  profile: profile22,
  profileEnd: profileEnd22,
  table: table22,
  time: time22,
  timeEnd: timeEnd22,
  timeLog: timeLog22,
  timeStamp: timeStamp22,
  trace: trace22,
  warn: warn22,
} = workerdConsole2
Object.assign(workerdConsole2, {
  Console: Console2,
  _ignoreErrors: _ignoreErrors2,
  _stderr: _stderr2,
  _stderrErrorHandler: noop_default2,
  _stdout: _stdout2,
  _stdoutErrorHandler: noop_default2,
  _times: proxy_default2,
})
var cloudflare_default3 = workerdConsole2
globalThis.console = cloudflare_default3
var _supportedEntryTypes2 = [
  'event',
  // PerformanceEntry
  'mark',
  // PerformanceMark
  'measure',
  // PerformanceMeasure
  'resource',
  // PerformanceResourceTiming
]
var _PerformanceEntry2 = /* @__PURE__ */ __name(
  class {
    __unenv__ = true
    detail
    entryType = 'event'
    name
    startTime
    constructor(name2, options) {
      this.name = name2
      this.startTime = options?.startTime || performance.now()
      this.detail = options?.detail
    }
    get duration() {
      return performance.now() - this.startTime
    }
    toJSON() {
      return {
        name: this.name,
        entryType: this.entryType,
        startTime: this.startTime,
        duration: this.duration,
        detail: this.detail,
      }
    }
  },
  '_PerformanceEntry'
)
__name2(_PerformanceEntry2, '_PerformanceEntry')
var PerformanceEntry2 = globalThis.PerformanceEntry || _PerformanceEntry2
var _PerformanceMark2 = /* @__PURE__ */ __name(
  class extends _PerformanceEntry2 {
    entryType = 'mark'
  },
  '_PerformanceMark'
)
__name2(_PerformanceMark2, '_PerformanceMark')
var PerformanceMark2 = globalThis.PerformanceMark || _PerformanceMark2
var _PerformanceMeasure2 = /* @__PURE__ */ __name(
  class extends _PerformanceEntry2 {
    entryType = 'measure'
  },
  '_PerformanceMeasure'
)
__name2(_PerformanceMeasure2, '_PerformanceMeasure')
var PerformanceMeasure2 = globalThis.PerformanceMeasure || _PerformanceMeasure2
var _PerformanceResourceTiming2 = /* @__PURE__ */ __name(
  class extends _PerformanceEntry2 {
    entryType = 'resource'
    serverTiming = []
    connectEnd = 0
    connectStart = 0
    decodedBodySize = 0
    domainLookupEnd = 0
    domainLookupStart = 0
    encodedBodySize = 0
    fetchStart = 0
    initiatorType = ''
    name = ''
    nextHopProtocol = ''
    redirectEnd = 0
    redirectStart = 0
    requestStart = 0
    responseEnd = 0
    responseStart = 0
    secureConnectionStart = 0
    startTime = 0
    transferSize = 0
    workerStart = 0
  },
  '_PerformanceResourceTiming'
)
__name2(_PerformanceResourceTiming2, '_PerformanceResourceTiming')
var PerformanceResourceTiming2 = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming2
var _timeOrigin2 = Date.now()
var _Performance2 = /* @__PURE__ */ __name(
  class {
    __unenv__ = true
    timeOrigin = _timeOrigin2
    eventCounts = /* @__PURE__ */ new Map()
    _entries = []
    _resourceTimingBufferSize = 0
    navigation = proxy_default2.__createMock__('PerformanceNavigation')
    timing = proxy_default2.__createMock__('PerformanceTiming')
    onresourcetimingbufferfull = null
    now() {
      if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin2) {
        return globalThis.performance.now()
      }
      return Date.now() - this.timeOrigin
    }
    clearMarks(markName) {
      this._entries = markName
        ? this._entries.filter((e) => e.name !== markName)
        : this._entries.filter((e) => e.entryType !== 'mark')
    }
    clearMeasures(measureName) {
      this._entries = measureName
        ? this._entries.filter((e) => e.name !== measureName)
        : this._entries.filter((e) => e.entryType !== 'measure')
    }
    clearResourceTimings() {
      this._entries = this._entries.filter(
        (e) => e.entryType !== 'resource' || e.entryType !== 'navigation'
      )
    }
    getEntries() {
      return this._entries
    }
    getEntriesByName(name2, type2) {
      return this._entries.filter((e) => e.name === name2 && (!type2 || e.entryType === type2))
    }
    getEntriesByType(type2) {
      return this._entries.filter((e) => e.entryType === type2)
    }
    mark(name2, options) {
      const entry = new _PerformanceMark2(name2, options)
      this._entries.push(entry)
      return entry
    }
    measure(measureName, startOrMeasureOptions, endMark) {
      let start
      let end
      if (typeof startOrMeasureOptions === 'string') {
        start = this.getEntriesByName(startOrMeasureOptions, 'mark')[0]?.startTime
        end = this.getEntriesByName(endMark, 'mark')[0]?.startTime
      } else {
        start = Number.parseFloat(startOrMeasureOptions?.start) || performance22.now()
        end = Number.parseFloat(startOrMeasureOptions?.end) || performance22.now()
      }
      const entry = new _PerformanceMeasure2(measureName, {
        startTime: start,
        detail: { start, end },
      })
      this._entries.push(entry)
      return entry
    }
    setResourceTimingBufferSize(maxSize) {
      this._resourceTimingBufferSize = maxSize
    }
    toJSON() {
      return this
    }
    addEventListener(type2, listener, options) {
      throw createNotImplementedError3('Performance.addEventListener')
    }
    removeEventListener(type2, listener, options) {
      throw createNotImplementedError3('Performance.removeEventListener')
    }
    dispatchEvent(event) {
      throw createNotImplementedError3('Performance.dispatchEvent')
    }
  },
  '_Performance'
)
__name2(_Performance2, '_Performance')
var Performance2 = globalThis.Performance || _Performance2
var performance22 = globalThis.performance || new Performance2()
var _PerformanceObserver2 = /* @__PURE__ */ __name(
  class {
    __unenv__ = true
    _callback = null
    constructor(callback) {
      this._callback = callback
    }
    takeRecords() {
      return []
    }
    disconnect() {
      throw createNotImplementedError3('PerformanceObserver.disconnect')
    }
    observe(options) {
      throw createNotImplementedError3('PerformanceObserver.observe')
    }
  },
  '_PerformanceObserver'
)
__name2(_PerformanceObserver2, '_PerformanceObserver')
__publicField3(_PerformanceObserver2, 'supportedEntryTypes', _supportedEntryTypes2)
var PerformanceObserver2 = globalThis.PerformanceObserver || _PerformanceObserver2
var _PerformanceObserverEntryList2 = /* @__PURE__ */ __name(
  class {
    __unenv__ = true
    getEntries() {
      return []
    }
    getEntriesByName(_name, _type) {
      return []
    }
    getEntriesByType(type2) {
      return []
    }
  },
  '_PerformanceObserverEntryList'
)
__name2(_PerformanceObserverEntryList2, '_PerformanceObserverEntryList')
var PerformanceObserverEntryList2 =
  globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList2
function getGlobal3() {
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  return {}
}
__name(getGlobal3, 'getGlobal')
__name2(getGlobal3, 'getGlobal')
var global_this_default2 = getGlobal3()
global_this_default2.performance = global_this_default2.performance || performance22
global_this_default2.Performance = global_this_default2.Performance || Performance2
global_this_default2.PerformanceEntry = global_this_default2.PerformanceEntry || PerformanceEntry2
global_this_default2.PerformanceMark = global_this_default2.PerformanceMark || PerformanceMark2
global_this_default2.PerformanceMeasure =
  global_this_default2.PerformanceMeasure || PerformanceMeasure2
global_this_default2.PerformanceObserver =
  global_this_default2.PerformanceObserver || PerformanceObserver2
global_this_default2.PerformanceObserverEntryList =
  global_this_default2.PerformanceObserverEntryList || PerformanceObserverEntryList2
global_this_default2.PerformanceResourceTiming =
  global_this_default2.PerformanceResourceTiming || PerformanceResourceTiming2
var performance_default2 = global_this_default2.performance
globalThis.performance = performance_default2
var empty_default2 = Object.freeze(
  Object.create(null, {
    __unenv__: { get: () => true },
  })
)
var _envShim3 = /* @__PURE__ */ Object.create(null)
var _processEnv3 = globalThis.process?.env
var _getEnv3 = /* @__PURE__ */ __name2(
  (useShim) => _processEnv3 || globalThis.__env__ || (useShim ? _envShim3 : globalThis),
  '_getEnv'
)
var env3 = new Proxy(_envShim3, {
  get(_2, prop) {
    const env222 = _getEnv3()
    return env222[prop] ?? _envShim3[prop]
  },
  has(_2, prop) {
    const env222 = _getEnv3()
    return prop in env222 || prop in _envShim3
  },
  set(_2, prop, value) {
    const env222 = _getEnv3(true)
    env222[prop] = value
    return true
  },
  deleteProperty(_2, prop) {
    const env222 = _getEnv3(true)
    delete env222[prop]
    return true
  },
  ownKeys() {
    const env222 = _getEnv3()
    return Object.keys(env222)
  },
})
var hrtime3 = Object.assign(
  /* @__PURE__ */ __name2(
    /* @__PURE__ */ __name(function hrtime22(startTime) {
      const now = Date.now()
      const seconds = Math.trunc(now / 1e3)
      const nanos = (now % 1e3) * 1e6
      if (startTime) {
        let diffSeconds = seconds - startTime[0]
        let diffNanos = nanos - startTime[0]
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1
          diffNanos = 1e9 + diffNanos
        }
        return [diffSeconds, diffNanos]
      }
      return [seconds, nanos]
    }, 'hrtime2'),
    'hrtime2'
  ),
  {
    bigint: /* @__PURE__ */ __name2(
      /* @__PURE__ */ __name(function bigint2() {
        return BigInt(Date.now() * 1e6)
      }, 'bigint'),
      'bigint'
    ),
  }
)
var nextTick3 = globalThis.queueMicrotask
  ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args))
    }
  : _createNextTickWithTimeout2()
function _createNextTickWithTimeout2() {
  let queue2 = []
  let draining2 = false
  let currentQueue2
  let queueIndex2 = -1
  function cleanUpNextTick2() {
    if (!draining2 || !currentQueue2) {
      return
    }
    draining2 = false
    if (currentQueue2.length > 0) {
      queue2 = [...currentQueue2, ...queue2]
    } else {
      queueIndex2 = -1
    }
    if (queue2.length > 0) {
      drainQueue2()
    }
  }
  __name(cleanUpNextTick2, 'cleanUpNextTick')
  __name2(cleanUpNextTick2, 'cleanUpNextTick')
  function drainQueue2() {
    if (draining2) {
      return
    }
    const timeout = setTimeout(cleanUpNextTick2)
    draining2 = true
    let len = queue2.length
    while (len) {
      currentQueue2 = queue2
      queue2 = []
      while (++queueIndex2 < len) {
        if (currentQueue2) {
          currentQueue2[queueIndex2]()
        }
      }
      queueIndex2 = -1
      len = queue2.length
    }
    currentQueue2 = void 0
    draining2 = false
    clearTimeout(timeout)
  }
  __name(drainQueue2, 'drainQueue')
  __name2(drainQueue2, 'drainQueue')
  const nextTick222 = /* @__PURE__ */ __name2((cb, ...args) => {
    queue2.push(cb.bind(void 0, ...args))
    if (queue2.length === 1 && !draining2) {
      setTimeout(drainQueue2)
    }
  }, 'nextTick2')
  return nextTick222
}
__name(_createNextTickWithTimeout2, '_createNextTickWithTimeout')
__name2(_createNextTickWithTimeout2, '_createNextTickWithTimeout')
var title2 = 'unenv'
var argv2 = []
var version3 = ''
var versions2 = {
  ares: '',
  http_parser: '',
  icu: '',
  modules: '',
  node: '',
  openssl: '',
  uv: '',
  v8: '',
  zlib: '',
}
function noop3() {
  return process3
}
__name(noop3, 'noop')
__name2(noop3, 'noop')
var on2 = noop3
var addListener2 = noop3
var once2 = noop3
var off2 = noop3
var removeListener2 = noop3
var removeAllListeners2 = noop3
var emit3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function emit22(event) {
    if (event === 'message' || event === 'multipleResolves') {
      return process3
    }
    return false
  }, 'emit2'),
  'emit2'
)
var prependListener2 = noop3
var prependOnceListener2 = noop3
var listeners2 = /* @__PURE__ */ __name2((name2) => [], 'listeners')
var listenerCount2 = /* @__PURE__ */ __name2(() => 0, 'listenerCount')
var binding2 = /* @__PURE__ */ __name2((name2) => {
  throw new Error('[unenv] process.binding is not supported')
}, 'binding')
var _cwd2 = '/'
var cwd4 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function cwd22() {
    return _cwd2
  }, 'cwd2'),
  'cwd2'
)
var chdir3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function chdir22(dir32) {
    _cwd2 = dir32
  }, 'chdir2'),
  'chdir2'
)
var umask3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function umask22() {
    return 0
  }, 'umask2'),
  'umask2'
)
var getegid3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function getegid22() {
    return 1e3
  }, 'getegid2'),
  'getegid2'
)
var geteuid3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function geteuid22() {
    return 1e3
  }, 'geteuid2'),
  'geteuid2'
)
var getgid3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function getgid22() {
    return 1e3
  }, 'getgid2'),
  'getgid2'
)
var getuid3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function getuid22() {
    return 1e3
  }, 'getuid2'),
  'getuid2'
)
var getgroups3 = /* @__PURE__ */ __name2(
  /* @__PURE__ */ __name(function getgroups22() {
    return []
  }, 'getgroups2'),
  'getgroups2'
)
var getBuiltinModule3 = /* @__PURE__ */ __name2((_name) => void 0, 'getBuiltinModule')
var abort2 = notImplemented3('process.abort')
var allowedNodeEnvironmentFlags2 = /* @__PURE__ */ new Set()
var arch2 = ''
var argv02 = ''
var config3 = empty_default2
var connected2 = false
var constrainedMemory2 = /* @__PURE__ */ __name2(() => 0, 'constrainedMemory')
var availableMemory2 = /* @__PURE__ */ __name2(() => 0, 'availableMemory')
var cpuUsage2 = notImplemented3('process.cpuUsage')
var debugPort2 = 0
var dlopen2 = notImplemented3('process.dlopen')
var disconnect2 = noop3
var emitWarning2 = noop3
var eventNames2 = notImplemented3('process.eventNames')
var execArgv2 = []
var execPath2 = ''
var exit3 = notImplemented3('process.exit')
var features2 = /* @__PURE__ */ Object.create({
  inspector: void 0,
  debug: void 0,
  uv: void 0,
  ipv6: void 0,
  tls_alpn: void 0,
  tls_sni: void 0,
  tls_ocsp: void 0,
  tls: void 0,
  cached_builtins: void 0,
})
var getActiveResourcesInfo2 = /* @__PURE__ */ __name2(() => [], 'getActiveResourcesInfo')
var getMaxListeners2 = notImplemented3('process.getMaxListeners')
var kill2 = notImplemented3('process.kill')
var memoryUsage2 = Object.assign(
  () => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0,
  }),
  { rss: () => 0 }
)
var pid2 = 1e3
var platform3 = ''
var ppid2 = 1e3
var rawListeners2 = notImplemented3('process.rawListeners')
var release2 = /* @__PURE__ */ Object.create({
  name: '',
  lts: '',
  sourceUrl: void 0,
  headersUrl: void 0,
})
var report2 = /* @__PURE__ */ Object.create({
  compact: void 0,
  directory: void 0,
  filename: void 0,
  getReport: notImplemented3('process.report.getReport'),
  reportOnFatalError: void 0,
  reportOnSignal: void 0,
  reportOnUncaughtException: void 0,
  signal: void 0,
  writeReport: notImplemented3('process.report.writeReport'),
})
var resourceUsage2 = notImplemented3('process.resourceUsage')
var setegid2 = notImplemented3('process.setegid')
var seteuid2 = notImplemented3('process.seteuid')
var setgid2 = notImplemented3('process.setgid')
var setgroups2 = notImplemented3('process.setgroups')
var setuid2 = notImplemented3('process.setuid')
var setMaxListeners2 = notImplemented3('process.setMaxListeners')
var setSourceMapsEnabled2 = notImplemented3('process.setSourceMapsEnabled')
var stdout2 = proxy_default2.__createMock__('process.stdout')
var stderr2 = proxy_default2.__createMock__('process.stderr')
var stdin2 = proxy_default2.__createMock__('process.stdin')
var traceDeprecation2 = false
var uptime2 = /* @__PURE__ */ __name2(() => 0, 'uptime')
var exitCode2 = 0
var setUncaughtExceptionCaptureCallback2 = notImplemented3(
  'process.setUncaughtExceptionCaptureCallback'
)
var hasUncaughtExceptionCaptureCallback2 = /* @__PURE__ */ __name2(
  () => false,
  'hasUncaughtExceptionCaptureCallback'
)
var sourceMapsEnabled2 = false
var loadEnvFile2 = notImplemented3('process.loadEnvFile')
var mainModule2 = void 0
var permission2 = {
  has: () => false,
}
var channel2 = {
  ref() {},
  unref() {},
}
var throwDeprecation2 = false
var assert32 = notImplemented3('process.assert')
var openStdin2 = notImplemented3('process.openStdin')
var _debugEnd2 = notImplemented3('process._debugEnd')
var _debugProcess2 = notImplemented3('process._debugProcess')
var _fatalException2 = notImplemented3('process._fatalException')
var _getActiveHandles2 = notImplemented3('process._getActiveHandles')
var _getActiveRequests2 = notImplemented3('process._getActiveRequests')
var _kill2 = notImplemented3('process._kill')
var _preload_modules2 = []
var _rawDebug2 = notImplemented3('process._rawDebug')
var _startProfilerIdleNotifier2 = notImplemented3('process._startProfilerIdleNotifier')
var _stopProfilerIdleNotifier2 = notImplemented3('process.__stopProfilerIdleNotifier')
var _tickCallback2 = notImplemented3('process._tickCallback')
var _linkedBinding2 = notImplemented3('process._linkedBinding')
var domain2 = proxy_default2.__createMock__('process.domain')
var initgroups2 = notImplemented3('process.initgroups')
var moduleLoadList2 = []
var reallyExit2 = noop3
var _exiting2 = false
var _events2 = []
var _eventsCount2 = 0
var _maxListeners2 = 0
var process3 = {
  // @ts-expect-error
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _maxListeners: _maxListeners2,
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _kill: _kill2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  domain: domain2,
  initgroups: initgroups2,
  moduleLoadList: moduleLoadList2,
  reallyExit: reallyExit2,
  exitCode: exitCode2,
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  loadEnvFile: loadEnvFile2,
  sourceMapsEnabled: sourceMapsEnabled2,
  throwDeprecation: throwDeprecation2,
  mainModule: mainModule2,
  permission: permission2,
  channel: channel2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  assert: assert32,
  binding: binding2,
  chdir: chdir3,
  config: config3,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  availableMemory: availableMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd4,
  debugPort: debugPort2,
  dlopen: dlopen2,
  disconnect: disconnect2,
  emit: emit3,
  emitWarning: emitWarning2,
  env: env3,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exit: exit3,
  features: features2,
  getBuiltinModule: getBuiltinModule3,
  getegid: getegid3,
  geteuid: geteuid3,
  getgid: getgid3,
  getgroups: getgroups3,
  getuid: getuid3,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getMaxListeners: getMaxListeners2,
  hrtime: hrtime3,
  kill: kill2,
  listeners: listeners2,
  listenerCount: listenerCount2,
  memoryUsage: memoryUsage2,
  nextTick: nextTick3,
  on: on2,
  off: off2,
  once: once2,
  openStdin: openStdin2,
  pid: pid2,
  platform: platform3,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setuid: setuid2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  title: title2,
  traceDeprecation: traceDeprecation2,
  umask: umask3,
  uptime: uptime2,
  version: version3,
  versions: versions2,
}
var unpatchedGlobalThisProcess2 = globalThis['process']
var getBuiltinModule22 = unpatchedGlobalThisProcess2.getBuiltinModule
var workerdProcess2 = getBuiltinModule22('node:process')
var { env: env22, exit: exit22, nextTick: nextTick22, platform: platform22 } = workerdProcess2
var _process2 = {
  /**
   * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
   */
  // @ts-expect-error (not typed)
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _kill: _kill2,
  _linkedBinding: _linkedBinding2,
  _maxListeners: _maxListeners2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  assert: assert32,
  availableMemory: availableMemory2,
  binding: binding2,
  chdir: chdir3,
  config: config3,
  constrainedMemory: constrainedMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd4,
  debugPort: debugPort2,
  dlopen: dlopen2,
  domain: domain2,
  emit: emit3,
  emitWarning: emitWarning2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exit: exit22,
  exitCode: exitCode2,
  features: features2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getMaxListeners: getMaxListeners2,
  getegid: getegid3,
  geteuid: geteuid3,
  getgid: getgid3,
  getgroups: getgroups3,
  getuid: getuid3,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  hrtime: hrtime3,
  initgroups: initgroups2,
  kill: kill2,
  listenerCount: listenerCount2,
  listeners: listeners2,
  loadEnvFile: loadEnvFile2,
  memoryUsage: memoryUsage2,
  moduleLoadList: moduleLoadList2,
  off: off2,
  on: on2,
  once: once2,
  openStdin: openStdin2,
  pid: pid2,
  platform: platform22,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  reallyExit: reallyExit2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setuid: setuid2,
  sourceMapsEnabled: sourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  title: title2,
  umask: umask3,
  uptime: uptime2,
  version: version3,
  versions: versions2,
  /**
   * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
   */
  env: env22,
  getBuiltinModule: getBuiltinModule22,
  nextTick: nextTick22,
}
var cloudflare_default22 = _process2
globalThis.process = cloudflare_default22
globalThis._importMeta_ = { url: 'file:///_entry.js', env: {} }

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/pages-dev-util.ts
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error('Pathname is undefined.')
  }
  if (!routingRule) {
    throw new Error('Routing rule is undefined.')
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule)
  return pathname.match(ruleRegExp) !== null
}
__name(isRoutingRuleMatch, 'isRoutingRuleMatch')
function transformRoutingRuleToRegExp(rule) {
  let transformedRule
  if (rule === '/' || rule === '/*') {
    transformedRule = rule
  } else if (rule.endsWith('/*')) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`
  } else if (rule.endsWith('/')) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`
  } else if (rule.endsWith('*')) {
    transformedRule = rule
  } else {
    transformedRule = `${rule}(/)?`
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, '\\.').replaceAll(/\*/g, '.*')}$`
  return new RegExp(transformedRule)
}
__name(transformRoutingRuleToRegExp, 'transformRoutingRuleToRegExp')

// .wrangler/tmp/pages-xt7H5X/anmc7bh6q1j.js
var define_ROUTES_default = {
  version: 1,
  include: ['/*'],
  exclude: ['/', '/.DS_Store', '/favicon.ico'],
}
var routes = define_ROUTES_default
var pages_dev_pipeline_default = {
  fetch(request, env4, context3) {
    const { pathname } = new URL(request.url)
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env4.ASSETS.fetch(request)
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (cloudflarePages.fetch === void 0) {
          throw new TypeError('Entry point missing `fetch` handler')
        }
        return cloudflarePages.fetch(request, env4, context3)
      }
    }
    return env4.ASSETS.fetch(request)
  },
}

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()
var drainBody = /* @__PURE__ */ __name(async (request, env4, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env4)
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader()
        while (!(await reader.read()).done) {}
      }
    } catch (e) {
      console.error('Failed to drain the unused request body.', e)
    }
  }
}, 'drainBody')
var middleware_ensure_req_body_drained_default = drainBody

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause),
  }
}
__name(reduceError, 'reduceError')
var jsonError = /* @__PURE__ */ __name(async (request, env4, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env4)
  } catch (e) {
    const error4 = reduceError(e)
    return Response.json(error4, {
      status: 500,
      headers: { 'MF-Experimental-Error-Stack': 'true' },
    })
  }
}, 'jsonError')
var middleware_miniflare3_json_error_default = jsonError

// .wrangler/tmp/bundle-fAlUd6/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
]
var middleware_insertion_facade_default = pages_dev_pipeline_default

// ../../node_modules/.pnpm/wrangler@3.84.1/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch()
init_modules_watch_stub()
init_virtual_unenv_global_polyfill_process()
init_virtual_unenv_global_polyfill_performance()
init_virtual_unenv_global_polyfill_console()
init_virtual_unenv_global_polyfill_set_immediate()
init_virtual_unenv_global_polyfill_clear_immediate()
var __facade_middleware__ = []
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat())
}
__name(__facade_register__, '__facade_register__')
function __facade_invokeChain__(request, env4, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail)
    },
  }
  return head(request, env4, ctx, middlewareCtx)
}
__name(__facade_invokeChain__, '__facade_invokeChain__')
function __facade_invoke__(request, env4, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env4, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware,
  ])
}
__name(__facade_invoke__, '__facade_invoke__')

// .wrangler/tmp/bundle-fAlUd6/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime
    this.cron = cron
    this.#noRetry = noRetry
  }
  #noRetry
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError('Illegal invocation')
    }
    this.#noRetry()
  }
}
__name(__Facade_ScheduledController__, '__Facade_ScheduledController__')
function wrapExportedHandler(worker) {
  if (
    __INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 ||
    __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0
  ) {
    return worker
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware)
  }
  const fetchDispatcher = /* @__PURE__ */ __name((request, env4, ctx) => {
    if (worker.fetch === void 0) {
      throw new Error('Handler does not export a fetch() function.')
    }
    return worker.fetch(request, env4, ctx)
  }, 'fetchDispatcher')
  return {
    ...worker,
    fetch(request, env4, ctx) {
      const dispatcher = /* @__PURE__ */ __name((type2, init) => {
        if (type2 === 'scheduled' && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? '',
            () => {}
          )
          return worker.scheduled(controller, env4, ctx)
        }
      }, 'dispatcher')
      return __facade_invoke__(request, env4, ctx, dispatcher, fetchDispatcher)
    },
  }
}
__name(wrapExportedHandler, 'wrapExportedHandler')
function wrapWorkerEntrypoint(klass) {
  if (
    __INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 ||
    __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0
  ) {
    return klass
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware)
  }
  return class extends klass {
    #fetchDispatcher = (request, env4, ctx) => {
      this.env = env4
      this.ctx = ctx
      if (super.fetch === void 0) {
        throw new Error('Entrypoint class does not define a fetch() function.')
      }
      return super.fetch(request)
    }
    #dispatcher = (type2, init) => {
      if (type2 === 'scheduled' && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(Date.now(), init.cron ?? '', () => {})
        return super.scheduled(controller)
      }
    }
    fetch(request) {
      return __facade_invoke__(request, this.env, this.ctx, this.#dispatcher, this.#fetchDispatcher)
    }
  }
}
__name(wrapWorkerEntrypoint, 'wrapWorkerEntrypoint')
var WRAPPED_ENTRY
if (typeof middleware_insertion_facade_default === 'object') {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default)
} else if (typeof middleware_insertion_facade_default === 'function') {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default)
}
var middleware_loader_entry_default = WRAPPED_ENTRY
export { __INTERNAL_WRANGLER_MIDDLEWARE__, middleware_loader_entry_default as default }
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
//# sourceMappingURL=anmc7bh6q1j.js.map
