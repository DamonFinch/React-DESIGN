(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HWth:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),p=t("opOY"),i=(r=p)&&r.__esModule?r:{default:r},u=t("t39t");var s={inlineCode:"code",wrapper:"div"},l=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,r=e.props,a=void 0===r?{}:r,p=e.children,u=e.components,l=void 0===u?{}:u,c=e.Layout,m=e.layoutProps,f=l[t+"."+n]||l[n]||s[n]||n;return c?i.default.createElement(c,o({components:l},m),i.default.createElement(f,a,p)):i.default.createElement(f,a,p)}}]),n}(p.Component);n.default=(0,u.withMDXComponents)(l)},"PK/l":function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Q66n:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("HWth");Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=t("t39t");function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},WjfS:function(e,n,t){"use strict";var r=t("PK/l"),o=60103,a=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var p=60109,i=60110,u=60112;n.Suspense=60113;var s=60115,l=60116;if("function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),a=c("react.portal"),n.Fragment=c("react.fragment"),n.StrictMode=c("react.strict_mode"),n.Profiler=c("react.profiler"),p=c("react.provider"),i=c("react.context"),u=c("react.forward_ref"),n.Suspense=c("react.suspense"),s=c("react.memo"),l=c("react.lazy")}var m="function"===typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||d}function h(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var D=b.prototype=new h;D.constructor=b,r(D,y.prototype),D.isPureReactComponent=!0;var v={current:null},M=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function X(e,n,t){var r,a={},p=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(p=""+n.key),n)M.call(n,r)&&!T.hasOwnProperty(r)&&(a[r]=n[r]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:p,ref:i,props:a,_owner:v.current}}function N(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function w(e,n){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,t,r,p){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return p=p(u=e),e=""===r?"."+w(u,0):r,Array.isArray(p)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),O(p,n,t,"",(function(e){return e}))):null!=p&&(N(p)&&(p=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(p,t+(!p.key||u&&u.key===p.key?"":(""+p.key).replace(_,"$&/")+"/")+e)),n.push(p)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+w(i=e[s],s);u+=O(i,n,t,l,p)}else if("function"===typeof(l=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(i=e.next()).done;)u+=O(i=i.value,n,t,l=r+w(i,s++),p);else if("object"===i)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function C(e,n,t){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function j(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function P(){var e=S.current;if(null===e)throw Error(f(321));return e}var E={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(f(143));return e}},n.Component=y,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,n.cloneElement=function(e,n,t){if(null===e||void 0===e)throw Error(f(267,e));var a=r({},e.props),p=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=v.current),void 0!==n.key&&(p=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)M.call(n,l)&&!T.hasOwnProperty(l)&&(a[l]=void 0===n[l]&&void 0!==s?s[l]:n[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:o,type:e.type,key:p,ref:i,props:a,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},n.createElement=X,n.createFactory=function(e){var n=X.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=N,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:j}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return P().useCallback(e,n)},n.useContext=function(e,n){return P().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return P().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return P().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return P().useLayoutEffect(e,n)},n.useMemo=function(e,n){return P().useMemo(e,n)},n.useReducer=function(e,n,t){return P().useReducer(e,n,t)},n.useRef=function(e){return P().useRef(e)},n.useState=function(e){return P().useState(e)},n.version="17.0.2"},lQDf:function(e,n,t){"use strict";t.r(n);var r=t("sKcO"),o=t("opOY"),a=t.n(o),p=t("Q66n"),i=["components"],u=a.a.createElement;n.default=function(e){var n=e.components;Object(r.a)(e,i);return u(p.MDXTag,{name:"wrapper",components:n},u(p.MDXTag,{name:"h1",components:n,props:{id:"divider"}},u(p.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"#divider","aria-hidden":"true"}},u(p.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Divider"),u(p.MDXTag,{name:"p",components:n},"The ",u(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Divider")," component is a styled ",u(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<hr>"),"."),u(p.MDXTag,{name:"pre",components:n},u(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Divider />\n")),u(p.MDXTag,{name:"p",components:n},"Half width"),u(p.MDXTag,{name:"pre",components:n},u(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Divider width={1 / 2} />\n")),u(p.MDXTag,{name:"p",components:n},"Margin of ",u(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.space[2]")," (8px)"),u(p.MDXTag,{name:"pre",components:n},u(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Divider m={2} />\n")),u(p.MDXTag,{name:"p",components:n},"Divider will be colored blue from the theme's color palette"),u(p.MDXTag,{name:"pre",components:n},u(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Divider borderColor='blue' />\n")),u(p.MDXTag,{name:"h2",components:n,props:{id:"props"}},u(p.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#props","aria-hidden":"true"}},u(p.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Props"),u(p.MDXTag,{name:"table",components:n},u(p.MDXTag,{name:"thead",components:n,parentName:"table"},u(p.MDXTag,{name:"tr",components:n,parentName:"thead"},u(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),u(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),u(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),u(p.MDXTag,{name:"tbody",components:n,parentName:"table"},u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"width")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets the width of the element")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"borderColor")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets color of Divider based on the theme's color palette")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"m")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin based on the ",u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"theme.space")," scale")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mt")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-top")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mr")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-right")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mb")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-bottom")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ml")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-left")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"mx")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-left and margin-right")),u(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},u(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"my")),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number, string, or array"),u(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin-top and margin-bottom")))))}},opOY:function(e,n,t){"use strict";e.exports=t("WjfS")},qkGb:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Divider",function(){return t("lQDf")}])},sKcO:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},t39t:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=t("opOY"),p=(r=a)&&r.__esModule?r:{default:r};var i=p.default.createContext({}),u=i.Provider,s=i.Consumer;n.withMDXComponents=function(e){return function(n){return p.default.createElement(s,null,(function(t){return p.default.createElement(e,o({},n,{components:n.components||t}))}))}};n.default=function(e){return p.default.createElement(u,{value:e.components},e.children)}}},[["qkGb",0]]]);