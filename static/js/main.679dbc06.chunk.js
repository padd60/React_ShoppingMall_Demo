(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{101:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),o=c(24),j=c.n(o),r=(c(82),c(25)),l=c(5),d=c(36),b=c(122),h=c(120),O=c(123),x=c(121),u=c(76),p=(c(83),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),m=c(37),g=c(9),f=c(31),v=c(56),k=c.n(v),N=(c(101),c(1)),S=m.a.div(n||(n=Object(d.a)(["\n  padding: 20px;\n"]))),C=m.a.h4(i||(i=Object(d.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.color}));function w(e){return Object(N.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[e.selectItem.id]]})}var I,B,y=function(e){console.log(e.shoes);var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),o=Object(l.a)(a,2),j=o[0],d=o[1];Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return console.log("hello"),function(){clearTimeout(e)}}),[]);var b=Object(g.f)(),h=Object(g.g)().id,O=e.shoes.find((function(e){return e.id==h}));function x(){var t=Object(r.a)(e.stock),c=O.id;return console.log(t),t.splice(c,1,t[c]-1),console.log(t),t}return console.log(O),console.log(h),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(S,{children:Object(N.jsx)(C,{className:"red",children:"Detail"})}),j,Object(N.jsx)("input",{onChange:function(e){d(e.target.value)}}),!0===n?Object(N.jsx)("div",{className:"my-alert-2",children:Object(N.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):null,Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(O.id+1)+".jpg",width:"100%",alt:"\uc774\ubbf8\uc9c0"})}),Object(N.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(N.jsx)("h4",{className:"pt-5",children:O.title}),Object(N.jsx)("p",{children:O.content}),Object(N.jsxs)("p",{children:[O.price,"\uc6d0"]}),Object(N.jsx)(w,{stock:e.stock,selectItem:O}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){e.stockChange(x)},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){b.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},D=m.a.img(I||(I=Object(d.a)(["\n  cursor: pointer;\n"])));m.a.div(B||(B=Object(d.a)(["\n  cursor: pointer;\n"])));function F(e){var t=Object(g.f)();return Object(N.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.index)},children:[Object(N.jsx)(D,{src:"https://codingapple1.github.io/shop/shoes"+(e.index+1)+".jpg",alt:"\uc0c1\ud488\uc774\ubbf8\uc9c01",width:"100%"}),Object(N.jsx)("h4",{children:e.item.title}),Object(N.jsxs)("p",{children:[e.item.content," & ",e.item.price]})]})}var T=function(){Object(g.f)();var e=Object(s.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12,15,14,20]),a=Object(l.a)(i,2),o=a[0],j=a[1];return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(f.a,{basename:"/React_ShoppingMall_Demo",children:[Object(N.jsx)(b.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(b.a.Brand,{as:f.b,to:"/",children:"ShoeShop"}),Object(N.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(O.a,{className:"me-auto",children:[Object(N.jsx)(O.a.Link,{as:f.b,to:"/",children:"Home"}),Object(N.jsx)(O.a.Link,{as:f.b,to:"/detail/0",children:"Detail"}),Object(N.jsxs)(x.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(N.jsx)(x.a.Item,{href:"#action/3.1",children:"Action"}),Object(N.jsx)(x.a.Item,{href:"#action/3.2",children:"Another action"}),Object(N.jsx)(x.a.Item,{href:"#action/3.3",children:"Something"}),Object(N.jsx)(x.a.Divider,{}),Object(N.jsx)(x.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(N.jsxs)(g.c,{children:[Object(N.jsxs)(g.a,{exact:!0,path:"/",children:[Object(N.jsxs)("div",{className:"background",children:[Object(N.jsx)("h1",{children:"20% Season off"}),Object(N.jsx)("p",{children:"jumbotron"}),Object(N.jsx)("p",{children:Object(N.jsx)(u.a,{variant:"primary",children:"Primary"})})]}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(N.jsx)(F,{item:e,index:t},t)}))}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){k.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){n([].concat(Object(r.a)(c),Object(r.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328!")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(N.jsx)(g.a,{exact:!0,path:"/detail/:id",children:Object(N.jsx)(y,{shoes:c,shoesChange:n,stock:o,stockChange:j})}),Object(N.jsx)(g.a,{path:"/:id",children:Object(N.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc90c"})})]})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};j.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(f.a,{children:Object(N.jsx)(T,{})})}),document.getElementById("root")),L()},82:function(e,t,c){},83:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.679dbc06.chunk.js.map