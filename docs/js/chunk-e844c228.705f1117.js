(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e844c228"], {
      "17a0": function (t, e, n) {
        "use strict";
        n("c74c")
      },
      5899: function (t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      },
      "58a8": function (t, e, n) {
        var c = n("1d80"),
          i = n("5899"),
          o = "[" + i + "]",
          a = RegExp("^" + o + o + "*"),
          u = RegExp(o + o + "*$"),
          l = function (t) {
            return function (e) {
              var n = String(c(e));
              return 1 & t && (n = n.replace(a, "")), 2 & t && (n = n.replace(u, "")), n
            }
          };
        t.exports = {
          start: l(1),
          end: l(2),
          trim: l(3)
        }
      },
      7156: function (t, e, n) {
        var c = n("861d"),
          i = n("d2bb");
        t.exports = function (t, e, n) {
          var o, a;
          return i && "function" == typeof (o = e.constructor) && o !== n && c(a = o.prototype) && a !== n.prototype && i(t, a), t
        }
      },
      a9e3: function (t, e, n) {
        "use strict";
        var c = n("83ab"),
          i = n("da84"),
          o = n("94ca"),
          a = n("6eeb"),
          u = n("5135"),
          l = n("c6b6"),
          r = n("7156"),
          s = n("c04e"),
          h = n("d039"),
          b = n("7c73"),
          j = n("241c").f,
          O = n("06cf").f,
          f = n("9bf2").f,
          d = n("58a8").trim,
          p = "Number",
          _ = i[p],
          m = _.prototype,
          g = l(b(m)) == p,
          y = function (t) {
            var e, n, c, i, o, a, u, l, r = s(t, !1);
            if ("string" == typeof r && r.length > 2)
              if (r = d(r), e = r.charCodeAt(0), 43 === e || 45 === e) {
                if (n = r.charCodeAt(2), 88 === n || 120 === n) return NaN
              } else if (48 === e) {
              switch (r.charCodeAt(1)) {
              case 66:
              case 98:
                c = 2, i = 49;
                break;
              case 79:
              case 111:
                c = 8, i = 55;
                break;
              default:
                return +r
              }
              for (o = r.slice(2), a = o.length, u = 0; u < a; u++)
                if (l = o.charCodeAt(u), l < 48 || l > i) return NaN;
              return parseInt(o, c)
            }
            return +r
          };
        if (o(p, !_(" 0o1") || !_("0b1") || _("+0x1"))) {
          for (var v, N = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this;
              return n instanceof N && (g ? h((function () {
                m.valueOf.call(n)
              })) : l(n) != p) ? r(new _(y(e)), n, N) : y(e)
            }, k = c ? j(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), I = 0; k.length > I; I++) u(_, v = k[I]) && !u(N, v) && f(N, v, O(_, v));
          N.prototype = m, m.constructor = N, a(i, p, N)
        }
      },
      ad3a: function (t, e, n) {
        "use strict";
        var c = n("7a23"),
          i = {
            key: 0
          },
          o = {
            class: "main"
          },
          a = Object(c["g"])("新型コロナウイルス最新情報"),
          u = Object(c["g"])("施設情報"),
          l = Object(c["g"])("感染の疑いがある方"),
          r = {
            key: 1
          },
          s = Object(c["g"])("新型コロナウイルス最新情報"),
          h = {
            class: "main"
          },
          b = Object(c["g"])("施設情報"),
          j = Object(c["g"])("感染の疑いがある方"),
          O = {
            key: 2
          },
          f = Object(c["g"])("新型コロナウイルス最新情報"),
          d = Object(c["g"])("施設情報"),
          p = {
            class: "main"
          },
          _ = Object(c["g"])("感染の疑いがある方");
  
        function m(t, e, n, m, g, y) {
          var v = Object(c["x"])("router-link"),
            N = Object(c["x"])("router-view");
          return Object(c["q"])(), Object(c["d"])("nav", null, [0 == n.judge ? (Object(c["q"])(), Object(c["d"])("ul", i, [Object(c["h"])("li", o, [Object(c["h"])(v, {
            to: "/"
          }, {
            default: Object(c["D"])((function () {
              return [a]
            })),
            _: 1
          })]), Object(c["h"])("li", null, [Object(c["h"])(v, {
            to: "/Shisetupage"
          }, {
            default: Object(c["D"])((function () {
              return [u]
            })),
            _: 1
          })]), Object(c["h"])("li", null, [Object(c["h"])(v, {
            to: "/Helppage"
          }, {
            default: Object(c["D"])((function () {
              return [l]
            })),
            _: 1
          })])])) : Object(c["e"])("", !0), 1 == n.judge ? (Object(c["q"])(), Object(c["d"])("ul", r, [Object(c["h"])("li", null, [Object(c["h"])(v, {
            to: "/"
          }, {
            default: Object(c["D"])((function () {
              return [s]
            })),
            _: 1
          })]), Object(c["h"])("li", h, [Object(c["h"])(v, {
            to: "/Shisetupage"
          }, {
            default: Object(c["D"])((function () {
              return [b]
            })),
            _: 1
          })]), Object(c["h"])("li", null, [Object(c["h"])(v, {
            to: "/Helppage"
          }, {
            default: Object(c["D"])((function () {
              return [j]
            })),
            _: 1
          })])])) : Object(c["e"])("", !0), 2 == n.judge ? (Object(c["q"])(), Object(c["d"])("ul", O, [Object(c["h"])("li", null, [Object(c["h"])(v, {
            to: "/"
          }, {
            default: Object(c["D"])((function () {
              return [f]
            })),
            _: 1
          })]), Object(c["h"])("li", null, [Object(c["h"])(v, {
            to: "/Shisetupage"
          }, {
            default: Object(c["D"])((function () {
              return [d]
            })),
            _: 1
          })]), Object(c["h"])("li", p, [Object(c["h"])(v, {
            to: "/Helppage"
          }, {
            default: Object(c["D"])((function () {
              return [_]
            })),
            _: 1
          })])])) : Object(c["e"])("", !0), Object(c["h"])(N)])
        }
        var g = {
          name: "mainmenu",
          props: {
            judge: {
              type: String
            }
          }
        };
        n("ffde");
        g.render = m;
        e["a"] = g
      },
      c74c: function (t, e, n) {},
      ee4b: function (t, e, n) {
        "use strict";
        n.r(e);
        var c = n("7a23"),
          i = Object(c["F"])("data-v-6cafda22");
        Object(c["t"])("data-v-6cafda22");
        var o = {
            class: "pagelink"
          },
          a = Object(c["g"])("施設情報"),
          u = Object(c["h"])("a", null, "＞", -1),
          l = Object(c["g"])("津山市施設一覧"),
          r = Object(c["h"])("a", null, "＞", -1),
          s = Object(c["h"])("a", null, "施設詳細情報", -1),
          h = Object(c["h"])("h1", null, "施設詳細情報", -1),
          b = {
            key: 0,
            class: "syousai"
          },
          j = Object(c["h"])("th", null, "施設名", -1),
          O = Object(c["h"])("th", null, "電話番号", -1),
          f = {
            key: 0
          },
          d = {
            key: 1
          },
          p = {
            key: 2
          },
          _ = {
            key: 0
          },
          m = {
            key: 1
          },
          g = Object(c["h"])("th", null, "住所", -1),
          y = Object(c["h"])("th", null, "地図", -1),
          v = {
            key: 0
          },
          N = {
            key: 1
          };
        Object(c["r"])();
        var k = i((function (t, e, n, k, I, w) {
            var E = Object(c["x"])("mainmenu"),
              q = Object(c["x"])("router-link");
            return Object(c["q"])(), Object(c["d"])(c["a"], null, [Object(c["h"])(E, {
              judge: "1"
            }), Object(c["h"])("div", o, [Object(c["h"])(q, {
              to: "/shisetupage"
            }, {
              default: i((function () {
                return [a]
              })),
              _: 1
            }), u, Object(c["h"])(q, {
              to: {
                name: "Shisetu_itiranpage",
                params: {
                  location_no: n.location_no
                }
              }
            }, {
              default: i((function () {
                return [l]
              })),
              _: 1
            }, 8, ["to"]), r, s]), h, t.count >= 0 ? (Object(c["q"])(), Object(c["d"])("table", b, [Object(c["h"])("tbody", null, [Object(c["h"])("tr", null, [j, Object(c["h"])("td", null, Object(c["z"])(w.placeName), 1)]), Object(c["h"])("tr", null, [O, Object(c["h"])("td", null, Object(c["z"])(w.placeTEL), 1)]), Object(c["h"])("tr", null, [12 == n.location_no ? (Object(c["q"])(), Object(c["d"])("th", f, "設置場所")) : Object(c["e"])("", !0), 1 == n.location_no || 2 == n.location_no || 3 == n.location_no ? (Object(c["q"])(), Object(c["d"])("th", d, "診療科目")) : (Object(c["q"])(), Object(c["d"])("th", p, "URL")), Object(c["h"])("td", null, [12 == n.location_no ? (Object(c["q"])(), Object(c["d"])("a", _, Object(c["z"])(w.placeURL), 1)) : Object(c["e"])("", !0), 1 == n.location_no || 2 == n.location_no || 3 == n.location_no ? (Object(c["q"])(), Object(c["d"])("a", m, "もうしばらくお待ちください")) : (Object(c["q"])(), Object(c["d"])("a", {
              key: 2,
              href: w.toPlace
            }, Object(c["z"])(w.placeURL), 9, ["href"]))])]), Object(c["h"])("tr", null, [g, Object(c["h"])("td", null, Object(c["z"])(w.place), 1)]), Object(c["h"])("tr", null, [y, 1 != n.location_no && 2 != n.location_no && 3 != n.location_no ? (Object(c["q"])(), Object(c["d"])("td", v, [Object(c["h"])("iframe", {
              src: w.gMaps,
              height: "450",
              frameborder: "0",
              style: {
                border: "0"
              },
              allowfullscreen: ""
            }, null, 8, ["src"])])) : (Object(c["q"])(), Object(c["d"])("td", N, "もうしばらくお待ちください"))])])])) : Object(c["e"])("", !0)], 64)
          })),
          I = (n("a9e3"), n("ad3a")),
          w = {
            name: "Shisetu_syousaipage",
            props: {
              no: {
                type: String
              },
              location_no: {
                type: String
              }
            },
            components: {
              mainmenu: I["a"]
            },
            data: function () {
              return {
                item: this.$store.state.facilityTableData,
                j: 0,
                i: 0,
                gmaps: {
                  type: String
                },
                count: {
                  type: Number
                }
              }
            },
            mounted: function () {
              this.count = this.rowGet()
            },
            computed: {
              toPlace: function () {
                return this.item[this.count]["URL"]
              },
              gMaps: function () {
                return "12" == this.location_no ? "https://www.google.com/maps?output=embed&z=15&ll=" + this.item[this.count]["世界_10進_Y"] + "," + this.item[this.count]["世界_10進_X"] + "&q=" + this.item[this.count]["施設名"] : "https://www.google.com/maps?output=embed&z=15&ll=" + this.item[this.count]["世界_10進_Y"] + "," + this.item[this.count]["世界_10進_X"] + "&q=" + this.item[this.count]["名称"]
              },
              placeName: function () {
                return "1" == this.location_no || "2" == this.location_no || "3" == this.location_no ? this.item[this.count]["Unnamed: 10"] : "12" == this.location_no ? this.item[this.count]["施設名"] : this.item[this.count]["名称"]
              },
              placeTEL: function () {
                return "1" == this.location_no || "2" == this.location_no || "3" == this.location_no ? this.item[this.count]["Unnamed: 18"] : "12" == this.location_no ? this.item[this.count]["電話"] : this.item[this.count]["TEL"]
              },
              placeURL: function () {
                return "12" == this.location_no ? this.item[this.count]["設置場所"] : this.item[this.count]["URL"]
              },
              place: function () {
                return "1" == this.location_no || "2" == this.location_no || "3" == this.location_no ? this.item[this.count]["Unnamed: 15"] : this.item[this.count]["住所"]
              }
            },
            methods: {
              rowGet: function () {
                for (this.i = 0; this.i < this.item.length; this.i++)("12" == this.location_no && this.item[this.i]["施設名"] == this.no || "12" != this.location_no && this.item[this.i]["名称"] == this.no) && (this.j = this.i);
                return this.j
              }
            }
          };
        n("17a0");
        w.render = k, w.__scopeId = "data-v-6cafda22";
        e["default"] = w
      },
      ef13: function (t, e, n) {},
      ffde: function (t, e, n) {
        "use strict";
        n("ef13")
      }
    }
  ]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/MDQwZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW5tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWlubWVudS52dWU/ZTZkMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NoaXNldHVfc3lvdXNhaXBhZ2UudnVlPzZhZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbm1lbnUudnVlP2M2NDAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCJ3aGl0ZXNwYWNlcyIsIndoaXRlc3BhY2UiLCJsdHJpbSIsIlJlZ0V4cCIsInJ0cmltIiwiY3JlYXRlTWV0aG9kIiwiVFlQRSIsIiR0aGlzIiwic3RyaW5nIiwiU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0IiwiZW5kIiwidHJpbSIsImlzT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJkdW1teSIsIldyYXBwZXIiLCJOZXdUYXJnZXQiLCJOZXdUYXJnZXRQcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIkRFU0NSSVBUT1JTIiwiZ2xvYmFsIiwiaXNGb3JjZWQiLCJyZWRlZmluZSIsImhhcyIsImNsYXNzb2YiLCJpbmhlcml0SWZSZXF1aXJlZCIsInRvUHJpbWl0aXZlIiwiZmFpbHMiLCJjcmVhdGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiTlVNQkVSIiwiTmF0aXZlTnVtYmVyIiwiTnVtYmVyUHJvdG90eXBlIiwiQlJPS0VOX0NMQVNTT0YiLCJ0b051bWJlciIsImFyZ3VtZW50IiwiZmlyc3QiLCJ0aGlyZCIsInJhZGl4IiwibWF4Q29kZSIsImRpZ2l0cyIsImxlbmd0aCIsImluZGV4IiwiY29kZSIsIml0IiwiY2hhckNvZGVBdCIsIk5hTiIsInNsaWNlIiwicGFyc2VJbnQiLCJrZXkiLCJOdW1iZXJXcmFwcGVyIiwidmFsdWUiLCJhcmd1bWVudHMiLCJ0aGlzIiwidmFsdWVPZiIsImNhbGwiLCJrZXlzIiwic3BsaXQiLCJqIiwiY2xhc3MiLCJqdWRnZSIsInRvIiwibmFtZSIsInByb3BzIiwidHlwZSIsInJlbmRlciIsImxvY2F0aW9uX25vIiwiY291bnQiLCJwbGFjZU5hbWUiLCJwbGFjZVRFTCIsInBsYWNlVVJMIiwiaHJlZiIsInRvUGxhY2UiLCJwbGFjZSIsInNyYyIsImdNYXBzIiwiaGVpZ2h0IiwiZnJhbWVib3JkZXIiLCJzdHlsZSIsImFsbG93ZnVsbHNjcmVlbiIsIm5vIiwiY29tcG9uZW50cyIsIm1haW5tZW51IiwiZGF0YSIsIml0ZW0iLCIkc3RvcmUiLCJzdGF0ZSIsImZhY2lsaXR5VGFibGVEYXRhIiwiaSIsImdtYXBzIiwiTnVtYmVyIiwibW91bnRlZCIsInJvd0dldCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIl9fc2NvcGVJZCJdLCJtYXBwaW5ncyI6ImtIQUFBLFcsbUJDRUFBLEVBQU9DLFFBQVUsaUQsdUJDRmpCLElBQUlDLEVBQXlCLEVBQVEsUUFDakNDLEVBQWMsRUFBUSxRQUV0QkMsRUFBYSxJQUFNRCxFQUFjLElBQ2pDRSxFQUFRQyxPQUFP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RDdEM0IsS0FBS0ssRUFBSUwsS0FBS21DLEdBS3RCLE9BQU9uQyxLQUFLSyxLLFVDdElwQixFQUFPTyxPQUFTLEVBQ2hCLEVBQU84QixVQUFZLGtCQUVKLGdCLHlEQ1JmIiwiZmlsZSI6ImpzL2NodW5rLWU4NDRjMjI4LjcwNWYxMTE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPz9yZWYtLTAtMSEuL1NoaXNldHVfc3lvdXNhaXBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmNhZmRhMjImc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG4gIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcbiAgaWYgKFxuICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuICAgIHNldFByb3RvdHlwZU9mICYmXG4gICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuICAgIHR5cGVvZiAoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpID09ICdmdW5jdGlvbicgJiZcbiAgICBOZXdUYXJnZXQgIT09IFdyYXBwZXIgJiZcbiAgICBpc09iamVjdChOZXdUYXJnZXRQcm90b3R5cGUgPSBOZXdUYXJnZXQucHJvdG90eXBlKSAmJlxuICAgIE5ld1RhcmdldFByb3RvdHlwZSAhPT0gV3JhcHBlci5wcm90b3R5cGVcbiAgKSBzZXRQcm90b3R5cGVPZigkdGhpcywgTmV3VGFyZ2V0UHJvdG90eXBlKTtcbiAgcmV0dXJuICR0aGlzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG5cbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciBOYXRpdmVOdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBOdW1iZXJQcm90b3R5cGUgPSBOYXRpdmVOdW1iZXIucHJvdG90eXBlO1xuXG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ0xBU1NPRiA9IGNsYXNzb2YoY3JlYXRlKE51bWJlclByb3RvdHlwZSkpID09IE5VTUJFUjtcblxuLy8gYFRvTnVtYmVyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbnVtYmVyXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgdmFyIGZpcnN0LCB0aGlyZCwgcmFkaXgsIG1heENvZGUsIGRpZ2l0cywgbGVuZ3RoLCBpbmRleCwgY29kZTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSB0cmltKGl0KTtcbiAgICBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IGl0LnNsaWNlKDIpO1xuICAgICAgbGVuZ3RoID0gZGlnaXRzLmxlbmd0aDtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuLy8gYE51bWJlcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci1jb25zdHJ1Y3RvclxuaWYgKGlzRm9yY2VkKE5VTUJFUiwgIU5hdGl2ZU51bWJlcignIDBvMScpIHx8ICFOYXRpdmVOdW1iZXIoJzBiMScpIHx8IE5hdGl2ZU51bWJlcignKzB4MScpKSkge1xuICB2YXIgTnVtYmVyV3JhcHBlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciBkdW1teSA9IHRoaXM7XG4gICAgcmV0dXJuIGR1bW15IGluc3RhbmNlb2YgTnVtYmVyV3JhcHBlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NMQVNTT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IE51bWJlclByb3RvdHlwZS52YWx1ZU9mLmNhbGwoZHVtbXkpOyB9KSA6IGNsYXNzb2YoZHVtbXkpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlTnVtYmVyKHRvTnVtYmVyKGl0KSksIGR1bW15LCBOdW1iZXJXcmFwcGVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IERFU0NSSVBUT1JTID8gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVOdW1iZXIpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVMyMDE1IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVMyMDE1IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoTmF0aXZlTnVtYmVyLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKE51bWJlcldyYXBwZXIsIGtleSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlcldyYXBwZXIsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5hdGl2ZU51bWJlciwga2V5KSk7XG4gICAgfVxuICB9XG4gIE51bWJlcldyYXBwZXIucHJvdG90eXBlID0gTnVtYmVyUHJvdG90eXBlO1xuICBOdW1iZXJQcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJXcmFwcGVyO1xuICByZWRlZmluZShnbG9iYWwsIE5VTUJFUiwgTnVtYmVyV3JhcHBlcik7XG59XG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8bmF2PlxyXG4gICAgICAgIDx1bCB2LWlmPVwianVkZ2U9PTBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWFpblwiPjxyb3V0ZXItbGluayB0bz1cIi9cIj7mlrDlnovjgrPjg63jg4rjgqbjgqTjg6vjgrnmnIDmlrDmg4XloLE8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdG89XCIvU2hpc2V0dXBhZ2VcIj7mlr3oqK3mg4XloLE8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdG89XCIvSGVscHBhZ2VcIj7mhJ/mn5Pjga7nlpHjgYTjgYzjgYLjgovmlrk8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgdi1pZj1cImp1ZGdlPT0xXCI+XHJcbiAgICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdG89XCIvXCI+5paw5Z6L44Kz44Ot44OK44Km44Kk44Or44K55pyA5paw5oOF5aCxPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtYWluXCI+PHJvdXRlci1saW5rIHRvPVwiL1NoaXNldHVwYWdlXCI+5pa96Kit5oOF5aCxPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL0hlbHBwYWdlXCI+5oSf5p+T44Gu55aR44GE44GM44GC44KL5pa5PC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIHYtaWY9XCJqdWRnZT09MlwiPlxyXG4gICAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL1wiPuaWsOWei+OCs+ODreODiuOCpuOCpOODq+OCueacgOaWsOaDheWgsTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0bz1cIi9TaGlzZXR1cGFnZVwiPuaWveioreaDheWgsTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWFpblwiPjxyb3V0ZXItbGluayB0bz1cIi9IZWxwcGFnZVwiPuaEn+afk+OBrueWkeOBhOOBjOOBguOCi+aWuTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxyb3V0ZXItdmlldy8+XHJcbiAgICA8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdtYWlubWVudScsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgICAganVkZ2U6e1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbm5hdntcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxubmF2IHVse1xyXG5kaXNwbGF5OiB0YWJsZTtcclxubWFyZ2luOiAwIGF1dG87XHJcbnBhZGRpbmc6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubmF2IHVsIGxpe1xyXG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5taW4td2lkdGg6IDUwcHg7XHJcbndpZHRoOiAxMDBweDtcclxuYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCl7XHJcbiAgbmF2IHVsIGxpe1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbm5hdiB1bCBsaTpmaXJzdC1jaGlsZHtcclxuYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbm5hdiB1bCBsaSBhe1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDEwMCU7XHJcbnBhZGRpbmc6IDEwcHggMDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjogI2FhYTtcclxufVxyXG5uYXYgdWwgbGkgYTpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjojRjhFNzUwO1xyXG5ib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y4RTc1MDtcclxufVxyXG5uYXYgdWwgbGkubWFpbntcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxubmF2IHVsIGxpLm1haW4gYXtcclxuYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMEIwRjA7XHJcbmNvbG9yOiAjMDBCMEYwO1xyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vbWFpbm1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkzNWE3Njg0JmJpbmRpbmdzPXtcXFwianVkZ2VcXFwiOlxcXCJwcm9wc1xcXCJ9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFpbm1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL21haW5tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vbWFpbm1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCI8dGVtcGxhdGU+XHJcbiAgICA8bWFpbm1lbnUganVkZ2U9MSAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2VsaW5rXCI+XHJcbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NoaXNldHVwYWdlXCI+5pa96Kit5oOF5aCxPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8YT7vvJ48L2E+PHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAnU2hpc2V0dV9pdGlyYW5wYWdlJywgcGFyYW1zOiB7bG9jYXRpb25fbm86IGxvY2F0aW9uX25vfX1cIj7mtKXlsbHluILmlr3oqK3kuIDopqc8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDxhPu+8njwvYT48YT7mlr3oqK3oqbPntLDmg4XloLE8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxoMT7mlr3oqK3oqbPntLDmg4XloLE8L2gxPlxyXG4gICAgPHRhYmxlIHYtaWY9XCJjb3VudD49MFwiIGNsYXNzPVwic3lvdXNhaVwiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPuaWveioreWQjTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcGxhY2VOYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPumbu+ipseeVquWPtzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcGxhY2VURUwgfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cImxvY2F0aW9uX25vPT0xMlwiPuioree9ruWgtOaJgDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cImxvY2F0aW9uX25vPT0xIHx8IGxvY2F0aW9uX25vPT0yIHx8IGxvY2F0aW9uX25vPT0zXCI+6Ki655mC56eR55uuPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCB2LWVsc2U+VVJMPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwibG9jYXRpb25fbm89PTEyXCI+e3sgcGxhY2VVUkwgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cImxvY2F0aW9uX25vPT0xIHx8IGxvY2F0aW9uX25vPT0yIHx8IGxvY2F0aW9uX25vPT0zXCI+44KC44GG44GX44Gw44KJ44GP44GK5b6F44Gh44GP44Gg44GV44GEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtZWxzZSA6aHJlZj1cInRvUGxhY2VcIj57eyBwbGFjZVVSTCB9fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7kvY/miYA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IHBsYWNlIH19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPuWcsOWbszwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImxvY2F0aW9uX25vIT0xICYmIGxvY2F0aW9uX25vIT0yICYmIGxvY2F0aW9uX25vIT0zXCI+PGlmcmFtZSBcclxuICAgICAgICAgICAgICAgICAgICA6c3JjPVwiZ01hcHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCB2LWVsc2U+44KC44GG44GX44Gw44KJ44GP44GK5b6F44Gh44GP44Gg44GV44GEPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBtYWlubWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWlubWVudS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIlNoaXNldHVfc3lvdXNhaXBhZ2VcIixcclxuICBwcm9wczoge1xyXG4gICAgbm86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uX25vOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7IFxyXG4gICAgICBtYWlubWVudSxcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXRlbTogdGhpcy4kc3RvcmUuc3RhdGUuZmFjaWxpdHlUYWJsZURhdGEsXHJcbiAgICAgICAgICBqOiAwLFxyXG4gICAgICAgICAgaTogMCxcclxuICAgICAgICAgIGdtYXBzOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmNvdW50ID0gdGhpcy5yb3dHZXQoKTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAgIHRvUGxhY2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWydVUkwnXVxyXG4gICAgICB9LFxyXG4gICAgICBnTWFwczogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25fbm89PScxMicpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHM/b3V0cHV0PWVtYmVkJno9MTUmbGw9XCIgKyB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+S4lueVjF8xMOmAsl9ZJ10gKyBcIixcIiArIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsn5LiW55WMXzEw6YCyX1gnXSArIFwiJnE9XCIgKyB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+aWveioreWQjSddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHM/b3V0cHV0PWVtYmVkJno9MTUmbGw9XCIgKyB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+S4lueVjF8xMOmAsl9ZJ10gKyBcIixcIiArIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsn5LiW55WMXzEw6YCyX1gnXSArIFwiJnE9XCIgKyB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+WQjeensCddXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlTmFtZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25fbm89PScxJyB8fCB0aGlzLmxvY2F0aW9uX25vPT0nMicgfHwgdGhpcy5sb2NhdGlvbl9ubz09JzMnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWydVbm5hbWVkOiAxMCddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHRoaXMubG9jYXRpb25fbm89PScxMicpe1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+aWveioreWQjSddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+WQjeensCddXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlVEVMOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgaWYodGhpcy5sb2NhdGlvbl9ubz09JzEnIHx8IHRoaXMubG9jYXRpb25fbm89PScyJyB8fCB0aGlzLmxvY2F0aW9uX25vPT0nMycpe1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ1VubmFtZWQ6IDE4J11cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodGhpcy5sb2NhdGlvbl9ubz09JzEyJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsn6Zu76KmxJ11cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsnVEVMJ11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGxhY2VVUkw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uX25vPT0nMTInKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWyfoqK3nva7loLTmiYAnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWydVUkwnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwbGFjZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25fbm89PScxJyB8fCB0aGlzLmxvY2F0aW9uX25vPT0nMicgfHwgdGhpcy5sb2NhdGlvbl9ubz09JzMnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWydVbm5hbWVkOiAxNSddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWyfkvY/miYAnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgICByb3dHZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcih0aGlzLmk9MDsgdGhpcy5pPHRoaXMuaXRlbS5sZW5ndGg7IHRoaXMuaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5sb2NhdGlvbl9ubz09JzEyJyAmJiB0aGlzLml0ZW1bdGhpcy5pXVtcIuaWveioreWQjVwiXT09dGhpcy5ubyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmogPSB0aGlzLmlcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5sb2NhdGlvbl9ubyE9JzEyJyAmJiB0aGlzLml0ZW1bdGhpcy5pXVtcIuWQjeensFwiXT09dGhpcy5ubyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmogPSB0aGlzLmlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5qXHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5oMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM2ZWIwZjk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAtMTBweCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDApIDEwJSxyZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucGFnZWxpbmt7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICAucGFnZWxpbmt7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3lvdXNhaXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDZjZWI0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4gXHJcbi5zeW91c2FpIHRoe1xyXG4gICAgcGFkZGluZzogNnB4IDhweCA1cHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6ICMxMzEzMWU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlNDtcclxufVxyXG4gXHJcbi5zeW91c2FpIHRke1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGNvbG9yOiAjNTk1OTYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IGRvdHRlZCAxcHggI2UwZGNjYztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLnN5b3VzYWkgdGQgaWZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgICAuc3lvdXNhaSB0aHtcclxuICAgICAgICB3aWR0aDo5NSU7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbiAgICAuc3lvdXNhaSB0ZHtcclxuICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TaGlzZXR1X3N5b3VzYWlwYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Y2FmZGEyMiZzY29wZWQ9dHJ1ZSZiaW5kaW5ncz17XFxcIm5vXFxcIjpcXFwicHJvcHNcXFwiLFxcXCJsb2NhdGlvbl9ub1xcXCI6XFxcInByb3BzXFxcIixcXFwidG9QbGFjZVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJnTWFwc1xcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJwbGFjZU5hbWVcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwicGxhY2VURUxcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwicGxhY2VVUkxcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwicGxhY2VcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwicm93R2V0XFxcIjpcXFwib3B0aW9uc1xcXCJ9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1NoaXNldHVfc3lvdXNhaXBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmNhZmRhMjImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuc2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTZjYWZkYTIyXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPz9yZWYtLTAtMSEuL21haW5tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiXSwic291cmNlUm9vdCI6IiJ9