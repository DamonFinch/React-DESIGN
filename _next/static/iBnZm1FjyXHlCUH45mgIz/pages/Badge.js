(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{B2o1:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Badge",function(){return t("omHT")}])},HWth:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),p=t("opOY"),u=(r=p)&&r.__esModule?r:{default:r},c=t("t39t");var i={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,r=e.props,a=void 0===r?{}:r,p=e.children,c=e.components,s=void 0===c?{}:c,l=e.Layout,m=e.layoutProps,f=s[t+"."+n]||s[n]||i[n]||n;return l?u.default.createElement(l,o({components:s},m),u.default.createElement(f,a,p)):u.default.createElement(f,a,p)}}]),n}(p.Component);n.default=(0,c.withMDXComponents)(s)},"PK/l":function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Q66n:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("HWth");Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=t("t39t");function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},WjfS:function(e,n,t){"use strict";var r=t("PK/l"),o=60103,a=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var p=60109,u=60110,c=60112;n.Suspense=60113;var i=60115,s=60116;if("function"===typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),p=l("react.provider"),u=l("react.context"),c=l("react.forward_ref"),n.Suspense=l("react.suspense"),i=l("react.memo"),s=l("react.lazy")}var m="function"===typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||d}function h(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=b.prototype=new h;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var M={current:null},T=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function X(e,n,t){var r,a={},p=null,u=null;if(null!=n)for(r in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(p=""+n.key),n)T.call(n,r)&&!D.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(1===c)a.children=t;else if(1<c){for(var i=Array(c),s=0;s<c;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:p,ref:u,props:a,_owner:M.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function w(e,n){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,t,r,p){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return p=p(c=e),e=""===r?"."+w(c,0):r,Array.isArray(p)?(t="",null!=e&&(t=e.replace(N,"$&/")+"/"),O(p,n,t,"",(function(e){return e}))):null!=p&&(_(p)&&(p=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(p,t+(!p.key||c&&c.key===p.key?"":(""+p.key).replace(N,"$&/")+"/")+e)),n.push(p)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=r+w(u=e[i],i);c+=O(u,n,t,s,p)}else if("function"===typeof(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),i=0;!(u=e.next()).done;)c+=O(u=u.value,n,t,s=r+w(u,i++),p);else if("object"===u)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function C(e,n,t){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function j(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var B={current:null};function P(){var e=B.current;if(null===e)throw Error(f(321));return e}var S={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:M,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},n.Component=y,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S,n.cloneElement=function(e,n,t){if(null===e||void 0===e)throw Error(f(267,e));var a=r({},e.props),p=e.key,u=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,c=M.current),void 0!==n.key&&(p=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)T.call(n,s)&&!D.hasOwnProperty(s)&&(a[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];a.children=i}return{$$typeof:o,type:e.type,key:p,ref:u,props:a,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:u,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},n.createElement=X,n.createFactory=function(e){var n=X.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:j}},n.memo=function(e,n){return{$$typeof:i,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return P().useCallback(e,n)},n.useContext=function(e,n){return P().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return P().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return P().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return P().useLayoutEffect(e,n)},n.useMemo=function(e,n){return P().useMemo(e,n)},n.useReducer=function(e,n,t){return P().useReducer(e,n,t)},n.useRef=function(e){return P().useRef(e)},n.useState=function(e){return P().useState(e)},n.version="17.0.2"},omHT:function(e,n,t){"use strict";t.r(n);var r=t("sKcO"),o=t("opOY"),a=t.n(o),p=t("Q66n"),u=["components"],c=a.a.createElement;n.default=function(e){var n=e.components;Object(r.a)(e,u);return c(p.MDXTag,{name:"wrapper",components:n},c(p.MDXTag,{name:"h1",components:n,props:{id:"badge"}},c(p.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"#badge","aria-hidden":"true"}},c(p.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Badge"),c(p.MDXTag,{name:"p",components:n},"Use the ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Badge")," component to render a primitive badge."),c(p.MDXTag,{name:"pre",components:n},c(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Badge bg='blue'>\n  Hello\n</Badge>\n")),c(p.MDXTag,{name:"pre",components:n},c(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Badge bg='blue' mr={2}>Blue</Badge>\n<Badge bg='green' mr={2}>Green</Badge>\n<Badge bg='red' mr={2}>Red</Badge>\n<Badge bg='orange' mr={2}>Orange</Badge>\n")),c(p.MDXTag,{name:"pre",components:n},c(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},"<Badge bg='lightBlue' mr={2}>lightBlue</Badge>\n<Badge bg='lightGreen' mr={2}>lightGreen</Badge>\n<Badge bg='lightRed' mr={2}>lightRed</Badge>\n<Badge bg='lightOrange' mr={2}>lightOrange</Badge>\n")),c(p.MDXTag,{name:"h2",components:n,props:{id:"props"}},c(p.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#props","aria-hidden":"true"}},c(p.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Props"),c(p.MDXTag,{name:"table",components:n},c(p.MDXTag,{name:"thead",components:n,parentName:"table"},c(p.MDXTag,{name:"tr",components:n,parentName:"thead"},c(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),c(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),c(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),c(p.MDXTag,{name:"tbody",components:n,parentName:"table"},c(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"bg")),c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Background color. To be deprecated")),c(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"All space props"),c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number or array"),c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Sets margin and padding")),c(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"color")),c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),c(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The color of the badge")))),c(p.MDXTag,{name:"p",components:n},c(p.MDXTag,{name:"em",components:n,parentName:"p"},"Note:")," For the ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bg")," prop, ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"blue"),", ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lightBlue"),", ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"green"),", ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lightGreen"),", ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"red"),", ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lightRed"),", ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"orange"),", and ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lightOrange")," are presets that will also set ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"color"),".\nAny color may be passed in, although ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"color")," should be defined as well when not using one of the aforementioned presets."),c(p.MDXTag,{name:"h2",components:n,props:{id:"color"}},c(p.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#color","aria-hidden":"true"}},c(p.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Color"),c(p.MDXTag,{name:"p",components:n},"You can choose any palette or theme color for ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Badge"),"."),c(p.MDXTag,{name:"pre",components:n},c(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},'<Badge color="primary">primary</Badge>\n')),c(p.MDXTag,{name:"p",components:n},"Uses the color from ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.palette.primary.base"),"."),c(p.MDXTag,{name:"pre",components:n},c(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},'<Badge color="error">error</Badge>\n')),c(p.MDXTag,{name:"p",components:n},"Uses the color from ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.palette.error.base"),"."),c(p.MDXTag,{name:"pre",components:n},c(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.jsx",metaString:""}},'<Badge color="warning">warning</Badge>\n')),c(p.MDXTag,{name:"p",components:n},"Uses the color from ",c(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme.palette.warning.base"),"."))}},opOY:function(e,n,t){"use strict";e.exports=t("WjfS")},sKcO:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},t39t:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=t("opOY"),p=(r=a)&&r.__esModule?r:{default:r};var u=p.default.createContext({}),c=u.Provider,i=u.Consumer;n.withMDXComponents=function(e){return function(n){return p.default.createElement(i,null,(function(t){return p.default.createElement(e,o({},n,{components:n.components||t}))}))}};n.default=function(e){return p.default.createElement(c,{value:e.components},e.children)}}},[["B2o1",0]]]);