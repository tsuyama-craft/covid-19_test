(function (e) {
  function n(n) {
    for (var r, o, u = n[0], i = n[1], s = n[2], l = 0, d = []; l < u.length; l++) o = u[l], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    f && f(n);
    while (d.length) d.shift()();
    return c.push.apply(c, s || []), t()
  }

  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], r = !0, o = 1; o < t.length; o++) {
        var u = t[o];
        0 !== a[u] && (r = !1)
      }
      r && (c.splice(n--, 1), e = i(i.s = t[0]))
    }
    return e
  }
  var r = {},
    o = {
      app: 0
    },
    a = {
      app: 0
    },
    c = [];

  function u(e) {
    return i.p + "js/" + ({}[e] || e) + "." + {
      "chunk-5797275a": "201cea7b",
      "chunk-723def32": "82775452",
      "chunk-9d54f916": "da426d8e",
      "chunk-c6ee0de0": "a3b10ba9",
      "chunk-5866690a": "e2664e9d",
      "chunk-72e1462c": "aaf1724b",
      "chunk-e844c228": "705f1117"
    }[e] + ".js"
  }

  function i(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, i), t.l = !0, t.exports
  }
  i.e = function (e) {
    var n = [],
      t = {
        "chunk-5797275a": 1,
        "chunk-723def32": 1,
        "chunk-9d54f916": 1,
        "chunk-c6ee0de0": 1,
        "chunk-5866690a": 1,
        "chunk-72e1462c": 1,
        "chunk-e844c228": 1
      };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise((function (n, t) {
      for (var r = "css/" + ({}[e] || e) + "." + {
        "chunk-5797275a": "1fb628e9",
        "chunk-723def32": "899016dd",
        "chunk-9d54f916": "edf6e028",
        "chunk-c6ee0de0": "ef6e8770",
        "chunk-5866690a": "90bb780c",
        "chunk-72e1462c": "af630103",
        "chunk-e844c228": "8af1033f"
      }[e] + ".css", a = i.p + r, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
        var s = c[u],
          l = s.getAttribute("data-href") || s.getAttribute("href");
        if ("stylesheet" === s.rel && (l === r || l === a)) return n()
      }
      var d = document.getElementsByTagName("style");
      for (u = 0; u < d.length; u++) {
        s = d[u], l = s.getAttribute("data-href");
        if (l === r || l === a) return n()
      }
      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = n, f.onerror = function (n) {
        var r = n && n.target && n.target.src || a,
          c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        c.code = "CSS_CHUNK_LOAD_FAILED", c.request = r, delete o[e], f.parentNode.removeChild(f), t(c)
      }, f.href = a;
      var p = document.getElementsByTagName("head")[0];
      p.appendChild(f)
    })).then((function () {
      o[e] = 0
    })));
    var r = a[e];
    if (0 !== r)
      if (r) n.push(r[2]);
      else {
        var c = new Promise((function (n, t) {
          r = a[e] = [n, t]
        }));
        n.push(r[2] = c);
        var s, l = document.createElement("script");
        l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = u(e);
        var d = new Error;
        s = function (n) {
          l.onerror = l.onload = null, clearTimeout(f);
          var t = a[e];
          if (0 !== t) {
            if (t) {
              var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src;
              d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", d.name = "ChunkLoadError", d.type = r, d.request = o, t[1](d)
            }
            a[e] = void 0
          }
        };
        var f = setTimeout((function () {
          s({
            type: "timeout",
            target: l
          })
        }), 12e4);
        l.onerror = l.onload = s, document.head.appendChild(l)
      }
    return Promise.all(n)
  }, i.m = e, i.c = r, i.d = function (e, n, t) {
    i.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    })
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.t = function (e, n) {
    if (1 & n && (e = i(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (i.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e)
      for (var r in e) i.d(t, r, function (n) {
        return e[n]
      }.bind(null, r));
    return t
  }, i.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return i.d(n, "a", n), n
  }, i.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }, i.p = "", i.oe = function (e) {
    throw console.error(e), e
  };
  var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = s.push.bind(s);
  s.push = n, s = s.slice();
  for (var d = 0; d < s.length; d++) n(s[d]);
  var f = l;
  c.push([0, "chunk-vendors"]), t()
})({
  0: function (e, n, t) {
    e.exports = t("56d7")
  },
  "56d7": function (e, n, t) {
    "use strict";
    t.r(n);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var r = t("7a23");

    function o(e, n, t, o, a, c) {
      var u = Object(r["x"])("router-view");
      return Object(r["q"])(), Object(r["d"])(u)
    }
    t("64be");
    const a = {};
    a.render = o;
    var c = a,
      u = t("9483");
    Object(u["a"])("".concat("", "service-worker.js"), {
      ready: function () {
        console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
      },
      registered: function () {
        console.log("Service worker has been registered.")
      },
      cached: function () {
        console.log("Content has been cached for offline use.")
      },
      updatefound: function () {
        console.log("New content is downloading.")
      },
      updated: function () {
        console.log("New content is available; please refresh.")
      },
      offline: function () {
        console.log("No internet connection found. App is running in offline mode.")
      },
      error: function (e) {
        console.error("Error during service worker registration:", e)
      }
    });
    t("d3b7");
    var i = t("6c02"),
      s = [{
        path: "/",
        name: "Mainpage",
        component: function () {
          return Promise.all([t.e("chunk-c6ee0de0"), t.e("chunk-72e1462c")]).then(t.bind(null, "4edd"))
        }
      }, {
        path: "/Detailspage",
        name: "detailspage",
        component: function () {
          return t.e("chunk-9d54f916").then(t.bind(null, "4811"))
        }
      }, {
        path: "/shisetupage",
        name: "shisetupage",
        component: function () {
          return t.e("chunk-5797275a").then(t.bind(null, "7796"))
        }
      }, {
        path: "/helppage",
        name: "helppage",
        component: function () {
          return t.e("chunk-723def32").then(t.bind(null, "681d"))
        }
      }, {
        path: "/shisetupage/itiranpage",
        name: "Shisetu_itiranpage",
        component: function () {
          return Promise.all([t.e("chunk-c6ee0de0"), t.e("chunk-5866690a")]).then(t.bind(null, "a239"))
        },
        props: !0
      }, {
        path: "/shisetupage/itiran/syousai",
        name: "Shisetu_syousaipage",
        component: function () {
          return t.e("chunk-e844c228").then(t.bind(null, "ee4b"))
        },
        props: !0
      }],
      l = Object(i["a"])({
        history: Object(i["b"])(""),
        routes: s
      }),
      d = l,
      f = t("5502"),
      p = t("0e44"),
      h = Object(f["a"])({
        state: {
          detaildata: [],
          detaildata2: [],
          facilityTableData: []
        },
        mutations: {
          Enter: function (e, n) {
            e.detaildata = n
          },
          Enter2: function (e, n) {
            e.detaildata2 = n
          },
          toStore: function (e, n) {
            e.facilityTableData = n
          }
        },
        actions: {},
        modules: {},
        plugins: [Object(p["a"])({
          storage: window.sessionStorage
        })]
      }),
      g = Object(r["c"])(c);
    g.config.devtools = !0, g.use(h).use(d).mount("#app")
  },
  "64be": function (e, n, t) {
    "use strict";
    t("c894")
  },
  c894: function (e, n, t) { }
});
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ZGZiNiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNmN2UiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJpbnN0YWxsZWRDc3NDaHVua3MiLCJqc29ucFNjcmlwdFNyYyIsInAiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsImUiLCJwcm9taXNlcyIsImNzc0NodW5rcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImZ1bGxocmVmIiwiZXhpc3RpbmdMaW5rVGFncyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWciLCJkYXRhSHJlZiIsImdldEF0dHJpYnV0ZSIsInJlbCIsImV4aXN0aW5nU3R5bGVUYWdzIiwibGlua1RhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25sb2FkIiwib25lcnJvciIsImV2ZW50IiwicmVxdWVzdCIsInRhcmdldCIsInNyYyIsImVyciIsIkVycm9yIiwiY29kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInRoZW4iLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwib25TY3JpcHRDb21wbGV0ZSIsInNjcmlwdCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNodW5rIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImFsbCIsIm0iLCJjIiwiZCIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm9lIiwiY29uc29sZSIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJyZW5kZXIiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJyZWFkeSIsImxvZyIsInJlZ2lzdGVyZWQiLCJjYWNoZWQiLCJ1cGRhdGVmb3VuZCIsInVwZGF0ZWQiLCJvZmZsaW5lIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwiY3JlYXRlUm91dGVyIiwiaGlzdG9yeSIsImNyZWF0ZVdlYkhhc2hIaXN0b3J5IiwiY3JlYXRlU3RvcmUiLCJzdGF0ZSIsImRldGFpbGRhdGEiLCJkZXRhaWxkYXRhMiIsImZhY2lsaXR5VGFibGVEYXRhIiwibXV0YXRpb25zIiwiRW50ZXIiLCJFbnRlcjIiLCJ0b1N0b3JlIiwiYWN0aW9ucyIsInBsdWdpbnMiLCJjcmVhdGVQZXJzaXN0ZWRTdGF0ZSIsInN0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsImFwcCIsImNyZWF0ZUFwcCIsIkFwcCIsImNvbmZpZyIsImRldnRvb2xzIiwidXNlIiwic3RvcmUiLCJtb3VudCJdLCJtYXBwaW5ncyI6ImFBQ0UsU0FBU0EsRUFBcUJDLEdBUTdCLElBUEEsSUFNSUMsRUFBVUMsRUFOVkMsRUFBV0gsRUFBSyxHQUNoQkksRUFBY0osRUFBSyxHQUNuQkssRUFBaUJMLEVBQUssR0FJSE0sRUFBSSxFQUFHQyxFQUFXLEdBQ3BDRCxFQUFJSCxFQUFTSyxPQUFRRixJQUN6QkosRUFBVUMsRUFBU0csR0FDaEJHLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtDLEVBQWlCWCxJQUFZVyxFQUFnQlgsSUFDcEZLLEVBQVNPLEtBQUtELEVBQWdCWCxHQUFTLElBRXhDVyxFQUFnQlgsR0FBVyxFQUU1QixJQUFJRCxLQUFZRyxFQUNaSyxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLUixFQUFhSCxLQUNwRGMsRUFBUWQsR0FBWUcsRUFBWUgsSUFHL0JlLEdBQXFCQSxFQUFvQmhCLEdBRTVDLE1BQU1PLEVBQVNDLE9BQ2RELEVBQVNVLE9BQVRWLEdBT0QsT0FIQVcsRUFBZ0JKLEtBQUtLLE1BQU1ELEVBQWlCYixHQUFrQixJQUd2RGUsSUFFUixTQUFTQSxJQUVSLElBREEsSUFBSUMsRUFDSWYsRUFBSSxFQUFHQSxFQUFJWSxFQUFnQlYsT0FBUUYsSUFBSyxDQUcvQyxJQUZBLElBQUlnQixFQUFpQkosRUFBZ0JaLEdBQ2pDaUIsR0FBWSxFQUNSQyxFQUFJLEVBQUdBLEVBQUlGLEVBQWVkLE9BQVFnQixJQUFLLENBQzlDLElBQUlDLEVBQVFILEVBQWVFLEdBQ0csSUFBM0JYLEVBQWdCWSxLQUFjRixHQUFZLEdBRTNDQSxJQUNGTCxFQUFnQlEsT0FBT3BCLElBQUssR0FDNUJlLEVBQVNNLEVBQW9CQSxFQUFvQkMsRUFBSU4sRUFBZSxL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QUFPLEdBRVQsQ0FDRUYsS0FBTSw4QkFDTjNDLEtBQU0sc0JBQ040QyxVQUFXLGtCQUFNLGlEQUNqQkMsT0FBTyxJQUlMQyxFQUFTQyxlQUFhLENBQzFCQyxRQUFTQyxlQUFxQmYsSUFDOUJRLFdBR2FJLEksd0JDdkNBSSxpQkFBWSxDQUN6QkMsTUFBTyxDQUNMQyxXQUFZLEdBQ1pDLFlBQWEsR0FDYkMsa0JBQW1CLElBRXJCQyxVQUFXLENBQ1RDLE1BRFMsU0FDRkwsRUFBT3RJLEdBQ1ZzSSxFQUFNQyxXQUFhdkksR0FFdkI0SSxPQUpTLFNBSUROLEVBQU90SSxHQUNic0ksRUFBTUUsWUFBY3hJLEdBRXRCNkksUUFQUyxTQU9BUCxFQUFPdEksR0FDZHNJLEVBQU1HLGtCQUFvQnpJLElBRzlCOEksUUFBUyxHQUVUL0gsUUFBUyxHQUVUZ0ksUUFBUyxDQUFDQyxlQUFxQixDQUM3QkMsUUFBU2pDLE9BQU9rQyxvQkNuQmRDLEVBQU1DLGVBQVVDLEdBRXRCRixFQUFJRyxPQUFPQyxVQUFXLEVBQ3RCSixFQUFJSyxJQUFJQyxHQUFPRCxJQUFJdkIsR0FBUXlCLE1BQU0sUyxvQ0NUakMsVyIsImZpbGUiOiJqcy9hcHAuNjYzNDdhMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcImpzL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiY2h1bmstNTc5NzI3NWFcIjpcIjIwMWNlYTdiXCIsXCJjaHVuay03MjNkZWYzMlwiOlwiODI3NzU0NTJcIixcImNodW5rLTlkNTRmOTE2XCI6XCJkYTQyNmQ4ZVwiLFwiY2h1bmstYzZlZTBkZTBcIjpcImEzYjEwYmE5XCIsXCJjaHVuay01ODY2NjkwYVwiOlwiZTI2NjRlOWRcIixcImNodW5rLTcyZTE0NjJjXCI6XCJhYWYxNzI0YlwiLFwiY2h1bmstZTg0NGMyMjhcIjpcIjcwNWYxMTE3XCJ9W2NodW5rSWRdICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcImNodW5rLTU3OTcyNzVhXCI6MSxcImNodW5rLTcyM2RlZjMyXCI6MSxcImNodW5rLTlkNTRmOTE2XCI6MSxcImNodW5rLWM2ZWUwZGUwXCI6MSxcImNodW5rLTU4NjY2OTBhXCI6MSxcImNodW5rLTcyZTE0NjJjXCI6MSxcImNodW5rLWU4NDRjMjI4XCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcImNzcy9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcImNodW5rLTU3OTcyNzVhXCI6XCIxZmI2MjhlOVwiLFwiY2h1bmstNzIzZGVmMzJcIjpcIjg5OTAxNmRkXCIsXCJjaHVuay05ZDU0ZjkxNlwiOlwiZWRmNmUwMjhcIixcImNodW5rLWM2ZWUwZGUwXCI6XCJlZjZlODc3MFwiLFwiY2h1bmstNTg2NjY5MGFcIjpcIjkwYmI3ODBjXCIsXCJjaHVuay03MmUxNDYyY1wiOlwiYWY2MzAxMDNcIixcImNodW5rLWU4NDRjMjI4XCI6XCI4YWYxMDMzZlwifVtjaHVua0lkXSArIFwiLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXVxuIFx0XHRcdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwiY2h1bmstdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHJvdXRlci12aWV3Lz5cbjwvdGVtcGxhdGU+XG5cblxuXG48c3R5bGU+XG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cblxuI25hdiBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4jbmF2IGEucm91dGVyLWxpbmstZXhhY3QtYWN0aXZlIHtcbiAgY29sb3I6ICM0MmI5ODM7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODkzYjdlYVwiXG5jb25zdCBzY3JpcHQgPSB7fVxuXG5pbXBvcnQgXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdyZWdpc3Rlci1zZXJ2aWNlLXdvcmtlcidcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcmVnaXN0ZXIoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9c2VydmljZS13b3JrZXIuanNgLCB7XG4gICAgcmVhZHkgKCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdBcHAgaXMgYmVpbmcgc2VydmVkIGZyb20gY2FjaGUgYnkgYSBzZXJ2aWNlIHdvcmtlci5cXG4nICtcbiAgICAgICAgJ0ZvciBtb3JlIGRldGFpbHMsIHZpc2l0IGh0dHBzOi8vZ29vLmdsL0FGc2txQidcbiAgICAgIClcbiAgICB9LFxuICAgIHJlZ2lzdGVyZWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIGhhcyBiZWVuIHJlZ2lzdGVyZWQuJylcbiAgICB9LFxuICAgIGNhY2hlZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29udGVudCBoYXMgYmVlbiBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpXG4gICAgfSxcbiAgICB1cGRhdGVmb3VuZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnTmV3IGNvbnRlbnQgaXMgZG93bmxvYWRpbmcuJylcbiAgICB9LFxuICAgIHVwZGF0ZWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZTsgcGxlYXNlIHJlZnJlc2guJylcbiAgICB9LFxuICAgIG9mZmxpbmUgKCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIGludGVybmV0IGNvbm5lY3Rpb24gZm91bmQuIEFwcCBpcyBydW5uaW5nIGluIG9mZmxpbmUgbW9kZS4nKVxuICAgIH0sXG4gICAgZXJyb3IgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKVxuICAgIH1cbiAgfSlcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGFzaEhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ01haW5wYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvTWFpbnBhZ2UudnVlJylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvRGV0YWlsc3BhZ2UnLFxuICAgIG5hbWU6ICdkZXRhaWxzcGFnZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL0RldGFpbHNwYWdlLnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3NoaXNldHVwYWdlJyxcbiAgICBuYW1lOiAnc2hpc2V0dXBhZ2UnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TaGlzZXR1cGFnZS52dWUnKVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9oZWxwcGFnZScsXG4gICAgbmFtZTogJ2hlbHBwYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvSGVscHBhZ2UudnVlJylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvc2hpc2V0dXBhZ2UvaXRpcmFucGFnZScsXG4gICAgbmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL1NoaXNldHVfaXRpcmFucGFnZS52dWUnKSxcbiAgICBwcm9wczogdHJ1ZVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9zaGlzZXR1cGFnZS9pdGlyYW4vc3lvdXNhaScsXG4gICAgbmFtZTogJ1NoaXNldHVfc3lvdXNhaXBhZ2UnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TaGlzZXR1X3N5b3VzYWlwYWdlLnZ1ZScpLFxuICAgIHByb3BzOiB0cnVlXG4gIH0sXG5dXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhhc2hIaXN0b3J5KHByb2Nlc3MuZW52LkJBU0VfVVJMKSxcbiAgcm91dGVzXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAndnVleCdcbmltcG9ydCBjcmVhdGVQZXJzaXN0ZWRTdGF0ZSBmcm9tICd2dWV4LXBlcnNpc3RlZHN0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XG4gIHN0YXRlOiB7XG4gICAgZGV0YWlsZGF0YTogW10sXG4gICAgZGV0YWlsZGF0YTI6IFtdLFxuICAgIGZhY2lsaXR5VGFibGVEYXRhOiBbXSxcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgRW50ZXIgKHN0YXRlLCBkYXRhKSB7XG4gICAgICAgIHN0YXRlLmRldGFpbGRhdGEgPSBkYXRhO1xuICAgIH0sXG4gICAgRW50ZXIyIChzdGF0ZSwgZGF0YSkge1xuICAgICAgc3RhdGUuZGV0YWlsZGF0YTIgPSBkYXRhO1xuICAgIH0sXG4gICAgdG9TdG9yZSAoc3RhdGUsIGRhdGEpIHtcbiAgICAgIHN0YXRlLmZhY2lsaXR5VGFibGVEYXRhID0gZGF0YTtcbiAgICB9LFxuICB9LFxuICBhY3Rpb25zOiB7XG4gIH0sXG4gIG1vZHVsZXM6IHtcbiAgfSxcbiAgcGx1Z2luczogW2NyZWF0ZVBlcnNpc3RlZFN0YXRlKHtcbiAgICBzdG9yYWdlOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VcbiAgfSldXG59KVxuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcclxuaW1wb3J0ICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlcidcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxyXG5cclxuYXBwLmNvbmZpZy5kZXZ0b29scyA9IHRydWVcclxuYXBwLnVzZShzdG9yZSkudXNlKHJvdXRlcikubW91bnQoJyNhcHAnKSIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiJdLCJzb3VyY2VSb290IjoiIn0=