(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4857],{75042:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/palette",function(){return t(80922)}])},80922:function(n,e,t){"use strict";t.r(e),t.d(e,{SectionTitle:function(){return b}});var r=t(4275),o=t(87368),i=t(45202),a=t(46393),s=t(72327),c=t(9543),l=t(20383),u=t(8630),d=t(94999),p=t(14749),f=t(12702),h=function(n){return Object.keys(n).map((function(e){return{name:e,value:n[e]}}))},x=function(n){return(0,i.jsx)(s.Z,(0,o.Z)((0,r.Z)({},n),{width:[.5,null,1/3,1/4,.2],mb:4,px:2}))},m=function(n){return n.colors.map((function(n){return(0,i.jsx)(x,{children:(0,i.jsx)(f.Z,(0,r.Z)({},n))},n.key)}))},b=function(n){return(0,i.jsx)(c.Z.h3,(0,r.Z)({fontSize:[2,3],bold:!0,mt:[2,4]},n))},v=(0,l.j)().palette,g={};e.default=function(){return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(p.V1,{children:"Palette"}),(0,i.jsx)(p.dk,{children:"The design system includes a palette that can be used to theme components."}),Object.keys(v).map((function(n){if("object"===typeof v[n])return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(b,{children:n}),(0,i.jsx)(u.Z,{wrap:!0,mx:-2,pt:4,children:(0,i.jsx)(m,{colors:h(v[n])})}),(0,i.jsx)(d.Z,{})]});g[n]=v[n]})),(0,i.jsx)(u.Z,{wrap:!0,mx:-2,pt:4,children:(0,i.jsx)(m,{colors:h(g)})})]})}},12702:function(n,e,t){"use strict";t.d(e,{Z:function(){return E}});var r=t(50957),o=t(45202),i=t(46393),a=t(87094),s=t.n(a),c=t(10889),l=t(72327),u=t(63088),d=t(1212),p=t(14749),f=t(62191),h=t(51082),x=t(33137),m=t(97833),b=t(4331),v=t(13754),g=t.n(v),j=function(n){(0,m.Z)(t,n);var e=(0,b.Z)(t);function t(){var n;return(0,f.Z)(this,t),(n=e.call(this)).handleClick=function(){g()(n.ghost),document.execCommand("copy")},n}return(0,h.Z)(t,[{key:"render",value:function(){var n=this,e=this.props,t=e.children,r=e.text,a=i.Children.only(t),s=i.cloneElement(a,{onClick:this.handleClick});return(0,o.jsxs)(o.Fragment,{children:[s,(0,o.jsx)("div",{ref:function(e){return n.ghost=e},style:{position:"absolute",zIndex:-1,opacity:0},children:r})]})}}]),t}(i.Component);function y(){var n=(0,r.Z)(["\n  height: 100px;\n  width: 100%;\n  border-radius: 2px 2px 0 0;\n  transition: all 0.1s ease;\n"]);return y=function(){return n},n}function Z(){var n=(0,r.Z)(["\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  font-family: inherit;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background-color: transparent;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  transition: all 0.125s ease;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);\n\n  &:hover {\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08), 0 16px 16px 0 rgba(0, 0, 0, 0.08);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  & > span {\n    top: 0;\n    left: 0;\n    position: absolute;\n    font-size: 12px;\n    padding: 8px 0;\n    width: 100%;\n    color: #fff;\n    border-radius: 2px 2px 0 0;\n    background-color: #001833;\n    text-align: center;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 0.125s;\n    transition-timing-function: ease-out;\n  }\n\n  &:hover > span {\n    opacity: 1;\n  }\n"]);return Z=function(){return n},n}(0,x.Z)(j,"propTypes",{children:s().any,text:s().string});var w=(0,c.default)(l.Z)(y()),k=c.default.button(Z()),_=function(n){var e=n.name,t=n.value;return(0,o.jsx)(u.Z,{borderWidth:0,m:0,children:(0,o.jsx)(j,{text:t,children:(0,o.jsxs)(k,{children:[(0,o.jsx)(w,{bg:t}),(0,o.jsx)("span",{children:"Press to copy"}),(0,o.jsxs)(l.Z,{p:2,children:[(0,o.jsx)(d.ZP,{fontSize:1,mb:1,align:"left",children:e}),(0,o.jsx)(p.EK,{fontSize:1,align:"left",color:"text",children:t})]})]})})})};_.propTypes={name:s().node,value:s().node};var E=_},13754:function(n){n.exports=function(n){var e;if("SELECT"===n.nodeName)n.focus(),e=n.value;else if("INPUT"===n.nodeName||"TEXTAREA"===n.nodeName){var t=n.hasAttribute("readonly");t||n.setAttribute("readonly",""),n.select(),n.setSelectionRange(0,n.value.length),t||n.removeAttribute("readonly"),e=n.value}else{n.hasAttribute("contenteditable")&&n.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(n),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}}},function(n){n.O(0,[9774,2888,179],(function(){return e=75042,n(n.s=e);var e}));var e=n.O();_N_E=e}]);