(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var c=n(21),a=n(0),i=n.n(a),r=n(19),s=n.n(r),d=(n(88),n(74)),j=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},o=n(36),l=n(60),b=n(58),h=n(1),u=[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2},{id:1,name:"\uba4b\uc9c4\uc2e0\ubc1c2",quan:1},{id:2,name:"\uba4b\uc9c4\uc2e0\ubc1c3",quan:3}];var O=Object(b.b)(Object(b.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;if("addItem"===t.type){var n=Object(c.a)(e),a=n.find((function(e){return e.name==t.payload.name}));return a?(a.quan++,n):(n.push(t.payload),n)}if("addQuan"===t.type){var i=Object(c.a)(e);return console.log(t.payload.id),i[t.payload.id].quan++,i}if("delQuan"===t.type){var r=Object(c.a)(e);return r[t.payload.id].quan>0&&r[t.payload.id].quan--,r}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alertClose"===t.type?e=!1:e}}));s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(o.a,{basename:"/React_ShoppingMall_Demo",children:Object(h.jsx)(l.a,{store:O,children:Object(h.jsx)(d.a,{})})})}),document.getElementById("root")),j()},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return k}));var c,a=n(21),i=n(5),r=n(61),s=n(0),d=n.n(s),j=n(127),o=n(125),l=n(128),b=n(126),h=n(82),u=(n(89),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),O=n(72),x=n(36),p=n(9),m=n(62),v=n.n(m),f=n(1),g=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,132))})),y=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,133))})),S=O.a.img(c||(c=Object(r.a)(["\n  cursor: pointer;\n"]))),k=d.a.createContext();function C(e){var t=Object(p.f)();Object(s.useContext)(k);return Object(f.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.item.id)},children:[Object(f.jsx)(S,{src:"https://codingapple1.github.io/shop/shoes"+(e.index+1)+".jpg",alt:"\uc0c1\ud488\uc774\ubbf8\uc9c01",width:"100%"}),Object(f.jsx)("h4",{children:e.item.title}),Object(f.jsxs)("p",{children:[e.item.content," & ",e.item.price]}),Object(f.jsx)(q,{index:e.index})]})}function q(e){var t=Object(s.useContext)(k);return Object(f.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.index]]})}t.a=function(){var e=Object(s.useState)(u),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([10,11,12,15,14,20]),d=Object(i.a)(r,2),O=d[0],m=d[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(j.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(j.a.Brand,{as:x.b,to:"/",children:"ShoeShop"}),Object(f.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(l.a,{className:"me-auto",children:[Object(f.jsx)(l.a.Link,{as:x.b,to:"/",children:"Home"}),Object(f.jsx)(l.a.Link,{as:x.b,to:"/detail/0",children:"Detail"}),Object(f.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(f.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(f.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(f.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(f.jsx)(b.a.Divider,{}),Object(f.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(f.jsxs)(p.c,{children:[Object(f.jsxs)(p.a,{exact:!0,path:"/",children:[Object(f.jsxs)("div",{className:"background",children:[Object(f.jsx)("h1",{children:"20% Season off"}),Object(f.jsx)("p",{children:"jumbotron"}),Object(f.jsx)("p",{children:Object(f.jsx)(h.a,{variant:"primary",children:"Primary"})})]}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(k.Provider,{value:O,children:Object(f.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(f.jsx)(C,{item:e,index:t},t)}))})}),Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){v.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){c([].concat(Object(a.a)(n),Object(a.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328!")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(f.jsx)(p.a,{exact:!0,path:"/detail/:id",children:Object(f.jsx)(k.Provider,{value:O,children:Object(f.jsx)(s.Suspense,{fallback:Object(f.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4..."}),children:Object(f.jsx)(g,{shoes:n,shoesChange:c,stock:O,stockChange:m})})})}),Object(f.jsx)(p.a,{path:"/cart",children:Object(f.jsx)(s.Suspense,{fallback:Object(f.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4..."}),children:Object(f.jsx)(y,{})})}),Object(f.jsx)(p.a,{path:"/:id",children:Object(f.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc90c"})})]})]})}},88:function(e,t,n){},89:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.0c2c4cdd.chunk.js.map