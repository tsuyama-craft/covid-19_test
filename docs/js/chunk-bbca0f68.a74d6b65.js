(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbca0f68"],{4811:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),s={class:"pagelink"},i=Object(n["g"])("新型コロナウイルス情報"),c=Object(n["h"])("a",null,"＞岡山県コロナ感染者詳細情報",-1),r={key:0},l={key:1,id:"chart",height:"100",width:"300"},d={key:2,id:"chart"},o=Object(n["h"])("br",null,null,-1),u=Object(n["h"])("br",null,null,-1),b={class:"filter"},h={style:{"white-space":"nowrap"},class:"filterkeyword"},O=Object(n["g"])("絞り込み"),f={class:"table1"},j={class:"detailbody"};function k(t,e,a,k,p,y){var g=Object(n["x"])("mainmenu"),m=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(g,{judge:"0"}),Object(n["h"])("div",s,[Object(n["h"])(m,{to:"/"},{default:Object(n["D"])((function(){return[i]})),_:1}),c]),t.$store.state.detaildata.length>0?(Object(n["q"])(),Object(n["d"])("h1",r,"岡山県コロナ感染者詳細情報")):Object(n["e"])("",!0),Object(n["h"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return y.Back.apply(y,arguments)}),disabled:t.isTestDisabledBack},"前",8,["disabled"]),Object(n["h"])("button",{type:"button",onClick:e[2]||(e[2]=function(){return y.Next.apply(y,arguments)}),disabled:t.isTestDisabledNext},"次",8,["disabled"]),1==y.isLarge?(Object(n["q"])(),Object(n["d"])("canvas",l)):0==y.isLarge?(Object(n["q"])(),Object(n["d"])("canvas",d)):Object(n["e"])("",!0),o,u,Object(n["h"])("div",b,[Object(n["h"])("span",h,[O,Object(n["E"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.keyword=e})},null,512),[[n["B"],t.keyword]])])]),Object(n["h"])("table",f,[Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(t.columnshead,(function(t){return Object(n["q"])(),Object(n["d"])("th",{key:t},Object(n["z"])(t),1)})),128))])]),Object(n["h"])("tbody",j,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(y.reverseItems,(function(e){return Object(n["q"])(),Object(n["d"])("tr",{key:e},[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(t.columns,(function(t,a){return Object(n["q"])(),Object(n["d"])("td",{key:a},Object(n["z"])(e[a]),1)})),128))])})),128))])])],64)}a("99af"),a("4de4"),a("c975"),a("d81d"),a("13d5"),a("fb6a"),a("a434");var p=a("30ef"),y=a.n(p),g=a("ad3a");function m(t,e,a){for(var n=[],s=0;s<e.length;s++)n[s]=e[s].slice(0,7);for(var i=n.filter((function(t,e,a){return a.indexOf(t)===e})),c=0;c<e.length;c++)e[c].slice(0,7)!=i[i.length-1-a]&&(e.splice(c,1),t.splice(c,1),c-=1);return{data:t,label:e,LabelLen:i.length}}function w(t,e,a){t.data.labels=e,t.data.datasets[0].data=a,t.update()}var C={name:"Detailpage",components:{mainmenu:g["a"]},data:function(){var t={"公表年月日":"公表年月日","患者＿居住地":"患者＿居住地","患者＿年代":"患者＿年代","患者＿性別":"患者＿性別"};return{columnshead:["公表年月日","居住地","年代","性別"],keyword:"",isTestDisabledBack:!1,isTestDisabledNext:!0,kenDetails:this.$store.state.detaildata,columns:t,tasks:this.$store.state.detaildata2,count:0}},methods:{listCategoryCreat:function(t){for(var e=0;e<this.kenDetails.length;e++)""==this.kenDetails[e]["日別の感染者数"]&&(this.kenDetails[e]["日別の感染者数"]=0);var a=this.kenDetails.map((function(e){return[e[t]]})).reduce((function(t,e){return t.concat(e)}));return a},Next:function(){this.count=this.count-1,this.count<=0?(this.isTestDisabledNext=!0,this.isTestDisabledBack=!1,this.count=0):(this.isTestDisabledNext=!1,this.isTestDisabledBack=!1)},Back:function(){this.count=this.count+1,this.count>=this.CountLength-1?(this.isTestDisabledBack=!0,this.isTestDisabledNext=!1,this.count=this.CountLength-1):(this.isTestDisabledBack=!1,this.isTestDisabledNext=!1)},CreateChart:function(){var t=this.listCategoryCreat("集計時点_年月日"),e=this.listCategoryCreat("日別の感染者数"),a=m(e,t,this.count);this.CountLength=a.LabelLen;var n={type:"bar",data:{labels:a.label,datasets:[{data:a.data,backgroundColor:"#00B0F0",label:"新規感染者数"}]},options:{plugins:{pan:{enabled:!0,mode:"xy"},zoom:{enabled:!0,drag:!0,mode:"xy"}},scales:{yAxes:[{ticks:{beginAtZero:!0,userCallback:function(t){if(Math.floor(t)===t)return t},fontSize:15,suggestedMax:50,stepSize:10}}]}}};this.Chart=new y.a(document.getElementById("chart").getContext("2d"),n)}},computed:{reverseItems:function(){var t=[];for(var e in this.tasks){var a=this.tasks[e];-1===a.公表年月日.indexOf(this.keyword)&&-1===a.患者＿居住地.indexOf(this.keyword)&&-1===a.患者＿年代.indexOf(this.keyword)&&-1===a.患者＿性別.indexOf(this.keyword)||t.push(a)}return t.slice().reverse()},isLarge:function(){return!!window.matchMedia("(min-width: 480px)").matches}},watch:{count:function(){var t=this.listCategoryCreat("集計時点_年月日"),e=this.listCategoryCreat("日別の感染者数"),a=m(e,t,this.count);w(this.Chart,a.label,a.data)}},mounted:function(){this.CreateChart()}};a("84dd");C.render=k;e["default"]=C},"84dd":function(t,e,a){"use strict";a("f2d3")},f2d3:function(t,e,a){}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvRGV0YWlsc3BhZ2UudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9EZXRhaWxzcGFnZS52dWU/MDg3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvRGV0YWlsc3BhZ2UudnVlPzkzMTAiXSwibmFtZXMiOlsiY2xhc3MiLCJpZCIsImhlaWdodCIsIndpZHRoIiwic3R5bGUiLCJqdWRnZSIsInRvIiwiJHN0b3JlIiwic3RhdGUiLCJkZXRhaWxkYXRhIiwibGVuZ3RoIiwidHlwZSIsIkJhY2siLCJkaXNhYmxlZCIsImlzVGVzdERpc2FibGVkQmFjayIsIk5leHQiLCJpc1Rlc3REaXNhYmxlZE5leHQiLCJpc0xhcmdlIiwia2V5d29yZCIsImNvbHVtbnNoZWFkIiwiaGVhZCIsImtleSIsInJldmVyc2VJdGVtcyIsInRhc2siLCJjb2x1bW5zIiwidmFsdWUiLCJEYXRhU2V0IiwiZGF0YSIsImxhYmVsIiwiY291bnQiLCJzZWFyY2giLCJpIiwic2xpY2UiLCJzZWFyY2hXb3JkIiwiZmlsdGVyIiwieCIsInNlbGYiLCJpbmRleE9mIiwic3BsaWNlIiwiTGFiZWxMZW4iLCJDaGFuZ2VMYWJlbHNEYXRhc2V0cyIsImNoYXJ0IiwibmV3ZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwidXBkYXRlIiwibmFtZSIsImNvbXBvbmVudHMiLCJtYWlubWVudSIsIuWFrOihqOW5tOaciOaXpSIsIuaCo+iAhe+8v+WxheS9j+WcsCIsIuaCo+iAhe+8v+W5tOS7oyIsIuaCo+iAhe+8v+aAp+WIpSIsImtlbkRldGFpbHMiLCJ0aGlzIiwidGFza3MiLCJkZXRhaWxkYXRhMiIsIm1ldGhvZHMiLCJsaXN0Q2F0ZWdvcnlDcmVhdCIsInRhcmdldCIsInRhcmdldExpc3QiLCJtYXAiLCJhcnIiLCJyZWR1Y2UiLCJhIiwiYiIsImNvbmNhdCIsIkNvdW50TGVuZ3RoIiwiQ3JlYXRlQ2hhcnQiLCJsYWJlbExpc3QiLCJkYXRhTGlzdCIsImZpbHRlcmVkRGF0YVNldCIsImNvbmZpZyIsImJhY2tncm91bmRDb2xvciIsIm9wdGlvbnMiLCJwbHVnaW5zIiwicGFuIiwiZW5hYmxlZCIsIm1vZGUiLCJ6b29tIiwiZHJhZyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInVzZXJDYWxsYmFjayIsIk1hdGgiLCJmbG9vciIsImZvbnRTaXplIiwic3VnZ2VzdGVkTWF4Iiwic3RlcFNpemUiLCJDaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY29tcHV0ZWQiLCJmaWx0ZXJlZFRhYmxlIiwiZmlsdGVyZWRUYWJsZXMiLCJwdXNoIiwicmV2ZXJzZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwid2F0Y2giLCJtb3VudGVkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiMElBRU9BLE1BQU0sWSxpQkFDVyxlLEVBQXlCLGVBQXFCLFNBQWxCLGtCQUFjLEcsbUJBS2pDQyxHQUFHLFFBQVFDLE9BQU8sTUFBTUMsTUFBTSxPLFNBQ3hCRixHQUFHLFMsRUFDeEMsZUFBSSxtQixFQUFBLGVBQUksbUIsR0FDSEQsTUFBTSxVLEdBQ0hJLE1BQUEseUJBQTZCSixNQUFNLGlCLGlCQUFnQixRLEdBRXBEQSxNQUFNLFUsR0FRSkEsTUFBTSxjLDZJQXJCZixlQUFvQixHQUFWSyxNQUFNLE1BQ2hCLGVBRU0sTUFGTixFQUVNLENBREosZUFBNkMsR0FBaENDLEdBQUcsS0FBRyxDLHdCQUFDLGlCQUFXLEMsWUFBYyxJQUVyQyxFQUFBQyxPQUFPQyxNQUFNQyxXQUFXQyxPQUFNLEcsaUJBQXhDLGVBQWdFLE9BQWxCLGtCLHNCQUM5QyxlQUFpRixVQUF6RUMsS0FBSyxTQUFjLFFBQUssOEJBQUUsRUFBQUMsS0FBQSxxQkFBT0MsU0FBVSxFQUFBQyxvQkFBb0IsSUFBQyxnQkFDeEUsZUFBaUYsVUFBekVILEtBQUssU0FBYyxRQUFLLDhCQUFFLEVBQUFJLEtBQUEscUJBQU9GLFNBQVUsRUFBQUcsb0JBQW9CLElB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QWUvQyxPQUFPYixRQUFRaUIsS0FBS3BDLFdBQ2EsSUFBaEQrRSxFQUFlOUMsTUFBTWQsUUFBUWlCLEtBQUtwQyxXQUNjLElBQWhEK0UsRUFBZTdDLE1BQU1mLFFBQVFpQixLQUFLcEMsVUFDcEM4RSxFQUFjRSxLQUFLRCxHQUd2QixPQUFPRCxFQUFjaEUsUUFBUW1FLFdBRS9CbEYsUUFkUSxXQWVOLFFBQUltRixPQUFPQyxXQUFXLHNCQUFzQkMsVUFPaERDLE1BQU8sQ0FDTDFFLE1BQU8sV0FDTCxJQUFNd0MsRUFBWWYsS0FBS0ksa0JBQWtCLFlBQ25DWSxFQUFXaEIsS0FBS0ksa0JBQWtCLFdBQ2xDYSxFQUFrQjdDLEVBQVE0QyxFQUFVRCxFQUFXZixLQUFLekIsT0FDMURXLEVBQ0VjLEtBQUtxQyxNQUNMcEIsRUFBZ0IzQyxNQUNoQjJDLEVBQWdCNUMsUUFJdEI2RSxRQUFTLFdBQ1BsRCxLQUFLYyxnQixVQzVOVCxFQUFPcUMsT0FBU0EsRUFFRCxnQixvQ0NQZixXIiwiZmlsZSI6ImpzL2NodW5rLWJiY2EwZjY4LmE3NGQ2YjY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxtYWlubWVudSBqdWRnZT0wIC8+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2VsaW5rXCI+XHJcbiAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+5paw5Z6L44Kz44Ot44OK44Km44Kk44Or44K55oOF5aCxPC9yb3V0ZXItbGluaz48YT7vvJ7lsqHlsbHnnIzjgrPjg63jg4rmhJ/mn5PogIXoqbPntLDmg4XloLE8L2E+XHJcbiAgPC9kaXY+XHJcbiAgPGgxIHYtaWY9XCIkc3RvcmUuc3RhdGUuZGV0YWlsZGF0YS5sZW5ndGggPiAwXCI+5bKh5bGx55yM44Kz44Ot44OK5oSf5p+T6ICF6Kmz57Sw5oOF5aCxPC9oMT5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB2LW9uOmNsaWNrPVwiQmFja1wiIDpkaXNhYmxlZD1cImlzVGVzdERpc2FibGVkQmFja1wiPuWJjTwvYnV0dG9uPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHYtb246Y2xpY2s9XCJOZXh0XCIgOmRpc2FibGVkPVwiaXNUZXN0RGlzYWJsZWROZXh0XCI+5qyhPC9idXR0b24+XHJcbiAgPGNhbnZhcyB2LWlmPVwiaXNMYXJnZSA9PSB0cnVlXCIgaWQ9XCJjaGFydFwiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMzAwXCI+PC9jYW52YXM+XHJcbiAgPGNhbnZhcyB2LWVsc2UtaWY9XCJpc0xhcmdlID09IGZhbHNlXCIgaWQ9XCJjaGFydFwiPjwvY2FudmFzPlxyXG4gIDxicj48YnI+XHJcbiAgPGRpdiBjbGFzcz1cImZpbHRlclwiPlxyXG4gICAgPHNwYW4gc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwO1wiIGNsYXNzPVwiZmlsdGVya2V5d29yZFwiPue1nuOCiui+vOOBvzxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkXCI+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlMVwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoIHYtZm9yPVwiaGVhZCBpbiBjb2x1bW5zaGVhZFwiIDprZXk9XCJoZWFkXCI+XHJcbiAgICAgICAgICB7eyBoZWFkIH19XHJcbiAgICAgICAgPC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2xhc3M9XCJkZXRhaWxib2R5XCI+XHJcbiAgICAgIDx0ciB2LWZvcj1cInRhc2sgaW4gcmV2ZXJzZUl0ZW1zXCIgOmtleT1cInRhc2tcIj5cclxuICAgICAgICA8dGQgdi1mb3I9XCIodmFsdWUsIGtleSkgaW4gY29sdW1uc1wiIDprZXk9XCJrZXlcIj5cclxuICAgICAgICAgIHt7IHRhc2tba2V5XSB9fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmltcG9ydCBtYWlubWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWlubWVudS52dWVcIjtcclxuXHJcbmZ1bmN0aW9uIERhdGFTZXQoZGF0YSwgbGFiZWwsIGNvdW50KSB7XHJcbiAgY29uc3Qgc2VhcmNoID0gW107XHJcbiAgLy/lhazplovml6XjgYzmnIjjgaDjgZHjgavjgarjgovjgojjgYbjgavliIbjgZHjgovjgIJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzZWFyY2hbaV0gPSBsYWJlbFtpXS5zbGljZSgwLCA3KTtcclxuICB9XHJcblxyXG4gIC8v6YeN6KSH44Gu44Gq44GE6YWN5YiX44Gr44GZ44KL44CC5Y+C6ICD77yaaHR0cHM6Ly93d3cuc3V6dTYubmV0L3Bvc3RzLzk1LWpzLWR1cGxpY2F0aW9uL1xyXG4gIGNvbnN0IHNlYXJjaFdvcmQgPSBzZWFyY2guZmlsdGVyKGZ1bmN0aW9uICh4LCBpLCBzZWxmKSB7XHJcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHgpID09PSBpO1xyXG4gIH0pO1xyXG5cclxuICAvL1wi5pel5Yil44Gu5pyI44Gg44GR44OH44O844K/XCLjgahcIuOCsOODqeODleOBp+ihqOekuuOBl+OBn+OBhOaciFwi44KS5q+U6LyD44GX44Gm44CB6KGo56S644GX44Gf44GE5pyI44Gn44Gv44Gq44GE5pel5LuY44Go5pel5Yil44OH44O844K/44Gv5YmK6Zmk44GZ44KLXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxhYmVsW2ldLnNsaWNlKDAsIDcpICE9IHNlYXJjaFdvcmRbc2VhcmNoV29yZC5sZW5ndGggLSAxIC0gY291bnRdKSB7XHJcbiAgICAgIGxhYmVsLnNwbGljZShpLCAxKTtcclxuICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGkgPSBpIC0gMTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBsYWJlbDogbGFiZWwsXHJcbiAgICBMYWJlbExlbjogc2VhcmNoV29yZC5sZW5ndGhcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIENoYW5nZUxhYmVsc0RhdGFzZXRzKGNoYXJ0LCBsYWJlbCwgbmV3ZGF0YSkge1xyXG4gIGNoYXJ0LmRhdGEubGFiZWxzID0gbGFiZWw7XHJcbiAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3ZGF0YTtcclxuICBjaGFydC51cGRhdGUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRGV0YWlscGFnZVwiLFxyXG4gIGNvbXBvbmVudHM6IHsgXHJcbiAgICBtYWlubWVudSxcclxuICAgfSxcclxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjb2x1bW5zID0ge1xyXG4gICAgICDlhazooajlubTmnIjml6U6IFwi5YWs6KGo5bm05pyI5pelXCIsXHJcbiAgICAgIOaCo+iAhe+8v+WxheS9j+WcsDogXCLmgqPogIXvvL/lsYXkvY/lnLBcIixcclxuICAgICAg5oKj6ICF77y/5bm05LujOiBcIuaCo+iAhe+8v+W5tOS7o1wiLFxyXG4gICAgICDmgqPogIXvvL/mgKfliKU6IFwi5oKj6ICF77y/5oCn5YilXCIsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2x1bW5zaGVhZCA6IFtcIuWFrOihqOW5tOaciOaXpVwiLFwi5bGF5L2P5ZywXCIsXCLlubTku6NcIixcIuaAp+WIpVwiXSxcclxuICAgICAga2V5d29yZDogJycsXHJcbiAgICAgIGlzVGVzdERpc2FibGVkQmFjazogZmFsc2UsXHJcbiAgICAgIGlzVGVzdERpc2FibGVkTmV4dDogdHJ1ZSxcclxuICAgICAga2VuRGV0YWlsczogdGhpcy4kc3RvcmUuc3RhdGUuZGV0YWlsZGF0YSxcclxuICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgdGFza3M6IHRoaXMuJHN0b3JlLnN0YXRlLmRldGFpbGRhdGEyLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsaXN0Q2F0ZWdvcnlDcmVhdDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMua2VuRGV0YWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmtlbkRldGFpbHNbaV1bXCLml6XliKXjga7mhJ/mn5PogIXmlbBcIl0gPT0gXCJcIikge1xyXG4gICAgICAgICAgdGhpcy5rZW5EZXRhaWxzW2ldW1wi5pel5Yil44Gu5oSf5p+T6ICF5pWwXCJdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy/jgrDjg6njg5XjgpLmj4/nlLvjgZnjgovjgZ/jgoHjgavpgKPmg7PphY3liJfjgpLmma7pgJrjga7phY3liJfjgavlpInmj5tcclxuICAgICAgLy/lj4LogIPjgb7jgafjgavvvJpodHRwczovL21zZWVlZW4ubXNlbi5qcC9qYXZhc2NyaXB0LW1hcC1mdW5jdGlvbi9cclxuICAgICAgY29uc3QgdGFyZ2V0TGlzdCA9IHRoaXMua2VuRGV0YWlsc1xyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgICAgcmV0dXJuIFthcnJbdGFyZ2V0XV07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH0sXHJcbiAgICBOZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY291bnQgPSB0aGlzLmNvdW50IC0gMTtcclxuICAgICAgaWYgKHRoaXMuY291bnQ8PTApe1xyXG4gICAgICAgIHRoaXMuaXNUZXN0RGlzYWJsZWROZXh0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzVGVzdERpc2FibGVkQmFjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuaXNUZXN0RGlzYWJsZWROZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1Rlc3REaXNhYmxlZEJhY2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIEJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgKyAxO1xyXG4gICAgICBpZiAodGhpcy5jb3VudD49dGhpcy5Db3VudExlbmd0aC0xKXtcclxuICAgICAgICB0aGlzLmlzVGVzdERpc2FibGVkQmFjayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1Rlc3REaXNhYmxlZE5leHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5Db3VudExlbmd0aC0xO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmlzVGVzdERpc2FibGVkQmFjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUZXN0RGlzYWJsZWROZXh0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBDcmVhdGVDaGFydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBsYWJlbExpc3QgPSB0aGlzLmxpc3RDYXRlZ29yeUNyZWF0KFwi6ZuG6KiI5pmC54K5X+W5tOaciOaXpVwiKTtcclxuICAgICAgY29uc3QgZGF0YUxpc3QgPSB0aGlzLmxpc3RDYXRlZ29yeUNyZWF0KFwi5pel5Yil44Gu5oSf5p+T6ICF5pWwXCIpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGFTZXQgPSBEYXRhU2V0KGRhdGFMaXN0LCBsYWJlbExpc3QsIHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgdGhpcy5Db3VudExlbmd0aCA9IGZpbHRlcmVkRGF0YVNldC5MYWJlbExlbjtcclxuICAgICAgLy/jgrDjg6njg5Xmj4/nlLtcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGFiZWxzOiBmaWx0ZXJlZERhdGFTZXQubGFiZWwsXHJcbiAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGF0YTogZmlsdGVyZWREYXRhU2V0LmRhdGEsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMEIwRjBcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCLmlrDopo/mhJ/mn5PogIXmlbBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgIHBhbjoge1xyXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbW9kZTogXCJ4eVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBkcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1vZGU6IFwieHlcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczp7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9Z6Lu455uu55ub44Gu5bCP5pWw54K544KS5raI44GZXHJcbiAgICAgICAgICAgICAgICAgICAgLy/lj4LogIPvvJpodHRwczovL2hhY2tub3RlLmpwL2FyY2hpdmVzLzI4MDIyL1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJDYWxsYmFjazogZnVuY3Rpb24obGFiZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5mbG9vcihsYWJlbCk9PT1sYWJlbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWF4OiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMTBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuQ2hhcnQgPSBuZXcgQ2hhcnQoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgY29uZmlnXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICByZXZlcnNlSXRlbXMoKSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVGFibGUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnRhc2tzKXtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFRhYmxlcyA9IHRoaXMudGFza3NbaV07XHJcbiAgICAgICAgaWYoZmlsdGVyZWRUYWJsZXMu5YWs6KGo5bm05pyI5pelLmluZGV4T2YodGhpcy5rZXl3b3JkKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgZmlsdGVyZWRUYWJsZXMu5oKj6ICF77y/5bGF5L2P5ZywLmluZGV4T2YodGhpcy5rZXl3b3JkKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgZmlsdGVyZWRUYWJsZXMu5oKj6ICF77y/5bm05LujLmluZGV4T2YodGhpcy5rZXl3b3JkKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgZmlsdGVyZWRUYWJsZXMu5oKj6ICF77y/5oCn5YilLmluZGV4T2YodGhpcy5rZXl3b3JkKSAhPT0gLTEgKXtcclxuICAgICAgICAgIGZpbHRlcmVkVGFibGUucHVzaChmaWx0ZXJlZFRhYmxlcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpbHRlcmVkVGFibGUuc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICB9LFxyXG4gICAgaXNMYXJnZSgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNDgwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgY291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgbGFiZWxMaXN0ID0gdGhpcy5saXN0Q2F0ZWdvcnlDcmVhdChcIumbhuioiOaZgueCuV/lubTmnIjml6VcIik7XHJcbiAgICAgIGNvbnN0IGRhdGFMaXN0ID0gdGhpcy5saXN0Q2F0ZWdvcnlDcmVhdChcIuaXpeWIpeOBruaEn+afk+iAheaVsFwiKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhU2V0ID0gRGF0YVNldChkYXRhTGlzdCwgbGFiZWxMaXN0LCB0aGlzLmNvdW50KTtcclxuICAgICAgQ2hhbmdlTGFiZWxzRGF0YXNldHMoXHJcbiAgICAgICAgdGhpcy5DaGFydCxcclxuICAgICAgICBmaWx0ZXJlZERhdGFTZXQubGFiZWwsXHJcbiAgICAgICAgZmlsdGVyZWREYXRhU2V0LmRhdGFcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLkNyZWF0ZUNoYXJ0KCk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50YWJsZTEge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI5LCAyMywgMjMpO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnRhYmxlMSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5oMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM2ZWIwZjk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAtMTBweCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDApIDEwJSxyZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucGFnZWxpbmt7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxib2R5IHtcclxuICBoZWlnaHQ6IDM4ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG50cntcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbnRoZWFke1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjExLCAyMTApO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICB9XHJcbiAgLnBhZ2VsaW5re1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICB0aGVhZHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcclxuICB9XHJcbn1cclxuLmZpbHRlcmtleXdvcmR7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9EZXRhaWxzcGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzVhNGJhNjJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZXRhaWxzcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGV0YWlsc3BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9EZXRhaWxzcGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNWE0YmE2MiZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8/cmVmLS0wLTEhLi9EZXRhaWxzcGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNWE0YmE2MiZsYW5nPWNzc1wiIl0sInNvdXJjZVJvb3QiOiIifQ==