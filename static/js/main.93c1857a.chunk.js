(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,n){},15:function(e,t,n){e.exports=n(29)},20:function(e,t,n){},23:function(e,t){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=(n(20),n(13)),s=n(7),l=n.n(s),u=n(12);n(10);var d=function(e){var t=e.actions;return o.a.createElement("div",{className:"ListDisplay"},o.a.createElement("div",{className:"ListDisplay-body"},o.a.createElement("ul",null,t.map((function(e,t){return o.a.createElement("li",{key:t},e)})))),o.a.createElement("div",{className:"ListDisplay-footer"},o.a.createElement("button",null,"Add Todo"),o.a.createElement("input",{type:"text"})))},m=l.a.mark(f);function p(e,t,n){var a={_id:""+n,title:t,completed:!1};e.put(a,(function(e,a){e&&console.log("Error while posting todo ("+t+", "+n+"): "+e)}))}function f(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:return t.next=4,e;case 4:e+=1,t.next=1;break;case 7:case"end":return t.stop()}}),m)}function v(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){e.db.showTodos(c)}),[e.db]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Sweep your mind!"),o.a.createElement(d,{actions:r}))}function h(){var e=new u.a("todos"),t=f();p(e,"Take out trash",t.next().value),p(e,"read DDD",t.next().value);var n={showTodos:function(t){!function(e,t){e.allDocs({include_docs:!0,descending:!0},(function(e,n){if(e)console.log("Error while loading todos: "+e);else{var a=n.rows.map((function(e){return e.doc.title}));t(a)}}))}(e,t)}};return o.a.createElement(v,{db:n})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.93c1857a.chunk.js.map