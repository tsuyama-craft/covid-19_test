(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5866690a"], {
    4667: function (t, e, i) {
      "use strict";
      i("6af6")
    },
    "4f66": function (t, e, i) {
      "use strict";
      (function (t) {
        i("99af"), i("4de4"), i("c975"), i("dca8"), i("ac1f"), i("5319"), i("1276");
        var a = i("ad3a"),
          o = i("bc3a"),
          n = i.n(o),
          s = i("4bb4"),
          h = i("10bf"),
          c = i.n(h);
        e["a"] = {
          name: "Shisetu_itiranpage",
          props: {
            location_no: {
              type: String
            }
          },
          components: {
            mainmenu: a["a"]
          },
          data: function () {
            return {
              windowWidth: window.innerWidth,
              keyword2: "",
              Sport: [],
              Nursery: [],
              Kind: [],
              Junior: [],
              JuniorHigh: [],
              Sight: [],
              Welfare: [],
              Park: [],
              Library: [],
              Government: [],
              Rally: [],
              Child: [],
              AED: [],
              Iryou: [],
              Shika: [],
              Yakkyoku: [],
              joinData: [],
              joinData2: [],
              tableData: [],
              Name: ""
            }
          },
          computed: {
            reverseItems: function () {
              var t = [];
              for (var e in this.tableData) {
                var i = this.tableData[e];
                "12" == this.location_no ? -1 === i["施設名"].indexOf(this.keyword2) && -1 === i["住所"].indexOf(this.keyword2) && -1 === i["電話"].indexOf(this.keyword2) || t.push(i) : "1" == this.location_no || "2" == this.location_no || "3" == this.location_no ? -1 === i["Unnamed: 10"].indexOf(this.keyword2) && -1 === i["Unnamed: 15"].indexOf(this.keyword2) && -1 === i["Unnamed: 18"].indexOf(this.keyword2) || t.push(i) : -1 === i["名称"].indexOf(this.keyword2) && -1 === i["住所"].indexOf(this.keyword2) && -1 === i["TEL"].indexOf(this.keyword2) || t.push(i)
              }
              return t
            }
          },
          mounted: function () {
            switch (this.location_no) {
              case "1":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Okayama_iryou.csv", !0, "UTF8", "UNICODE", this.setIryou);
                break;
              case "2":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Okayama_shika.csv", !0, "UTF8", "UNICODE", this.setShika);
                break;
              case "3":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Okayama_yakkyoku.csv", !0, "UTF8", "UNICODE", this.setYakkyoku);
                break;
              case "4":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Sports_location.csv", !0, "SJIS", "UNICODE", this.setSports);
                break;
              case "5":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Nursery_location.csv", !0, "SJIS", "UNICODE", this.setNursery), this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Kindergarten_location.csv", !0, "SJIS", "UNICODE", this.setKind), this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/JuniorSchool_location.csv", !0, "SJIS", "UNICODE", this.setJunior), this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/JuniorHighSchool_location.csv", !0, "SJIS", "UNICODE", this.setJuniorHigh);
                break;
              case "6":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Sightseeing_location.csv", !0, "SJIS", "UNICODE", this.setSight);
                break;
              case "7":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Welfare_location.csv", !0, "SJIS", "UNICODE", this.setWelfare);
                break;
              case "8":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Park_location.csv", !0, "SJIS", "UNICODE", this.setPark), this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Library_location.csv", !0, "SJIS", "UNICODE", this.setLibrary);
                break;
              case "9":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Government_location.csv", !0, "SJIS", "UNICODE", this.setGovernment);
                break;
              case "10":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Rally_location.csv", !0, "SJIS", "UNICODE", this.setRally);
                break;
              case "11":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/Children_location.csv", !0, "SJIS", "UNICODE", this.setChild);
                break;
              case "12":
                this.GetCsvFile("https://taurayouhei.github.io/covid-19/data/AED_location.csv", !0, "SJIS", "UNICODE", this.setAED);
                break;
              default:
                break
            }
          },
          methods: {
            setIryou: function (t) {
              this.Iryou = t, this.tableData = this.Iryou, this.tableData = this.tableData.filter((function (t) {
                if ("" != t["Unnamed: 10"] && -1 != t["Unnamed: 15"].indexOf("津山")) return !0
              }));
              for (var e = 0; e < this.tableData.length; e++) {
                var i = this.tableData[e]["Unnamed: 15"].split("\n"),
                  a = this.tableData[e]["Unnamed: 18"].split("\n");
                this.tableData[e]["Unnamed: 15"] = i[1], this.tableData[e]["Unnamed: 18"] = a[0]
              }
              this.$store.commit("toStore", this.tableData)
            },
            setShika: function (t) {
              this.Shika = t, this.tableData = this.Shika, this.tableData = this.tableData.filter((function (t) {
                if ("" != t["Unnamed: 10"] && -1 != t["Unnamed: 15"].indexOf("津山")) return !0
              }));
              for (var e = 0; e < this.tableData.length; e++) {
                var i = this.tableData[e]["Unnamed: 15"].split("\n"),
                  a = this.tableData[e]["Unnamed: 18"].split("\n");
                this.tableData[e]["Unnamed: 15"] = i[1], this.tableData[e]["Unnamed: 18"] = a[0]
              }
              this.$store.commit("toStore", this.tableData)
            },
            setYakkyoku: function (t) {
              this.Yakkyoku = t, this.tableData = this.Yakkyoku, this.tableData = this.tableData.filter((function (t) {
                if ("" != t["Unnamed: 10"] && -1 != t["Unnamed: 15"].indexOf("津山")) return !0
              }));
              for (var e = 0; e < this.tableData.length; e++) {
                var i = this.tableData[e]["Unnamed: 15"].split("\n"),
                  a = this.tableData[e]["Unnamed: 18"].split("\n");
                this.tableData[e]["Unnamed: 15"] = i[1], this.tableData[e]["Unnamed: 18"] = a[0]
              }
              this.$store.commit("toStore", this.tableData)
            },
            setSports: function (t) {
              this.Sport = t, this.tableData = this.Sport, this.$store.commit("toStore", this.tableData)
            },
            setNursery: function (t) {
              this.Nursery = t, this.Kind.length > 0 && this.Junior.length > 0 && this.JuniorHigh.length > 0 && (this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh), this.tableData = this.joinData, this.$store.commit("toStore", this.tableData))
            },
            setKind: function (t) {
              this.Kind = t, this.Nursery.length > 0 && this.Junior.length > 0 && this.JuniorHigh.length > 0 && (this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh), this.tableData = this.joinData, this.$store.commit("toStore", this.tableData))
            },
            setJunior: function (t) {
              this.Junior = t, this.Nursery.length > 0 && this.Kind.length > 0 && this.JuniorHigh.length > 0 && (this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh), this.tableData = this.joinData, this.$store.commit("toStore", this.tableData))
            },
            setJuniorHigh: function (t) {
              this.JuniorHigh = t, this.Nursery.length > 0 && this.Kind.length > 0 && this.Junior.length > 0 && (this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh), this.tableData = this.joinData, this.$store.commit("toStore", this.tableData))
            },
            setSight: function (t) {
              this.Sight = t, this.tableData = this.Sight, this.$store.commit("toStore", this.tableData)
            },
            setWelfare: function (t) {
              this.Welfare = t, this.tableData = this.Welfare, this.$store.commit("toStore", this.tableData)
            },
            setPark: function (t) {
              this.Park = t, this.Library.length > 0 && (this.joinData2 = this.Library.concat(this.Park), this.tableData = this.joinData2, this.$store.commit("toStore", this.tableData))
            },
            setLibrary: function (t) {
              this.Library = t, this.Park.length > 0 && (this.joinData2 = this.Library.concat(this.Park), this.tableData = this.joinData2, this.$store.commit("toStore", this.tableData))
            },
            setGovernment: function (t) {
              this.Government = t, this.tableData = this.Government, this.$store.commit("toStore", this.tableData)
            },
            setRally: function (t) {
              this.Rally = t, this.tableData = this.Rally, this.$store.commit("toStore", this.tableData)
            },
            setChild: function (t) {
              this.Child = t, this.tableData = this.Child, this.$store.commit("toStore", this.tableData)
            },
            setAED: function (t) {
              this.AED = t, this.tableData = this.AED, this.$store.commit("toStore", this.tableData)
            },
            GetCsvFile: function (e, i, a, o, h) {
              n.a.get(e, {
                responseType: "arraybuffer"
              }).then((function (e) {
                var n = t.from(e.data),
                  r = c.a.convert(n, {
                    from: a,
                    to: o,
                    type: "string"
                  });
                r = r.replace(/^\ufeff/, ""), Object(s["parse"])(r, {
                  columns: i,
                  quote: '"',
                  ltrim: !0,
                  rtrim: !0,
                  delimiter: ",",
                  cast: !0
                }, (function (t, e) {
                  h(Object.freeze(e))
                }))
              })).catch((function (t) {
                return console.log(t)
              }))
            }
          }
        }
      }).call(this, i("b639").Buffer)
    },
    "6af6": function (t, e, i) { },
    8418: function (t, e, i) {
      "use strict";
      var a = i("c04e"),
        o = i("9bf2"),
        n = i("5c6c");
      t.exports = function (t, e, i) {
        var s = a(e);
        s in t ? o.f(t, s, n(0, i)) : t[s] = i
      }
    },
    "99af": function (t, e, i) {
      "use strict";
      var a = i("23e7"),
        o = i("d039"),
        n = i("e8b5"),
        s = i("861d"),
        h = i("7b0b"),
        c = i("50c4"),
        r = i("8418"),
        l = i("65f0"),
        b = i("1dde"),
        u = i("b622"),
        d = i("2d00"),
        O = u("isConcatSpreadable"),
        j = 9007199254740991,
        f = "Maximum allowed index exceeded",
        y = d >= 51 || !o((function () {
          var t = [];
          return t[O] = !1, t.concat()[0] !== t
        })),
        D = b("concat"),
        m = function (t) {
          if (!s(t)) return !1;
          var e = t[O];
          return void 0 !== e ? !!e : n(t)
        },
        k = !y || !D;
      a({
        target: "Array",
        proto: !0,
        forced: k
      }, {
        concat: function (t) {
          var e, i, a, o, n, s = h(this),
            b = l(s, 0),
            u = 0;
          for (e = -1, a = arguments.length; e < a; e++)
            if (n = -1 === e ? s : arguments[e], m(n)) {
              if (o = c(n.length), u + o > j) throw TypeError(f);
              for (i = 0; i < o; i++, u++) i in n && r(b, u, n[i])
            } else {
              if (u >= j) throw TypeError(f);
              r(b, u++, n)
            }
          return b.length = u, b
        }
      })
    },
    a239: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7a23"),
        o = Object(a["F"])("data-v-73294452");
      Object(a["t"])("data-v-73294452");
      var n = {
        class: "pagelink"
      },
        s = Object(a["g"])("施設情報"),
        h = Object(a["h"])("a", null, "＞", -1),
        c = Object(a["h"])("a", null, "津山市施設一覧", -1),
        r = {
          key: 0
        },
        l = {
          key: 1
        },
        b = {
          key: 2
        },
        u = {
          key: 3
        },
        d = {
          key: 4
        },
        O = {
          key: 5
        },
        j = {
          key: 6
        },
        f = {
          key: 7
        },
        y = {
          key: 8
        },
        D = {
          key: 9
        },
        m = {
          key: 10
        },
        k = {
          key: 11
        },
        v = Object(a["h"])("br", null, null, -1),
        g = {
          class: "filter2"
        },
        p = {
          style: {
            "white-space": "nowrap"
          },
          class: "filterkeyword2"
        },
        S = Object(a["g"])("絞り込み"),
        _ = {
          key: 12,
          class: "table2",
          rules: "rows"
        },
        U = Object(a["h"])("th", null, "施設名", -1),
        C = Object(a["h"])("th", null, "住所", -1),
        w = {
          key: 0
        },
        J = {
          key: 0
        },
        I = {
          key: 1
        },
        E = {
          key: 2
        },
        N = {
          key: 3
        },
        q = {
          key: 4
        },
        x = {
          key: 5
        },
        G = {
          key: 6
        },
        F = {
          key: 7
        };
      Object(a["r"])();
      var $ = o((function (t, e, i, $, H, K) {
        var W = Object(a["x"])("mainmenu"),
          A = Object(a["x"])("router-link");
        return Object(a["q"])(), Object(a["d"])(a["a"], null, [Object(a["h"])(W, {
          judge: "1"
        }), Object(a["h"])("div", n, [Object(a["h"])(A, {
          to: "/shisetupage"
        }, {
          default: o((function () {
            return [s]
          })),
          _: 1
        }), h, c]), 1 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", r, "津山市医科一覧")) : Object(a["e"])("", !0), 2 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", l, "津山市歯科一覧")) : Object(a["e"])("", !0), 3 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", b, "津山市薬局一覧")) : Object(a["e"])("", !0), 4 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", u, "津山市体育施設一覧")) : Object(a["e"])("", !0), 5 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", d, "津山市教育施設一覧")) : Object(a["e"])("", !0), 6 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", O, "津山市観光施設一覧")) : Object(a["e"])("", !0), 7 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", j, "津山市福祉施設一覧")) : Object(a["e"])("", !0), 8 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", f, "津山市公園・図書館一覧")) : Object(a["e"])("", !0), 9 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", y, "津山市役所一覧")) : Object(a["e"])("", !0), 10 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", D, "津山市集会施設一覧")) : Object(a["e"])("", !0), 11 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", m, "津山市児童クラブ一覧")) : Object(a["e"])("", !0), 12 == i.location_no ? (Object(a["q"])(), Object(a["d"])("h1", k, "津山市AED設置場所一覧")) : Object(a["e"])("", !0), v, Object(a["h"])("div", g, [Object(a["h"])("span", p, [S, Object(a["E"])(Object(a["h"])("input", {
          type: "text",
          "onUpdate:modelValue": e[1] || (e[1] = function (e) {
            return t.keyword2 = e
          })
        }, null, 512), [
          [a["B"], t.keyword2]
        ])])]), t.tableData.length > 0 ? (Object(a["q"])(), Object(a["d"])("table", _, [Object(a["h"])("thead", null, [Object(a["h"])("tr", null, [U, C, t.windowWidth > 480 ? (Object(a["q"])(), Object(a["d"])("th", w, "電話番号")) : Object(a["e"])("", !0)])]), Object(a["h"])("tbody", null, [(Object(a["q"])(!0), Object(a["d"])(a["a"], null, Object(a["w"])(K.reverseItems, (function (e) {
          return Object(a["q"])(), Object(a["d"])("tr", {
            key: e
          }, ["1" == i.location_no || "2" == i.location_no || "3" == i.location_no ? (Object(a["q"])(), Object(a["d"])("td", J, [Object(a["h"])(A, {
            to: {
              name: "Shisetu_syousaipage",
              params: {
                no: e["Unnamed: 10"],
                location_no: i.location_no
              }
            }
          }, {
            default: o((function () {
              return [Object(a["g"])(Object(a["z"])(e["Unnamed: 10"]), 1)]
            })),
            _: 2
          }, 1032, ["to"])])) : Object(a["e"])("", !0), "12" == i.location_no ? (Object(a["q"])(), Object(a["d"])("td", I, [Object(a["h"])(A, {
            to: {
              name: "Shisetu_syousaipage",
              params: {
                no: e.施設名,
                location_no: i.location_no
              }
            }
          }, {
            default: o((function () {
              return [Object(a["g"])(Object(a["z"])(e.施設名), 1)]
            })),
            _: 2
          }, 1032, ["to"])])) : Object(a["e"])("", !0), "12" != i.location_no && "1" != i.location_no && "2" != i.location_no && "3" != i.location_no ? (Object(a["q"])(), Object(a["d"])("td", E, [Object(a["h"])(A, {
            to: {
              name: "Shisetu_syousaipage",
              params: {
                no: e.名称,
                location_no: i.location_no
              }
            }
          }, {
            default: o((function () {
              return [Object(a["g"])(Object(a["z"])(e.名称), 1)]
            })),
            _: 2
          }, 1032, ["to"])])) : Object(a["e"])("", !0), "1" == i.location_no || "2" == i.location_no || "3" == i.location_no ? (Object(a["q"])(), Object(a["d"])("td", N, Object(a["z"])(e["Unnamed: 15"]), 1)) : (Object(a["q"])(), Object(a["d"])("td", q, Object(a["z"])(e.住所), 1)), t.windowWidth > 480 && ("1" == i.location_no || "2" == i.location_no || "3" == i.location_no) ? (Object(a["q"])(), Object(a["d"])("td", x, Object(a["z"])(e["Unnamed: 18"]), 1)) : Object(a["e"])("", !0), t.windowWidth > 480 && "12" == i.location_no ? (Object(a["q"])(), Object(a["d"])("td", G, Object(a["z"])(e.電話), 1)) : Object(a["e"])("", !0), t.windowWidth > 480 && "12" != i.location_no && "1" != i.location_no && "2" != i.location_no && "3" != i.location_no ? (Object(a["q"])(), Object(a["d"])("td", F, Object(a["z"])(e.TEL), 1)) : Object(a["e"])("", !0)])
        })), 128))])])) : Object(a["e"])("", !0)], 64)
      })),
        H = i("4f66");
      i("4667");
      H["a"].render = $, H["a"].__scopeId = "data-v-73294452";
      e["default"] = H["a"]
    },
    c975: function (t, e, i) {
      "use strict";
      var a = i("23e7"),
        o = i("4d64").indexOf,
        n = i("a640"),
        s = i("ae40"),
        h = [].indexOf,
        c = !!h && 1 / [1].indexOf(1, -0) < 0,
        r = n("indexOf"),
        l = s("indexOf", {
          ACCESSORS: !0,
          1: 0
        });
      a({
        target: "Array",
        proto: !0,
        forced: c || !r || !l
      }, {
        indexOf: function (t) {
          return c ? h.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    }
  }
]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZT84OGQ3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NoaXNldHVfaXRpcmFucGFnZS52dWU/NzViNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImxvY2F0aW9uX25vIiwidHlwZSIsIlN0cmluZyIsImNvbXBvbmVudHMiLCJtYWlubWVudSIsImRhdGEiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJrZXl3b3JkMiIsIlNwb3J0IiwiTnVyc2VyeSIsIktpbmQiLCJKdW5pb3IiLCJKdW5pb3JIaWdoIiwiU2lnaHQiLCJXZWxmYXJlIiwiUGFyayIsIkxpYnJhcnkiLCJHb3Zlcm5tZW50IiwiUmFsbHkiLCJDaGlsZCIsIkFFRCIsIklyeW91IiwiU2hpa2EiLCJZYWtreW9rdSIsImpvaW5EYXRhIiwiam9pbkRhdGEyIiwidGFibGVEYXRhIiwiTmFtZSIsImNvbXB1dGVkIiwicmV2ZXJzZUl0ZW1zIiwiZmlsdGVyZWRUYWJsZSIsImkiLCJ0aGlzIiwiZmlsdGVyZWRUYWJsZXMiLCJpbmRleE9mIiwicHVzaCIsIm1vdW50ZWQiLCJHZXRDc3ZGaWxlIiwic2V0SXJ5b3UiLCJzZXRTaGlrYSIsInNldFlha2t5b2t1Iiwic2V0U3BvcnRzIiwic2V0TnVyc2VyeSIsInNldEtpbmQiLCJzZXRKdW5pb3IiLCJzZXRKdW5pb3JIaWdoIiwic2V0U2lnaHQiLCJzZXRXZWxmYXJlIiwic2V0UGFyayIsInNldExpYnJhcnkiLCJzZXRHb3Zlcm5tZW50Iiwic2V0UmFsbHkiLCJzZXRDaGlsZCIsInNldEFFRCIsIm1ldGhvZHMiLCJmaWx0ZXIiLCJlYWNoIiwibGVuZ3RoIiwic21wIiwic3BsaXQiLCJ0bXAiLCIkc3RvcmUiLCJjb21taXQiLCJjb25jYXQiLCJ1cmwiLCJjb2wiLCJmcm9tIiwidG8iLCJzZXR0ZXIiLCJhIiwiZ2V0IiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiYnVmZmVyIiwiQnVmZmVyIiwiY3N2IiwiY29udmVydCIsInJlcGxhY2UiLCJjb2x1bW5zIiwicXVvdGUiLCJsdHJpbSIsInJ0cmltIiwiZGVsaW1pdGVyIiwiY2FzdCIsImVycm9yIiwib3V0cHV0IiwiT2JqZWN0IiwiZnJlZXplIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwidG9QcmltaXRpdmUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsImNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInByb3BlcnR5S2V5IiwiZiIsIiQiLCJmYWlscyIsImlzQXJyYXkiLCJpc09iamVjdCIsInRvT2JqZWN0IiwidG9MZW5ndGgiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5U3BlY2llc0NyZWF0ZSIsImFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQiLCJ3ZWxsS25vd25TeW1ib2wiLCJWOF9WRVJTSU9OIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEUiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCIsImFycmF5IiwiU1BFQ0lFU19TVVBQT1JUIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwiTyIsInNwcmVhZGFibGUiLCJ1bmRlZmluZWQiLCJGT1JDRUQiLCJ0YXJnZXQiLCJwcm90byIsImZvcmNlZCIsImFyZyIsImsiLCJsZW4iLCJFIiwiQSIsIm4iLCJhcmd1bWVudHMiLCJUeXBlRXJyb3IiLCJjbGFzcyIsInN0eWxlIiwicnVsZXMiLCJqdWRnZSIsInJvdyIsIuaWveioreWQjSIsIuWQjeensCIsIuS9j+aJgCIsIumbu+ipsSIsIlRFTCIsInJlbmRlciIsIl9fc2NvcGVJZCIsIiRpbmRleE9mIiwiYXJyYXlNZXRob2RJc1N0cmljdCIsImFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoIiwibmF0aXZlSW5kZXhPZiIsIk5FR0FUSVZFX1pFUk8iLCJTVFJJQ1RfTUVUSE9EIiwiVVNFU19UT19MRU5HVEgiLCJBQ0NFU1NPUlMiLCIxIiwic2VhcmNoRWxlbWVudCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiZ0hBQUEsVyw2TEN1RGUsUUFDYkEsS0FBTSxxQkFDTkMsTUFBTyxDQUNMQyxZQUFZLENBQ1ZDLEtBQU1DLFNBR1ZDLFdBQVksQ0FDUkMsU0FBQSxRQUVKQyxLQUFNLFdBQ0osTUFBTyxDQUNMQyxZQUFhQyxPQUFPQyxXQUNwQkMsU0FBVSxHQUNWQyxNQUFPLEdBQ1BDLFFBQVMsR0FDVEMsS0FBTSxHQUNOQyxPQUFRLEdBQ1JDLFdBQVksR0FDWkMsTUFBTyxHQUNQQyxRQUFTLEdBQ1RDLEtBQU0sR0FDTkMsUUFBUyxHQUNUQyxXQUFZLEdBQ1pDLE1BQU8sR0FDUEMsTUFBTyxHQUNQQyxJQUFLLEdBQ0xDLE1BQU8sR0FDUEMsTUFBTyxHQUNQQyxTQUFVLEdBQ1ZDLFNBQVUsR0FDVkMsVUFBVyxHQUNYQyxVQUFXLEdBQ1hDLEtBQU0sS0FHVkMsU0FBVSxDQUNSQyxhQURRLFdBRU4sSUFBTUMsRUFBZ0IsR0FDdEIsSUFBSyxJQUFJQyxLQUFLQyxLQUFLTixVQUFVLENBQzNCLElBQU1PLEVBQWlCRCxLQUFLTixVQUFVSyxHQUNqQixNQUFsQkMsS0FBS2xDLGFBQytDLElBQWxEbUMsRUFBZSxPQUFPQyxRQUFRRixLQUFLekIsWUFDZSxJQUFqRDBCLEVBQWUsTUFBTUMsUUFBUUYsS0FBS3pCLFlBQ2UsSUFBakQw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QUEwQixzQkFBYkEsRUFBSUcsSUFBRSxJQUVULEVBQUExSSxZQUFXLE1BQW9CLEtBQVgsRUFBQU4sYUFBK0IsS0FBWCxFQUFBQSxhQUErQixLQUFYLEVBQUFBLGMsaUJBQXRFLGVBQW9ILHNCQUF6QjZJLEVBQUksZ0JBQUQsSSxzQkFDcEYsRUFBQXZJLFlBQVcsS0FBbUIsTUFBWCxFQUFBTixhLGlCQUE3QixlQUErRCxzQkFBYjZJLEVBQUlJLElBQUUsSSxzQkFDOUMsRUFBQTNJLFlBQVcsS0FBbUIsTUFBWCxFQUFBTixhQUFnQyxLQUFYLEVBQUFBLGFBQStCLEtBQVgsRUFBQUEsYUFBK0IsS0FBWCxFQUFBQSxhLGlCQUExRixlQUE0SCxzQkFBZDZJLEVBQUlLLEtBQUcsSSwwRkdyQzdILE9BQU9DLE9BQVMsRUFDaEIsT0FBT0MsVUFBWSxrQkFFSixxQixrQ0NQZixJQUFJNUMsRUFBSSxFQUFRLFFBQ1o2QyxFQUFXLEVBQVEsUUFBK0JqSCxRQUNsRGtILEVBQXNCLEVBQVEsUUFDOUJDLEVBQTBCLEVBQVEsUUFFbENDLEVBQWdCLEdBQUdwSCxRQUVuQnFILElBQWtCRCxHQUFpQixFQUFJLENBQUMsR0FBR3BILFFBQVEsR0FBSSxHQUFLLEVBQzVEc0gsRUFBZ0JKLEVBQW9CLFdBQ3BDSyxFQUFpQkosRUFBd0IsVUFBVyxDQUFFSyxXQUFXLEVBQU1DLEVBQUcsSUFJOUVyRCxFQUFFLENBQUVzQixPQUFRLFFBQVNDLE9BQU8sRUFBTUMsT0FBUXlCLElBQWtCQyxJQUFrQkMsR0FBa0IsQ0FDOUZ2SCxRQUFTLFNBQWlCMEgsR0FDeEIsT0FBT0wsRUFFSEQsRUFBY08sTUFBTTdILEtBQU1xRyxZQUFjLEVBQ3hDYyxFQUFTbkgsS0FBTTRILEVBQWV2QixVQUFVNUUsT0FBUyxFQUFJNEUsVUFBVSxRQUFLWCIsImZpbGUiOiJqcy9jaHVuay01ODY2NjkwYS5lMjY2NGU5ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzMyOTQ0NTImc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsIjx0ZW1wbGF0ZT5cclxuICA8bWFpbm1lbnUganVkZ2U9MSAvPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlbGlua1wiPlxyXG4gICAgPHJvdXRlci1saW5rIHRvPVwiL3NoaXNldHVwYWdlXCI+5pa96Kit5oOF5aCxPC9yb3V0ZXItbGluaz5cclxuICAgIDxhPu+8njwvYT48YT7mtKXlsbHluILmlr3oqK3kuIDopqc8L2E+XHJcbiAgPC9kaXY+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09MVwiPua0peWxseW4guWMu+enkeS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09MlwiPua0peWxseW4guatr+enkeS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09M1wiPua0peWxseW4guiWrOWxgOS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09NFwiPua0peWxseW4guS9k+iCsuaWveioreS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09NVwiPua0peWxseW4guaVmeiCsuaWveioreS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09NlwiPua0peWxseW4guims+WFieaWveioreS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09N1wiPua0peWxseW4guemj+elieaWveioreS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09OFwiPua0peWxseW4guWFrOWckuODu+Wbs+abuOmkqOS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09OVwiPua0peWxseW4guW9ueaJgOS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09MTBcIj7mtKXlsbHluILpm4bkvJrmlr3oqK3kuIDopqc8L2gxPlxyXG4gIDxoMSB2LWlmPVwibG9jYXRpb25fbm89PTExXCI+5rSl5bGx5biC5YWQ56ul44Kv44Op44OW5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0xMlwiPua0peWxseW4gkFFROioree9ruWgtOaJgOS4gOimpzwvaDE+XHJcbiAgPGJyPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWx0ZXIyXCI+XHJcbiAgICA8c3BhbiBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXA7XCIgY2xhc3M9XCJmaWx0ZXJrZXl3b3JkMlwiPue1nuOCiui+vOOBvzxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkMlwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZTJcIiB2LWlmPVwidGFibGVEYXRhLmxlbmd0aD4wXCIgcnVsZXM9XCJyb3dzXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGg+5pa96Kit5ZCNPC90aD5cclxuICAgICAgICA8dGg+5L2P5omAPC90aD5cclxuICAgICAgICA8dGggdi1pZj1cIndpbmRvd1dpZHRoPjQ4MFwiPumbu+ipseeVquWPtzwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyIHYtZm9yPVwicm93IGluIHJldmVyc2VJdGVtc1wiIDprZXk9XCJyb3dcIj5cclxuICAgICAgICA8dGQgdi1pZj1cImxvY2F0aW9uX25vPT0nMScgfHwgbG9jYXRpb25fbm89PScyJyB8fCBsb2NhdGlvbl9ubz09JzMnXCI+PHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAnU2hpc2V0dV9zeW91c2FpcGFnZScsIHBhcmFtczoge25vOiByb3dbJ1VubmFtZWQ6IDEwJ10sIGxvY2F0aW9uX25vOmxvY2F0aW9uX25vfX1cIj57e3Jvd1snVW5uYW1lZDogMTAnXX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwibG9jYXRpb25fbm89PScxMidcIj48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJywgcGFyYW1zOiB7bm86IHJvdy7mlr3oqK3lkI0sIGxvY2F0aW9uX25vOmxvY2F0aW9uX25vfX1cIj57e3Jvdy7mlr3oqK3lkI19fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICA8dGQgdi1pZj1cImxvY2F0aW9uX25vIT0nMTInICYmIGxvY2F0aW9uX25vIT0nMScgJiYgbG9jYXRpb25fbm8hPScyJyAmJiBsb2NhdGlvbl9ubyE9JzMnXCI+PHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAnU2hpc2V0dV9zeW91c2FpcGFnZScsIHBhcmFtczoge25vOiByb3cu5ZCN56ewLCBsb2NhdGlvbl9ubzpsb2NhdGlvbl9ub319XCI+e3tyb3cu5ZCN56ewfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcblxyXG4gICAgICAgIDx0ZCB2LWlmPVwibG9jYXRpb25fbm89PScxJyB8fCBsb2NhdGlvbl9ubz09JzInIHx8IGxvY2F0aW9uX25vPT0nMydcIj57e3Jvd1snVW5uYW1lZDogMTUnXX19PC90ZD5cclxuICAgICAgICA8dGQgdi1lbHNlPnt7cm93LuS9j+aJgH19PC90ZD5cclxuXHJcbiAgICAgICAgPHRkIHYtaWY9XCJ3aW5kb3dXaWR0aD40ODAgJiYgKGxvY2F0aW9uX25vPT0nMScgfHwgbG9jYXRpb25fbm89PScyJyB8fCBsb2NhdGlvbl9ubz09JzMnKVwiPnt7cm93WydVbm5hbWVkOiAxOCddfX08L3RkPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwid2luZG93V2lkdGg+NDgwICYmIGxvY2F0aW9uX25vPT0nMTInXCI+e3tyb3cu6Zu76KmxfX08L3RkPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwid2luZG93V2lkdGg+NDgwICYmIGxvY2F0aW9uX25vIT0nMTInICYmIGxvY2F0aW9uX25vIT0nMScgJiYgbG9jYXRpb25fbm8hPScyJyAmJiBsb2NhdGlvbl9ubyE9JzMnXCI+e3tyb3cuVEVMfX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90Ym9keT5cclxuICA8L3RhYmxlPlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBtYWlubWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWlubWVudS52dWVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdjc3YnO1xyXG5pbXBvcnQgRW5jb2RpbmcgZnJvbSAnZW5jb2RpbmctamFwYW5lc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiU2hpc2V0dV9pdGlyYW5wYWdlXCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIGxvY2F0aW9uX25vOntcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7IFxyXG4gICAgICBtYWlubWVudSxcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICBrZXl3b3JkMjogJycsXHJcbiAgICAgIFNwb3J0OiBbXSxcclxuICAgICAgTnVyc2VyeTogW10sXHJcbiAgICAgIEtpbmQ6IFtdLFxyXG4gICAgICBKdW5pb3I6IFtdLFxyXG4gICAgICBKdW5pb3JIaWdoOiBbXSxcclxuICAgICAgU2lnaHQ6IFtdLFxyXG4gICAgICBXZWxmYXJlOiBbXSxcclxuICAgICAgUGFyazogW10sXHJcbiAgICAgIExpYnJhcnk6IFtdLFxyXG4gICAgICBHb3Zlcm5tZW50OiBbXSxcclxuICAgICAgUmFsbHk6IFtdLFxyXG4gICAgICBDaGlsZDogW10sXHJcbiAgICAgIEFFRDogW10sXHJcbiAgICAgIElyeW91OiBbXSxcclxuICAgICAgU2hpa2E6IFtdLFxyXG4gICAgICBZYWtreW9rdTogW10sXHJcbiAgICAgIGpvaW5EYXRhOiBbXSxcclxuICAgICAgam9pbkRhdGEyOiBbXSxcclxuICAgICAgdGFibGVEYXRhOiBbXSxcclxuICAgICAgTmFtZTogXCJcIixcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICByZXZlcnNlSXRlbXMoKSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVGFibGUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnRhYmxlRGF0YSl7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRUYWJsZXMgPSB0aGlzLnRhYmxlRGF0YVtpXTtcclxuICAgICAgICBpZih0aGlzLmxvY2F0aW9uX25vPT0nMTInKXtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkVGFibGVzW1wi5pa96Kit5ZCNXCJdLmluZGV4T2YodGhpcy5rZXl3b3JkMikgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRUYWJsZXNbXCLkvY/miYBcIl0uaW5kZXhPZih0aGlzLmtleXdvcmQyKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBmaWx0ZXJlZFRhYmxlc1tcIumbu+ipsVwiXS5pbmRleE9mKHRoaXMua2V5d29yZDIpICE9PSAtMSApe1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFRhYmxlLnB1c2goZmlsdGVyZWRUYWJsZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5sb2NhdGlvbl9ubz09JzEnIHx8IHRoaXMubG9jYXRpb25fbm89PScyJyB8fCB0aGlzLmxvY2F0aW9uX25vPT0nMycpe1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRUYWJsZXNbXCJVbm5hbWVkOiAxMFwiXS5pbmRleE9mKHRoaXMua2V5d29yZDIpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkVGFibGVzW1wiVW5uYW1lZDogMTVcIl0uaW5kZXhPZih0aGlzLmtleXdvcmQyKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBmaWx0ZXJlZFRhYmxlc1tcIlVubmFtZWQ6IDE4XCJdLmluZGV4T2YodGhpcy5rZXl3b3JkMikgIT09IC0xICl7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkVGFibGUucHVzaChmaWx0ZXJlZFRhYmxlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkVGFibGVzW1wi5ZCN56ewXCJdLmluZGV4T2YodGhpcy5rZXl3b3JkMikgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRUYWJsZXNbXCLkvY/miYBcIl0uaW5kZXhPZih0aGlzLmtleXdvcmQyKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBmaWx0ZXJlZFRhYmxlc1tcIlRFTFwiXS5pbmRleE9mKHRoaXMua2V5d29yZDIpICE9PSAtMSApe1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFRhYmxlLnB1c2goZmlsdGVyZWRUYWJsZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFRhYmxlO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgc3dpdGNoKHRoaXMubG9jYXRpb25fbm8pe1xyXG4gICAgICBjYXNlICcxJzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL09rYXlhbWFfaXJ5b3UuY3N2XCIsdHJ1ZSwnVVRGOCcsJ1VOSUNPREUnLHRoaXMuc2V0SXJ5b3UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICcyJzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL09rYXlhbWFfc2hpa2EuY3N2XCIsdHJ1ZSwnVVRGOCcsJ1VOSUNPREUnLHRoaXMuc2V0U2hpa2EpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL09rYXlhbWFfeWFra3lva3UuY3N2XCIsdHJ1ZSwnVVRGOCcsJ1VOSUNPREUnLHRoaXMuc2V0WWFra3lva3UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc0JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL1Nwb3J0c19sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRTcG9ydHMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc1JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL051cnNlcnlfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0TnVyc2VyeSk7XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiaHR0cHM6Ly90YXVyYXlvdWhlaS5naXRodWIuaW8vY292aWQtMTkvZGF0YS9LaW5kZXJnYXJ0ZW5fbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0S2luZCk7XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiaHR0cHM6Ly90YXVyYXlvdWhlaS5naXRodWIuaW8vY292aWQtMTkvZGF0YS9KdW5pb3JTY2hvb2xfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0SnVuaW9yKTtcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL0p1bmlvckhpZ2hTY2hvb2xfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0SnVuaW9ySGlnaCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzYnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEvU2lnaHRzZWVpbmdfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0U2lnaHQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc3JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL1dlbGZhcmVfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0V2VsZmFyZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEvUGFya19sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRQYXJrKTtcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL0xpYnJhcnlfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0TGlicmFyeSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzknOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEvR292ZXJubWVudF9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRHb3Zlcm5tZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTAnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdGF1cmF5b3VoZWkuZ2l0aHViLmlvL2NvdmlkLTE5L2RhdGEvUmFsbHlfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0UmFsbHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICcxMSc6XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiaHR0cHM6Ly90YXVyYXlvdWhlaS5naXRodWIuaW8vY292aWQtMTkvZGF0YS9DaGlsZHJlbl9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRDaGlsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzEyJzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RhdXJheW91aGVpLmdpdGh1Yi5pby9jb3ZpZC0xOS9kYXRhL0FFRF9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRBRUQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0SXJ5b3U6IGZ1bmN0aW9uKElyeW91KSB7XHJcbiAgICAgIHRoaXMuSXJ5b3UgPSBJcnlvdVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuSXJ5b3VcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YS5maWx0ZXIoZnVuY3Rpb24oZWFjaCl7XHJcbiAgICAgICAgaWYgKChlYWNoWydVbm5hbWVkOiAxMCddICE9ICcnKSAmJiAoZWFjaFsnVW5uYW1lZDogMTUnXS5pbmRleE9mKCfmtKXlsbEnKSE9LTEpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudGFibGVEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBzbXAgPSB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTUnXS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgY29uc3QgdG1wID0gdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10uc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhW2ldWydVbm5hbWVkOiAxNSddID0gc21wWzFdXHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10gPSB0bXBbMF1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICB9LFxyXG4gICAgc2V0U2hpa2E6IGZ1bmN0aW9uKFNoaWthKSB7XHJcbiAgICAgIHRoaXMuU2hpa2EgPSBTaGlrYVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuU2hpa2FcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YS5maWx0ZXIoZnVuY3Rpb24oZWFjaCl7XHJcbiAgICAgICAgaWYgKChlYWNoWydVbm5hbWVkOiAxMCddICE9ICcnKSAmJiAoZWFjaFsnVW5uYW1lZDogMTUnXS5pbmRleE9mKCfmtKXlsbEnKSE9LTEpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudGFibGVEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBzbXAgPSB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTUnXS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgY29uc3QgdG1wID0gdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10uc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhW2ldWydVbm5hbWVkOiAxNSddID0gc21wWzFdXHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10gPSB0bXBbMF1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRZYWtreW9rdTogZnVuY3Rpb24oWWFra3lva3UpIHtcclxuICAgICAgdGhpcy5ZYWtreW9rdSA9IFlha2t5b2t1XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5ZYWtreW9rdVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihmdW5jdGlvbihlYWNoKXtcclxuICAgICAgICBpZiAoKGVhY2hbJ1VubmFtZWQ6IDEwJ10gIT0gJycpICYmIChlYWNoWydVbm5hbWVkOiAxNSddLmluZGV4T2YoJ+a0peWxsScpIT0tMSkpIHJldHVybiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy50YWJsZURhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHNtcCA9IHRoaXMudGFibGVEYXRhW2ldWydVbm5hbWVkOiAxNSddLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBjb25zdCB0bXAgPSB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTgnXS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE1J10gPSBzbXBbMV1cclxuICAgICAgICB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTgnXSA9IHRtcFswXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldFNwb3J0czogZnVuY3Rpb24oU3BvcnQpIHtcclxuICAgICAgdGhpcy5TcG9ydCA9IFNwb3J0XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5TcG9ydFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXROdXJzZXJ5OiBmdW5jdGlvbihOdXJzZXJ5KSB7XHJcbiAgICAgIHRoaXMuTnVyc2VyeSA9IE51cnNlcnlcclxuICAgICAgaWYodGhpcy5LaW5kLmxlbmd0aD4wICYmIHRoaXMuSnVuaW9yLmxlbmd0aD4wICYmIHRoaXMuSnVuaW9ySGlnaC5sZW5ndGg+MCl7XHJcbiAgICAgICAgdGhpcy5qb2luRGF0YSA9IHRoaXMuTnVyc2VyeS5jb25jYXQodGhpcy5LaW5kLCB0aGlzLkp1bmlvciwgdGhpcy5KdW5pb3JIaWdoKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YVxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0S2luZDogZnVuY3Rpb24oS2luZCkge1xyXG4gICAgICB0aGlzLktpbmQgPSBLaW5kXHJcbiAgICAgIGlmKHRoaXMuTnVyc2VyeS5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvci5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvckhpZ2gubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuam9pbkRhdGEgPSB0aGlzLk51cnNlcnkuY29uY2F0KHRoaXMuS2luZCwgdGhpcy5KdW5pb3IsIHRoaXMuSnVuaW9ySGlnaCk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuam9pbkRhdGFcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldEp1bmlvcjogZnVuY3Rpb24oSnVuaW9yKSB7XHJcbiAgICAgIHRoaXMuSnVuaW9yID0gSnVuaW9yXHJcbiAgICAgIGlmKHRoaXMuTnVyc2VyeS5sZW5ndGg+MCAmJiB0aGlzLktpbmQubGVuZ3RoPjAgJiYgdGhpcy5KdW5pb3JIaWdoLmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLmpvaW5EYXRhID0gdGhpcy5OdXJzZXJ5LmNvbmNhdCh0aGlzLktpbmQsIHRoaXMuSnVuaW9yLCB0aGlzLkp1bmlvckhpZ2gpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhXHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRKdW5pb3JIaWdoOiBmdW5jdGlvbihKdW5pb3JIaWdoKSB7XHJcbiAgICAgIHRoaXMuSnVuaW9ySGlnaCA9IEp1bmlvckhpZ2hcclxuICAgICAgaWYodGhpcy5OdXJzZXJ5Lmxlbmd0aD4wICYmIHRoaXMuS2luZC5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvci5sZW5ndGg+MCl7XHJcbiAgICAgICAgdGhpcy5qb2luRGF0YSA9IHRoaXMuTnVyc2VyeS5jb25jYXQodGhpcy5LaW5kLCB0aGlzLkp1bmlvciwgdGhpcy5KdW5pb3JIaWdoKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YVxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2lnaHQ6IGZ1bmN0aW9uKFNpZ2h0KSB7XHJcbiAgICAgIHRoaXMuU2lnaHQgPSBTaWdodFxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5TaWdodFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRXZWxmYXJlOiBmdW5jdGlvbihXZWxmYXJlKSB7XHJcbiAgICAgIHRoaXMuV2VsZmFyZSA9IFdlbGZhcmVcclxuICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuV2VsZmFyZVxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRQYXJrOiBmdW5jdGlvbihQYXJrKSB7XHJcbiAgICAgIHRoaXMuUGFyayA9IFBhcmtcclxuICAgICAgaWYodGhpcy5MaWJyYXJ5Lmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLmpvaW5EYXRhMiA9IHRoaXMuTGlicmFyeS5jb25jYXQodGhpcy5QYXJrKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YTJcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldExpYnJhcnk6IGZ1bmN0aW9uKExpYnJhcnkpIHtcclxuICAgICAgdGhpcy5MaWJyYXJ5ID0gTGlicmFyeVxyXG4gICAgICBpZih0aGlzLlBhcmsubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuam9pbkRhdGEyID0gdGhpcy5MaWJyYXJ5LmNvbmNhdCh0aGlzLlBhcmspO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhMlxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0R292ZXJubWVudDogZnVuY3Rpb24oR292ZXJubWVudCkge1xyXG4gICAgICB0aGlzLkdvdmVybm1lbnQgPSBHb3Zlcm5tZW50XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLkdvdmVybm1lbnRcclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICB9LFxyXG4gICAgc2V0UmFsbHk6IGZ1bmN0aW9uKFJhbGx5KSB7XHJcbiAgICAgIHRoaXMuUmFsbHkgPSBSYWxseVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5SYWxseVxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRDaGlsZDogZnVuY3Rpb24oQ2hpbGQpIHtcclxuICAgICAgdGhpcy5DaGlsZCA9IENoaWxkXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLkNoaWxkXHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldEFFRDogZnVuY3Rpb24oQUVEKSB7XHJcbiAgICAgIHRoaXMuQUVEID0gQUVEXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLkFFRFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBHZXRDc3ZGaWxlOiBmdW5jdGlvbih1cmwsY29sLGZyb20sdG8sc2V0dGVyKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldCh1cmwse3Jlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ30pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBsZXQgY3N2ID0gRW5jb2RpbmcuY29udmVydChidWZmZXIsIHtcclxuICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxyXG4gICAgICAgICAgICAgIHRvOiB0byxcclxuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjc3YgPSBjc3YucmVwbGFjZSgvXlxcdWZlZmYvLCcnKVxyXG4gICAgICAgICAgICBwYXJzZShjc3YsIHtcclxuICAgICAgICAgICAgICBjb2x1bW5zOiBjb2wsXHJcbiAgICAgICAgICAgICAgcXVvdGU6ICdcIicsXHJcbiAgICAgICAgICAgICAgbHRyaW06IHRydWUsXHJcbiAgICAgICAgICAgICAgcnRyaW06IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVsaW1pdGVyOiAnLCcsXHJcbiAgICAgICAgICAgICAgY2FzdDogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoZXJyb3IsIG91dHB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHRlcihPYmplY3QuZnJlZXplKG91dHB1dCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5oMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM2ZWIwZjk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAtMTBweCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDApIDEwJSxyZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucGFnZWxpbmt7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmZpbHRlcmtleXdvcmQye1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi50YWJsZTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI5LCAyMywgMjMpO1xyXG59XHJcbi50YWJsZTIgdGhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlNDtcclxufVxyXG4udGFibGUyIHRkIHtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAudGFibGUyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICAucGFnZWxpbmt7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczMjk0NDUyJnNjb3BlZD10cnVlJmJpbmRpbmdzPXtcXFwibG9jYXRpb25fbm9cXFwiOlxcXCJwcm9wc1xcXCIsXFxcInJldmVyc2VJdGVtc1xcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRJcnlvdVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRTaGlrYVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRZYWtreW9rdVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRTcG9ydHNcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0TnVyc2VyeVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRLaW5kXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldEp1bmlvclxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRKdW5pb3JIaWdoXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldFNpZ2h0XFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldFdlbGZhcmVcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0UGFya1xcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJzZXRMaWJyYXJ5XFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcInNldEdvdmVybm1lbnRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0UmFsbHlcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0Q2hpbGRcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwic2V0QUVEXFxcIjpcXFwib3B0aW9uc1xcXCIsXFxcIkdldENzdkZpbGVcXFwiOlxcXCJvcHRpb25zXFxcIn1cIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoaXNldHVfaXRpcmFucGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1NoaXNldHVfaXRpcmFucGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzI5NDQ1MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5zY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNzMyOTQ0NTJcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=