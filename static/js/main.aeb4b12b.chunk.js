(this["webpackJsonptasks-app"]=this["webpackJsonptasks-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(5),a=n.n(c),i=n(6),l=n(2),s=n(4),d=n(3);function u(e,t){var n=o.a.useReducer(p,j({initialValue:t})),r=Object(l.a)(n,2),c=r[0],a=r[1],i=c.sincronizedItem,s=c.error,d=c.loading,u=c.item,f=function(e){return a({type:O.error,payload:e})};o.a.useEffect((function(){setTimeout((function(){try{var n,r=localStorage.getItem(e);r?n=JSON.parse(r):(localStorage.setItem(e,JSON.stringify(t)),n=t),function(e){a({type:O.success,payload:e})}(n)}catch(s){f(s)}}),500)}),[i]);return{item:u,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),r=t,a({type:O.save,payload:r})}catch(s){f(s)}var r},loading:d,error:s,sincronizeItem:function(){a({type:O.sincronize})}}}var j=function(e){return{sincronizedItem:!0,error:!1,loading:!0,item:e.initialValue}},O={error:"Error",success:"SUCCESS",save:"SAVE",sincronize:"SINCRONIZE"},p=function(e,t){return function(e,t){var n;return n={},Object(s.a)(n,O.error,Object(d.a)(Object(d.a)({},e),{},{error:!0})),Object(s.a)(n,O.success,Object(d.a)(Object(d.a)({},e),{},{error:!1,loading:!1,sincronizedItem:!0,item:t})),Object(s.a)(n,O.save,Object(d.a)(Object(d.a)({},e),{},{item:t})),Object(s.a)(n,O.sincronize,Object(d.a)(Object(d.a)({},e),{},{sincronizedItem:!1,loading:!0})),n}(e,t.payload)[t.type]||e};function f(){var e=u("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,c=e.loading,a=e.error,s=Object(r.useState)(""),d=Object(l.a)(s,2),j=d[0],O=d[1],p=Object(r.useState)(!1),f=Object(l.a)(p,2),b=f[0],m=f[1],v=Object(r.useState)(!1),h=Object(l.a)(v,2),x=h[0],g=h[1],y=Object(r.useState)(!0),T=Object(l.a)(y,2),C=T[0],E=T[1],w=t.filter((function(e){return!!e.completed})).length,I=t.length,S=[];S=!j.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=j.toLowerCase();return t.includes(n)}));return{miArray:Object(i.a)(t),loading:c,error:a,totalTodos:I,completedTodos:w,searchValue:j,setSearchValue:O,searchedTodos:S,addTodo:function(e){var r=Object(i.a)(t);r.push({completed:!1,text:e}),n(r),window.location.reload()},completeTodo:function(e){var r=t.findIndex((function(t){return t.text===e})),o=Object(i.a)(t);o[r].completed=!o[r].completed,n(o),window.location.reload()},deleteTodo:function(e){var r=t.findIndex((function(t){return t.text===e})),o=Object(i.a)(t);o.splice(r,1),n(o),window.location.reload()},openModal:b,openEdit:x,setOpenEdit:g,setOpenModal:m,sincronizeTodos:o,openOptions:function(e){(E(!C),!0===C)?document.getElementById(e).style.display="flex":document.getElementById(e).style.display="none"},editTodo:function(e,r){var o=t.findIndex((function(t){return t.text===e})),c=Object(i.a)(t);c[o].text=r,n(c),window.location.reload()}}}var b=n(0);function m(e){var t=e.children,n=e.loading;return Object(b.jsx)("header",{children:o.a.Children.toArray(t).map((function(e){return o.a.cloneElement(e,{loading:n})}))})}n(15);function v(e){var t=e.totalTodos,n=e.completedTodos,r=e.loading;return Object(b.jsxs)("h2",{className:"TodoCounter ".concat(!!r&&"TodoCounter--loading"),children:["Has completado ",n," de ",t," TODOs"]})}n(16);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function y(e,t){var n=e.title,o=e.titleId,c=x(e,["title","titleId"]);return r.createElement("svg",h({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,g)}var T=r.forwardRef(y);n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=r.createElement("path",{d:"M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"});function I(e,t){var n=e.title,o=e.titleId,c=E(e,["title","titleId"]);return r.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,w)}var S=r.forwardRef(I);n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k=r.createElement("path",{d:"M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"});function z(e,t){var n=e.title,o=e.titleId,c=L(e,["title","titleId"]);return r.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,k)}var M=r.forwardRef(z);n.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var B=r.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function D(e,t){var n=e.title,o=e.titleId,c=P(e,["title","titleId"]);return r.createElement("svg",V({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,B)}var F=r.forwardRef(D);n.p;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H=r.createElement("path",{d:"M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"});function J(e,t){var n=e.title,o=e.titleId,c=R(e,["title","titleId"]);return r.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,H)}var _=r.forwardRef(J),q=(n.p,n(17),{check:function(e){return Object(b.jsx)(T,{className:"Icon-svg Icon-svg--check",fill:e})},menu:function(e){return Object(b.jsx)(S,{className:"Icon-svg Icon-svg--menu",fill:e})},delete:function(e){return Object(b.jsx)(F,{className:"Icon-svg Icon-svg--delete",fill:e})},lupa:function(e){return Object(b.jsx)(M,{className:"Icon-svg Icon-svg--lupa",fill:e})},edit:function(e){return Object(b.jsx)(_,{className:"Icon-svg Icon-svg--edit",fill:e})}});function Q(e){var t=e.type,n=e.color,r=void 0===n?"gray":n,o=e.onClick,c=e.id;return Object(b.jsxs)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:[Object(b.jsx)("div",{children:c}),q[t](r)]})}function U(){return Object(b.jsx)(Q,{type:"lupa"})}function Y(e){var t=e.searchValue,n=e.setSearchValue,r=e.loading;return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)(U,{}),Object(b.jsx)("input",{className:"TodoSearch",placeholder:"Search",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:r})]})}n(18);function Z(e){var t=e.children||e.render;return Object(b.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchText),!e.loading&&!e.error&&e.searchedTodos.map(t)]})}function G(e){var t=e.completed,n=e.onComplete;return Object(b.jsx)(Q,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function K(e){var t=e.id,n=f().openOptions;return Object(b.jsx)(Q,{type:"menu",onClick:function(){return n("id-".concat(t))},id:t})}function W(e){var t=f().deleteTodo;return Object(b.jsx)(Q,{type:"delete",onClick:function(){return t(e.text)}})}function X(e){return Object(b.jsx)(Q,{type:"edit",onClick:function(){return e.setOpenEdit(!0)}})}n(19);function $(e){var t=e.children;return a.a.createPortal(Object(b.jsx)("div",{className:"EditBackground",children:t}),document.getElementById("edit"))}n(20);function ee(e){var t=e.setOpenEdit,n=e.text,r=e.editTodo,c=o.a.useState(n),a=Object(l.a)(c,2),i=a[0],s=a[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n,i),t(!1)},children:[Object(b.jsx)("label",{children:"TODO actual"}),Object(b.jsx)("textarea",{target:!0,value:i,onChange:function(e){s(e.target.value)},placeholder:"Etida tu todo"}),Object(b.jsxs)("div",{className:"EditForm-buttonContainer",children:[Object(b.jsx)("button",{type:"button",className:"EditForm-button EditForm-button--cancel",onClick:function(){t(!1)},children:"Cancelar"}),Object(b.jsx)("button",{type:"submit",className:"EditForm-button EditForm-button--add",children:"Actualizar"})]})]})}n(21);var te=function(e){var t=f().completeTodo;return Object(b.jsxs)("div",{className:"options",id:e.id,children:[Object(b.jsx)(G,{completed:e.completed,onComplete:function(){return t(e.text)}}),Object(b.jsx)(W,{text:e.text}),Object(b.jsx)(X,{setOpenEdit:e.setOpenEdit}),!!e.openEdit&&Object(b.jsx)($,{children:Object(b.jsx)(ee,{text:e.text,setOpenEdit:e.setOpenEdit,editTodo:e.editTodo})})]})};n(22);function ne(e){var t=function(){return e.miArray.findIndex((function(t){return t.text===e.text}))};return Object(b.jsxs)("li",{className:"TodoItem",children:[Object(b.jsx)(G,{completed:e.completed,onComplete:e.onComplete}),Object(b.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(b.jsx)(K,{id:t()}),Object(b.jsx)(te,{completed:e.completed,text:e.text,id:"id-".concat(t()),openEdit:e.openEdit,setOpenEdit:e.setOpenEdit,editTodo:e.editTodo})]})}function re(){return Object(b.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(23);function oe(){return Object(b.jsxs)("div",{className:"LoadingTodo-container",children:[Object(b.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(b.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(b.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function ce(){return Object(b.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}n(24);function ae(e){var t=e.addTodo,n=e.setOpenModal,r=o.a.useState(""),c=Object(l.a)(r,2),a=c[0],i=c[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),n(!1)},children:[Object(b.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(b.jsx)("textarea",{value:a,onChange:function(e){i(e.target.value)},placeholder:"Escribir tarea"}),Object(b.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(b.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){n(!1)},children:"Cancelar"}),Object(b.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(25);function ie(e){return Object(b.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(26);function le(e){var t=e.children;return a.a.createPortal(Object(b.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(27);function se(e){var t=function(e){var t=o.a.useState(!1),n=Object(l.a)(t,2),r=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_V1"),c(!0))})),{show:r,toggleShow:function(){e(),c(!1)}}}(e.sincronize),n=t.show,r=t.toggleShow;return n?Object(b.jsx)("div",{className:"ChangeAlert-bg",children:Object(b.jsxs)("div",{className:"ChangeAlert-container",children:[Object(b.jsx)("p",{children:"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."}),Object(b.jsx)("p",{children:"\xbfQuieres sincronizar tus TODOs?"}),Object(b.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:r,children:"Yes!"})]})}):null}var de=function(){var e=f(),t=e.error,n=e.loading,r=e.searchedTodos,c=e.completeTodo,a=(e.deleteTodo,e.openModal),i=e.setOpenModal,l=e.totalTodos,s=e.completedTodos,d=e.searchValue,u=e.setSearchValue,j=e.addTodo,O=e.sincronizeTodos,p=e.miArray,h=e.openEdit,x=e.setOpenEdit,g=e.editTodo;return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsxs)(m,{loading:n,children:[Object(b.jsx)(v,{totalTodos:l,completedTodos:s}),Object(b.jsx)(Y,{searchValue:d,setSearchValue:u})]}),Object(b.jsx)(Z,{error:t,loading:n,totalTodos:l,searchedTodos:r,searchText:d,onError:function(){return Object(b.jsx)(re,{})},onLoading:function(){return Object(b.jsx)(oe,{})},onEmptyTodos:function(){return Object(b.jsx)(ce,{})},onEmptySearchResults:function(e){return Object(b.jsxs)("p",{children:["No hay resultados para ",e]})},children:function(e){return Object(b.jsx)(ne,{text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},totalTodos:l,miArray:p,setOpenEdit:x,openEdit:h,editTodo:g},e.text)}}),!!a&&Object(b.jsx)(le,{children:Object(b.jsx)(ae,{addTodo:j,setOpenModal:i})}),Object(b.jsx)(ie,{setOpenModal:i}),Object(b.jsx)(se,{sincronize:O})]})};n(28);a.a.render(Object(b.jsx)(de,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.aeb4b12b.chunk.js.map