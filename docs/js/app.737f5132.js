(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-204ceca2":"02e7b6da","chunk-2d20e805":"469e2c4e","chunk-49c5be31":"264b08e0","chunk-89e0fbd2":"1a32d748","chunk-aa6a8448":"de3e4620","chunk-ca1ec3a4":"74eea9b3","chunk-ed6a9854":"33bbcacb","chunk-eff0f638":"16e04d4d"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-204ceca2":1,"chunk-49c5be31":1,"chunk-89e0fbd2":1,"chunk-aa6a8448":1,"chunk-ca1ec3a4":1,"chunk-ed6a9854":1,"chunk-eff0f638":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-204ceca2":"899016dd","chunk-2d20e805":"31d6cfe0","chunk-49c5be31":"ef6e8770","chunk-89e0fbd2":"7a22e1ee","chunk-aa6a8448":"47c70c67","chunk-ca1ec3a4":"1fb628e9","chunk-ed6a9854":"edf6e028","chunk-eff0f638":"8af1033f"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,n){var t=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(t)}t("6a0b");const o={};o.render=a;var c=o,u=t("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var i=t("6c02"),s=[{path:"/",name:"Mainpage",component:function(){return Promise.all([t.e("chunk-49c5be31"),t.e("chunk-aa6a8448")]).then(t.bind(null,"4edd"))}},{path:"/Detailspage",name:"detailspage",component:function(){return t.e("chunk-ed6a9854").then(t.bind(null,"4811"))}},{path:"/Detailspage_tsuyama",name:"detailspage_tsuyama",component:function(){return t.e("chunk-2d20e805").then(t.bind(null,"b045"))}},{path:"/shisetupage",name:"shisetupage",component:function(){return t.e("chunk-ca1ec3a4").then(t.bind(null,"7796"))}},{path:"/helppage",name:"helppage",component:function(){return t.e("chunk-204ceca2").then(t.bind(null,"681d"))}},{path:"/shisetupage/itiranpage",name:"Shisetu_itiranpage",component:function(){return Promise.all([t.e("chunk-49c5be31"),t.e("chunk-89e0fbd2")]).then(t.bind(null,"a239"))},props:!0},{path:"/shisetupage/itiran/syousai",name:"Shisetu_syousaipage",component:function(){return t.e("chunk-eff0f638").then(t.bind(null,"ee4b"))},props:!0}],l=Object(i["a"])({history:Object(i["b"])(""),routes:s}),f=l,d=t("5502"),h=t("0e44"),p=Object(d["a"])({state:{detaildata:[],detaildata2:[],facilityTableData:[]},mutations:{Enter:function(e,n){e.detaildata=n},Enter2:function(e,n){e.detaildata2=n},toStore:function(e,n){e.facilityTableData=n}},actions:{},modules:{},plugins:[Object(h["a"])({storage:window.sessionStorage})]}),b=Object(r["c"])(c);b.config.devtools=!0,b.use(p).use(f).mount("#app")},"6a0b":function(e,n,t){"use strict";t("9e7e")},"9e7e":function(e,n,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/OTdmNSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2Q5YTciXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJpbnN0YWxsZWRDc3NDaHVua3MiLCJqc29ucFNjcmlwdFNyYyIsInAiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsImUiLCJwcm9taXNlcyIsImNzc0NodW5rcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImZ1bGxocmVmIiwiZXhpc3RpbmdMaW5rVGFncyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWciLCJkYXRhSHJlZiIsImdldEF0dHJpYnV0ZSIsInJlbCIsImV4aXN0aW5nU3R5bGVUYWdzIiwibGlua1RhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25sb2FkIiwib25lcnJvciIsImV2ZW50IiwicmVxdWVzdCIsInRhcmdldCIsInNyYyIsImVyciIsIkVycm9yIiwiY29kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInRoZW4iLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwib25TY3JpcHRDb21wbGV0ZSIsInNjcmlwdCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNodW5rIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImFsbCIsIm0iLCJjIiwiZCIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm9lIiwiY29uc29sZSIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJyZW5kZXIiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJyZWFkeSIsImxvZyIsInJlZ2lzdGVyZWQiLCJjYWNoZWQiLCJ1cGRhdGVmb3VuZCIsInVwZGF0ZWQiLCJvZmZsaW5lIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwiY3JlYXRlUm91dGVyIiwiaGlzdG9yeSIsImNyZWF0ZVdlYkhhc2hIaXN0b3J5IiwiY3JlYXRlU3RvcmUiLCJzdGF0ZSIsImRldGFpbGRhdGEiLCJkZXRhaWxkYXRhMiIsImZhY2lsaXR5VGFibGVEYXRhIiwibXV0YXRpb25zIiwiRW50ZXIiLCJFbnRlcjIiLCJ0b1N0b3JlIiwiYWN0aW9ucyIsInBsdWdpbnMiLCJjcmVhdGVQZXJzaXN0ZWRTdGF0ZSIsInN0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsImFwcCIsImNyZWF0ZUFwcCIsIkFwcCIsImNvbmZpZyIsImRldnRvb2xzIiwidXNlIiwic3RvcmUiLCJtb3VudCJdLCJtYXBwaW5ncyI6ImFBQ0UsU0FBU0EsRUFBcUJDLEdBUTdCLElBUEEsSUFNSUMsRUFBVUMsRUFOVkMsRUFBV0gsRUFBSyxHQUNoQkksRUFBY0osRUFBSyxHQUNuQkssRUFBaUJMLEVBQUssR0FJSE0sRUFBSSxFQUFHQyxFQUFXLEdBQ3BDRCxFQUFJSCxFQUFTSyxPQUFRRixJQUN6QkosRUFBVUMsRUFBU0csR0FDaEJHLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtDLEVBQWlCWCxJQUFZVyxFQUFnQlgsSUFDcEZLLEVBQVNPLEtBQUtELEVBQWdCWCxHQUFTLElBRXhDVyxFQUFnQlgsR0FBVyxFQUU1QixJQUFJRCxLQUFZRyxFQUNaSyxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLUixFQUFhSCxLQUNwRGMsRUFBUWQsR0FBWUcsRUFBWUgsSUFHL0JlLEdBQXFCQSxFQUFvQmhCLEdBRTVDLE1BQU1PLEVBQVNDLE9BQ2RELEVBQVNVLE9BQVRWLEdBT0QsT0FIQVcsRUFBZ0JKLEtBQUtLLE1BQU1ELEVBQWlCYixHQUFrQixJQUd2RGUsSUFFUixTQUFTQSxJQUVSLElBREEsSUFBSUMsRUFDSWYsRUFBSSxFQUFHQSxFQUFJWSxFQUFnQlYsT0FBUUYsSUFBSyxDQUcvQyxJQUZBLElBQUlnQixFQUFpQkosRUFBZ0JaLEdBQ2pDaUIsR0FBWSxFQUNSQyxFQUFJLEVBQUdBLEVBQUlGLEVBQWVkLE9BQVFnQixJQUFLLENBQzlDLElBQUlDLEVBQVFILEVBQWVFLEdBQ0csSUFBM0JYLEVBQWdCWSxLQUFjRixHQUFZLEdBRTNDQSxJQUNGTCxFQUFnQlEsT0FBT3BCLElBQUssR0FDNUJlLEVBQVNNLEVBQW9CQSxFQUFvQkMsRUFBSU4sRUFBZSxL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TjRDLFVBQVcsa0JBQU0sa0RBRW5CLENBQ0VELEtBQU0sMEJBQ04zQyxLQUFNLHFCQUNONEMsVUFBVyxrQkFBTSxzRkFDakJDLE9BQU8sR0FFVCxDQUNFRixLQUFNLDhCQUNOM0MsS0FBTSxzQkFDTjRDLFVBQVcsa0JBQU0saURBQ2pCQyxPQUFPLElBSUxDLEVBQVNDLGVBQWEsQ0FDMUJDLFFBQVNDLGVBQXFCZixJQUM5QlEsV0FHYUksSSx3QkM1Q0FJLGlCQUFZLENBQ3pCQyxNQUFPLENBQ0xDLFdBQVksR0FDWkMsWUFBYSxHQUNiQyxrQkFBbUIsSUFFckJDLFVBQVcsQ0FDVEMsTUFEUyxTQUNGTCxFQUFPdEksR0FDVnNJLEVBQU1DLFdBQWF2SSxHQUV2QjRJLE9BSlMsU0FJRE4sRUFBT3RJLEdBQ2JzSSxFQUFNRSxZQUFjeEksR0FFdEI2SSxRQVBTLFNBT0FQLEVBQU90SSxHQUNkc0ksRUFBTUcsa0JBQW9CekksSUFHOUI4SSxRQUFTLEdBRVQvSCxRQUFTLEdBRVRnSSxRQUFTLENBQUNDLGVBQXFCLENBQzdCQyxRQUFTakMsT0FBT2tDLG9CQ25CZEMsRUFBTUMsZUFBVUMsR0FFdEJGLEVBQUlHLE9BQU9DLFVBQVcsRUFDdEJKLEVBQUlLLElBQUlDLEdBQU9ELElBQUl2QixHQUFReUIsTUFBTSxTLG9DQ1RqQyxXIiwiZmlsZSI6ImpzL2FwcC43MzdmNTEzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwianMvXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCJjaHVuay0yMDRjZWNhMlwiOlwiMDJlN2I2ZGFcIixcImNodW5rLTJkMjBlODA1XCI6XCI0NjllMmM0ZVwiLFwiY2h1bmstNDljNWJlMzFcIjpcIjI2NGIwOGUwXCIsXCJjaHVuay04OWUwZmJkMlwiOlwiMWEzMmQ3NDhcIixcImNodW5rLWFhNmE4NDQ4XCI6XCJkZTNlNDYyMFwiLFwiY2h1bmstY2ExZWMzYTRcIjpcIjc0ZWVhOWIzXCIsXCJjaHVuay1lZDZhOTg1NFwiOlwiMzNiYmNhY2JcIixcImNodW5rLWVmZjBmNjM4XCI6XCIxNmUwNGQ0ZFwifVtjaHVua0lkXSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCJjaHVuay0yMDRjZWNhMlwiOjEsXCJjaHVuay00OWM1YmUzMVwiOjEsXCJjaHVuay04OWUwZmJkMlwiOjEsXCJjaHVuay1hYTZhODQ0OFwiOjEsXCJjaHVuay1jYTFlYzNhNFwiOjEsXCJjaHVuay1lZDZhOTg1NFwiOjEsXCJjaHVuay1lZmYwZjYzOFwiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJjc3MvXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCJjaHVuay0yMDRjZWNhMlwiOlwiODk5MDE2ZGRcIixcImNodW5rLTJkMjBlODA1XCI6XCIzMWQ2Y2ZlMFwiLFwiY2h1bmstNDljNWJlMzFcIjpcImVmNmU4NzcwXCIsXCJjaHVuay04OWUwZmJkMlwiOlwiN2EyMmUxZWVcIixcImNodW5rLWFhNmE4NDQ4XCI6XCI0N2M3MGM2N1wiLFwiY2h1bmstY2ExZWMzYTRcIjpcIjFmYjYyOGU5XCIsXCJjaHVuay1lZDZhOTg1NFwiOlwiZWRmNmUwMjhcIixcImNodW5rLWVmZjBmNjM4XCI6XCI4YWYxMDMzZlwifVtjaHVua0lkXSArIFwiLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXVxuIFx0XHRcdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwiY2h1bmstdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjx0ZW1wbGF0ZT5cclxuICA8cm91dGVyLXZpZXcvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcblxyXG48c3R5bGU+XHJcbiNhcHAge1xyXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuXHJcblxyXG4jbmF2IGEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4jbmF2IGEucm91dGVyLWxpbmstZXhhY3QtYWN0aXZlIHtcclxuICBjb2xvcjogIzQyYjk4MztcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU4OTNiN2VhXCJcbmNvbnN0IHNjcmlwdCA9IHt9XG5cbmltcG9ydCBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU4OTNiN2VhJmxhbmc9Y3NzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdyZWdpc3Rlci1zZXJ2aWNlLXdvcmtlcidcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgcmVnaXN0ZXIoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9c2VydmljZS13b3JrZXIuanNgLCB7XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdBcHAgaXMgYmVpbmcgc2VydmVkIGZyb20gY2FjaGUgYnkgYSBzZXJ2aWNlIHdvcmtlci5cXG4nICtcclxuICAgICAgICAnRm9yIG1vcmUgZGV0YWlscywgdmlzaXQgaHR0cHM6Ly9nb28uZ2wvQUZza3FCJ1xyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgcmVnaXN0ZXJlZCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiByZWdpc3RlcmVkLicpXHJcbiAgICB9LFxyXG4gICAgY2FjaGVkICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaGFzIGJlZW4gY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZWZvdW5kICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGRvd25sb2FkaW5nLicpXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlZCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLicpXHJcbiAgICB9LFxyXG4gICAgb2ZmbGluZSAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJylcclxuICAgIH0sXHJcbiAgICBlcnJvciAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcilcclxuICAgIH1cclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGFzaEhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIG5hbWU6ICdNYWlucGFnZScsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvTWFpbnBhZ2UudnVlJylcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvRGV0YWlsc3BhZ2UnLFxyXG4gICAgbmFtZTogJ2RldGFpbHNwYWdlJyxcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9EZXRhaWxzcGFnZS52dWUnKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9EZXRhaWxzcGFnZV90c3V5YW1hJyxcclxuICAgIG5hbWU6ICdkZXRhaWxzcGFnZV90c3V5YW1hJyxcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9EZXRhaWxzcGFnZV90c3V5YW1hLnZ1ZScpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3NoaXNldHVwYWdlJyxcclxuICAgIG5hbWU6ICdzaGlzZXR1cGFnZScsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU2hpc2V0dXBhZ2UudnVlJylcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvaGVscHBhZ2UnLFxyXG4gICAgbmFtZTogJ2hlbHBwYWdlJyxcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9IZWxwcGFnZS52dWUnKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zaGlzZXR1cGFnZS9pdGlyYW5wYWdlJyxcclxuICAgIG5hbWU6ICdTaGlzZXR1X2l0aXJhbnBhZ2UnLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL1NoaXNldHVfaXRpcmFucGFnZS52dWUnKSxcclxuICAgIHByb3BzOiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3NoaXNldHVwYWdlL2l0aXJhbi9zeW91c2FpJyxcclxuICAgIG5hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJyxcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TaGlzZXR1X3N5b3VzYWlwYWdlLnZ1ZScpLFxyXG4gICAgcHJvcHM6IHRydWVcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhhc2hIaXN0b3J5KHByb2Nlc3MuZW52LkJBU0VfVVJMKSxcclxuICByb3V0ZXNcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBjcmVhdGVQZXJzaXN0ZWRTdGF0ZSBmcm9tICd2dWV4LXBlcnNpc3RlZHN0YXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xyXG4gIHN0YXRlOiB7XHJcbiAgICBkZXRhaWxkYXRhOiBbXSxcclxuICAgIGRldGFpbGRhdGEyOiBbXSxcclxuICAgIGZhY2lsaXR5VGFibGVEYXRhOiBbXSxcclxuICB9LFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgRW50ZXIgKHN0YXRlLCBkYXRhKSB7XHJcbiAgICAgICAgc3RhdGUuZGV0YWlsZGF0YSA9IGRhdGE7XHJcbiAgICB9LFxyXG4gICAgRW50ZXIyIChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICBzdGF0ZS5kZXRhaWxkYXRhMiA9IGRhdGE7XHJcbiAgICB9LFxyXG4gICAgdG9TdG9yZSAoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgc3RhdGUuZmFjaWxpdHlUYWJsZURhdGEgPSBkYXRhO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICB9LFxyXG4gIG1vZHVsZXM6IHtcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtjcmVhdGVQZXJzaXN0ZWRTdGF0ZSh7XHJcbiAgICBzdG9yYWdlOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VcclxuICB9KV1cclxufSlcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcclxuaW1wb3J0ICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlcidcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxyXG5cclxuYXBwLmNvbmZpZy5kZXZ0b29scyA9IHRydWVcclxuYXBwLnVzZShzdG9yZSkudXNlKHJvdXRlcikubW91bnQoJyNhcHAnKSIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTg5M2I3ZWEmbGFuZz1jc3NcIiJdLCJzb3VyY2VSb290IjoiIn0=