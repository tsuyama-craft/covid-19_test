(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5797275a"], {
    "0c69": function (t, e, n) {
      "use strict";
      n("7b56")
    },
    7796: function (t, e, n) {
      "use strict";
      n.r(e);
      var u = n("7a23"),
        a = Object(u["h"])("h1", null, "施設情報", -1),
        c = {
          class: "flex2"
        };

      function i(t, e, n, i, r, o) {
        var l = Object(u["x"])("mainmenu");
        return Object(u["q"])(), Object(u["d"])(u["a"], null, [Object(u["h"])("div", null, [Object(u["h"])(l, {
          judge: "1"
        }), a]), Object(u["h"])("div", c, [Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "医科",
          onClick: e[1] || (e[1] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 1
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "歯科",
          onClick: e[2] || (e[2] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 2
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "薬局",
          onClick: e[3] || (e[3] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 3
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "体育施設",
          onClick: e[4] || (e[4] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 4
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "教育施設",
          onClick: e[5] || (e[5] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 5
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "観光施設",
          onClick: e[6] || (e[6] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 6
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "福祉施設",
          onClick: e[7] || (e[7] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 7
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "公園・図書館",
          onClick: e[8] || (e[8] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 8
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "役所",
          onClick: e[9] || (e[9] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 9
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "集会施設",
          onClick: e[10] || (e[10] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 10
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "児童クラブ",
          onClick: e[11] || (e[11] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 11
              }
            })
          })
        }), Object(u["h"])("input", {
          type: "button",
          class: "simple_square_btn2",
          value: "AED設置場所",
          onClick: e[12] || (e[12] = function (e) {
            return t.$router.push({
              name: "Shisetu_itiranpage",
              params: {
                location_no: 12
              }
            })
          })
        })])], 64)
      }
      var r = n("ad3a"),
        o = {
          name: "Shisetupage",
          components: {
            mainmenu: r["a"]
          }
        };
      n("0c69");
      o.render = i;
      e["default"] = o
    },
    "7b56": function (t, e, n) { },
    ad3a: function (t, e, n) {
      "use strict";
      var u = n("7a23"),
        a = {
          key: 0
        },
        c = {
          class: "main"
        },
        i = Object(u["g"])("新型コロナウイルス最新情報"),
        r = Object(u["g"])("施設情報"),
        o = Object(u["g"])("感染の疑いがある方"),
        l = {
          key: 1
        },
        s = Object(u["g"])("新型コロナウイルス最新情報"),
        b = {
          class: "main"
        },
        p = Object(u["g"])("施設情報"),
        j = Object(u["g"])("感染の疑いがある方"),
        O = {
          key: 2
        },
        h = Object(u["g"])("新型コロナウイルス最新情報"),
        _ = Object(u["g"])("施設情報"),
        m = {
          class: "main"
        },
        f = Object(u["g"])("感染の疑いがある方");

      function g(t, e, n, g, d, v) {
        var k = Object(u["x"])("router-link"),
          q = Object(u["x"])("router-view");
        return Object(u["q"])(), Object(u["d"])("nav", null, [0 == n.judge ? (Object(u["q"])(), Object(u["d"])("ul", a, [Object(u["h"])("li", c, [Object(u["h"])(k, {
          to: "/"
        }, {
          default: Object(u["D"])((function () {
            return [i]
          })),
          _: 1
        })]), Object(u["h"])("li", null, [Object(u["h"])(k, {
          to: "/Shisetupage"
        }, {
          default: Object(u["D"])((function () {
            return [r]
          })),
          _: 1
        })]), Object(u["h"])("li", null, [Object(u["h"])(k, {
          to: "/Helppage"
        }, {
          default: Object(u["D"])((function () {
            return [o]
          })),
          _: 1
        })])])) : Object(u["e"])("", !0), 1 == n.judge ? (Object(u["q"])(), Object(u["d"])("ul", l, [Object(u["h"])("li", null, [Object(u["h"])(k, {
          to: "/"
        }, {
          default: Object(u["D"])((function () {
            return [s]
          })),
          _: 1
        })]), Object(u["h"])("li", b, [Object(u["h"])(k, {
          to: "/Shisetupage"
        }, {
          default: Object(u["D"])((function () {
            return [p]
          })),
          _: 1
        })]), Object(u["h"])("li", null, [Object(u["h"])(k, {
          to: "/Helppage"
        }, {
          default: Object(u["D"])((function () {
            return [j]
          })),
          _: 1
        })])])) : Object(u["e"])("", !0), 2 == n.judge ? (Object(u["q"])(), Object(u["d"])("ul", O, [Object(u["h"])("li", null, [Object(u["h"])(k, {
          to: "/"
        }, {
          default: Object(u["D"])((function () {
            return [h]
          })),
          _: 1
        })]), Object(u["h"])("li", null, [Object(u["h"])(k, {
          to: "/Shisetupage"
        }, {
          default: Object(u["D"])((function () {
            return [_]
          })),
          _: 1
        })]), Object(u["h"])("li", m, [Object(u["h"])(k, {
          to: "/Helppage"
        }, {
          default: Object(u["D"])((function () {
            return [f]
          })),
          _: 1
        })])])) : Object(u["e"])("", !0), Object(u["h"])(q)])
      }
      var d = {
        name: "mainmenu",
        props: {
          judge: {
            type: String
          }
        }
      };
      n("ffde");
      d.render = g;
      e["a"] = d
    },
    ef13: function (t, e, n) { },
    ffde: function (t, e, n) {
      "use strict";
      n("ef13")
    }
  }
]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dXBhZ2UudnVlP2UyYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NoaXNldHVwYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dXBhZ2UudnVlPzNlNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbm1lbnUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW5tZW51LnZ1ZT9lNmQwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW5tZW51LnZ1ZT9jNjQwIl0sIm5hbWVzIjpbImNsYXNzIiwianVkZ2UiLCJ0eXBlIiwidmFsdWUiLCIkcm91dGVyIiwicHVzaCIsIm5hbWUiLCJjb21wb25lbnRzIiwibWFpbm1lbnUiLCJyZW5kZXIiLCJ0byIsInByb3BzIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoia0hBQUEsVywyRENHSSxlQUFhLFVBQVQsUUFBSSxHLEdBRUxBLE1BQU0sUyw2R0FKWCxlQUdNLFlBRkosZUFBb0IsR0FBVkMsTUFBTSxNQUNoQixJQUVGLGVBYU0sTUFiTixFQWFNLENBWkYsZUFBMkksU0FBcElDLEtBQUssU0FBU0YsTUFBTSxxQkFBcUJHLE1BQU0sS0FBTSxRQUFLLCtCQUFFLEVBQUFDLFFBQVFDLEtBQUksd0RBQy9FLGVBQTJJLFNBQXBJSCxLQUFLLFNBQVNGLE1BQU0scUJBQXFCRyxNQUFNLEtBQU0sUUFBSywrQkFBRSxFQUFBQyxRQUFRQyxLQUFJLHdEQUMvRSxlQUEySSxTQUFwSUgsS0FBSyxTQUFTRixNQUFNLHFCQUFxQkcsTUFBTSxLQUFNLFFBQUssK0JBQUUsRUFBQUMsUUFBUUMsS0FBSSx3REFDL0UsZUFBNkksU0FBdElILEtBQUssU0FBU0YsTUFBTSxxQkFBcUJHLE1BQU0sT0FBUSxRQUFLLCtCQUFFLEVBQUFDLFFBQVFDLEtBQUksd0RBQ2pGLGVBQTZJLFNBQXRJSCxLQUFLLFNBQVNGLE1BQU0scUJBQXFCRyxNQUFNLE9BQVEsUUFBSywrQkFBRSxFQUFBQyxRQUFRQyxLQUFJLHdEQUNqRixlQUE2SSxTQUF0SUgsS0FBSyxTQUFTRixNQUFNLHFCQUFxQkcsTUFBTSxPQUFRLFFBQUssK0JBQUUsRUFBQUMsUUFBUUMsS0FBSSx3REFDakYsZUFBNkksU0FBdElILEtBQUssU0FBU0YsTUFBTSxxQkFBcUJHLE1BQU0sT0FBUSxRQUFLLCtCQUFFLEVBQUFDLFFBQVFDLEtBQUksd0RBQ2pGLGVBQStJLFNBQXhJSCxLQUFLLFNBQVNGLE1BQU0scUJBQXFCRyxNQUFNLFNBQVUsUUFBSywrQkFBRSxFQUFBQyxRQUFRQyxLQUFJLHdEQUNuRixlQUEySSxTQUFwSUgsS0FBSyxTQUFTRixNQUFNLHFCQUFxQkcsTUFBTSxLQUFNLFFBQUssK0JBQUUsRUFBQUMsUUFBUUMsS0FBSSx3REFDL0UsZUFBOEksU0FBdklILEtBQUssU0FBU0YsTUFBTSxxQkFBcUJHLE1BQU0sT0FBUSxRQUFLLGlDQUFFLEVBQUFDLFFBQVFDLEtBQUkseURBQ2pGLGVBQStJLFNBQXhJSCxLQUFLLFNBQVNGLE1BQU0scUJBQXFCRyxNQUFNLFFBQVMsUUFBSyxpQ0FBRSxFQUFBQyxRQUFRQyxLQUFJLHlEQUNsRixlQUFpSixTQUExSUgsS0FBSyxTQUFTRixNQUFNLHFCQUFxQkcsTUFBTSxVQUFXLFFBQUssaUNBQUUsRUFBQUMsUUFBUUMsS0FBSSw0RCxvQkFPM0UsR0FDYkMsS0FBTSxjQUNOQyxXQUFZLENBQ1ZDLFdBQUEsTyxVQ3RCSixFQUFPQyxPQUFTQSxFQUVELGdCLHdGQ0pDVCxNQUFNLFEsaUJBQTJCLGlCLGlCQUNGLFEsaUJBQ0gsYSwyQkFHUixpQixHQUNwQkEsTUFBTSxRLGlCQUFzQyxRLGlCQUNoQixhLDJCQUdSLGlCLGlCQUNXLFEsR0FDL0JBLE1BQU0sUSxpQkFBbUMsYSxvSEFkckQsZUFpQk0sWUFoQmEsR0FBTCxFQUFBQyxPLGlCQUFWLGVBSUssUUFIRCxlQUFxRSxLQUFyRSxFQUFxRSxDQUFwRCxlQUErQyxHQUFsQ1MsR0FBRyxLQUFHLEMsd0JBQUMsaUJBQWEsQyxjQUNsRCxlQUEwRCxXQUF0RCxlQUFpRCxHQUFwQ0EsR0FBRyxnQkFBYyxDLHdCQUFDLGlCQUFJLEMsY0FDdkMsZUFBNEQsV0FBeEQsZUFBbUQsR0FBdENBLEdBQUcsYUFBVyxDLHdCQUFDLGlCQUFTLEMsdUNBRTlCLEdBQUwsRUFBQVQsTyxpQkFBVixlQUlLLFFBSEQsZUFBd0QsV0FBcEQsZUFBK0MsR0FBbENTLEdBQUcsS0FBRyxDLHdCQUFDLGlCQUFhLEMsY0FDckMsZUFBdUUsS0FBdkUsRUFBdUUsQ0FBdEQsZUFBaUQsR0FBcENBLEdBQUcsZ0JBQWMsQyx3QkFBQyxpQkFBSSxDLGNBQ3BELGVBQTRELFdBQXhELGVBQW1ELEdBQXRDQSxHQUFHLGFBQVcsQyx3QkFBQyxpQkFBUyxDLHVDQUU5QixHQUFMLEVBQUFULE8saUJBQVYsZUFJSyxRQUhELGVBQXdELFdBQXBELGVBQStDLEdBQWxDUyxHQUFHLEtBQUcsQyx3QkFBQyxpQkFBYSxDLGNBQ3JDLGVBQTBELFdBQXRELGVBQWlELEdBQXBDQSxHQUFHLGdCQUFjLEMsd0JBQUMsaUJBQUksQyxjQUN2QyxlQUF5RSxLQUF6RSxFQUF5RSxDQUF4RCxlQUFtRCxHQUF0Q0EsR0FBRyxhQUFXLEMsd0JBQUMsaUJBQVMsQyx1Q0FFMUQsZUFBYyxLQUtQLE9BQ1hKLEtBQU0sV0FDTkssTUFBTSxDQUNGVixNQUFNLENBQ0ZDLEtBQU1VLFUsVUNyQmxCLEVBQU9ILE9BQVNBLEVBRUQsVSx5RENQZiIsImZpbGUiOiJqcy9jaHVuay01Nzk3Mjc1YS4yMDFjZWE3Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9TaGlzZXR1cGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8bWFpbm1lbnUganVkZ2U9MSAvPlxyXG4gICAgPGgxPuaWveioreaDheWgsTwvaDE+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgyXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW1wbGVfc3F1YXJlX2J0bjJcIiB2YWx1ZT1cIuWMu+enkVwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiAxfX0pXCIgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNpbXBsZV9zcXVhcmVfYnRuMlwiIHZhbHVlPVwi5q2v56eRXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtuYW1lOiAnU2hpc2V0dV9pdGlyYW5wYWdlJywgcGFyYW1zOiB7bG9jYXRpb25fbm86IDJ9fSlcIiAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2ltcGxlX3NxdWFyZV9idG4yXCIgdmFsdWU9XCLolqzlsYBcIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe25hbWU6ICdTaGlzZXR1X2l0aXJhbnBhZ2UnLCBwYXJhbXM6IHtsb2NhdGlvbl9ubzogM319KVwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW1wbGVfc3F1YXJlX2J0bjJcIiB2YWx1ZT1cIuS9k+iCsuaWveiorVwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiA0fX0pXCIgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNpbXBsZV9zcXVhcmVfYnRuMlwiIHZhbHVlPVwi5pWZ6IKy5pa96KitXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtuYW1lOiAnU2hpc2V0dV9pdGlyYW5wYWdlJywgcGFyYW1zOiB7bG9jYXRpb25fbm86IDV9fSlcIiAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2ltcGxlX3NxdWFyZV9idG4yXCIgdmFsdWU9XCLoprPlhYnmlr3oqK1cIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe25hbWU6ICdTaGlzZXR1X2l0aXJhbnBhZ2UnLCBwYXJhbXM6IHtsb2NhdGlvbl9ubzogNn19KVwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW1wbGVfc3F1YXJlX2J0bjJcIiB2YWx1ZT1cIuemj+elieaWveiorVwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiA3fX0pXCIgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNpbXBsZV9zcXVhcmVfYnRuMlwiIHZhbHVlPVwi5YWs5ZyS44O75Zuz5pu46aSoXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtuYW1lOiAnU2hpc2V0dV9pdGlyYW5wYWdlJywgcGFyYW1zOiB7bG9jYXRpb25fbm86IDh9fSlcIiAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2ltcGxlX3NxdWFyZV9idG4yXCIgdmFsdWU9XCLlvbnmiYBcIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe25hbWU6ICdTaGlzZXR1X2l0aXJhbnBhZ2UnLCBwYXJhbXM6IHtsb2NhdGlvbl9ubzogOX19KVwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW1wbGVfc3F1YXJlX2J0bjJcIiB2YWx1ZT1cIumbhuS8muaWveiorVwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiAxMH19KVwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW1wbGVfc3F1YXJlX2J0bjJcIiB2YWx1ZT1cIuWFkOerpeOCr+ODqeODllwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiAxMX19KVwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW1wbGVfc3F1YXJlX2J0bjJcIiB2YWx1ZT1cIkFFROioree9ruWgtOaJgFwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiAxMn19KVwiIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbWFpbm1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tYWlubWVudS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1NoaXNldHVwYWdlJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBtYWlubWVudSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbmgxe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICM2ZWIwZjk7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgLTEwcHggLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsMCkscmdiYSgwLDAsMCwwKSAxMCUscmdiYSgwLCAwLCAwLCAwLjYpKTtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5mbGV4MntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMCAyLjUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zaW1wbGVfc3F1YXJlX2J0bjIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNy41cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuXHRwYWRkaW5nOiAwLjVlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjMUIxQjFCO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjMUIxQjFCO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxufVxyXG5cclxuLnNpbXBsZV9zcXVhcmVfYnRuMjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDojMUIxQjFCO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICAuc2ltcGxlX3NxdWFyZV9idG4yIHtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDElO1xyXG4gIH1cclxuICAuZmxleHtcclxuICAgIHdpZHRoOiA2OCU7XHJcbiAgICBtYXJnaW46IDAgMTYlO1xyXG4gIH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TaGlzZXR1cGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRiZmJiZmEmYmluZGluZ3M9e31cIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaGlzZXR1cGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hpc2V0dXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9TaGlzZXR1cGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIHYtaWY9XCJqdWRnZT09MFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtYWluXCI+PHJvdXRlci1saW5rIHRvPVwiL1wiPuaWsOWei+OCs+ODreODiuOCpuOCpOODq+OCueacgOaWsOaDheWgsTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0bz1cIi9TaGlzZXR1cGFnZVwiPuaWveioreaDheWgsTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0bz1cIi9IZWxwcGFnZVwiPuaEn+afk+OBrueWkeOBhOOBjOOBguOCi+aWuTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCB2LWlmPVwianVkZ2U9PTFcIj5cclxuICAgICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0bz1cIi9cIj7mlrDlnovjgrPjg63jg4rjgqbjgqTjg6vjgrnmnIDmlrDmg4XloLE8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1haW5cIj48cm91dGVyLWxpbmsgdG89XCIvU2hpc2V0dXBhZ2VcIj7mlr3oqK3mg4XloLE8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdG89XCIvSGVscHBhZ2VcIj7mhJ/mn5Pjga7nlpHjgYTjgYzjgYLjgovmlrk8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgdi1pZj1cImp1ZGdlPT0yXCI+XHJcbiAgICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdG89XCIvXCI+5paw5Z6L44Kz44Ot44OK44Km44Kk44Or44K55pyA5paw5oOF5aCxPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL1NoaXNldHVwYWdlXCI+5pa96Kit5oOF5aCxPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtYWluXCI+PHJvdXRlci1saW5rIHRvPVwiL0hlbHBwYWdlXCI+5oSf5p+T44Gu55aR44GE44GM44GC44KL5pa5PC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cclxuICAgIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ21haW5tZW51JyxcclxuICAgIHByb3BzOntcclxuICAgICAgICBqdWRnZTp7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxubmF2e1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG5uYXYgdWx7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5tYXJnaW46IDAgYXV0bztcclxucGFkZGluZzogMDtcclxud2lkdGg6IDEwMCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5uYXYgdWwgbGl7XHJcbmRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbm1pbi13aWR0aDogNTBweDtcclxud2lkdGg6IDEwMHB4O1xyXG5ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICBuYXYgdWwgbGl7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbn1cclxubmF2IHVsIGxpOmZpcnN0LWNoaWxke1xyXG5ib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxubmF2IHVsIGxpIGF7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogMTBweCAwO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiAjYWFhO1xyXG59XHJcbm5hdiB1bCBsaSBhOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNGOEU3NTA7XHJcbmJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjhFNzUwO1xyXG59XHJcbm5hdiB1bCBsaS5tYWlue1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5uYXYgdWwgbGkubWFpbiBhe1xyXG5ib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAwQjBGMDtcclxuY29sb3I6ICMwMEIwRjA7XHJcbn1cclxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9tYWlubWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTM1YTc2ODQmYmluZGluZ3M9e1xcXCJqdWRnZVxcXCI6XFxcInByb3BzXFxcIn1cIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tYWlubWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWFpbm1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9tYWlubWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9tYWlubWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIl0sInNvdXJjZVJvb3QiOiIifQ==