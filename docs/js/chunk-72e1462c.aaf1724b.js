(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-72e1462c"], {
      "13d5": function (t, e, a) {
        "use strict";
        var n = a("23e7"),
          i = a("d58f").left,
          c = a("a640"),
          s = a("ae40"),
          r = c("reduce"),
          o = s("reduce", {
            1: 0
          });
        n({
          target: "Array",
          proto: !0,
          forced: !r || !o
        }, {
          reduce: function (t) {
            return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
          }
        })
      },
      "4edd": function (t, e, a) {
        "use strict";
        a.r(e);
        var n = a("7a23"),
          i = Object(n["F"])("data-v-e86e5192");
        Object(n["t"])("data-v-e86e5192");
        var c = Object(n["h"])("h1", null, "新型コロナウイルス情報", -1),
          s = {
            key: 0,
            class: "flex"
          },
          r = {
            class: "box"
          },
          o = {
            class: "box"
          },
          u = {
            class: "box"
          },
          d = {
            class: "box"
          },
          h = {
            class: "box"
          },
          l = {
            class: "box27"
          },
          b = Object(n["h"])("span", {
            class: "box-title"
          }, "病床使用数", -1),
          f = {
            class: "text"
          },
          k = Object(n["h"])("br", null, null, -1),
          p = {
            class: "ueo"
          },
          g = {
            key: 1,
            class: "loader"
          };
        Object(n["r"])();
        var j = i((function (t, e, a, i, j, v) {
            var O = Object(n["x"])("mainmenu"),
              m = Object(n["x"])("labelbox");
            return Object(n["q"])(), Object(n["d"])("div", null, [Object(n["h"])(O, {
              judge: "0"
            }), c, v.readyToshowMainPage ? (Object(n["q"])(), Object(n["d"])("div", s, [Object(n["h"])("div", r, [Object(n["h"])(m, {
              class: "box1",
              msg: "感染者数",
              idname: "kansen",
              infected: v.infected
            }, null, 8, ["infected"])]), Object(n["h"])("div", o, [Object(n["h"])(m, {
              class: "box2",
              msg: "死者数",
              idname: "dead",
              infected: v.dead
            }, null, 8, ["infected"])]), Object(n["h"])("div", u, [Object(n["h"])(m, {
              class: "box3",
              msg: "PCR検査数",
              idname: "pcr",
              infected: v.pcr
            }, null, 8, ["infected"])]), Object(n["h"])("div", d, [Object(n["h"])(m, {
              class: "box4",
              msg: "退院者数",
              idname: "dischange",
              infected: v.discharge
            }, null, 8, ["infected"])]), Object(n["h"])("div", h, [Object(n["h"])("div", l, [b, Object(n["h"])("input", {
              type: "radio",
              id: v.zenkokuId,
              name: "TAB",
              class: "tab-switch",
              checked: "checked"
            }, null, 8, ["id"]), Object(n["h"])("label", {
              for: v.zenkokuId,
              class: "tab-label"
            }, "岡山", 8, ["for"]), Object(n["h"])("div", f, [Object(n["g"])(Object(n["z"])(v.use) + "/" + Object(n["z"])(v.all), 1), k, Object(n["h"])("p", p, Object(n["z"])(v.update), 1)])])])])) : (Object(n["q"])(), Object(n["d"])("div", g))])
          })),
          v = a("c287");
        a("6678");
        v["a"].render = j, v["a"].__scopeId = "data-v-e86e5192";
        e["default"] = v["a"]
      },
      5899: function (t, e) {
        t.exports = "\t\n\v\f\r "
      },
      "58a8": function (t, e, a) {
        var n = a("1d80"),
          i = a("5899"),
          c = "[" + i + "]",
          s = RegExp("^" + c + c + "*"),
          r = RegExp(c + c + "*$"),
          o = function (t) {
            return function (e) {
              var a = String(n(e));
              return 1 & t && (a = a.replace(s, "")), 2 & t && (a = a.replace(r, "")), a
            }
          };
        t.exports = {
          start: o(1),
          end: o(2),
          trim: o(3)
        }
      },
      6678: function (t, e, a) {
        "use strict";
        a("aca0")
      },
      7156: function (t, e, a) {
        var n = a("861d"),
          i = a("d2bb");
        t.exports = function (t, e, a) {
          var c, s;
          return i && "function" == typeof (c = e.constructor) && c !== a && n(s = c.prototype) && s !== a.prototype && i(t, s), t
        }
      },
      a351: function (t, e, a) {
        "use strict";
        var n = a("7a23"),
          i = {
            class: "box27"
          },
          c = {
            class: "box-title"
          },
          s = {
            class: "text"
          },
          r = Object(n["h"])("br", null, null, -1),
          o = {
            class: "ueo"
          },
          u = {
            class: "text"
          },
          d = Object(n["h"])("br", null, null, -1),
          h = {
            class: "ueo"
          },
          l = {
            class: "text"
          },
          b = Object(n["h"])("br", null, null, -1),
          f = {
            class: "ueo"
          };
  
        function k(t, e, a, k, p, g) {
          return Object(n["q"])(), Object(n["d"])("form", null, [Object(n["h"])("div", i, [Object(n["h"])("span", c, Object(n["z"])(a.msg), 1), Object(n["h"])("input", {
            type: "radio",
            id: g.zenkokuId,
            name: "TAB",
            class: "tab-switch",
            checked: "checked"
          }, null, 8, ["id"]), Object(n["h"])("label", {
            for: g.zenkokuId,
            class: "tab-label"
          }, "全国", 8, ["for"]), Object(n["h"])("div", s, [Object(n["g"])(Object(n["z"])(a.infected.zenkoku), 1), r, Object(n["h"])("p", o, Object(n["z"])(a.infected.data1), 1)]), Object(n["h"])("input", {
            type: "radio",
            id: g.okayamaId,
            name: "TAB",
            class: "tab-switch"
          }, null, 8, ["id"]), Object(n["h"])("label", {
            for: g.okayamaId,
            class: "tab-label"
          }, "岡山", 8, ["for"]), Object(n["h"])("div", u, [Object(n["g"])(Object(n["z"])(a.infected.okayama), 1), d, Object(n["h"])("p", h, Object(n["z"])(a.infected.data2), 1)]), "感染者数" == a.msg ? (Object(n["q"])(), Object(n["d"])("input", {
            key: 0,
            type: "button",
            class: "aiu",
            value: "詳細",
            onClick: e[1] || (e[1] = function (e) {
              return t.$router.push("/Detailspage")
            })
          })) : Object(n["e"])("", !0), Object(n["h"])("input", {
            type: "radio",
            id: g.tsuyamaId,
            name: "TAB",
            class: "tab-switch"
          }, null, 8, ["id"]), Object(n["h"])("label", {
            for: g.tsuyamaId,
            class: "tab-label"
          }, "津山", 8, ["for"]), Object(n["h"])("div", l, [Object(n["g"])(Object(n["z"])(a.infected.tsuyama), 1), b, Object(n["h"])("p", f, Object(n["z"])(a.infected.data3), 1)])])])
        }
        var p = {
          name: "labelbox",
          computed: {
            zenkokuId: function () {
              return this.idname + "zenkoku"
            },
            okayamaId: function () {
              return this.idname + "okayama"
            },
            tsuyamaId: function () {
              return this.idname + "tsuyama"
            }
          },
          props: {
            msg: {
              type: String
            },
            idname: {
              type: String
            },
            infected: {
              type: Object
            }
          }
        };
        a("ebca");
        p.render = k;
        e["a"] = p
      },
      a9e3: function (t, e, a) {
        "use strict";
        var n = a("83ab"),
          i = a("da84"),
          c = a("94ca"),
          s = a("6eeb"),
          r = a("5135"),
          o = a("c6b6"),
          u = a("7156"),
          d = a("c04e"),
          h = a("d039"),
          l = a("7c73"),
          b = a("241c").f,
          f = a("06cf").f,
          k = a("9bf2").f,
          p = a("58a8").trim,
          g = "Number",
          j = i[g],
          v = j.prototype,
          O = o(l(v)) == g,
          m = function (t) {
            var e, a, n, i, c, s, r, o, u = d(t, !1);
            if ("string" == typeof u && u.length > 2)
              if (u = p(u), e = u.charCodeAt(0), 43 === e || 45 === e) {
                if (a = u.charCodeAt(2), 88 === a || 120 === a) return NaN
              } else if (48 === e) {
              switch (u.charCodeAt(1)) {
              case 66:
              case 98:
                n = 2, i = 49;
                break;
              case 79:
              case 111:
                n = 8, i = 55;
                break;
              default:
                return +u
              }
              for (c = u.slice(2), s = c.length, r = 0; r < s; r++)
                if (o = c.charCodeAt(r), o < 48 || o > i) return NaN;
              return parseInt(c, n)
            }
            return +u
          };
        if (c(g, !j(" 0o1") || !j("0b1") || j("+0x1"))) {
          for (var y, I = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                a = this;
              return a instanceof I && (O ? h((function () {
                v.valueOf.call(a)
              })) : o(a) != g) ? u(new j(m(e)), a, I) : m(e)
            }, w = n ? b(j) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), N = 0; w.length > N; N++) r(j, y = w[N]) && !r(I, y) && k(I, y, f(j, y));
          I.prototype = v, v.constructor = I, s(i, g, I)
        }
      },
      aca0: function (t, e, a) {},
      b04d: function (t, e, a) {},
      c287: function (t, e, a) {
        "use strict";
        (function (t) {
          a("4de4"), a("13d5"), a("a9e3"), a("dca8"), a("ac1f"), a("5319"), a("1276");
          var n = a("a351"),
            i = a("ad3a"),
            c = a("bc3a"),
            s = a.n(c),
            r = a("4bb4"),
            o = a("10bf"),
            u = a.n(o);
          e["a"] = {
            name: "Mainpage",
            components: {
              labelbox: n["a"],
              mainmenu: i["a"]
            },
            computed: {
              readyToshowMainPage: function () {
                return this.kenDetails.length > 0 && this.kenUtiwake.length > 0 && this.kenPcr.length > 0 && this.kenDead.length > 0 && this.kenIryou.length > 0 && this.Zenkoku.length > 0
              },
              zenkokuId: function () {
                return "zenkoku"
              },
              use: function () {
                return Number(this.kenDead[this.kenDead.length - 1]["患者_入院中_入院予定含む"]) + Number(this.kenDead[this.kenDead.length - 1]["患者_宿泊療養施設に入所中"])
              },
              all: function () {
                return Number(this.kenIryou[this.kenIryou.length - 1]["確保数_病床"]) + Number(this.kenIryou[this.kenIryou.length - 1]["確保数_宿泊療養施設"])
              },
              update: function () {
                for (var t = this.kenDead[this.kenDead.length - 1]["公表_年月日"].split("/"), e = 1; e < 3; e++) 1 == t[e].length && (t[e] = "0" + t[e]);
                var a = "※" + t[0] + "年" + t[1] + "月" + t[2] + "日時点";
                return a
              },
              infected: function () {
                var t = this.Zenkoku.reduce((function (t, e) {
                    return t + e["npatients"]
                  }), 0),
                  e = this.kenUtiwake[this.kenUtiwake.length - 1]["公表年月日"].replace("年", "/");
                e = e.replace("月", "/"), e = e.replace("日", "/"), e = e.split("/");
                for (var a = 1; a < 3; a++) 1 == e[a].length && (e[a] = "0" + e[a]);
                var n = "※" + e[0] + "年" + e[1] + "月" + e[2] + "日時点",
                  i = this.last.split("-");
                return i = "※" + i[0] + "年" + i[1] + "月" + i[2] + "日時点", {
                  zenkoku: t + "人",
                  okayama: this.kenUtiwake.length + "人",
                  tsuyama: this.kenUtiwake.filter((function (t) {
                    if ("津山市" == t.患者＿居住地) return !0
                  })).length + "人",
                  data1: i,
                  data2: n,
                  data3: n
                }
              },
              pcr: function () {
                var t = this.Zenkoku.reduce((function (t, e) {
                    return t + e["ninspections"]
                  }), 0),
                  e = this.kenPcr.filter((function (t) {
                    if ("" != t.集計時点_年月日) return !0
                  })),
                  a = e[e.length - 1].集計時点_年月日.split("/");
                1 == a[2].length && (a[2] = "0" + a[2]);
                var n = "※" + a[0] + "年" + a[1] + "月" + a[2] + "日時点",
                  i = this.last.split("-");
                return i = "※" + i[0] + "年" + i[1] + "月" + i[2] + "日時点", {
                  zenkoku: t + "人",
                  okayama: this.kenPcr.reduce((function (t, e) {
                    return t + Number(e["検査実施人数"])
                  }), 0) + "人",
                  tsuyama: "No data",
                  data1: i,
                  data2: n,
                  data3: ""
                }
              },
              dead: function () {
                for (var t = this.Zenkoku.reduce((function (t, e) {
                    return t + e["ndeaths"]
                  }), 0), e = this.kenDead[this.kenDead.length - 1]["公表_年月日"].split("/"), a = 1; a < 3; a++) 1 == e[a].length && (e[a] = "0" + e[a]);
                var n = "※" + e[0] + "年" + e[1] + "月" + e[2] + "日時点",
                  i = this.last.split("-");
                return i = "※" + i[0] + "年" + i[1] + "月" + i[2] + "日時点", {
                  zenkoku: t + "人",
                  okayama: this.kenDead[this.kenDead.length - 1]["患者_死亡"] + "人",
                  tsuyama: "No data",
                  data1: i,
                  data2: n,
                  data3: ""
                }
              },
              discharge: function () {
                for (var t = this.Zenkoku.reduce((function (t, e) {
                    return t + e["nexits"]
                  }), 0), e = this.kenDead[this.kenDead.length - 1]["公表_年月日"].split("/"), a = 1; a < 3; a++) 1 == e[a].length && (e[a] = "0" + e[a]);
                var n = "※" + e[0] + "年" + e[1] + "月" + e[2] + "日時点",
                  i = this.last.split("-");
                return i = "※" + i[0] + "年" + i[1] + "月" + i[2] + "日時点", {
                  zenkoku: t + "人",
                  okayama: this.kenDead[this.kenDead.length - 1]["患者_退院等"] + "人",
                  tsuyama: "No data",
                  data1: i,
                  data2: n,
                  data3: ""
                }
              }
            },
            data: function () {
              return {
                kenDetails: [],
                kenUtiwake: [],
                kenPcr: [],
                kenDead: [],
                kenIryou: [],
                Zenkoku: [],
                last: []
              }
            },
            mounted: function () {
              this.get_csv("https://taurayouhei.github.io/covid-19/data/kansenshasuu0420.csv", !0, "SJIS", "UNICODE", this.setKenDetails), this.get_csv("https://taurayouhei.github.io/covid-19/data/pcr.csv", !0, "SJIS", "UNICODE", this.setKenPcr), this.get_csv("https://taurayouhei.github.io/covid-19/data/kansenshashousaijouhou.csv", !0, "SJIS", "UNICODE", this.setKenUchiwake), this.get_csv("https://taurayouhei.github.io/covid-19/data/kanjahasseijoukyou.csv", !0, "SJIS", "UNICODE", this.setKenDead), this.get_csv("https://taurayouhei.github.io/covid-19/data/330001okayamacovid19medicalsystem.csv", !0, "SJIS", "UNICODE", this.setKenIryou), this.get_csv("https://www.stopcovid19.jp/data/covid19japan.csv", !0, "UTF8", "UNICODE", this.setZenkoku), this.lastupdata()
            },
            methods: {
              lastupdata: function () {
                var t = this;
                s.a.get("https://www.stopcovid19.jp/data/covid19japan.json").then((function (e) {
                  t.last = e.data["lastUpdate"]
                })).catch((function (t) {
                  return console.log(t)
                }))
              },
              setKenUchiwake: function (t) {
                this.kenUtiwake = t, this.$store.commit("Enter2", this.kenUtiwake)
              },
              setKenPcr: function (t) {
                this.kenPcr = t
              },
              setKenDead: function (t) {
                this.kenDead = t
              },
              setKenIryou: function (t) {
                this.kenIryou = t
              },
              setZenkoku: function (t) {
                this.Zenkoku = t
              },
              setKenDetails: function (t) {
                this.kenDetails = t, this.$store.commit("Enter", this.kenDetails)
              },
              get_csv: function (e, a, n, i, c) {
                s.a.get(e, {
                  responseType: "arraybuffer"
                }).then((function (e) {
                  var s = t.from(e.data),
                    o = u.a.convert(s, {
                      from: n,
                      to: i,
                      type: "string"
                    });
                  o = o.replace(/^\ufeff/, ""), Object(r["parse"])(o, {
                    columns: a,
                    quote: '"',
                    ltrim: !0,
                    rtrim: !0,
                    delimiter: ",",
                    cast: !0
                  }, (function (t, e) {
                    c(Object.freeze(e))
                  }))
                })).catch((function (t) {
                  return console.log(t)
                }))
              }
            }
          }
        }).call(this, a("b639").Buffer)
      },
      d58f: function (t, e, a) {
        var n = a("1c0b"),
          i = a("7b0b"),
          c = a("44ad"),
          s = a("50c4"),
          r = function (t) {
            return function (e, a, r, o) {
              n(a);
              var u = i(e),
                d = c(u),
                h = s(u.length),
                l = t ? h - 1 : 0,
                b = t ? -1 : 1;
              if (r < 2)
                while (1) {
                  if (l in d) {
                    o = d[l], l += b;
                    break
                  }
                  if (l += b, t ? l < 0 : h <= l) throw TypeError("Reduce of empty array with no initial value")
                }
              for (; t ? l >= 0 : h > l; l += b) l in d && (o = a(o, d[l], l, u));
              return o
            }
          };
        t.exports = {
          left: r(!1),
          right: r(!0)
        }
      },
      ebca: function (t, e, a) {
        "use strict";
        a("b04d")
      }
    }
  ]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvTWFpbnBhZ2UudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYWlucGFnZS52dWU/M2JmMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9NYWlucGFnZS52dWU/ZjY5ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYWJlbGJveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGFiZWxib3gudnVlPzNlZjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYWJlbGJveC52dWU/NjI2YyJdLCJuYW1lcyI6WyIkIiwiJHJlZHVjZSIsImxlZnQiLCJhcnJheU1ldGhvZElzU3RyaWN0IiwiYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgiLCJTVFJJQ1RfTUVUSE9EIiwiVVNFU19UT19MRU5HVEgiLCIxIiwidGFyZ2V0IiwicHJvdG8iLCJmb3JjZWQiLCJyZWR1Y2UiLCJjYWxsYmFja2ZuIiwidGhpcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsYXNzIiwianVkZ2UiLCJyZWFkeVRvc2hvd01haW5QYWdlIiwibXNnIiwiaWRuYW1lIiwiaW5mZWN0ZWQiLCJkZWFkIiwicGNyIiwiZGlzY2hhcmdlIiwidHlwZSIsImlkIiwiemVua29rdUlkIiwibmFtZSIsImNoZWNrZWQiLCJmb3IiLCJ1c2UiLCJhbGwiLCJ1cGRhdGUiLCJyZW5kZXIiLCJfX3Njb3BlSWQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZU9iamVjdENvZXJjaWJsZSIsIndoaXRlc3BhY2VzIiwid2hpdGVzcGFjZSIsImx0cmltIiwiUmVnRXhwIiwicnRyaW0iLCJjcmVhdGVNZXRob2QiLCJUWVBFIiwiJHRoaXMiLCJzdHJpbmciLCJTdHJpbmciLCJyZXBsYWNlIiwic3RhcnQiLCJlbmQiLCJ0cmltIiwiaXNPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsImR1bW15IiwiV3JhcHBlciIsIk5ld1RhcmdldCIsIk5ld1RhcmdldFByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiemVua29rdSIsImRhdGExIiwib2theWFtYUlkIiwib2theWFtYSIsImRhdGEyIiwidmFsdWUiLCIkcm91dGVyIiwicHVzaCIsInRzdXlhbWFJZCIsInRzdXlhbWEiLCJkYXRhMyIsImNvbXB1dGVkIiwicHJvcHMiLCJPYmplY3QiLCJERVNDUklQVE9SUyIsImdsb2JhbCIsImlzRm9yY2VkIiwicmVkZWZpbmUiLCJoYXMiLCJjbGFzc29mIiwiaW5oZXJpdElmUmVxdWlyZWQiLCJ0b1ByaW1pdGl2ZSIsImZhaWxzIiwiY3JlYXRlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImYiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsIk5VTUJFUiIsIk5hdGl2ZU51bWJlciIsIk51bWJlclByb3RvdHlwZSIsIkJST0tFTl9DTEFTU09GIiwidG9OdW1iZXIiLCJhcmd1bWVudCIsImZpcnN0IiwidGhpcmQiLCJyYWRpeCIsIm1heENvZGUiLCJkaWdpdHMiLCJpbmRleCIsImNvZGUiLCJpdCIsImNoYXJDb2RlQXQiLCJOYU4iLCJzbGljZSIsInBhcnNlSW50Iiwia2V5IiwiTnVtYmVyV3JhcHBlciIsInZhbHVlT2YiLCJjYWxsIiwia2V5cyIsInNwbGl0IiwiaiIsImNvbXBvbmVudHMiLCJsYWJlbGJveCIsIm1haW5tZW51Iiwia2VuRGV0YWlscyIsImtlblV0aXdha2UiLCJrZW5QY3IiLCJrZW5EZWFkIiwia2VuSXJ5b3UiLCJaZW5rb2t1IiwiTnVtYmVyIiwiaGlkdWtlIiwiaSIsImhpZHVrZWRhdGEiLCJmaWx0ZXJlZFplbmtva3UiLCJzdW0iLCJlYWNoIiwiYSIsImdhdGEiLCJsYXN0IiwiZmlsdGVyIiwi5oKj6ICF77y/5bGF5L2P5ZywIiwiZmlsdGVyZWRaZW5rb2t1UGNyIiwiZmlsdGVyZWRPa2F5YW1hUGNyIiwi6ZuG6KiI5pmC54K5X+W5tOaciOaXpSIsImFjY3UiLCJmaWx0ZXJlZFplbmtva3VEZWFkIiwiZmlsdGVyZWRaZW5rb2t1RGlzIiwiZGF0YSIsIm1vdW50ZWQiLCJnZXRfY3N2Iiwic2V0S2VuRGV0YWlscyIsInNldEtlblBjciIsInNldEtlblVjaGl3YWtlIiwic2V0S2VuRGVhZCIsInNldEtlbklyeW91Iiwic2V0WmVua29rdSIsImxhc3R1cGRhdGEiLCJtZXRob2RzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkc3RvcmUiLCJjb21taXQiLCJ1cmwiLCJjb2wiLCJmcm9tIiwidG8iLCJzZXR0ZXIiLCJyZXNwb25zZVR5cGUiLCJidWZmZXIiLCJCdWZmZXIiLCJjc3YiLCJjb252ZXJ0IiwiY29sdW1ucyIsInF1b3RlIiwiZGVsaW1pdGVyIiwiY2FzdCIsIm91dHB1dCIsImZyZWV6ZSIsImFGdW5jdGlvbiIsInRvT2JqZWN0IiwiSW5kZXhlZE9iamVjdCIsInRvTGVuZ3RoIiwiSVNfUklHSFQiLCJ0aGF0IiwiYXJndW1lbnRzTGVuZ3RoIiwibWVtbyIsIk8iLCJzZWxmIiwiVHlwZUVycm9yIiwicmlnaHQiXSwibWFwcGluZ3Mi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Q1BrSSxVQUFXLElBQ1hDLE1BQU0sSUFDTCxTQUFDbEIsRUFBT21CLEdBQ1RWLEVBQU8zRixPQUFPc0csT0FBT0QsVUFHeEJwQixPQUFNLFNBQUFDLEdBQUksT0FBS0MsUUFBUUMsSUFBSUYsVyxrRFNyUHRDLElBQUlxQixFQUFZLEVBQVEsUUFDcEJDLEVBQVcsRUFBUSxRQUNuQkMsRUFBZ0IsRUFBUSxRQUN4QkMsRUFBVyxFQUFRLFFBR25CeEksRUFBZSxTQUFVeUksR0FDM0IsT0FBTyxTQUFVQyxFQUFNM0ssRUFBWTRLLEVBQWlCQyxHQUNsRFAsRUFBVXRLLEdBQ1YsSUFBSThLLEVBQUlQLEVBQVNJLEdBQ2JJLEVBQU9QLEVBQWNNLEdBQ3JCM0ssRUFBU3NLLEVBQVNLLEVBQUUzSyxRQUNwQnNGLEVBQVFpRixFQUFXdkssRUFBUyxFQUFJLEVBQ2hDK0csRUFBSXdELEdBQVksRUFBSSxFQUN4QixHQUFJRSxFQUFrQixFQUFHLE1BQU8sRUFBTSxDQUNwQyxHQUFJbkYsS0FBU3NGLEVBQU0sQ0FDakJGLEVBQU9FLEVBQUt0RixHQUNaQSxHQUFTeUIsRUFDVCxNQUdGLEdBREF6QixHQUFTeUIsRUFDTHdELEVBQVdqRixFQUFRLEVBQUl0RixHQUFVc0YsRUFDbkMsTUFBTXVGLFVBQVUsK0NBR3BCLEtBQU1OLEVBQVdqRixHQUFTLEVBQUl0RixFQUFTc0YsRUFBT0EsR0FBU3lCLEVBQU96QixLQUFTc0YsSUFDckVGLEVBQU83SyxFQUFXNkssRUFBTUUsRUFBS3RGLEdBQVFBLEVBQU9xRixJQUU5QyxPQUFPRCxJQUlYcEosRUFBT0MsUUFBVSxDQUdmcEMsS0FBTTJDLEdBQWEsR0FHbkJnSixNQUFPaEosR0FBYSxLLGtDQ3RDdEIiLCJmaWxlIjoianMvY2h1bmstNzJlMTQ2MmMuYWFmMTcyNGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgncmVkdWNlJywgeyAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPG1haW5tZW51IGp1ZGdlPTAgLz5cclxuICAgIDxoMT7mlrDlnovjgrPjg63jg4rjgqbjgqTjg6vjgrnmg4XloLE8L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXhcIiB2LWlmPVwicmVhZHlUb3Nob3dNYWluUGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICAgICAgPGxhYmVsYm94IGNsYXNzPVwiYm94MVwiIG1zZz1cIuaEn+afk+iAheaVsFwiIGlkbmFtZT1cImthbnNlblwiIDppbmZlY3RlZD1cImluZmVjdGVkXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICA8bGFiZWxib3ggY2xhc3M9XCJib3gyXCIgbXNnPVwi5q276ICF5pWwXCIgaWRuYW1lPVwiZGVhZFwiIDppbmZlY3RlZD1cImRlYWRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgIDxsYWJlbGJveCBjbGFzcz1cImJveDNcIiBtc2c9XCJQQ1LmpJzmn7vmlbBcIiBpZG5hbWU9XCJwY3JcIiA6aW5mZWN0ZWQ9XCJwY3JcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgIDxsYWJlbGJveCBjbGFzcz1cImJveDRcIiBtc2c9XCLpgIDpmaLogIXmlbBcIiBpZG5hbWU9XCJkaXNjaGFuZ2VcIiA6aW5mZWN0ZWQ9XCJkaXNjaGFyZ2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gyN1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJib3gtdGl0bGVcIj7nl4Xluorkvb/nlKjmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgOmlkPVwiemVua29rdUlkXCIgbmFtZT1cIlRBQlwiIGNsYXNzPVwidGFiLXN3aXRjaFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz48bGFiZWwgOmZvcj1cInplbmtva3VJZFwiIGNsYXNzPVwidGFiLWxhYmVsXCI+5bKh5bGxPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj57e3VzZX19L3t7YWxsfX08YnI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ1ZW9cIj57e3VwZGF0ZX19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gIFxyXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBsYWJlbGJveCBmcm9tICcuLi9jb21wb25lbnRzL2xhYmVsYm94LnZ1ZSdcclxuaW1wb3J0IG1haW5tZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbm1lbnUudnVlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnY3N2J1xyXG5pbXBvcnQgRW5jb2RpbmcgZnJvbSAnZW5jb2RpbmctamFwYW5lc2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01haW5wYWdlJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBsYWJlbGJveCxcclxuICAgIG1haW5tZW51XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcmVhZHlUb3Nob3dNYWluUGFnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmtlbkRldGFpbHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICB0aGlzLmtlblV0aXdha2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICB0aGlzLmtlblBjci5sZW5ndGggPiAwICYmXHJcbiAgICAgIHRoaXMua2VuRGVhZC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHRoaXMua2VuSXJ5b3UubGVuZ3RoID4gMCAmJlxyXG4gICAgICB0aGlzLlplbmtva3UubGVuZ3RoID4gMCBcclxuICAgIH0sXHJcbiAgICB6ZW5rb2t1SWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gJ3plbmtva3UnXHJcbiAgICB9LFxyXG4gICAgdXNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmtlbkRlYWRbdGhpcy5rZW5EZWFkLmxlbmd0aC0xXVtcIuaCo+iAhV/lhaXpmaLkuK1f5YWl6Zmi5LqI5a6a5ZCr44KAXCJdKSArIE51bWJlcih0aGlzLmtlbkRlYWRbdGhpcy5rZW5EZWFkLmxlbmd0aC0xXVtcIuaCo+iAhV/lrr/ms4rnmYLppIrmlr3oqK3jgavlhaXmiYDkuK1cIl0pXHJcbiAgICB9LFxyXG4gICAgYWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmtlbklyeW91W3RoaXMua2VuSXJ5b3UubGVuZ3RoLTFdW1wi56K65L+d5pWwX+eXheW6ilwiXSkgKyBOdW1iZXIodGhpcy5rZW5JcnlvdVt0aGlzLmtlbklyeW91Lmxlbmd0aC0xXVtcIueiuuS/neaVsF/lrr/ms4rnmYLppIrmlr3oqK1cIl0pXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGhpZHVrZSA9IHRoaXMua2VuRGVhZFt0aGlzLmtlbkRlYWQubGVuZ3RoLTFdW1wi5YWs6KGoX+W5tOaciOaXpVwiXS5zcGxpdChcIi9cIik7XHJcbiAgICAgIGZvciAobGV0IGk9MTsgaTwzOyBpKyspe1xyXG4gICAgICAgIGlmIChoaWR1a2VbaV0ubGVuZ3RoPT0xKXtcclxuICAgICAgICAgIGhpZHVrZVtpXSA9IFwiMFwiICsgaGlkdWtlW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoaWR1a2VkYXRhID0gXCLigLtcIiArIGhpZHVrZVswXSArIFwi5bm0XCIgKyBoaWR1a2VbMV0gKyBcIuaciFwiICsgaGlkdWtlWzJdICsgXCLml6XmmYLngrlcIjtcclxuICAgICAgcmV0dXJuIGhpZHVrZWRhdGFcclxuICAgIH0sXHJcbiAgICBpbmZlY3RlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vY29uc3QgZmlsdGVyZWRaZW5rb2t1ID0gdGhpcy5aZW5rb2t1RGV0YWlsLnJlZHVjZSgocCx4KT0+cCt4W1wiUENSIOaknOafu+mZveaAp+iAheaVsCjljZjml6UpXCJdLDApXHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkWmVua29rdSA9IHRoaXMuWmVua29rdS5yZWR1Y2UoKHN1bSxlYWNoKT0+c3VtICsgZWFjaFtcIm5wYXRpZW50c1wiXSwwKTtcclxuICAgICAgbGV0IGEgPSB0aGlzLmtlblV0aXdha2VbdGhpcy5rZW5VdGl3YWtlLmxlbmd0aC0xXVtcIuWFrOihqOW5tOaciOaXpVwiXS5yZXBsYWNlKFwi5bm0XCIsXCIvXCIpO1xyXG4gICAgICBhID0gYS5yZXBsYWNlKFwi5pyIXCIsXCIvXCIpO1xyXG4gICAgICBhID0gYS5yZXBsYWNlKFwi5pelXCIsXCIvXCIpO1xyXG4gICAgICBhID0gYS5zcGxpdChcIi9cIilcclxuICAgICAgZm9yIChsZXQgaT0xOyBpPDM7IGkrKyl7XHJcbiAgICAgICAgaWYgKGFbaV0ubGVuZ3RoPT0xKXtcclxuICAgICAgICAgIGFbaV0gPSBcIjBcIiArIGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhpZHVrZSA9IFwi4oC7XCIgKyBhWzBdICsgXCLlubRcIiArIGFbMV0gKyBcIuaciFwiICsgYVsyXSArIFwi5pel5pmC54K5XCI7XHJcbiAgICAgIGxldCBnYXRhICA9IHRoaXMubGFzdC5zcGxpdChcIi1cIik7XHJcbiAgICAgIGdhdGEgPSBcIuKAu1wiK2dhdGFbMF0rXCLlubRcIitnYXRhWzFdK1wi5pyIXCIrZ2F0YVsyXStcIuaXpeaZgueCuVwiO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvL3plbmtva3U6ZmlsdGVyZWRaZW5rb2t1LFxyXG4gICAgICAgIHplbmtva3U6IGZpbHRlcmVkWmVua29rdSArIFwi5Lq6XCIsXHJcbiAgICAgICAgb2theWFtYTogdGhpcy5rZW5VdGl3YWtlLmxlbmd0aCArIFwi5Lq6XCIsXHJcbiAgICAgICAgdHN1eWFtYTogdGhpcy5rZW5VdGl3YWtlLmZpbHRlcihmdW5jdGlvbihlYWNoKXtcclxuICAgICAgICAgIGlmIChlYWNoLuaCo+iAhe+8v+WxheS9j+WcsCA9PSAn5rSl5bGx5biCJykgcmV0dXJuIHRydWVcclxuICAgICAgICB9KS5sZW5ndGggKyBcIuS6ulwiLFxyXG4gICAgICAgIGRhdGExOiBnYXRhLFxyXG4gICAgICAgIGRhdGEyOiBoaWR1a2UsXHJcbiAgICAgICAgZGF0YTM6IGhpZHVrZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBjcjogZnVuY3Rpb24oKXtcclxuICAgICAgY29uc3QgZmlsdGVyZWRaZW5rb2t1UGNyID0gdGhpcy5aZW5rb2t1LnJlZHVjZSgoc3VtLGVhY2gpPT5zdW0gKyBlYWNoW1wibmluc3BlY3Rpb25zXCJdLDApO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZE9rYXlhbWFQY3IgPSB0aGlzLmtlblBjci5maWx0ZXIoZnVuY3Rpb24oZWFjaCl7XHJcbiAgICAgICAgICBpZiAoZWFjaC7pm4boqIjmmYLngrlf5bm05pyI5pelICE9ICcnKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBjb25zdCBoaWR1a2UgPSBmaWx0ZXJlZE9rYXlhbWFQY3JbZmlsdGVyZWRPa2F5YW1hUGNyLmxlbmd0aC0xXS7pm4boqIjmmYLngrlf5bm05pyI5pelLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKGhpZHVrZVsyXS5sZW5ndGg9PTEpe1xyXG4gICAgICAgIGhpZHVrZVsyXSA9IFwiMFwiICsgaGlkdWtlWzJdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhpZHVrZWRhdGEgPSBcIuKAu1wiK2hpZHVrZVswXStcIuW5tFwiK2hpZHVrZVsxXStcIuaciFwiK2hpZHVrZVsyXStcIuaXpeaZgueCuVwiO1xyXG4gICAgICBsZXQgZ2F0YSAgPSB0aGlzLmxhc3Quc3BsaXQoXCItXCIpO1xyXG4gICAgICBnYXRhID0gXCLigLtcIitnYXRhWzBdK1wi5bm0XCIrZ2F0YVsxXStcIuaciFwiK2dhdGFbMl0rXCLml6XmmYLngrlcIjtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgemVua29rdTogZmlsdGVyZWRaZW5rb2t1UGNyICsgXCLkurpcIixcclxuICAgICAgICBva2F5YW1hOiB0aGlzLmtlblBjci5yZWR1Y2UoZnVuY3Rpb24gKGFjY3UsIHZhbHVlKXtcclxuICAgICAgICAgIHJldHVybiBhY2N1ICsgTnVtYmVyKHZhbHVlWyfmpJzmn7vlrp/mlr3kurrmlbAnXSlcclxuICAgICAgICB9LDApICsgXCLkurpcIixcclxuICAgICAgICB0c3V5YW1hOiAnTm8gZGF0YScsXHJcbiAgICAgICAgZGF0YTE6IGdhdGEsXHJcbiAgICAgICAgZGF0YTI6IGhpZHVrZWRhdGEsXHJcbiAgICAgICAgZGF0YTM6IFwiXCIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWFkOiBmdW5jdGlvbigpe1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZFplbmtva3VEZWFkID0gdGhpcy5aZW5rb2t1LnJlZHVjZSgoc3VtLGVhY2gpPT5zdW0gKyBlYWNoW1wibmRlYXRoc1wiXSwwKTtcclxuICAgICAgbGV0IGhpZHVrZSA9IHRoaXMua2VuRGVhZFt0aGlzLmtlbkRlYWQubGVuZ3RoLTFdW1wi5YWs6KGoX+W5tOaciOaXpVwiXS5zcGxpdChcIi9cIik7XHJcbiAgICAgIGZvciAobGV0IGk9MTsgaTwzOyBpKyspe1xyXG4gICAgICAgIGlmIChoaWR1a2VbaV0ubGVuZ3RoPT0xKXtcclxuICAgICAgICAgIGhpZHVrZVtpXSA9IFwiMFwiICsgaGlkdWtlW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoaWR1a2VkYXRhID0gXCLigLtcIiArIGhpZHVrZVswXSArIFwi5bm0XCIgKyBoaWR1a2VbMV0gKyBcIuaciFwiICsgaGlkdWtlWzJdICsgXCLml6XmmYLngrlcIjtcclxuICAgICAgbGV0IGdhdGEgID0gdGhpcy5sYXN0LnNwbGl0KFwiLVwiKTtcclxuICAgICAgZ2F0YSA9IFwi4oC7XCIrZ2F0YVswXStcIuW5tFwiK2dhdGFbMV0rXCLmnIhcIitnYXRhWzJdK1wi5pel5pmC54K5XCI7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHplbmtva3U6ZmlsdGVyZWRaZW5rb2t1RGVhZCArIFwi5Lq6XCIsXHJcbiAgICAgICAgb2theWFtYTogdGhpcy5rZW5EZWFkW3RoaXMua2VuRGVhZC5sZW5ndGgtMV1bXCLmgqPogIVf5q275LqhXCJdICsgXCLkurpcIixcclxuICAgICAgICB0c3V5YW1hOiAnTm8gZGF0YScsXHJcbiAgICAgICAgZGF0YTE6IGdhdGEsXHJcbiAgICAgICAgZGF0YTI6IGhpZHVrZWRhdGEsXHJcbiAgICAgICAgZGF0YTM6IFwiXCIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkaXNjaGFyZ2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkWmVua29rdURpcyA9IHRoaXMuWmVua29rdS5yZWR1Y2UoKHN1bSxlYWNoKT0+c3VtICsgZWFjaFtcIm5leGl0c1wiXSwwKTtcclxuICAgICAgbGV0IGhpZHVrZSA9IHRoaXMua2VuRGVhZFt0aGlzLmtlbkRlYWQubGVuZ3RoLTFdW1wi5YWs6KGoX+W5tOaciOaXpVwiXS5zcGxpdChcIi9cIik7XHJcbiAgICAgIGZvciAobGV0IGk9MTsgaTwzOyBpKyspe1xyXG4gICAgICAgIGlmIChoaWR1a2VbaV0ubGVuZ3RoPT0xKXtcclxuICAgICAgICAgIGhpZHVrZVtpXSA9IFwiMFwiICsgaGlkdWtlW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoaWR1a2VkYXRhID0gXCLigLtcIiArIGhpZHVrZVswXSArIFwi5bm0XCIgKyBoaWR1a2VbMV0gKyBcIuaciFwiICsgaGlkdWtlWzJdICsgXCLml6XmmYLngrlcIjtcclxuICAgICAgbGV0IGdhdGEgID0gdGhpcy5sYXN0LnNwbGl0KFwiLVwiKTtcclxuICAgICAgZ2F0YSA9IFwi4oC7XCIrZ2F0YVswXStcIuW5tFwiK2dhdGFbMV0rXCLmnIhcIitnYXRhWzJdK1wi5pel5pmC54K5XCI7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHplbmtva3U6ZmlsdGVyZWRaZW5rb2t1RGlzICsgXCLkurpcIixcclxuICAgICAgICBva2F5YW1hOiB0aGlzLmtlbkRlYWRbdGhpcy5rZW5EZWFkLmxlbmd0aC0xXVtcIuaCo+iAhV/pgIDpmaLnrYlcIl0gKyBcIuS6ulwiLFxyXG4gICAgICAgIHRzdXlhbWE6ICdObyBkYXRhJyxcclxuICAgICAgICBkYXRhMTogZ2F0YSxcclxuICAgICAgICBkYXRhMjogaGlkdWtlZGF0YSxcclxuICAgICAgICBkYXRhMzogXCJcIixcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZW5EZXRhaWxzOiBbXSxcclxuICAgICAga2VuVXRpd2FrZTogW10sXHJcbiAgICAgIGtlblBjcjogW10sXHJcbiAgICAgIGtlbkRlYWQ6IFtdLFxyXG4gICAgICBrZW5JcnlvdTogW10sXHJcbiAgICAgIFplbmtva3U6IFtdLFxyXG4gICAgICBsYXN0OiBbXSxcclxuICAgICAgLy9aZW5rb2t1RGV0YWlsOiBbXSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5nZXRfY3N2KFwiaHR0cHM6Ly90YXVyYXlvdWhlaS5naXRodWIuaW8vY292aWQtMTkvZGF0YS9rYW5zZW5zaGFzdXUwNDIwLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJywgdGhpcy5zZXRLZW5EZXRhaWxzKTtcclxuICAgIHRoaXMuZ2V0X2NzdihcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEvcGNyLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJywgdGhpcy5zZXRLZW5QY3IpOyBcclxuICAgIHRoaXMuZ2V0X2NzdihcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEva2Fuc2Vuc2hhc2hvdXNhaWpvdWhvdS5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsICB0aGlzLnNldEtlblVjaGl3YWtlKTtcclxuICAgIHRoaXMuZ2V0X2NzdihcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEva2FuamFoYXNzZWlqb3VreW91LmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJywgIHRoaXMuc2V0S2VuRGVhZCk7XHJcbiAgICB0aGlzLmdldF9jc3YoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhLzMzMDAwMW9rYXlhbWFjb3ZpZDE5bWVkaWNhbHN5c3RlbS5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsICB0aGlzLnNldEtlbklyeW91KTtcclxuICAgIC8vdGhpcy5nZXRfY3N2KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NvbnRlbnQvcGNyX3Bvc2l0aXZlX2RhaWx5LmNzdlwiLHRydWUsJ1VURjgnLCdVTklDT0RFJywgdGhpcy5zZXRaZW5rb2t1RGV0YWlsKTtcclxuICAgIHRoaXMuZ2V0X2NzdihcImh0dHBzOi8vd3d3LnN0b3Bjb3ZpZDE5LmpwL2RhdGEvY292aWQxOWphcGFuLmNzdlwiLHRydWUsJ1VURjgnLCdVTklDT0RFJywgdGhpcy5zZXRaZW5rb2t1KTtcclxuICAgIHRoaXMubGFzdHVwZGF0YSgpO1xyXG5cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxhc3R1cGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBheGlvcy5nZXQoXCJodHRwczovL3d3dy5zdG9wY292aWQxOS5qcC9kYXRhL2NvdmlkMTlqYXBhbi5qc29uXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgIHRoaXMubGFzdCA9IHJlc3BvbnNlLmRhdGFbXCJsYXN0VXBkYXRlXCJdXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHNldEtlblVjaGl3YWtlOiBmdW5jdGlvbihrZW5VdGl3YWtlKSB7XHJcbiAgICAgIHRoaXMua2VuVXRpd2FrZSA9IGtlblV0aXdha2VcclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdFbnRlcjInLCB0aGlzLmtlblV0aXdha2UpXHJcbiAgICB9LFxyXG4gICAgc2V0S2VuUGNyOiBmdW5jdGlvbihrZW5QY3Ipe1xyXG4gICAgICB0aGlzLmtlblBjciA9IGtlblBjclxyXG4gICAgfSxcclxuICAgIHNldEtlbkRlYWQ6IGZ1bmN0aW9uKGtlbkRlYWQpe1xyXG4gICAgICB0aGlzLmtlbkRlYWQgPSBrZW5EZWFkXHJcbiAgICB9LFxyXG4gICAgc2V0S2VuSXJ5b3U6IGZ1bmN0aW9uKGtlbklyeW91KXtcclxuICAgICAgdGhpcy5rZW5JcnlvdSA9IGtlbklyeW91XHJcbiAgICB9LFxyXG4gICAgc2V0WmVua29rdTogZnVuY3Rpb24oWmVua29rdSl7XHJcbiAgICAgIHRoaXMuWmVua29rdSA9IFplbmtva3VcclxuICAgIH0sXHJcbiAgICAvLyBzZXRaZW5rb2t1RGV0YWlsOiBmdW5jdGlvbihaZW5rb2t1RGV0YWlsKXtcclxuICAgIC8vICAgdGhpcy5aZW5rb2t1RGV0YWlsID0gWmVua29rdURldGFpbFxyXG4gICAgLy8gfSxcclxuICAgIHNldEtlbkRldGFpbHM6IGZ1bmN0aW9uKGtlbkRldGFpbHMpe1xyXG4gICAgICB0aGlzLmtlbkRldGFpbHMgPSBrZW5EZXRhaWxzXHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnRW50ZXInLCB0aGlzLmtlbkRldGFpbHMpXHJcbiAgICB9LFxyXG4gICAgZ2V0X2Nzdih1cmwsY29sLGZyb20sdG8sc2V0dGVyKXtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAgIC5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgbGV0IGNzdiA9IEVuY29kaW5nLmNvbnZlcnQoYnVmZmVyLCB7XHJcbiAgICAgICAgICAgICAgZnJvbTogZnJvbSxcclxuICAgICAgICAgICAgICB0bzogdG8sXHJcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY3N2ID0gY3N2LnJlcGxhY2UoL15cXHVmZWZmLywnJylcclxuICAgICAgICAgICAgcGFyc2UoY3N2LCB7XHJcbiAgICAgICAgICAgICAgY29sdW1uczogY29sLFxyXG4gICAgICAgICAgICAgIHF1b3RlOiAnXCInLFxyXG4gICAgICAgICAgICAgIGx0cmltOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHJ0cmltOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlbGltaXRlcjogJywnLFxyXG4gICAgICAgICAgICAgIGNhc3Q6IHRydWVcclxuICAgICAgICAgICAgfSwgKGVycm9yLCBvdXRwdXQpID0+IHtcclxuICAgICAgICAgICAgICBzZXR0ZXIoT2JqZWN0LmZyZWV6ZShvdXRwdXQpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5mbGV4e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYm94e1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCl7XHJcbiAgLmJveHtcclxuICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIH1cclxufVxyXG5oMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM2ZWIwZjk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAtMTBweCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDApIDEwJSxyZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCl7XHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG59XHJcbi5sb2FkZXIge1xyXG4gIGNvbG9yOiM2ZWIwZjk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XHJcbiAgfVxyXG4gIDEyLjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgMzcuNSUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDYyLjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XHJcbiAgfVxyXG4gIDg3LjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkNCB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xyXG4gIH1cclxuICAxMi41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XHJcbiAgfVxyXG4gIDM3LjUlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xyXG4gIH1cclxuICA2Mi41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xyXG4gIH1cclxuICA4Ny41JSB7XHJcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XHJcbiAgfVxyXG59XHJcbi5ib3gyNyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjZjg0YzRjO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIC5ib3gyN3tcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gIH1cclxufVxyXG4uYm94MjcgLmJveC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0b3A6IC0yN3B4O1xyXG4gICAgbGVmdDogLTNweDtcclxuICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjg0YzRjO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAuYm94MjcgLmJveC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBwYWRkaW5nOjlweDtcclxuICB9XHJcbn1cclxuLnRhYi1sYWJlbCB7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBMaWdodEdyYXk7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCl7XHJcbiAgLnRhYi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogTVMgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4udWVve1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbiAgLnVlb3tcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuLyog44Ki44Kv44OG44Kj44OW44Gq44K/44OWICovXHJcbi50YWItc3dpdGNoOmNoZWNrZWQrLnRhYi1sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBEZWVwU2t5Qmx1ZTtcclxufVxyXG4udGFiLXN3aXRjaDpjaGVja2VkKy50YWItbGFiZWwrLnRleHQge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8qIOODqeOCuOOCquODnOOCv+ODs+mdnuihqOekuiAqL1xyXG4udGFiLXN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTWFpbnBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU4NmU1MTkyJnNjb3BlZD10cnVlJmJpbmRpbmdzPXtcXFwicmVhZHlUb3Nob3dNYWluUGFnZVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJ6ZW5rb2t1SWRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwidXNlXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcImFsbFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJ1cGRhdGVcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwiaW5mZWN0ZWRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwicGNyXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcImRlYWRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwiZGlzY2hhcmdlXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcImxhc3R1cGRhdGFcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0S2VuVWNoaXdha2VcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0S2VuUGNyXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldEtlbkRlYWRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0S2VuSXJ5b3VcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0WmVua29rdVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRLZW5EZXRhaWxzXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcImdldF9jc3ZcXFwiOlxcXCJvcHRpb25zXFxcIn1cIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWlucGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpbnBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9NYWlucGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lODZlNTE5MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5zY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtZTg2ZTUxOTJcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPz9yZWYtLTAtMSEuL01haW5wYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU4NmU1MTkyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG4gIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcbiAgaWYgKFxuICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuICAgIHNldFByb3RvdHlwZU9mICYmXG4gICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuICAgIHR5cGVvZiAoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpID09ICdmdW5jdGlvbicgJiZcbiAgICBOZXdUYXJnZXQgIT09IFdyYXBwZXIgJiZcbiAgICBpc09iamVjdChOZXdUYXJnZXRQcm90b3R5cGUgPSBOZXdUYXJnZXQucHJvdG90eXBlKSAmJlxuICAgIE5ld1RhcmdldFByb3RvdHlwZSAhPT0gV3JhcHBlci5wcm90b3R5cGVcbiAgKSBzZXRQcm90b3R5cGVPZigkdGhpcywgTmV3VGFyZ2V0UHJvdG90eXBlKTtcbiAgcmV0dXJuICR0aGlzO1xufTtcbiIsIjx0ZW1wbGF0ZT5cclxuICA8Zm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJib3gyN1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJveC10aXRsZVwiPnt7bXNnfX08L3NwYW4+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiA6aWQ9XCJ6ZW5rb2t1SWRcIiBuYW1lPVwiVEFCXCIgY2xhc3M9XCJ0YWItc3dpdGNoXCIgY2hlY2tlZD1cImNoZWNrZWRcIiAvPjxsYWJlbCA6Zm9yPVwiemVua29rdUlkXCIgY2xhc3M9XCJ0YWItbGFiZWxcIj7lhajlm708L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICB7eyBpbmZlY3RlZC56ZW5rb2t1IH19PGJyPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ1ZW9cIiA+e3tpbmZlY3RlZC5kYXRhMX19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgOmlkPVwib2theWFtYUlkXCIgbmFtZT1cIlRBQlwiIGNsYXNzPVwidGFiLXN3aXRjaFwiIC8+PGxhYmVsIDpmb3I9XCJva2F5YW1hSWRcIiBjbGFzcz1cInRhYi1sYWJlbFwiPuWyoeWxsTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIHt7IGluZmVjdGVkLm9rYXlhbWEgfX08YnI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInVlb1wiPnt7aW5mZWN0ZWQuZGF0YTJ9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCB2LWlmPVwibXNnPT0n5oSf5p+T6ICF5pWwJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFpdVwiIHZhbHVlPVwi6Kmz57SwXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvRGV0YWlsc3BhZ2UnKVwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiA6aWQ9XCJ0c3V5YW1hSWRcIiBuYW1lPVwiVEFCXCIgY2xhc3M9XCJ0YWItc3dpdGNoXCIgLz48bGFiZWwgOmZvcj1cInRzdXlhbWFJZFwiIGNsYXNzPVwidGFiLWxhYmVsXCI+5rSl5bGxPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAge3tpbmZlY3RlZC50c3V5YW1hfX08YnI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInVlb1wiPnt7aW5mZWN0ZWQuZGF0YTN9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2xhYmVsYm94JyxcclxuICBjb21wdXRlZDoge1xyXG4gICAgemVua29rdUlkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaWRuYW1lICsgJ3plbmtva3UnXHJcbiAgICB9LFxyXG4gICAgb2theWFtYUlkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaWRuYW1lICsgJ29rYXlhbWEnXHJcbiAgICB9LFxyXG4gICAgdHN1eWFtYUlkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaWRuYW1lICsgJ3RzdXlhbWEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczp7XHJcbiAgICBtc2c6e1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBpZG5hbWU6e1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBpbmZlY3RlZDoge1xyXG4gICAgICB0eXBlOiBPYmplY3RcclxuICAgIH0gXHJcbiAgfVxyXG4gIFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uYm94Mjcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggI2Y4NGM0YztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgaGVpZ2h0OiA5cmVtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAuYm94Mjd7XHJcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgIGhlaWdodDogMTZyZW07XHJcbiAgfVxyXG59XHJcbi5ib3gyNyAuYm94LXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRvcDogLTI3cHg7XHJcbiAgICBsZWZ0OiAtM3B4O1xyXG4gICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmODRjNGM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIC5ib3gyNyAuYm94LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdG9wOiAtNDVweDtcclxuICAgIHBhZGRpbmc6OXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYi1sYWJlbCB7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBMaWdodEdyYXk7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxLjNyZW07XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAudGFiLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG59XHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNUyBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi51ZW97XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAudWVve1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG4vKiDjgqLjgq/jg4bjgqPjg5bjgarjgr/jg5YgKi9cclxuLnRhYi1zd2l0Y2g6Y2hlY2tlZCsudGFiLWxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6IERlZXBTa3lCbHVlO1xyXG59XHJcbi50YWItc3dpdGNoOmNoZWNrZWQrLnRhYi1sYWJlbCsudGV4dCB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyog44Op44K444Kq44Oc44K/44Oz6Z2e6KGo56S6ICovXHJcbi50YWItc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFpdXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XHJcbn1cclxuLnRhYi1zd2l0Y2g6Y2hlY2tlZCsudGFiLWxhYmVsKy50ZXh0Ky5haXV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9sYWJlbGJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM2ZmY3MTQmYmluZGluZ3M9e1xcXCJ6ZW5rb2t1SWRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwib2theWFtYUlkXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInRzdXlhbWFJZFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJtc2dcXFwiOlxcXCJwcm9wc1xcXCIsXFxcImlkbmFtZVxcXCI6XFxcInByb3BzXFxcIixcXFwiaW5mZWN0ZWRcXFwiOlxcXCJwcm9wc1xcXCJ9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGFiZWxib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xhYmVsYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vbGFiZWxib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgcmVkdWNlLCByZWR1Y2VSaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX1JJR0hUKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgY2FsbGJhY2tmbiwgYXJndW1lbnRzTGVuZ3RoLCBtZW1vKSB7XG4gICAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICAgIHZhciBPID0gdG9PYmplY3QodGhhdCk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoO0lTX1JJR0hUID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKSBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlcmlnaHRcbiAgcmlnaHQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9sYWJlbGJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIl0sInNvdXJjZVJvb3QiOiIifQ==