(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HWth:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("opOY"),c=(r=a)&&r.__esModule?r:{default:r},i=n("t39t");var f={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,u=void 0===r?{}:r,a=e.children,i=e.components,l=void 0===i?{}:i,s=e.Layout,p=e.layoutProps,d=l[n+"."+t]||l[t]||f[t]||t;return s?c.default.createElement(s,o({components:l},p),c.default.createElement(d,u,a)):c.default.createElement(d,u,a)}}]),t}(a.Component);t.default=(0,i.withMDXComponents)(l)},"PK/l":function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Q66n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("HWth");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return u(r).default}});var o=n("t39t");function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return u(o).default}})},WjfS:function(e,t,n){"use strict";var r=n("PK/l"),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,i=60112;t.Suspense=60113;var f=60115,l=60116;if("function"===typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),u=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),a=s("react.provider"),c=s("react.context"),i=s("react.forward_ref"),t.Suspense=s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"===typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function h(){}function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var b=_.prototype=new h;b.constructor=_,r(b,v.prototype),b.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,u={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(u[r]=t[r]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+2];u.children=f}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===u[r]&&(u[r]=i[r]);return{$$typeof:o,type:e,key:a,ref:c,props:u,_owner:g.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case u:i=!0}}if(i)return a=a(i=e),e=""===r?"."+E(i,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=r+E(c=e[f],f);i+=C(c,t,n,l,a)}else if("function"===typeof(l=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),f=0;!(c=e.next()).done;)i+=C(c=c.value,t,n,l=r+E(c,f++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function M(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function D(){var e=$.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:M,forEach:function(e,t,n){M(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return M(e,(function(){t++})),t},toArray:function(e){return M(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error(d(143));return e}},t.Component=v,t.PureComponent=_,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(d(267,e));var u=r({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=g.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)w.call(t,l)&&!O.hasOwnProperty(l)&&(u[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:o,type:e.type,key:a,ref:c,props:u,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return D().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,n){return D().useReducer(e,t,n)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.2"},l454:function(e,t,n){"use strict";n.r(t);var r=n("sKcO"),o=n("opOY"),u=n.n(o),a=n("Q66n"),c=["components"],i=u.a.createElement;t.default=function(e){var t=e.components;Object(r.a)(e,c);return i(a.MDXTag,{name:"wrapper",components:t},i(a.MDXTag,{name:"h1",components:t,props:{id:"blocklink"}},i(a.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#blocklink","aria-hidden":"true"}},i(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"BlockLink"),i(a.MDXTag,{name:"p",components:t},"The ",i(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"BlockLink")," component is an unstyled ",i(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<a>")," element that can be used to wrap block-level content."),i(a.MDXTag,{name:"p",components:t},i(a.MDXTag,{name:"strong",components:t,parentName:"p"},"Extends: ",i(a.MDXTag,{name:"a",components:t,parentName:"strong",props:{href:"/Link"}},"Link"))),i(a.MDXTag,{name:"pre",components:t},i(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<BlockLink href='https://www.priceline.com'>\n  <Box p={4} color='white' bg='blue'>\n    Priceline.com\n  </Box>\n</BlockLink>\n")))}},opOY:function(e,t,n){"use strict";e.exports=n("WjfS")},sKcO:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},t39t:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n("opOY"),a=(r=u)&&r.__esModule?r:{default:r};var c=a.default.createContext({}),i=c.Provider,f=c.Consumer;t.withMDXComponents=function(e){return function(t){return a.default.createElement(f,null,(function(n){return a.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return a.default.createElement(i,{value:e.components},e.children)}},vQGY:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BlockLink",function(){return n("l454")}])}},[["vQGY",0]]]);