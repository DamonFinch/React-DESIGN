(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4857],{32378:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/palette",function(){return t(46149)}])},46149:function(n,e,t){"use strict";t.r(e),t.d(e,{SectionTitle:function(){return x}});var r=t(45202),o=t(46393),i=t(30545),c=t(3487),a=t(98521),u=t(17048),l=t(42176),s=t(1174),f=t(24245);function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){p(n,e,t[e])}))}return n}var b=function(n){return Object.keys(n).map((function(e){return{name:e,value:n[e]}}))},h=function(n){return(0,r.jsx)(i.Z,d({},n,{width:[.5,null,1/3,1/4,.2],mb:4,px:2}))},y=function(n){return n.colors.map((function(n){return(0,r.jsx)(h,{children:(0,r.jsx)(f.Z,d({},n))},n.key)}))},x=function(n){return(0,r.jsx)(c.Z.h3,d({fontSize:[2,3],bold:!0,mt:[2,4]},n))},v=(0,a.j)().palette,j={};e.default=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.V1,{children:"Palette"}),(0,r.jsx)(s.dk,{children:"The design system includes a palette that can be used to theme components."}),Object.keys(v).map((function(n){if("object"===typeof v[n])return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(x,{children:n}),(0,r.jsx)(u.Z,{wrap:!0,mx:-2,pt:4,children:(0,r.jsx)(y,{colors:b(v[n])})}),(0,r.jsx)(l.Z,{})]});j[n]=v[n]})),(0,r.jsx)(u.Z,{wrap:!0,mx:-2,pt:4,children:(0,r.jsx)(y,{colors:b(j)})})]})}},24245:function(n,e,t){"use strict";t.d(e,{Z:function(){return Z}});var r=t(45202),o=t(46393),i=t(87094),c=t.n(i),a=t(72863),u=t(30545),l=t(62913),s=t(12611),f=t(1174),p=t(13754),d=t.n(p);function b(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function h(n){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function y(n,e){return!e||"object"!==v(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function x(n,e){return(x=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var v=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function j(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=h(n);if(e){var o=h(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)}}var m,g,w,O=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&x(n,e)}(a,n);var e,t,i,c=j(a);function a(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=c.call(this)).handleClick=function(){d()(n.ghost),document.execCommand("copy")},n}return e=a,(t=[{key:"render",value:function(){var n=this,e=this.props,t=e.children,i=e.text,c=o.Children.only(t),a=o.cloneElement(c,{onClick:this.handleClick});return(0,r.jsxs)(r.Fragment,{children:[a,(0,r.jsx)("div",{ref:function(e){return n.ghost=e},style:{position:"absolute",zIndex:-1,opacity:0},children:i})]})}}])&&b(e.prototype,t),i&&b(e,i),a}(o.Component);function _(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function P(){var n=_(["\n  height: 100px;\n  width: 100%;\n  border-radius: 2px 2px 0 0;\n  transition: all 0.1s ease;\n"]);return P=function(){return n},n}function k(){var n=_(["\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  font-family: inherit;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background-color: transparent;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  transition: all 0.125s ease;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);\n\n  &:hover {\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08), 0 16px 16px 0 rgba(0, 0, 0, 0.08);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  & > span {\n    top: 0;\n    left: 0;\n    position: absolute;\n    font-size: 12px;\n    padding: 8px 0;\n    width: 100%;\n    color: #fff;\n    border-radius: 2px 2px 0 0;\n    background-color: #001833;\n    text-align: center;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 0.125s;\n    transition-timing-function: ease-out;\n  }\n\n  &:hover > span {\n    opacity: 1;\n  }\n"]);return k=function(){return n},n}m=O,g="propTypes",w={children:c().any,text:c().string},g in m?Object.defineProperty(m,g,{value:w,enumerable:!0,configurable:!0,writable:!0}):m[g]=w;var E=(0,a.default)(u.Z)(P()),S=a.default.button(k()),T=function(n){var e=n.name,t=n.value;return(0,r.jsx)(l.Z,{borderWidth:0,m:0,children:(0,r.jsx)(O,{text:t,children:(0,r.jsxs)(S,{children:[(0,r.jsx)(E,{bg:t}),(0,r.jsx)("span",{children:"Press to copy"}),(0,r.jsxs)(u.Z,{p:2,children:[(0,r.jsx)(s.ZP,{fontSize:1,mb:1,align:"left",children:e}),(0,r.jsx)(f.EK,{fontSize:1,align:"left",color:"text",children:t})]})]})})})};T.propTypes={name:c().node,value:c().node};var Z=T},13754:function(n){n.exports=function(n){var e;if("SELECT"===n.nodeName)n.focus(),e=n.value;else if("INPUT"===n.nodeName||"TEXTAREA"===n.nodeName){var t=n.hasAttribute("readonly");t||n.setAttribute("readonly",""),n.select(),n.setSelectionRange(0,n.value.length),t||n.removeAttribute("readonly"),e=n.value}else{n.hasAttribute("contenteditable")&&n.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(n),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}}},function(n){n.O(0,[9774,2888,179],(function(){return e=32378,n(n.s=e);var e}));var e=n.O();_N_E=e}]);