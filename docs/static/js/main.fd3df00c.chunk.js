(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{37:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(21),o=a.n(c),r=(a(29),a(15)),l=a(24),i=a(9),d=a(10),m=a(12),u=a(11),j=a(13),b=a(2),p=a(8),h=a(1),O=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={completed:t.props.task.completed},t.toggleCompleted=function(){t.setState((function(t){return{completed:!t.completed}})),t.props.onToggleCompleted(t.props.task.id)},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("li",{className:"list-group-item "+(this.state.completed?"bg-success text-white":null),children:[this.props.task.name,Object(h.jsx)("button",{className:"btn btn-sm btn-outline-success float-end"+(this.state.completed?"btn-outline-light":null),onClick:function(){return t.toggleCompleted()},children:Object(h.jsx)(p.a,{})})]})}}]),a}(s.a.Component),f=function(t){var e,a=t.tasks,n=t.match,c=t.onToggleCompleted;switch(console.log(n.params),n.params.filter){case"completed":e=a.filter((function(t){return t.completed}));break;default:e=a}return 0===e.length?Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("h1",{className:"m-3",children:"My Todo List"}),Object(h.jsx)("ul",{className:"list-group m-3",children:Object(h.jsx)("li",{className:"list-group-item",children:"No task to display here"})})]}):Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("h1",{className:"m-3",children:"My Todo List"}),Object(h.jsx)("ul",{className:"list-group m-3",children:e.map((function(t){return Object(h.jsx)(O,{task:t,onToggleCompleted:c},t.id)}))})]})},k=function(t){var e=t.onDeleteCompleted;return Object(h.jsxs)("footer",{className:"p-3 bg-light",children:[Object(h.jsxs)("div",{className:"btn-group",children:[Object(h.jsx)(j.b,{to:"/",className:"btn btn-outline-dark",exact:!0,children:Object(h.jsx)(p.c,{})}),Object(h.jsx)(j.b,{to:"/completed",className:"btn btn-outline-dark",children:Object(h.jsx)(p.b,{})}),Object(h.jsx)(j.b,{to:"/add-task",className:"btn btn-outline-dark",children:Object(h.jsx)(p.d,{})})]}),Object(h.jsx)("button",{className:"btn btn-sm btn-outline-dark float-end",onClick:e,children:Object(h.jsx)(p.e,{})})]})},g=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleSubmit=function(e){e.preventDefault(),t.props.onAddTask(t.newTask.value),t.props.history.push("/")},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"m-3",children:"New Task"}),Object(h.jsx)("div",{className:"card m-3",children:Object(h.jsxs)("form",{className:"card-body",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(h.jsxs)("div",{className:"form-group m-2",children:[Object(h.jsx)("label",{htmlFor:"taskName",children:"Task Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"taskName",id:"taskName",required:!0,ref:function(e){return t.newTask=e}})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Add Task"})]})})]})}}]),a}(s.a.Component),x=[{id:"123456a",name:" Wake up",completed:!1},{id:"123456b",name:" Take a coffee",completed:!1},{id:"123456c",name:" Drink coffee",completed:!1},{id:"123456d",name:"Eat breakfast",completed:!1},{id:"123456e",name:" Start Teams",completed:!1}],N=a(23),v=a.n(N),y=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={tasks:localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):x},t.onAddTask=function(e){var a={id:v.a.process(),name:e,completed:!1};t.setState((function(t){return{tasks:[].concat(Object(l.a)(t.tasks),[a])}})),setTimeout((function(){localStorage.setItem("data",JSON.stringify(t.state.tasks))}),500)},t.onToggleCompleted=function(e){var a=t.state.tasks.find((function(t){return t.id===e}));a.completed=!a.completed,t.setState((function(t){return t.tasks.map((function(t){return t.id===e?a:t}))})),localStorage.setItem("data",JSON.stringify(t.state.tasks))},t.onDeleteCompleted=function(){t.setState((function(t){return{tasks:t.tasks.filter((function(t){return!t.completed}))}})),setTimeout((function(){localStorage.setItem("data",JSON.stringify(t.state.tasks))}),500)},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsx)("section",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/add-task",render:function(e){return Object(h.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{onAddTask:t.onAddTask}))}}),Object(h.jsx)(b.a,{path:"/:filter?",render:function(e){return Object(h.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{tasks:t.state.tasks,onToggleCompleted:t.onToggleCompleted}))}}),Object(h.jsx)(b.a,{path:"/",component:f})]}),Object(h.jsx)(k,{onDeleteCompleted:this.onDeleteCompleted})]})})}}]),a}(s.a.Component);a(37);o.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fd3df00c.chunk.js.map