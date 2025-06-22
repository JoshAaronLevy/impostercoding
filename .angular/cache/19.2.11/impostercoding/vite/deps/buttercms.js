import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/buttercms/dist/butter.esm.js
var e = {
  d: (t2, n2) => {
    for (var r2 in n2) e.o(n2, r2) && !e.o(t2, r2) && Object.defineProperty(t2, r2, {
      enumerable: true,
      get: n2[r2]
    });
  },
  o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2)
};
var t = {};
e.d(t, {
  A: () => u
});
var n = "2.0.0";
var r = "https://api.buttercms.com/v2";
var s = {
  author: "authors",
  category: "categories",
  content: "content",
  feed: "feeds",
  page: "pages",
  post: "posts",
  tag: "tags"
};
function o(e2, t2) {
  const _a = t2.config, {
    onError: n2,
    onRequest: r2,
    onResponse: s2
  } = _a, o2 = __objRest(_a, [
    "onError",
    "onRequest",
    "onResponse"
  ]), _b = t2.params, {
    auth_token: a2,
    test: c2,
    preview: i2
  } = _b, u2 = __objRest(_b, [
    "auth_token",
    "test",
    "preview"
  ]);
  n2 && n2(e2, {
    options: o2,
    params: u2,
    type: t2.type
  });
}
function a(e2, t2, n2) {
  const r2 = {
    auth_token: t2
  };
  return n2.testMode && (r2.test = 1, r2.preview = 1), __spreadValues(__spreadValues({}, e2), r2);
}
function c(e2, t2) {
  const c2 = function(e3) {
    return `${r}/${s[e3]}/`;
  }(e2), i2 = e2.replace(e2[0], e2[0].toUpperCase()), {
    abortOnTimeout: u2,
    applyRequestUrlForErrorMessages: l2,
    cancelRequest: p2,
    cleanup: f2,
    determineFetchError: m,
    signal: h
  } = function(e3) {
    let t3 = new AbortController(), n2 = "";
    function r2(e4) {
      return `${n2}: ${e4}`;
    }
    function s2() {
      t3 = null;
    }
    return {
      abortOnTimeout: function(e4) {
        t3.abort(r2(`Request timed out after ${e4}ms.`));
      },
      applyRequestUrlForErrorMessages: function(t4) {
        n2 = `${e3} (${t4})`;
      },
      cancelRequest: function() {
        t3.abort(r2("Request cancelled"));
      },
      cleanup: s2,
      controller: t3,
      determineFetchError: function(e4, n3) {
        const o2 = t3 && t3.signal.reason && t3.signal.aborted, a2 = "TimeoutError" === e4.name;
        return o2 ? t3.signal.reason : a2 ? r2(`Request timed out after ${n3}ms.`) : (s2(), e4);
      },
      signal: t3.signal
    };
  }(i2);
  function d() {
    return __async(this, arguments, function* (r2 = c2, s2 = {}) {
      const _a = t2, {
        apiToken: i3
      } = _a, d2 = __objRest(_a, [
        "apiToken"
      ]), g = new Headers({
        "Content-Type": "application/json",
        "X-Butter-Client": `JS/${n}`
      });
      "undefined" == typeof window && g.append("Accept-Encoding", "gzip"), l2(r2);
      const {
        config: R,
        headers: q,
        params: y
      } = yield function(e3, t3, n2) {
        return __async(this, null, function* () {
          const _a2 = n2.config, {
            onError: r3,
            onRequest: s3,
            onResponse: o2
          } = _a2, c3 = __objRest(_a2, [
            "onError",
            "onRequest",
            "onResponse"
          ]);
          if (s3) {
            const {
              headers: i4,
              options: u3,
              params: l3
            } = yield s3(e3, {
              cancelRequest: n2.cancelRequest,
              headers: n2.headers,
              options: c3,
              params: n2.params,
              type: n2.type
            });
            return {
              config: __spreadProps(__spreadValues({}, u3), {
                onError: r3,
                onRequest: s3,
                onResponse: o2
              }),
              headers: i4,
              params: a(l3, t3, u3)
            };
          }
          return __spreadProps(__spreadValues({}, n2), {
            params: a(n2.params, t3, c3)
          });
        });
      }(r2, i3, {
        cancelRequest: p2,
        config: d2,
        headers: g,
        params: s2,
        type: e2
      });
      try {
        const w = AbortSignal.timeout ? AbortSignal.timeout(R.timeout) : setTimeout(() => u2(R.timeout), R.timeout), v = yield fetch(`${r2}?${new URLSearchParams(y)}`, {
          cache: R.cache,
          method: "GET",
          headers: q,
          signal: AbortSignal.timeout ? AbortSignal.any([h, w]) : h
        });
        if (AbortSignal.timeout || clearTimeout(w), f2(), 200 !== v.status) throw {
          response: v,
          config: R,
          params: y
        };
        return yield function(e3, t3) {
          return __async(this, null, function* () {
            const _a2 = t3.config, {
              onError: n2,
              onRequest: r3,
              onResponse: s3
            } = _a2, o2 = __objRest(_a2, [
              "onError",
              "onRequest",
              "onResponse"
            ]), _b = t3.params, {
              auth_token: a2,
              test: c3,
              preview: i4
            } = _b, u3 = __objRest(_b, [
              "auth_token",
              "test",
              "preview"
            ]);
            if (s3) {
              const n3 = e3.clone();
              yield s3(n3, {
                options: o2,
                params: u3,
                type: t3.type
              });
            }
            return {
              data: yield e3.json(),
              headers: Object.fromEntries(e3.headers.entries()),
              status: e3.status,
              statusText: e3.statusText,
              config: {
                url: e3.url,
                method: "get",
                headers: Object.fromEntries(t3.requestHeaders.entries()),
                transformRequest: r3 ? [r3] : [],
                transformResponse: s3 ? [s3] : [],
                timeout: t3.config.timeout
              }
            };
          });
        }(v, {
          config: R,
          params: y,
          type: e2,
          requestHeaders: g
        });
      } catch (b) {
        if (b.response) {
          let A = function(e3) {
            const t3 = Object.keys(e3);
            return t3.length > 1 ? `Errors caught in [${t3.join(", ")}]: see cause for details` : `[${t3[0]}]: ${e3[t3[0]]}`;
          };
          const $ = yield b.response.json(), E = Object.fromEntries(Object.entries(b.params).filter(([e3]) => "auth_token" !== e3)), j = new URL(b.response.url);
          j.searchParams.delete("auth_token");
          const T = {
            data: $,
            headers: b.response.headers,
            status: b.response.status,
            statusText: b.response.statusText,
            config: b.config,
            params: E,
            type: e2,
            url: j
          };
          return o($, T), Promise.reject(new Error(`${A($)} (${b.response.status})`, {
            cause: T
          }));
        }
        {
          const O = m(b, R.timeout);
          return o(O, {
            config: R,
            params: y,
            type: e2
          }), f2(), Promise.reject(new Error(O));
        }
      }
    });
  }
  return {
    cancelRequest: p2,
    list: function() {
      return __async(this, arguments, function* (e3 = {}) {
        return yield d(c2, e3);
      });
    },
    retrieve: function(e3, t3) {
      return __async(this, null, function* () {
        return yield d(`${c2}${e3}/`, t3);
      });
    },
    search: function() {
      return __async(this, arguments, function* (e3 = "", t3 = {}) {
        return t3.query = e3, yield d(`${c2}search/`, t3);
      });
    }
  };
}
var i = {
  Author: function(e2 = {}) {
    const {
      cancelRequest: t2,
      list: n2,
      retrieve: r2
    } = c("author", e2);
    return {
      cancelRequest: t2,
      list: n2,
      retrieve: r2
    };
  },
  Category: function(e2 = {}) {
    const {
      cancelRequest: t2,
      list: n2,
      retrieve: r2
    } = c("category", e2);
    return {
      cancelRequest: t2,
      list: n2,
      retrieve: r2
    };
  },
  Content: function(e2 = {}) {
    const {
      cancelRequest: t2,
      retrieve: n2
    } = c("content", e2);
    return {
      cancelRequest: t2,
      retrieve: n2
    };
  },
  Feed: function(e2 = {}) {
    const {
      cancelRequest: t2,
      retrieve: n2
    } = c("feed", e2);
    return {
      cancelRequest: t2,
      retrieve: n2
    };
  },
  Page: function(e2 = {}) {
    const {
      cancelRequest: t2,
      retrieve: n2,
      search: r2
    } = c("page", e2);
    return {
      cancelRequest: t2,
      list: (e3, t3) => __async(null, null, function* () {
        return yield n2(e3, t3);
      }),
      retrieve: (e3, t3, r3) => __async(null, null, function* () {
        return yield n2(`${e3}/${t3}`, r3);
      }),
      search: r2
    };
  },
  Post: function(e2 = {}) {
    const {
      cancelRequest: t2,
      list: n2,
      retrieve: r2,
      search: s2
    } = c("post", e2);
    return {
      cancelRequest: t2,
      list: n2,
      retrieve: r2,
      search: s2
    };
  },
  Tag: function(e2 = {}) {
    const {
      cancelRequest: t2,
      list: n2,
      retrieve: r2
    } = c("tag", e2);
    return {
      cancelRequest: t2,
      list: n2,
      retrieve: r2
    };
  }
};
function u(e2, t2 = {}) {
  if (!e2) throw "ButterCMS API token not set";
  return this instanceof l ? l : new l(e2, t2);
}
function l(e2, t2) {
  const {
    cache: r2 = "default",
    onError: s2 = null,
    onRequest: o2 = null,
    onResponse: a2 = null,
    testMode: c2 = false,
    timeout: u2 = 3e3
  } = t2;
  return __spreadValues({
    version: n
  }, p(i, {
    apiToken: e2,
    cache: r2,
    onError: s2,
    onRequest: o2,
    onResponse: a2,
    testMode: c2,
    timeout: u2
  }));
}
function p(e2, t2) {
  return Object.keys(e2).reduce((n2, r2) => __spreadProps(__spreadValues({}, n2), {
    [r2.toLocaleLowerCase()]: e2[r2](t2)
  }), {});
}
var f = t.A;
export {
  f as default
};
//# sourceMappingURL=buttercms.js.map
