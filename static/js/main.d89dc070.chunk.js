(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(17),r=n.n(l),o=(n(26),n(7)),i=n(1),u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper teal darken-4 px1"},c.a.createElement("a",{href:"/",className:"brand-logo"},"TodoList React + TypeScript"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/about"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))))))},m=n(14),s=n(19),d=n(20),E=function(e){var t=Object(a.useRef)(null);return c.a.createElement("div",{className:"input-field mt2"},c.a.createElement("input",{ref:t,type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430",onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")}}),c.a.createElement("label",{htmlFor:"title",className:"active"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"))},p=function(e){var t=e.todos,n=e.onToggle,a=e.onRemove;return 0===t.length?c.a.createElement("p",{className:"center"},"\u041f\u043e\u043a\u0430 \u0434\u0435\u043b \u043d\u0435\u0442!"):c.a.createElement("ul",null,t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),c.a.createElement("li",{className:t.join(" "),key:e.id},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:n.bind(null,e.id)}),c.a.createElement("span",null,e.title),c.a.createElement("i",{className:"material-icons red-text",onClick:function(){return a(e.id)}},"delete")))})))},f=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");l(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};l((function(e){return[t].concat(Object(s.a)(e))}))}}),c.a.createElement(p,{todos:n,onToggle:function(e){l((function(t){return t.map((function(t){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t}))}))},onRemove:function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},h=function(){var e=Object(i.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"\u0421\u0442\u0440\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum dignissimos laudantium magnam quaerat quo recusandae rem sint unde."),c.a.createElement("button",{className:"btn",onClick:function(){return e.push("/")}},"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"))},b=function(){return c.a.createElement(o.a,null,c.a.createElement(u,null),c.a.createElement("div",{className:"container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{component:f,path:"/",exact:!0}),c.a.createElement(i.a,{component:h,path:"/about"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d89dc070.chunk.js.map