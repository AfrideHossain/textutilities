(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),o=a.n(r),s=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=c.split(" ").length;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"#FFF":"#212529e5"},children:[Object(l.jsxs)("h1",{children:[" ",e.heading," "]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#212529e5":"#FFF",color:"dark"===e.mode?"#FFF":"#212529e5"},value:c,placeholder:"Enter your text here",onChange:function(e){r(e.target.value)},id:"myTxtBox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var e=c.toUpperCase();r(e)},children:"CONVERT TO UPPERCASE"}),Object(l.jsx)("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var e=c.toLowerCase();r(e)},children:"convert to lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){r("")},children:"Clear"}),Object(l.jsx)("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){navigator.clipboard.writeText=c},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"#FFF":"#212529e5"},children:[Object(l.jsx)("h2",{children:"Text summery"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("b",{children:[function(){var e=c.split(" ").length;return""===c?0:e}()," Words ",c.length," Characters"]}),Object(l.jsx)("br",{}),Object(l.jsxs)("b",{children:[function(e){var t=.48*(e-1);return t>60?(t/60).toFixed(2)+" Minutes":t.toFixed(2)+" Seconds"}(o)," need to read"]})]})]})}i.defaultProps={title:"Set Title"};var d=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#212529e5"):(c("light"),document.body.style.backgroundColor="#FFF")}}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(b,{heading:"Enter Text To Manipulate",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.1d69f1f5.chunk.js.map