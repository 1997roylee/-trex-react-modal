(this["webpackJsonp@trex/react-modal-example"]=this["webpackJsonp@trex/react-modal-example"]||[]).push([[0],{76:function(e,t,n){e.exports=n(88)},77:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(77);var o=n(0),r=n.n(o),l=n(27),a=n.n(l),c=n(111),u=n(110);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=Object(o.createContext)({component:null,props:{},isShow:!1,showModal:function(){},hideModal:function(){}}),m=d.Consumer;function h(){return r.a.createElement(m,null,(function(e){var t=e.component,n=void 0===t?null:t,o=e.props,l=e.isShow,a=e.hideModal;return n?r.a.createElement(n,i({},o,{isShow:l,onClose:a})):null}))}var p=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).showModal=function(e,n){void 0===n&&(n={}),console.log("=== Modal ==="),console.log("=== Action: Show ===",e),t.setState({component:e,props:n,isShow:!0})},t.hideModal=function(){return t.setState({component:null,props:{},isShow:!1})},t.state={component:null,props:{},showModal:t.showModal,hideModal:t.hideModal,isShow:!1},t}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n),o.prototype.render=function(){return r.a.createElement(d.Provider,{value:this.state},this.props.children,r.a.createElement(h,null))},o}(o.Component);function f(e,t){return"function"===typeof e?e(t):e}var E=r.a.memo((function(e){var t=e.isShow,n=void 0!==t&&t,o=e.size,l=void 0===o?"md":o,a=e.footer,c=void 0===a?null:a,i=e.body,s=void 0===i?null:i,d=e.header,m=void 0===d?null:d,h=e.onClose;return r.a.createElement(u.a,{isOpen:n,size:l,onClose:h},r.a.createElement(u.g,null),r.a.createElement(u.d,null,r.a.createElement(u.f,null,f(m,e)),r.a.createElement(u.c,null),r.a.createElement(u.b,null,f(s,e)),r.a.createElement(u.e,null,f(c,e))))}));function v(e){var t=e.header,n=e.body,o=e.footer,l=e.size,a=void 0===l?"md":l;return function(e){return r.a.createElement(E,i({header:t,body:n,footer:o,size:a},e))}}var w=n(109),y=n(113),b=n(112),S=v({header:function(){return r.a.createElement("h5",null,"Title")},body:function(){return r.a.createElement("h1",null,"Hello World")},size:"xl"}),M=v({header:function(e){return r.a.createElement("h5",null,e.title)},body:function(e){return r.a.createElement("h1",null,e.body)},size:"xl"}),C=v({header:function(){return r.a.createElement("h5",null,"Title")},body:function(){return r.a.createElement("h1",null,"Small Size")},size:"sm"});function x(){var e=Object(o.useContext)(d),t=e.showModal;e.hideModal;return r.a.createElement(w.a,{py:8},r.a.createElement(y.a,{spacing:4},r.a.createElement(b.a,{colorScheme:"blue",onClick:function(){return t(S)}},"Show Demo Modal"),r.a.createElement(b.a,{colorScheme:"blue",onClick:function(){return t(M,{title:"Demo 02",body:"Hello world demo 02"})}},"Show Demo Modal With Props"),r.a.createElement(b.a,{colorScheme:"blue",onClick:function(){return t(C)}},"Show Small Size Modal")))}var z=function(){return r.a.createElement(c.a,null,r.a.createElement(p,null,r.a.createElement(x,null),r.a.createElement(h,null)))};a.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.872a6f9f.chunk.js.map