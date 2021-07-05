(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-337b2ba9"], {
        "623b": function (t, e, a) {
            "use strict";
            (function (t) {
                a("99af"), a("4de4"), a("c975"), a("dca8"), a("ac1f"), a("5319"), a("1276");
                var i = a("ad3a"),
                    o = a("bc3a"),
                    n = a.n(o),
                    s = a("4bb4"),
                    c = a("10bf"),
                    h = a.n(c);
                e["a"] = {
                    name: "Shisetu_itiranpage",
                    props: {
                        location_no: {
                            type: String
                        }
                    },
                    components: {
                        mainmenu: i["a"]
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
                                var a = this.tableData[e];
                                "12" == this.location_no ? -1 === a["施設名"].indexOf(this.keyword2) && -1 === a["住所"].indexOf(this.keyword2) && -1 === a["電話"].indexOf(this.keyword2) || t.push(a) : "1" == this.location_no || "2" == this.location_no || "3" == this.location_no ? -1 === a["Unnamed: 10"].indexOf(this.keyword2) && -1 === a["Unnamed: 15"].indexOf(this.keyword2) && -1 === a["Unnamed: 18"].indexOf(this.keyword2) || t.push(a) : -1 === a["名称"].indexOf(this.keyword2) && -1 === a["住所"].indexOf(this.keyword2) && -1 === a["TEL"].indexOf(this.keyword2) || t.push(a)
                            }
                            return t
                        }
                    },
                    mounted: function () {
                        switch (this.location_no) {
                            case "1":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Okayama_iryou.csv", !0, "UTF8", "UNICODE", this.setIryou);
                                break;
                            case "2":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Okayama_shika.csv", !0, "UTF8", "UNICODE", this.setShika);
                                break;
                            case "3":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Okayama_yakkyoku.csv", !0, "UTF8", "UNICODE", this.setYakkyoku);
                                break;
                            case "4":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Sports_location.csv", !0, "UTF8", "UNICODE", this.setSports);
                                break;
                            case "5":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Nursery_location.csv", !0, "UTF8", "UNICODE", this.setNursery), this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Kindergarten_location.csv", !0, "UTF8", "UNICODE", this.setKind), this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/JuniorSchool_location.csv", !0, "UTF8", "UNICODE", this.setJunior), this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/JuniorHighSchool_location.csv", !0, "UTF8", "UNICODE", this.setJuniorHigh);
                                break;
                            case "6":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Sightseeing_location.csv", !0, "UTF8", "UNICODE", this.setSight);
                                break;
                            case "7":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Welfare_location.csv", !0, "UTF8", "UNICODE", this.setWelfare);
                                break;
                            case "8":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Park_location.csv", !0, "UTF8", "UNICODE", this.setPark), this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Library_location.csv", !0, "UTF8", "UNICODE", this.setLibrary);
                                break;
                            case "9":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Government_location.csv", !0, "UTF8", "UNICODE", this.setGovernment);
                                break;
                            case "10":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Rally_location.csv", !0, "UTF8", "UNICODE", this.setRally);
                                break;
                            case "11":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/Children_location.csv", !0, "UTF8", "UNICODE", this.setChild);
                                break;
                            case "12":
                                this.GetCsvFile("https://tsuyama-craft.github.io/covid-19_test/data/AED_location.csv", !0, "UTF8", "UNICODE", this.setAED);
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
                                var a = this.tableData[e]["Unnamed: 15"].split("\n"),
                                    i = this.tableData[e]["Unnamed: 18"].split("\n");
                                this.tableData[e]["Unnamed: 15"] = a[1], this.tableData[e]["Unnamed: 18"] = i[0]
                            }
                            this.$store.commit("toStore", this.tableData)
                        },
                        setShika: function (t) {
                            this.Shika = t, this.tableData = this.Shika, this.tableData = this.tableData.filter((function (t) {
                                if ("" != t["Unnamed: 10"] && -1 != t["Unnamed: 15"].indexOf("津山")) return !0
                            }));
                            for (var e = 0; e < this.tableData.length; e++) {
                                var a = this.tableData[e]["Unnamed: 15"].split("\n"),
                                    i = this.tableData[e]["Unnamed: 18"].split("\n");
                                this.tableData[e]["Unnamed: 15"] = a[1], this.tableData[e]["Unnamed: 18"] = i[0]
                            }
                            this.$store.commit("toStore", this.tableData)
                        },
                        setYakkyoku: function (t) {
                            this.Yakkyoku = t, this.tableData = this.Yakkyoku, this.tableData = this.tableData.filter((function (t) {
                                if ("" != t["Unnamed: 10"] && -1 != t["Unnamed: 15"].indexOf("津山")) return !0
                            }));
                            for (var e = 0; e < this.tableData.length; e++) {
                                var a = this.tableData[e]["Unnamed: 15"].split("\n"),
                                    i = this.tableData[e]["Unnamed: 18"].split("\n");
                                this.tableData[e]["Unnamed: 15"] = a[1], this.tableData[e]["Unnamed: 18"] = i[0]
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
                        GetCsvFile: function (e, a, i, o, c) {
                            n.a.get(e, {
                                responseType: "arraybuffer"
                            }).then((function (e) {
                                var n = t.from(e.data),
                                    r = h.a.convert(n, {
                                        from: i,
                                        to: o,
                                        type: "string"
                                    });
                                r = r.replace(/^\ufeff/, ""), Object(s["parse"])(r, {
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
        8418: function (t, e, a) {
            "use strict";
            var i = a("c04e"),
                o = a("9bf2"),
                n = a("5c6c");
            t.exports = function (t, e, a) {
                var s = i(e);
                s in t ? o.f(t, s, n(0, a)) : t[s] = a
            }
        },
        "99af": function (t, e, a) {
            "use strict";
            var i = a("23e7"),
                o = a("d039"),
                n = a("e8b5"),
                s = a("861d"),
                c = a("7b0b"),
                h = a("50c4"),
                r = a("8418"),
                l = a("65f0"),
                b = a("1dde"),
                u = a("b622"),
                d = a("2d00"),
                O = u("isConcatSpreadable"),
                f = 9007199254740991,
                j = "Maximum allowed index exceeded",
                m = d >= 51 || !o((function () {
                    var t = [];
                    return t[O] = !1, t.concat()[0] !== t
                })),
                y = b("concat"),
                D = function (t) {
                    if (!s(t)) return !1;
                    var e = t[O];
                    return void 0 !== e ? !!e : n(t)
                },
                k = !m || !y;
            i({
                target: "Array",
                proto: !0,
                forced: k
            }, {
                concat: function (t) {
                    var e, a, i, o, n, s = c(this),
                        b = l(s, 0),
                        u = 0;
                    for (e = -1, i = arguments.length; e < i; e++)
                        if (n = -1 === e ? s : arguments[e], D(n)) {
                            if (o = h(n.length), u + o > f) throw TypeError(j);
                            for (a = 0; a < o; a++, u++) a in n && r(b, u, n[a])
                        } else {
                            if (u >= f) throw TypeError(j);
                            r(b, u++, n)
                        }
                    return b.length = u, b
                }
            })
        },
        a239: function (t, e, a) {
            "use strict";
            a.r(e);
            var i = a("7a23"),
                o = Object(i["F"])("data-v-bb7aa726");
            Object(i["t"])("data-v-bb7aa726");
            var n = {
                class: "pagelink"
            },
                s = Object(i["g"])("施設情報"),
                c = Object(i["h"])("a", null, "＞", -1),
                h = Object(i["h"])("a", null, "津山市施設一覧", -1),
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
                f = {
                    key: 6
                },
                j = {
                    key: 7
                },
                m = {
                    key: 8
                },
                y = {
                    key: 9
                },
                D = {
                    key: 10
                },
                k = {
                    key: 11
                },
                v = Object(i["h"])("br", null, null, -1),
                _ = {
                    class: "filter2"
                },
                g = {
                    style: {
                        "white-space": "nowrap"
                    },
                    class: "filterkeyword2"
                },
                p = Object(i["g"])("絞り込み"),
                S = {
                    key: 12,
                    class: "table2",
                    rules: "rows"
                },
                U = Object(i["h"])("th", null, "施設名", -1),
                C = Object(i["h"])("th", null, "住所", -1),
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
            Object(i["r"])();
            var $ = o((function (t, e, a, $, H, K) {
                var W = Object(i["x"])("mainmenu"),
                    A = Object(i["x"])("router-link");
                return Object(i["q"])(), Object(i["d"])(i["a"], null, [Object(i["h"])(W, {
                    judge: "1"
                }), Object(i["h"])("div", n, [Object(i["h"])(A, {
                    to: "/shisetupage"
                }, {
                    default: o((function () {
                        return [s]
                    })),
                    _: 1
                }), c, h]), 1 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", r, "津山市医科一覧")) : Object(i["e"])("", !0), 2 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", l, "津山市歯科一覧")) : Object(i["e"])("", !0), 3 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", b, "津山市薬局一覧")) : Object(i["e"])("", !0), 4 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", u, "津山市体育施設一覧")) : Object(i["e"])("", !0), 5 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", d, "津山市教育施設一覧")) : Object(i["e"])("", !0), 6 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", O, "津山市観光施設一覧")) : Object(i["e"])("", !0), 7 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", f, "津山市福祉施設一覧")) : Object(i["e"])("", !0), 8 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", j, "津山市公園・図書館一覧")) : Object(i["e"])("", !0), 9 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", m, "津山市役所一覧")) : Object(i["e"])("", !0), 10 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", y, "津山市集会施設一覧")) : Object(i["e"])("", !0), 11 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", D, "津山市児童クラブ一覧")) : Object(i["e"])("", !0), 12 == a.location_no ? (Object(i["q"])(), Object(i["d"])("h1", k, "津山市AED設置場所一覧")) : Object(i["e"])("", !0), v, Object(i["h"])("div", _, [Object(i["h"])("span", g, [p, Object(i["E"])(Object(i["h"])("input", {
                    type: "text",
                    "onUpdate:modelValue": e[1] || (e[1] = function (e) {
                        return t.keyword2 = e
                    })
                }, null, 512), [
                    [i["B"], t.keyword2]
                ])])]), t.tableData.length > 0 ? (Object(i["q"])(), Object(i["d"])("table", S, [Object(i["h"])("thead", null, [Object(i["h"])("tr", null, [U, C, t.windowWidth > 480 ? (Object(i["q"])(), Object(i["d"])("th", w, "電話番号")) : Object(i["e"])("", !0)])]), Object(i["h"])("tbody", null, [(Object(i["q"])(!0), Object(i["d"])(i["a"], null, Object(i["w"])(K.reverseItems, (function (e) {
                    return Object(i["q"])(), Object(i["d"])("tr", {
                        key: e
                    }, ["1" == a.location_no || "2" == a.location_no || "3" == a.location_no ? (Object(i["q"])(), Object(i["d"])("td", J, [Object(i["h"])(A, {
                        to: {
                            name: "Shisetu_syousaipage",
                            params: {
                                no: e["Unnamed: 10"],
                                location_no: a.location_no
                            }
                        }
                    }, {
                        default: o((function () {
                            return [Object(i["g"])(Object(i["z"])(e["Unnamed: 10"]), 1)]
                        })),
                        _: 2
                    }, 1032, ["to"])])) : Object(i["e"])("", !0), "12" == a.location_no ? (Object(i["q"])(), Object(i["d"])("td", I, [Object(i["h"])(A, {
                        to: {
                            name: "Shisetu_syousaipage",
                            params: {
                                no: e.施設名,
                                location_no: a.location_no
                            }
                        }
                    }, {
                        default: o((function () {
                            return [Object(i["g"])(Object(i["z"])(e.施設名), 1)]
                        })),
                        _: 2
                    }, 1032, ["to"])])) : Object(i["e"])("", !0), "12" != a.location_no && "1" != a.location_no && "2" != a.location_no && "3" != a.location_no ? (Object(i["q"])(), Object(i["d"])("td", E, [Object(i["h"])(A, {
                        to: {
                            name: "Shisetu_syousaipage",
                            params: {
                                no: e.名称,
                                location_no: a.location_no
                            }
                        }
                    }, {
                        default: o((function () {
                            return [Object(i["g"])(Object(i["z"])(e.名称), 1)]
                        })),
                        _: 2
                    }, 1032, ["to"])])) : Object(i["e"])("", !0), "1" == a.location_no || "2" == a.location_no || "3" == a.location_no ? (Object(i["q"])(), Object(i["d"])("td", N, Object(i["z"])(e["Unnamed: 15"]), 1)) : (Object(i["q"])(), Object(i["d"])("td", q, Object(i["z"])(e.住所), 1)), t.windowWidth > 480 && ("1" == a.location_no || "2" == a.location_no || "3" == a.location_no) ? (Object(i["q"])(), Object(i["d"])("td", x, Object(i["z"])(e["Unnamed: 18"]), 1)) : Object(i["e"])("", !0), t.windowWidth > 480 && "12" == a.location_no ? (Object(i["q"])(), Object(i["d"])("td", G, Object(i["z"])(e.電話), 1)) : Object(i["e"])("", !0), t.windowWidth > 480 && "12" != a.location_no && "1" != a.location_no && "2" != a.location_no && "3" != a.location_no ? (Object(i["q"])(), Object(i["d"])("td", F, Object(i["z"])(e.TEL), 1)) : Object(i["e"])("", !0)])
                })), 128))])])) : Object(i["e"])("", !0)], 64)
            })),
                H = a("623b");
            a("e206");
            H["a"].render = $, H["a"].__scopeId = "data-v-bb7aa726";
            e["default"] = H["a"]
        },
        c482: function (t, e, a) { },
        c975: function (t, e, a) {
            "use strict";
            var i = a("23e7"),
                o = a("4d64").indexOf,
                n = a("a640"),
                s = a("ae40"),
                c = [].indexOf,
                h = !!c && 1 / [1].indexOf(1, -0) < 0,
                r = n("indexOf"),
                l = s("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            i({
                target: "Array",
                proto: !0,
                forced: h || !r || !l
            }, {
                indexOf: function (t) {
                    return h ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        e206: function (t, e, a) {
            "use strict";
            a("c482")
        }
    }
]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP2VmZDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZT85MmJlIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImxvY2F0aW9uX25vIiwidHlwZSIsIlN0cmluZyIsImNvbXBvbmVudHMiLCJtYWlubWVudSIsImRhdGEiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJrZXl3b3JkMiIsIlNwb3J0IiwiTnVyc2VyeSIsIktpbmQiLCJKdW5pb3IiLCJKdW5pb3JIaWdoIiwiU2lnaHQiLCJXZWxmYXJlIiwiUGFyayIsIkxpYnJhcnkiLCJHb3Zlcm5tZW50IiwiUmFsbHkiLCJDaGlsZCIsIkFFRCIsIklyeW91IiwiU2hpa2EiLCJZYWtreW9rdSIsImpvaW5EYXRhIiwiam9pbkRhdGEyIiwidGFibGVEYXRhIiwiTmFtZSIsImNvbXB1dGVkIiwicmV2ZXJzZUl0ZW1zIiwiZmlsdGVyZWRUYWJsZSIsImkiLCJ0aGlzIiwiZmlsdGVyZWRUYWJsZXMiLCJpbmRleE9mIiwicHVzaCIsIm1vdW50ZWQiLCJHZXRDc3ZGaWxlIiwic2V0SXJ5b3UiLCJzZXRTaGlrYSIsInNldFlha2t5b2t1Iiwic2V0U3BvcnRzIiwic2V0TnVyc2VyeSIsInNldEtpbmQiLCJzZXRKdW5pb3IiLCJzZXRKdW5pb3JIaWdoIiwic2V0U2lnaHQiLCJzZXRXZWxmYXJlIiwic2V0UGFyayIsInNldExpYnJhcnkiLCJzZXRHb3Zlcm5tZW50Iiwic2V0UmFsbHkiLCJzZXRDaGlsZCIsInNldEFFRCIsIm1ldGhvZHMiLCJmaWx0ZXIiLCJlYWNoIiwibGVuZ3RoIiwic21wIiwic3BsaXQiLCJ0bXAiLCIkc3RvcmUiLCJjb21taXQiLCJjb25jYXQiLCJ1cmwiLCJjb2wiLCJmcm9tIiwidG8iLCJzZXR0ZXIiLCJhIiwiZ2V0IiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiYnVmZmVyIiwiQnVmZmVyIiwiY3N2IiwiY29udmVydCIsInJlcGxhY2UiLCJjb2x1bW5zIiwicXVvdGUiLCJsdHJpbSIsInJ0cmltIiwiZGVsaW1pdGVyIiwiY2FzdCIsImVycm9yIiwib3V0cHV0IiwiT2JqZWN0IiwiZnJlZXplIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwidG9QcmltaXRpdmUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsImNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInByb3BlcnR5S2V5IiwiZiIsIiQiLCJmYWlscyIsImlzQXJyYXkiLCJpc09iamVjdCIsInRvT2JqZWN0IiwidG9MZW5ndGgiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5U3BlY2llc0NyZWF0ZSIsImFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQiLCJ3ZWxsS25vd25TeW1ib2wiLCJWOF9WRVJTSU9OIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEUiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCIsImFycmF5IiwiU1BFQ0lFU19TVVBQT1JUIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwiTyIsInNwcmVhZGFibGUiLCJ1bmRlZmluZWQiLCJGT1JDRUQiLCJ0YXJnZXQiLCJwcm90byIsImZvcmNlZCIsImFyZyIsImsiLCJsZW4iLCJFIiwiQSIsIm4iLCJhcmd1bWVudHMiLCJUeXBlRXJyb3IiLCJjbGFzcyIsInN0eWxlIiwicnVsZXMiLCJqdWRnZSIsInJvdyIsIuaWveioreWQjSIsIuWQjeensCIsIuS9j+aJgCIsIumbu+ipsSIsIlRFTCIsInJlbmRlciIsIl9fc2NvcGVJZCIsIiRpbmRleE9mIiwiYXJyYXlNZXRob2RJc1N0cmljdCIsImFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoIiwibmF0aXZlSW5kZXhPZiIsIk5FR0FUSVZFX1pFUk8iLCJTVFJJQ1RfTUVUSE9EIiwiVVNFU19UT19MRU5HVEgiLCJBQ0NFU1NPUlMiLCIxIiwic2VhcmNoRWxlbWVudCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiMlFBdURlLFFBQ2JBLEtBQU0scUJBQ05DLE1BQU8sQ0FDTEMsWUFBWSxDQUNWQyxLQUFNQyxTQUdWQyxXQUFZLENBQ1JDLFNBQUEsUUFFSkMsS0FBTSxXQUNKLE1BQU8sQ0FDTEMsWUFBYUMsT0FBT0MsV0FDcEJDLFNBQVUsR0FDVkMsTUFBTyxHQUNQQyxRQUFTLEdBQ1RDLEtBQU0sR0FDTkMsT0FBUSxHQUNSQyxXQUFZLEdBQ1pDLE1BQU8sR0FDUEMsUUFBUyxHQUNUQyxLQUFNLEdBQ05DLFFBQVMsR0FDVEMsV0FBWSxHQUNaQyxNQUFPLEdBQ1BDLE1BQU8sR0FDUEMsSUFBSyxHQUNMQyxNQUFPLEdBQ1BDLE1BQU8sR0FDUEMsU0FBVSxHQUNWQyxTQUFVLEdBQ1ZDLFVBQVcsR0FDWEMsVUFBVyxHQUNYQyxLQUFNLEtBR1ZDLFNBQVUsQ0FDUkMsYUFEUSxXQUVOLElBQU1DLEVBQWdCLEdBQ3RCLElBQUssSUFBSUMsS0FBS0MsS0FBS04sVUFBVSxDQUMzQixJQUFNTyxFQUFpQkQsS0FBS04sVUFBVUssR0FDakIsTUFBbEJDLEtBQUtsQyxhQUMrQyxJQUFsRG1DLEVBQWUsT0FBT0MsUUFBUUYsS0FBS3pCLFlBQ2UsSUFBakQwQixFQUFlLE1BQU1DLFFBQVFGLEtBQUt6QixZQUNlLElBQWpEMEIsRUFBZSxN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QWJBLEVBQUlHLElBQUUsSUFFVCxFQUFBMUksWUFBVyxNQUFvQixLQUFYLEVBQUFOLGFBQStCLEtBQVgsRUFBQUEsYUFBK0IsS0FBWCxFQUFBQSxjLGlCQUF0RSxlQUFvSCxzQkFBekI2SSxFQUFJLGdCQUFELEksc0JBQ3BGLEVBQUF2SSxZQUFXLEtBQW1CLE1BQVgsRUFBQU4sYSxpQkFBN0IsZUFBK0Qsc0JBQWI2SSxFQUFJSSxJQUFFLEksc0JBQzlDLEVBQUEzSSxZQUFXLEtBQW1CLE1BQVgsRUFBQU4sYUFBZ0MsS0FBWCxFQUFBQSxhQUErQixLQUFYLEVBQUFBLGFBQStCLEtBQVgsRUFBQUEsYSxpQkFBMUYsZUFBNEgsc0JBQWQ2SSxFQUFJSyxLQUFHLEksMEZHckM3SCxPQUFPQyxPQUFTLEVBQ2hCLE9BQU9DLFVBQVksa0JBRUoscUIseURDUGYsSUFBSTVDLEVBQUksRUFBUSxRQUNaNkMsRUFBVyxFQUFRLFFBQStCakgsUUFDbERrSCxFQUFzQixFQUFRLFFBQzlCQyxFQUEwQixFQUFRLFFBRWxDQyxFQUFnQixHQUFHcEgsUUFFbkJxSCxJQUFrQkQsR0FBaUIsRUFBSSxDQUFDLEdBQUdwSCxRQUFRLEdBQUksR0FBSyxFQUM1RHNILEVBQWdCSixFQUFvQixXQUNwQ0ssRUFBaUJKLEVBQXdCLFVBQVcsQ0FBRUssV0FBVyxFQUFNQyxFQUFHLElBSTlFckQsRUFBRSxDQUFFc0IsT0FBUSxRQUFTQyxPQUFPLEVBQU1DLE9BQVF5QixJQUFrQkMsSUFBa0JDLEdBQWtCLENBQzlGdkgsUUFBUyxTQUFpQjBILEdBQ3hCLE9BQU9MLEVBRUhELEVBQWNPLE1BQU03SCxLQUFNcUcsWUFBYyxFQUN4Q2MsRUFBU25ILEtBQU00SCxFQUFldkIsVUFBVTVFLE9BQVMsRUFBSTRFLFVBQVUsUUFBS1gsTyxrQ0NuQjVFIiwiZmlsZSI6ImpzL2NodW5rLTMzN2IyYmE5LjdkNWVmODEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxtYWlubWVudSBqdWRnZT0xIC8+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VsaW5rXCI+XHJcbiAgICA8cm91dGVyLWxpbmsgdG89XCIvc2hpc2V0dXBhZ2VcIj7mlr3oqK3mg4XloLE8L3JvdXRlci1saW5rPlxyXG4gICAgPGE+77yePC9hPjxhPua0peWxseW4guaWveioreS4gOimpzwvYT5cclxuICA8L2Rpdj5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0xXCI+5rSl5bGx5biC5Yy756eR5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0yXCI+5rSl5bGx5biC5q2v56eR5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0zXCI+5rSl5bGx5biC6Jas5bGA5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT00XCI+5rSl5bGx5biC5L2T6IKy5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT01XCI+5rSl5bGx5biC5pWZ6IKy5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT02XCI+5rSl5bGx5biC6Kaz5YWJ5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT03XCI+5rSl5bGx5biC56aP56WJ5pa96Kit5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT04XCI+5rSl5bGx5biC5YWs5ZyS44O75Zuz5pu46aSo5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT05XCI+5rSl5bGx5biC5b255omA5LiA6KanPC9oMT5cclxuICA8aDEgdi1pZj1cImxvY2F0aW9uX25vPT0xMFwiPua0peWxseW4gumbhuS8muaWveioreS4gOimpzwvaDE+XHJcbiAgPGgxIHYtaWY9XCJsb2NhdGlvbl9ubz09MTFcIj7mtKXlsbHluILlhZDnq6Xjgq/jg6njg5bkuIDopqc8L2gxPlxyXG4gIDxoMSB2LWlmPVwibG9jYXRpb25fbm89PTEyXCI+5rSl5bGx5biCQUVE6Kit572u5aC05omA5LiA6KanPC9oMT5cclxuICA8YnI+XHJcbiAgPGRpdiBjbGFzcz1cImZpbHRlcjJcIj5cclxuICAgIDxzcGFuIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcDtcIiBjbGFzcz1cImZpbHRlcmtleXdvcmQyXCI+57We44KK6L6844G/PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQyXCI+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlMlwiIHYtaWY9XCJ0YWJsZURhdGEubGVuZ3RoPjBcIiBydWxlcz1cInJvd3NcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aD7mlr3oqK3lkI08L3RoPlxyXG4gICAgICAgIDx0aD7kvY/miYA8L3RoPlxyXG4gICAgICAgIDx0aCB2LWlmPVwid2luZG93V2lkdGg+NDgwXCI+6Zu76Kmx55Wq5Y+3PC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgPHRib2R5PlxyXG4gICAgICA8dHIgdi1mb3I9XCJyb3cgaW4gcmV2ZXJzZUl0ZW1zXCIgOmtleT1cInJvd1wiPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwibG9jYXRpb25fbm89PScxJyB8fCBsb2NhdGlvbl9ubz09JzInIHx8IGxvY2F0aW9uX25vPT0nMydcIj48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJywgcGFyYW1zOiB7bm86IHJvd1snVW5uYW1lZDogMTAnXSwgbG9jYXRpb25fbm86bG9jYXRpb25fbm99fVwiPnt7cm93WydVbm5hbWVkOiAxMCddfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgPHRkIHYtaWY9XCJsb2NhdGlvbl9ubz09JzEyJ1wiPjxyb3V0ZXItbGluayA6dG89XCJ7bmFtZTogJ1NoaXNldHVfc3lvdXNhaXBhZ2UnLCBwYXJhbXM6IHtubzogcm93LuaWveioreWQjSwgbG9jYXRpb25fbm86bG9jYXRpb25fbm99fVwiPnt7cm93LuaWveioreWQjX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgIDx0ZCB2LWlmPVwibG9jYXRpb25fbm8hPScxMicgJiYgbG9jYXRpb25fbm8hPScxJyAmJiBsb2NhdGlvbl9ubyE9JzInICYmIGxvY2F0aW9uX25vIT0nMydcIj48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJywgcGFyYW1zOiB7bm86IHJvdy7lkI3np7AsIGxvY2F0aW9uX25vOmxvY2F0aW9uX25vfX1cIj57e3Jvdy7lkI3np7B9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuXHJcbiAgICAgICAgPHRkIHYtaWY9XCJsb2NhdGlvbl9ubz09JzEnIHx8IGxvY2F0aW9uX25vPT0nMicgfHwgbG9jYXRpb25fbm89PSczJ1wiPnt7cm93WydVbm5hbWVkOiAxNSddfX08L3RkPlxyXG4gICAgICAgIDx0ZCB2LWVsc2U+e3tyb3cu5L2P5omAfX08L3RkPlxyXG5cclxuICAgICAgICA8dGQgdi1pZj1cIndpbmRvd1dpZHRoPjQ4MCAmJiAobG9jYXRpb25fbm89PScxJyB8fCBsb2NhdGlvbl9ubz09JzInIHx8IGxvY2F0aW9uX25vPT0nMycpXCI+e3tyb3dbJ1VubmFtZWQ6IDE4J119fTwvdGQ+XHJcbiAgICAgICAgPHRkIHYtaWY9XCJ3aW5kb3dXaWR0aD40ODAgJiYgbG9jYXRpb25fbm89PScxMidcIj57e3Jvdy7pm7voqbF9fTwvdGQ+XHJcbiAgICAgICAgPHRkIHYtaWY9XCJ3aW5kb3dXaWR0aD40ODAgJiYgbG9jYXRpb25fbm8hPScxMicgJiYgbG9jYXRpb25fbm8hPScxJyAmJiBsb2NhdGlvbl9ubyE9JzInICYmIGxvY2F0aW9uX25vIT0nMydcIj57e3Jvdy5URUx9fTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IG1haW5tZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21haW5tZW51LnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Nzdic7XHJcbmltcG9ydCBFbmNvZGluZyBmcm9tICdlbmNvZGluZy1qYXBhbmVzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJTaGlzZXR1X2l0aXJhbnBhZ2VcIixcclxuICBwcm9wczoge1xyXG4gICAgbG9jYXRpb25fbm86e1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHsgXHJcbiAgICAgIG1haW5tZW51LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIGtleXdvcmQyOiAnJyxcclxuICAgICAgU3BvcnQ6IFtdLFxyXG4gICAgICBOdXJzZXJ5OiBbXSxcclxuICAgICAgS2luZDogW10sXHJcbiAgICAgIEp1bmlvcjogW10sXHJcbiAgICAgIEp1bmlvckhpZ2g6IFtdLFxyXG4gICAgICBTaWdodDogW10sXHJcbiAgICAgIFdlbGZhcmU6IFtdLFxyXG4gICAgICBQYXJrOiBbXSxcclxuICAgICAgTGlicmFyeTogW10sXHJcbiAgICAgIEdvdmVybm1lbnQ6IFtdLFxyXG4gICAgICBSYWxseTogW10sXHJcbiAgICAgIENoaWxkOiBbXSxcclxuICAgICAgQUVEOiBbXSxcclxuICAgICAgSXJ5b3U6IFtdLFxyXG4gICAgICBTaGlrYTogW10sXHJcbiAgICAgIFlha2t5b2t1OiBbXSxcclxuICAgICAgam9pbkRhdGE6IFtdLFxyXG4gICAgICBqb2luRGF0YTI6IFtdLFxyXG4gICAgICB0YWJsZURhdGE6IFtdLFxyXG4gICAgICBOYW1lOiBcIlwiLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHJldmVyc2VJdGVtcygpIHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRUYWJsZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMudGFibGVEYXRhKXtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFRhYmxlcyA9IHRoaXMudGFibGVEYXRhW2ldO1xyXG4gICAgICAgIGlmKHRoaXMubG9jYXRpb25fbm89PScxMicpe1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRUYWJsZXNbXCLmlr3oqK3lkI1cIl0uaW5kZXhPZih0aGlzLmtleXdvcmQyKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBmaWx0ZXJlZFRhYmxlc1tcIuS9j+aJgFwiXS5pbmRleE9mKHRoaXMua2V5d29yZDIpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkVGFibGVzW1wi6Zu76KmxXCJdLmluZGV4T2YodGhpcy5rZXl3b3JkMikgIT09IC0xICl7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkVGFibGUucHVzaChmaWx0ZXJlZFRhYmxlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmxvY2F0aW9uX25vPT0nMScgfHwgdGhpcy5sb2NhdGlvbl9ubz09JzInIHx8IHRoaXMubG9jYXRpb25fbm89PSczJyl7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZFRhYmxlc1tcIlVubmFtZWQ6IDEwXCJdLmluZGV4T2YodGhpcy5rZXl3b3JkMikgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRUYWJsZXNbXCJVbm5hbWVkOiAxNVwiXS5pbmRleE9mKHRoaXMua2V5d29yZDIpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkVGFibGVzW1wiVW5uYW1lZDogMThcIl0uaW5kZXhPZih0aGlzLmtleXdvcmQyKSAhPT0gLTEgKXtcclxuICAgICAgICAgICAgZmlsdGVyZWRUYWJsZS5wdXNoKGZpbHRlcmVkVGFibGVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRUYWJsZXNbXCLlkI3np7BcIl0uaW5kZXhPZih0aGlzLmtleXdvcmQyKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBmaWx0ZXJlZFRhYmxlc1tcIuS9j+aJgFwiXS5pbmRleE9mKHRoaXMua2V5d29yZDIpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkVGFibGVzW1wiVEVMXCJdLmluZGV4T2YodGhpcy5rZXl3b3JkMikgIT09IC0xICl7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkVGFibGUucHVzaChmaWx0ZXJlZFRhYmxlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpbHRlcmVkVGFibGU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICBzd2l0Y2godGhpcy5sb2NhdGlvbl9ubyl7XHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL09rYXlhbWFfaXJ5b3UuY3N2XCIsdHJ1ZSwnVVRGOCcsJ1VOSUNPREUnLHRoaXMuc2V0SXJ5b3UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICcyJzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RzdXlhbWEtY3JhZnQuZ2l0aHViLmlvL2NvdmlkLTE5X3Rlc3QvZGF0YS9Pa2F5YW1hX3NoaWthLmNzdlwiLHRydWUsJ1VURjgnLCdVTklDT0RFJyx0aGlzLnNldFNoaWthKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiaHR0cHM6Ly90c3V5YW1hLWNyYWZ0LmdpdGh1Yi5pby9jb3ZpZC0xOV90ZXN0L2RhdGEvT2theWFtYV95YWtreW9rdS5jc3ZcIix0cnVlLCdVVEY4JywnVU5JQ09ERScsdGhpcy5zZXRZYWtreW9rdSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL1Nwb3J0c19sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRTcG9ydHMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc1JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RzdXlhbWEtY3JhZnQuZ2l0aHViLmlvL2NvdmlkLTE5X3Rlc3QvZGF0YS9OdXJzZXJ5X2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldE51cnNlcnkpO1xyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL0tpbmRlcmdhcnRlbl9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRLaW5kKTtcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RzdXlhbWEtY3JhZnQuZ2l0aHViLmlvL2NvdmlkLTE5X3Rlc3QvZGF0YS9KdW5pb3JTY2hvb2xfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0SnVuaW9yKTtcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RzdXlhbWEtY3JhZnQuZ2l0aHViLmlvL2NvdmlkLTE5X3Rlc3QvZGF0YS9KdW5pb3JIaWdoU2Nob29sX2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldEp1bmlvckhpZ2gpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc2JzpcclxuICAgICAgICB0aGlzLkdldENzdkZpbGUoXCJodHRwczovL3RzdXlhbWEtY3JhZnQuZ2l0aHViLmlvL2NvdmlkLTE5X3Rlc3QvZGF0YS9TaWdodHNlZWluZ19sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRTaWdodCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL1dlbGZhcmVfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0V2VsZmFyZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL1BhcmtfbG9jYXRpb24uY3N2XCIsdHJ1ZSwnU0pJUycsJ1VOSUNPREUnLHRoaXMuc2V0UGFyayk7XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiaHR0cHM6Ly90c3V5YW1hLWNyYWZ0LmdpdGh1Yi5pby9jb3ZpZC0xOV90ZXN0L2RhdGEvTGlicmFyeV9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRMaWJyYXJ5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgdGhpcy5HZXRDc3ZGaWxlKFwiaHR0cHM6Ly90c3V5YW1hLWNyYWZ0LmdpdGh1Yi5pby9jb3ZpZC0xOV90ZXN0L2RhdGEvR292ZXJubWVudF9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRHb3Zlcm5tZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTAnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL1JhbGx5X2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldFJhbGx5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTEnOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL0NoaWxkcmVuX2xvY2F0aW9uLmNzdlwiLHRydWUsJ1NKSVMnLCdVTklDT0RFJyx0aGlzLnNldENoaWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMTInOlxyXG4gICAgICAgIHRoaXMuR2V0Q3N2RmlsZShcImh0dHBzOi8vdHN1eWFtYS1jcmFmdC5naXRodWIuaW8vY292aWQtMTlfdGVzdC9kYXRhL0FFRF9sb2NhdGlvbi5jc3ZcIix0cnVlLCdTSklTJywnVU5JQ09ERScsdGhpcy5zZXRBRUQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0SXJ5b3U6IGZ1bmN0aW9uKElyeW91KSB7XHJcbiAgICAgIHRoaXMuSXJ5b3UgPSBJcnlvdVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuSXJ5b3VcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YS5maWx0ZXIoZnVuY3Rpb24oZWFjaCl7XHJcbiAgICAgICAgaWYgKChlYWNoWydVbm5hbWVkOiAxMCddICE9ICcnKSAmJiAoZWFjaFsnVW5uYW1lZDogMTUnXS5pbmRleE9mKCfmtKXlsbEnKSE9LTEpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudGFibGVEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBzbXAgPSB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTUnXS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgY29uc3QgdG1wID0gdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10uc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhW2ldWydVbm5hbWVkOiAxNSddID0gc21wWzFdXHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10gPSB0bXBbMF1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICB9LFxyXG4gICAgc2V0U2hpa2E6IGZ1bmN0aW9uKFNoaWthKSB7XHJcbiAgICAgIHRoaXMuU2hpa2EgPSBTaGlrYVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuU2hpa2FcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YS5maWx0ZXIoZnVuY3Rpb24oZWFjaCl7XHJcbiAgICAgICAgaWYgKChlYWNoWydVbm5hbWVkOiAxMCddICE9ICcnKSAmJiAoZWFjaFsnVW5uYW1lZDogMTUnXS5pbmRleE9mKCfmtKXlsbEnKSE9LTEpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudGFibGVEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBzbXAgPSB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTUnXS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgY29uc3QgdG1wID0gdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10uc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhW2ldWydVbm5hbWVkOiAxNSddID0gc21wWzFdXHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE4J10gPSB0bXBbMF1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRZYWtreW9rdTogZnVuY3Rpb24oWWFra3lva3UpIHtcclxuICAgICAgdGhpcy5ZYWtreW9rdSA9IFlha2t5b2t1XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5ZYWtreW9rdVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihmdW5jdGlvbihlYWNoKXtcclxuICAgICAgICBpZiAoKGVhY2hbJ1VubmFtZWQ6IDEwJ10gIT0gJycpICYmIChlYWNoWydVbm5hbWVkOiAxNSddLmluZGV4T2YoJ+a0peWxsScpIT0tMSkpIHJldHVybiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy50YWJsZURhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHNtcCA9IHRoaXMudGFibGVEYXRhW2ldWydVbm5hbWVkOiAxNSddLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBjb25zdCB0bXAgPSB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTgnXS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFbaV1bJ1VubmFtZWQ6IDE1J10gPSBzbXBbMV1cclxuICAgICAgICB0aGlzLnRhYmxlRGF0YVtpXVsnVW5uYW1lZDogMTgnXSA9IHRtcFswXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldFNwb3J0czogZnVuY3Rpb24oU3BvcnQpIHtcclxuICAgICAgdGhpcy5TcG9ydCA9IFNwb3J0XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5TcG9ydFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXROdXJzZXJ5OiBmdW5jdGlvbihOdXJzZXJ5KSB7XHJcbiAgICAgIHRoaXMuTnVyc2VyeSA9IE51cnNlcnlcclxuICAgICAgaWYodGhpcy5LaW5kLmxlbmd0aD4wICYmIHRoaXMuSnVuaW9yLmxlbmd0aD4wICYmIHRoaXMuSnVuaW9ySGlnaC5sZW5ndGg+MCl7XHJcbiAgICAgICAgdGhpcy5qb2luRGF0YSA9IHRoaXMuTnVyc2VyeS5jb25jYXQodGhpcy5LaW5kLCB0aGlzLkp1bmlvciwgdGhpcy5KdW5pb3JIaWdoKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YVxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0S2luZDogZnVuY3Rpb24oS2luZCkge1xyXG4gICAgICB0aGlzLktpbmQgPSBLaW5kXHJcbiAgICAgIGlmKHRoaXMuTnVyc2VyeS5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvci5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvckhpZ2gubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuam9pbkRhdGEgPSB0aGlzLk51cnNlcnkuY29uY2F0KHRoaXMuS2luZCwgdGhpcy5KdW5pb3IsIHRoaXMuSnVuaW9ySGlnaCk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuam9pbkRhdGFcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldEp1bmlvcjogZnVuY3Rpb24oSnVuaW9yKSB7XHJcbiAgICAgIHRoaXMuSnVuaW9yID0gSnVuaW9yXHJcbiAgICAgIGlmKHRoaXMuTnVyc2VyeS5sZW5ndGg+MCAmJiB0aGlzLktpbmQubGVuZ3RoPjAgJiYgdGhpcy5KdW5pb3JIaWdoLmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLmpvaW5EYXRhID0gdGhpcy5OdXJzZXJ5LmNvbmNhdCh0aGlzLktpbmQsIHRoaXMuSnVuaW9yLCB0aGlzLkp1bmlvckhpZ2gpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhXHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRKdW5pb3JIaWdoOiBmdW5jdGlvbihKdW5pb3JIaWdoKSB7XHJcbiAgICAgIHRoaXMuSnVuaW9ySGlnaCA9IEp1bmlvckhpZ2hcclxuICAgICAgaWYodGhpcy5OdXJzZXJ5Lmxlbmd0aD4wICYmIHRoaXMuS2luZC5sZW5ndGg+MCAmJiB0aGlzLkp1bmlvci5sZW5ndGg+MCl7XHJcbiAgICAgICAgdGhpcy5qb2luRGF0YSA9IHRoaXMuTnVyc2VyeS5jb25jYXQodGhpcy5LaW5kLCB0aGlzLkp1bmlvciwgdGhpcy5KdW5pb3JIaWdoKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YVxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2lnaHQ6IGZ1bmN0aW9uKFNpZ2h0KSB7XHJcbiAgICAgIHRoaXMuU2lnaHQgPSBTaWdodFxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5TaWdodFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRXZWxmYXJlOiBmdW5jdGlvbihXZWxmYXJlKSB7XHJcbiAgICAgIHRoaXMuV2VsZmFyZSA9IFdlbGZhcmVcclxuICAgICAgdGhpcy50YWJsZURhdGEgPXRoaXMuV2VsZmFyZVxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRQYXJrOiBmdW5jdGlvbihQYXJrKSB7XHJcbiAgICAgIHRoaXMuUGFyayA9IFBhcmtcclxuICAgICAgaWYodGhpcy5MaWJyYXJ5Lmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLmpvaW5EYXRhMiA9IHRoaXMuTGlicmFyeS5jb25jYXQodGhpcy5QYXJrKTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5qb2luRGF0YTJcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldExpYnJhcnk6IGZ1bmN0aW9uKExpYnJhcnkpIHtcclxuICAgICAgdGhpcy5MaWJyYXJ5ID0gTGlicmFyeVxyXG4gICAgICBpZih0aGlzLlBhcmsubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuam9pbkRhdGEyID0gdGhpcy5MaWJyYXJ5LmNvbmNhdCh0aGlzLlBhcmspO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLmpvaW5EYXRhMlxyXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0R292ZXJubWVudDogZnVuY3Rpb24oR292ZXJubWVudCkge1xyXG4gICAgICB0aGlzLkdvdmVybm1lbnQgPSBHb3Zlcm5tZW50XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLkdvdmVybm1lbnRcclxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd0b1N0b3JlJywgdGhpcy50YWJsZURhdGEpXHJcbiAgICB9LFxyXG4gICAgc2V0UmFsbHk6IGZ1bmN0aW9uKFJhbGx5KSB7XHJcbiAgICAgIHRoaXMuUmFsbHkgPSBSYWxseVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9dGhpcy5SYWxseVxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBzZXRDaGlsZDogZnVuY3Rpb24oQ2hpbGQpIHtcclxuICAgICAgdGhpcy5DaGlsZCA9IENoaWxkXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLkNoaWxkXHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndG9TdG9yZScsIHRoaXMudGFibGVEYXRhKVxyXG4gICAgfSxcclxuICAgIHNldEFFRDogZnVuY3Rpb24oQUVEKSB7XHJcbiAgICAgIHRoaXMuQUVEID0gQUVEXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID10aGlzLkFFRFxyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3RvU3RvcmUnLCB0aGlzLnRhYmxlRGF0YSlcclxuICAgIH0sXHJcbiAgICBHZXRDc3ZGaWxlOiBmdW5jdGlvbih1cmwsY29sLGZyb20sdG8sc2V0dGVyKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldCh1cmwse3Jlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ30pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBsZXQgY3N2ID0gRW5jb2RpbmcuY29udmVydChidWZmZXIsIHtcclxuICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxyXG4gICAgICAgICAgICAgIHRvOiB0byxcclxuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjc3YgPSBjc3YucmVwbGFjZSgvXlxcdWZlZmYvLCcnKVxyXG4gICAgICAgICAgICBwYXJzZShjc3YsIHtcclxuICAgICAgICAgICAgICBjb2x1bW5zOiBjb2wsXHJcbiAgICAgICAgICAgICAgcXVvdGU6ICdcIicsXHJcbiAgICAgICAgICAgICAgbHRyaW06IHRydWUsXHJcbiAgICAgICAgICAgICAgcnRyaW06IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVsaW1pdGVyOiAnLCcsXHJcbiAgICAgICAgICAgICAgY2FzdDogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoZXJyb3IsIG91dHB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHRlcihPYmplY3QuZnJlZXplKG91dHB1dCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5oMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM2ZWIwZjk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAtMTBweCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDApIDEwJSxyZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucGFnZWxpbmt7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmZpbHRlcmtleXdvcmQye1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi50YWJsZTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI5LCAyMywgMjMpO1xyXG59XHJcbi50YWJsZTIgdGhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlNDtcclxufVxyXG4udGFibGUyIHRkIHtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICAudGFibGUyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICAucGFnZWxpbmt7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJiN2FhNzI2JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmI3YWE3MjYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuc2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiN2FhNzI2XCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/P3JlZi0tMC0xIS4vU2hpc2V0dV9pdGlyYW5wYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJiN2FhNzI2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiXSwic291cmNlUm9vdCI6IiJ9