(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{FGHf:function(e,t,n){"use strict";n.r(t);var r=n("sKcO"),o=n("opOY"),a=n.n(o),u=n("Q66n"),p=["components"],s=a.a.createElement;t.default=function(e){var t=e.components;Object(r.a)(e,p);return s(u.MDXTag,{name:"wrapper",components:t},s(u.MDXTag,{name:"h1",components:t,props:{id:"progressbar"}},s(u.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#progressbar","aria-hidden":"true"}},s(u.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"ProgressBar"),s(u.MDXTag,{name:"p",components:t},"The ",s(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ProgressBar")," component indicates the current step out of a discrete number of steps."),s(u.MDXTag,{name:"h2",components:t,props:{id:"usage"}},s(u.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#usage","aria-hidden":"true"}},s(u.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"Usage"),s(u.MDXTag,{name:"pre",components:t},s(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<ProgressBar\n  steps={[\n    { color: 'warning' },\n    { color: 'caution' },\n    { color: 'primary' },\n    { color: 'success' },\n  ]}\n  currentStep={2}\n  stepHeight='10px'\n/>\n")),s(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},s(u.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#props","aria-hidden":"true"}},s(u.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"Props"),s(u.MDXTag,{name:"table",components:t},s(u.MDXTag,{name:"thead",components:t,parentName:"table"},s(u.MDXTag,{name:"tr",components:t,parentName:"thead"},s(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Prop"),s(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Type"),s(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),s(u.MDXTag,{name:"tbody",components:t,parentName:"table"},s(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"steps")),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"[{ color: string }]")),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Array of objects containing the palette ",s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"color")," to apply to all steps when this step is active.")),s(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"currentStep")),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"number"),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Fill all steps up to and including this step with the color corresponding to this step. Starts at zero.")),s(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"stepHeight")),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"string"),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Height of each step, in pixels.")),s(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"className")),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"string"),s(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"CSS classname, useful for styling ",s(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"ProgressBar")," with Styled Components.")))))}},HWth:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("opOY"),p=(r=u)&&r.__esModule?r:{default:r},s=n("t39t");var i={inlineCode:"code",wrapper:"div"},c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,u=e.children,s=e.components,c=void 0===s?{}:s,l=e.Layout,f=e.layoutProps,m=c[n+"."+t]||c[t]||i[t]||t;return l?p.default.createElement(l,o({components:c},f),p.default.createElement(m,a,u)):p.default.createElement(m,a,u)}}]),t}(u.Component);t.default=(0,s.withMDXComponents)(c)},"PK/l":function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},PzOD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ProgressBar",function(){return n("FGHf")}])},Q66n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("HWth");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n("t39t");function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},WjfS:function(e,t,n){"use strict";var r=n("PK/l"),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,p=60110,s=60112;t.Suspense=60113;var i=60115,c=60116;if("function"===typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),u=l("react.provider"),p=l("react.context"),s=l("react.forward_ref"),t.Suspense=l("react.suspense"),i=l("react.memo"),c=l("react.lazy")}var f="function"===typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var b=v.prototype=new h;b.constructor=v,r(b,g.prototype),b.isPureReactComponent=!0;var _={current:null},M=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,a={},u=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(u=""+t.key),t)M.call(t,r)&&!D.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var i=Array(s),c=0;c<s;c++)i[c]=arguments[c+2];a.children=i}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:u,ref:p,props:a,_owner:_.current}}function w(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var X=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,u){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var s=!1;if(null===e)s=!0;else switch(p){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return u=u(s=e),e=""===r?"."+O(s,0):r,Array.isArray(u)?(n="",null!=e&&(n=e.replace(X,"$&/")+"/"),N(u,t,n,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(X,"$&/")+"/")+e)),t.push(u)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var c=r+O(p=e[i],i);s+=N(p,t,n,c,u)}else if("function"===typeof(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),i=0;!(p=e.next()).done;)s+=N(p=p.value,t,n,c=r+O(p,i++),u);else if("object"===p)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function j(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function S(){var e=C.current;if(null===e)throw Error(m(321));return e}var E={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(m(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(m(267,e));var a=r({},e.props),u=e.key,p=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(p=t.ref,s=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)M.call(t,c)&&!D.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==i?i[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){i=Array(c);for(var l=0;l<c;l++)i[l]=arguments[l+2];a.children=i}return{$$typeof:o,type:e.type,key:u,ref:p,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return S().useCallback(e,t)},t.useContext=function(e,t){return S().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return S().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return S().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return S().useLayoutEffect(e,t)},t.useMemo=function(e,t){return S().useMemo(e,t)},t.useReducer=function(e,t,n){return S().useReducer(e,t,n)},t.useRef=function(e){return S().useRef(e)},t.useState=function(e){return S().useState(e)},t.version="17.0.2"},opOY:function(e,t,n){"use strict";e.exports=n("WjfS")},sKcO:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},t39t:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("opOY"),u=(r=a)&&r.__esModule?r:{default:r};var p=u.default.createContext({}),s=p.Provider,i=p.Consumer;t.withMDXComponents=function(e){return function(t){return u.default.createElement(i,null,(function(n){return u.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return u.default.createElement(s,{value:e.components},e.children)}}},[["PzOD",0]]]);