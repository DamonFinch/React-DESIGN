(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{HWth:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("opOY"),i=(r=u)&&r.__esModule?r:{default:r},c=n("t39t");var p={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,u=e.children,c=e.components,s=void 0===c?{}:c,l=e.Layout,f=e.layoutProps,m=s[n+"."+t]||s[t]||p[t]||t;return l?i.default.createElement(l,o({components:s},f),i.default.createElement(m,a,u)):i.default.createElement(m,a,u)}}]),t}(u.Component);t.default=(0,c.withMDXComponents)(s)},"PK/l":function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Q66n:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("HWth");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n("t39t");function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},S9Yd:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RatingBadge",function(){return n("qWB8")}])},WjfS:function(e,t,n){"use strict";var r=n("PK/l"),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,i=60110,c=60112;t.Suspense=60113;var p=60115,s=60116;if("function"===typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),u=l("react.provider"),i=l("react.context"),c=l("react.forward_ref"),t.Suspense=l("react.suspense"),p=l("react.memo"),s=l("react.lazy")}var f="function"===typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var b=v.prototype=new h;b.constructor=v,r(b,g.prototype),b.isPureReactComponent=!0;var _={current:null},w=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,r)&&!M.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];a.children=p}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:u,ref:i,props:a,_owner:_.current}}function D(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function X(e,t,n,r,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return u=u(c=e),e=""===r?"."+j(c,0):r,Array.isArray(u)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),X(u,t,n,"",(function(e){return e}))):null!=u&&(D(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(T,"$&/")+"/")+e)),t.push(u)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=r+j(i=e[p],p);c+=X(i,t,n,s,u)}else if("function"===typeof(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),p=0;!(i=e.next()).done;)c+=X(i=i.value,t,n,s=r+j(i,p++),u);else if("object"===i)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return X(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function N(){var e=S.current;if(null===e)throw Error(m(321));return e}var C={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!D(e))throw Error(m(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(m(267,e));var a=r({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(s in t)w.call(t,s)&&!M.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==p?p[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){p=Array(s);for(var l=0;l<s;l++)p[l]=arguments[l+2];a.children=p}return{$$typeof:o,type:e.type,key:u,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return N().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,n){return N().useReducer(e,t,n)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.2"},opOY:function(e,t,n){"use strict";e.exports=n("WjfS")},qWB8:function(e,t,n){"use strict";n.r(t);var r=n("sKcO"),o=n("opOY"),a=n.n(o),u=n("Q66n"),i=["components"],c=a.a.createElement;t.default=function(e){var t=e.components;Object(r.a)(e,i);return c(u.MDXTag,{name:"wrapper",components:t},c(u.MDXTag,{name:"h1",components:t,props:{id:"ratingbadge"}},c(u.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#ratingbadge","aria-hidden":"true"}},c(u.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"RatingBadge"),c(u.MDXTag,{name:"p",components:t},"Used in the hotel listing for guest ratings."),c(u.MDXTag,{name:"p",components:t},c(u.MDXTag,{name:"strong",components:t,parentName:"p"},"Extends: ",c(u.MDXTag,{name:"a",components:t,parentName:"strong",props:{href:"/Box"}},"Box"))),c(u.MDXTag,{name:"pre",components:t},c(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<RatingBadge>\n  9.0\n</RatingBadge>\n")),c(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},c(u.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#props","aria-hidden":"true"}},c(u.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"Props"),c(u.MDXTag,{name:"table",components:t},c(u.MDXTag,{name:"thead",components:t,parentName:"table"},c(u.MDXTag,{name:"tr",components:t,parentName:"thead"},c(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Prop"),c(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Type"),c(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),c(u.MDXTag,{name:"tbody",components:t,parentName:"table"},c(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},c(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"color")),c(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"string"),c(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Sets text color")),c(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},c(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"bg")),c(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"string"),c(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Sets background color")))))}},sKcO:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},t39t:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("opOY"),u=(r=a)&&r.__esModule?r:{default:r};var i=u.default.createContext({}),c=i.Provider,p=i.Consumer;t.withMDXComponents=function(e){return function(t){return u.default.createElement(p,null,(function(n){return u.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return u.default.createElement(c,{value:e.components},e.children)}}},[["S9Yd",0]]]);