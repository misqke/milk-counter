(this["webpackJsonpmilk-counter"]=this["webpackJsonpmilk-counter"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),l=n.n(r),o=(n(9),n(2)),s=n(0);function i(e){return Object(s.jsxs)("div",{id:"header",children:[Object(s.jsx)("h1",{id:"title",children:"Milk Counter 9000"}),Object(s.jsxs)("div",{id:"btn-container",children:[Object(s.jsx)("button",{onClick:e.countClick,children:"Counting"}),Object(s.jsx)("button",{onDoubleClick:e.orderClick,children:"Ordering"})]})]})}var j=function(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),a=n[0],r=n[1],l=e.num,i=Object(c.useState)(0),j=Object(o.a)(i,2),u=j[0],b=j[1],h=Object(c.useState)(0),d=Object(o.a)(h,2),O=d[0],g=d[1];return Object(c.useEffect)((function(){r(O&&u?O*l+u:u||(O?O*l:0))})),Object(s.jsxs)("tr",{className:e.color,children:[Object(s.jsx)("td",{className:"milk-name",children:e.name}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{class:"input",type:"text",pattern:"[0-9]*",value:u,onFocus:function(){return b("")},onChange:function(e){!function(e){e.target.value?b(parseInt(e.target.value)):b(0)}(e)}})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{class:"input",type:"text",pattern:"[0-9]*",value:O,onFocus:function(){return g("")},onChange:function(e){!function(e){e.target.value?g(parseInt(e.target.value)):g(0)}(e)}})}),Object(s.jsx)("td",{className:"total",children:a})]},e.name)},u=[["gal homo",4,"red"],["gal 2%",4,"blue"],["gal 1%",4,"yellow"],["gal skim",4,"lblue"],["hgl homo",9,"red"],["hgl 2%",9,"blue"],["hgl 1%",9,"yellow"],["hgl skim",9,"lblue"],["qt homo",16,"red"],["qt 2%",16,"blue"],["qt 1%",16,"yellow"],["qt skim",16,"lblue"],["gal choc",4,"brown"],["gal choc 1%",4,"lbrown"],["hgl choc 1%",9,"lbrown"],["hgl choc",9,"brown"],["hgl butter",9,"green"],["qt butter 1%",16,"green"],["qt choc 1%",16,"lbrown"],["qt choc",16,"brown"],["14oz homo",20,"red"],["14oz 2%",20,"blue"],["14oz choc 1%",20,"lbrown"],["14oz choc",20,"brown"],["qt whp crm",20,"tea"],["lemon tea",4,"tea"],["lemonade",4,"tea"],["green tea",4,"tea"],["tea cooler",4,"tea"],["diet lemon",4,"tea"],["diet peach",4,"tea"],["diet decaf",4,"tea"],["sweet tea",4,"tea"],["diet green",4,"tea"],["peach tea",4,"tea"],["diet sweet",4,"tea"],["rasp lemon",4,"tea"],["rasp tea",4,"tea"],["pt iced",20,"tea"],["pt diet lemon",20,"tea"],["pt peach",20,"tea"],["pt sweet tea",20,"tea"],["gal frt punch",4,"red"],["gal org drink",4,"orange"],["gal orange juice",4,"orange"],["gal cal oj",4,"orange"],["hgl orange juice",16,"orange"],["hgl cal oj",16,"orange"],["pt orange juice",20,"orange"]];function b(){return Object(s.jsx)("div",{className:"table-container",children:Object(s.jsx)("table",{children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{className:"t-header",children:[Object(s.jsx)("th",{children:"Milk"}),Object(s.jsx)("th",{children:"Shelf"}),Object(s.jsx)("th",{children:"Crates"}),Object(s.jsx)("th",{children:"Total"})]}),u.map((function(e){return j({name:e[0],num:e[1],color:e[2]})}))]})})})}var h=function(e){e.name;var t=Object(c.useState)(0),n=Object(o.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(0),i=Object(o.a)(l,2),j=i[0],u=i[1],b=Object(c.useState)(0),h=Object(o.a)(b,2),d=h[0],O=h[1],g=e.num;return Object(c.useEffect)((function(){a&&j?O(a*g+j*g*6):a?O(a*g):j&&O(j*g*6)})),Object(s.jsxs)("tr",{className:"tea",children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{className:"input",type:"text",pattern:"[0-9]*",onChange:function(e){e.target.value?r(parseInt(e.target.value)):r(0)},onFocus:function(){return r("")},value:a})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{className:"input",type:"text",pattern:"[0-9]*",onChange:function(e){e.target.value?u(parseInt(e.target.value)):r(0)},onFocus:function(){return u("")},value:j})}),Object(s.jsx)("td",{className:"total",children:d})]})},d=[["gallon",4],["half gal",9],["quart",16],["14oz/pint",20]];function O(){return Object(s.jsx)("div",{id:"orderer-container",className:"table-container",children:Object(s.jsxs)("table",{children:[Object(s.jsxs)("tr",{className:"t-header",children:[Object(s.jsx)("th",{children:"Size"}),Object(s.jsx)("th",{children:"Crates"}),Object(s.jsx)("th",{children:"Stacks"}),Object(s.jsx)("th",{children:"Order"})]}),d.map((function(e){return h({name:e[0],num:e[1]})}))]})})}var g=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(i,{countClick:function(){a(!0)},orderClick:function(){a(!1)}}),n?Object(s.jsx)(b,{}):Object(s.jsx)(O,{})]})};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b44f1ef3.chunk.js.map