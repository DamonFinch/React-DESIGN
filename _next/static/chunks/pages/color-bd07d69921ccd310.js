(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8427],{60719:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color",function(){return t(68090)}])},68090:function(n,e,t){"use strict";t.r(e);var r=t(45202),o=(t(46393),t(47412)),i=t(30545),a=t(17048),c=t(57224),u=t(98646);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){l(n,e,t[e])}))}return n}var f=Object.keys(o.rS.colors).filter((function(n){return!/[0-9]$/.test(n)})).map((function(n){return{name:n,value:o.rS.colors[n]}})).filter((function(n){return!Array.isArray(n.value)})),p=f.filter((function(n){return!/^(lightGray|gray|borderGray|darkGray)$/.test(n.name)})),d=f.filter((function(n){return/^(lightGray|gray|borderGray|darkGray)$/.test(n.name)})),b=function(n){return(0,r.jsx)(i.Z,s({},n,{width:[.5,null,1/3,1/4,1/6],mb:4,px:2}))},h=function(n){return n.colors.map((function(n){return(0,r.jsx)(b,{children:(0,r.jsx)(u.Z,s({},n))},n.key)}))};e.default=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(c.V1,{children:"Color"}),(0,r.jsx)(c.dk,{children:"The design system includes a color palette of several primary colors, along with light and dark variations."}),(0,r.jsxs)(a.Z,{wrap:!0,mx:-2,pt:4,children:[(0,r.jsx)(h,{colors:p}),(0,r.jsx)(h,{colors:d})]})]})}},98646:function(n,e,t){"use strict";t.d(e,{Z:function(){return R}});var r=t(45202),o=t(46393),i=t(87094),a=t.n(i),c=t(72863),u=t(30545),l=t(62913),s=t(32494),f=t(57224),p=t(13754),d=t.n(p);function b(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function h(n){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function y(n,e){return!e||"object"!==x(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function v(n,e){return(v=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var x=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function g(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=h(n);if(e){var o=h(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)}}var m,j,w,O=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&v(n,e)}(c,n);var e,t,i,a=g(c);function c(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=a.call(this)).handleClick=function(){d()(n.ghost),document.execCommand("copy")},n}return e=c,(t=[{key:"render",value:function(){var n=this,e=this.props,t=e.children,i=e.text,a=o.Children.only(t),c=o.cloneElement(a,{onClick:this.handleClick});return(0,r.jsxs)(r.Fragment,{children:[c,(0,r.jsx)("div",{ref:function(e){return n.ghost=e},style:{position:"absolute",zIndex:-1,opacity:0},children:i})]})}}])&&b(e.prototype,t),i&&b(e,i),c}(o.Component);function _(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function k(){var n=_(["\n  height: 100px;\n  width: 100%;\n  border-radius: 2px 2px 0 0;\n  transition: all 0.1s ease;\n"]);return k=function(){return n},n}function P(){var n=_(["\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  font-family: inherit;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background-color: transparent;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  transition: all 0.125s ease;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);\n\n  &:hover {\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08), 0 16px 16px 0 rgba(0, 0, 0, 0.08);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  & > span {\n    top: 0;\n    left: 0;\n    position: absolute;\n    font-size: 12px;\n    padding: 8px 0;\n    width: 100%;\n    color: #fff;\n    border-radius: 2px 2px 0 0;\n    background-color: #001833;\n    text-align: center;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 0.125s;\n    transition-timing-function: ease-out;\n  }\n\n  &:hover > span {\n    opacity: 1;\n  }\n"]);return P=function(){return n},n}m=O,j="propTypes",w={children:a().any,text:a().string},j in m?Object.defineProperty(m,j,{value:w,enumerable:!0,configurable:!0,writable:!0}):m[j]=w;var E=(0,c.default)(u.Z)(k()),S=c.default.button(P()),C=function(n){var e=n.name,t=n.value;return(0,r.jsx)(l.Z,{borderWidth:0,m:0,children:(0,r.jsx)(O,{text:t,children:(0,r.jsxs)(S,{children:[(0,r.jsx)(E,{bg:t}),(0,r.jsx)("span",{children:"Press to copy"}),(0,r.jsxs)(u.Z,{p:2,children:[(0,r.jsx)(s.ZP,{fontSize:1,mb:1,align:"left",children:e}),(0,r.jsx)(f.EK,{fontSize:1,align:"left",color:"text",children:t})]})]})})})};C.propTypes={name:a().node,value:a().node};var R=C},13754:function(n){n.exports=function(n){var e;if("SELECT"===n.nodeName)n.focus(),e=n.value;else if("INPUT"===n.nodeName||"TEXTAREA"===n.nodeName){var t=n.hasAttribute("readonly");t||n.setAttribute("readonly",""),n.select(),n.setSelectionRange(0,n.value.length),t||n.removeAttribute("readonly"),e=n.value}else{n.hasAttribute("contenteditable")&&n.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(n),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}}},function(n){n.O(0,[9774,2888,179],(function(){return e=60719,n(n.s=e);var e}));var e=n.O();_N_E=e}]);