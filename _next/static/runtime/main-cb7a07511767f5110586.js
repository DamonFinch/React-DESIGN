(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"2z4O":function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},"4h/s":function(e,t,n){"use strict";var r=n("yXxl")(n("Dew8"));window.next=r,(0,r.default)().catch((function(e){console.error("".concat(e.message,"\n").concat(e.stack))}))},"6BIl":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("TL4d"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},AXch:function(e,t,n){"use strict";var r=n("Irq7"),o=n("+qMd"),a=n("wWsT");t.__esModule=!0,t.default=void 0;var i=n("b5I7"),u=a(n("bcSF")),c=n("umIL"),s=n("g/LG"),f=n("IJ/n"),l=n("z45U");function p(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}var d=p("preload")&&!p("prefetch")?"preload":"prefetch";document.createElement("script");function m(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function h(e,t,n){return new Promise((function(r,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,n&&(a.as=n),a.onload=r,a.onerror=o,document.head.appendChild(a)}))}var v=function(){function e(t,n){r(this,e),this.buildId=t,this.assetPrefix=n,this.pageCache={},this.pageRegisterEvents=(0,u.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(n){return n[e]&&n[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))}))||[]}))}},{key:"getDataHref",value:function(e,t){var n,r=this,o=function(e){return e=(0,l.delBasePath)(e),"".concat(r.assetPrefix,"/_next/data/").concat(r.buildId).concat("/"===e?"/index":e,".json")},a=(0,i.parse)(e,!0),u=a.pathname,p=a.query,d=(0,i.parse)(t).pathname,h=m(u),v=(0,c.isDynamicRoute)(h);if(v){var y=(0,f.getRouteRegex)(h),g=y.groups,_=(0,s.getRouteMatcher)(y)(d)||p;n=h,Object.keys(g).every((function(e){var t=_[e],r=g[e].repeat;return r&&!Array.isArray(t)&&(t=[t]),e in _&&(n=n.replace("[".concat(r?"...":"").concat(e,"]"),r?t.map(encodeURIComponent).join("/"):encodeURIComponent(t)))}))||(n="")}return v?n&&o(n):o(h)}},{key:"prefetchData",value:function(e,t){var n=this,r=m((0,i.parse)(e,!0).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(r)&&(a=n.getDataHref(e,t))&&!document.querySelector('link[rel="'.concat(d,'"][href^="').concat(a,'"]'))&&h(a,d,"fetch")}))}},{key:"loadPage",value:function(e){return this.loadPageScript(e)}},{key:"loadPageScript",value:function(e){var t=this;return e=m(e),new Promise((function(n,r){var o=t.pageCache[e];if(o){var a=o.error,i=o.page,u=o.mod;a?r(a):n({page:i,mod:u})}else t.pageRegisterEvents.on(e,(function o(a){var i=a.error,u=a.page,c=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?r(i):n({page:u,mod:c})})),document.querySelector('script[data-next-page="'.concat(e,'"]'))||t.loadingRoutes[e]||(t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(n){n.forEach((function(n){/\.js$/.test(n)&&!document.querySelector('script[src^="'.concat(n,'"]'))&&t.loadScript(n,e,!1),/\.css$/.test(n)&&!document.querySelector('link[rel=stylesheet][href^="'.concat(n,'"]'))&&h(n,"stylesheet").catch((function(){}))})),t.loadRoute(e)})))}))}},{key:"loadRoute",value:function(e){var t="/"===(e=m(e))?"/index.js":"".concat(e,".js"),n="".concat(this.assetPrefix,"/_next/static/").concat(encodeURIComponent(this.buildId),"/pages").concat(encodeURI(t));this.loadScript(n,e,!0)}},{key:"loadScript",value:function(e,t,n){var r=this,o=document.createElement("script");o.crossOrigin=void 0,o.src=e,o.onerror=function(){var n=new Error("Error loading script ".concat(e));n.code="PAGE_LOAD_ERROR",r.pageRegisterEvents.emit(t,{error:n})},document.body.appendChild(o)}},{key:"registerPage",value:function(e,t){var n=this;!function(){try{var r=t(),o={page:r.default||r,mod:r};n.pageCache[e]=o,n.pageRegisterEvents.emit(e,o)}catch(a){n.pageCache[e]={error:a},n.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var n,r,o=this;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else{e=m(e);var a="".concat("/"===e?"/index":e,".js");0,r="".concat(this.assetPrefix,"/_next/static/").concat(encodeURIComponent(this.buildId),"/pages").concat(encodeURI(a))}return Promise.all(document.querySelector('link[rel="'.concat(d,'"][href^="').concat(r,'"], script[data-next-page="').concat(e,'"]'))?[]:[h(r,d,r.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=v},Dew8:function(e,t,n){"use strict";var r=n("mVV3"),o=n("eN+h"),a=n("Irq7"),i=n("+qMd"),u=n("xOqc"),c=n("5Pqj"),s=n("iT7V"),f=n("wZvp");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var p=n("yXxl"),d=n("wWsT");t.__esModule=!0,t.render=Z,t.renderError=te,t.default=t.emitter=t.router=t.version=void 0;var m=d(n("ZQ1m")),h=(d(n("yXxl")),n("h6uS")),v=n("OIMd"),y=d(n("TL4d")),g=d(n("tN0W")),_=n("6BIl"),w=d(n("bcSF")),S=n("tbVK"),E=n("umIL"),b=p(n("2z4O")),x=n("uR1K"),R=d(n("qQwm")),k=d(n("AXch")),C=d(n("h+VK"));"finally"in Promise.prototype||(Promise.prototype.finally=n("DwFL"));var P=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=P;t.version="9.4.4";var T=P.props,I=P.err,M=P.page,N=P.query,F=P.buildId,D=P.assetPrefix,L=P.runtimeConfig,A=P.dynamicIds,j=P.isFallback,O=D||"";n.p="".concat(O,"/_next/"),b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:L||{}});var q=(0,x.getURL)(),$=new k.default(F,O),B=function(e){var t=f(e,2),n=t[0],r=t[1];return $.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return B(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=B;var U,H,V,X,G,W,z=(0,R.default)(),J=document.getElementById("__next");t.router=V;var K=function(e){u(n,e);var t=l(n);function n(){return a(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),V.isSsr&&(j||P.nextExport&&((0,E.isDynamicRoute)(V.pathname)||location.search)||T&&T.__N_SSG&&location.search)&&V.replace(V.pathname+"?"+(0,v.stringify)((0,m.default)((0,m.default)({},V.query),(0,v.parse)(location.search.substr(1)))),q,{_h:1,shallow:!j})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(y.default.Component),Q=(0,w.default)();t.emitter=Q;var Y=function(){var e=o(r.mark((function e(){var n,o,a,i,u,c,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:{},n.webpackHMR,e.next=4,$.loadPageScript("/_app");case 4:return o=e.sent,a=o.page,i=o.mod,G=a,i&&i.reportWebVitals&&(W=function(e){var t,n=e.id,r=e.name,o=e.startTime,a=e.value,u=e.duration,c=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(Math.random()*(9e12-1))+1e12);s&&s.length&&(t=s[0].startTime),i.reportWebVitals({id:n||f,name:r,startTime:o||t,value:null==a?u:a,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),u=I,e.prev=10,e.next=14,$.loadPage(M);case 14:c=e.sent,X=c.page,e.next=20;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(10),u=e.t0;case 25:if(!window.__NEXT_PRELOADREADY){e.next=29;break}return e.next=29,window.__NEXT_PRELOADREADY(A);case 29:return t.router=V=(0,h.createRouter)(M,N,q,{initialProps:T,pageLoader:$,App:G,Component:X,wrapApp:ue,err:u,isFallback:j,subscription:function(e,t){return Z({App:t,Component:e.Component,props:e.props,err:e.err})}}),Z({App:G,Component:X,props:T,err:u}),e.abrupt("return",Q);case 35:e.next=37;break;case 37:case"end":return e.stop()}}),e,null,[[10,22]])})));return function(){return e.apply(this,arguments)}}();function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=o(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,te(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ce(t);case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(4),e.next=14,te((0,m.default)((0,m.default)({},t),{},{err:e.t0}));case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function te(e){var t=e.App,n=e.err;return console.error(n),$.loadPage("/_error").then((function(r){var o=r.page,a=ue(t),i={Component:o,AppTree:a,router:V,ctx:{err:n,pathname:M,query:N,asPath:q,AppTree:a}};return Promise.resolve(e.props?e.props:(0,x.loadGetInitialProps)(t,i)).then((function(t){return ce((0,m.default)((0,m.default)({},e),{},{err:n,Component:o,props:t}))}))}))}t.default=Y;var ne="function"===typeof g.default.hydrate;function re(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),W&&performance.getEntriesByName("Next.js-hydration").forEach(W),ae())}function oe(){if(x.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),W&&(performance.getEntriesByName("Next.js-render").forEach(W),performance.getEntriesByName("Next.js-route-change-to-render").forEach(W)),ae(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ae(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ie(e){var t=e.children;return(y.default.createElement(K,{fn:function(e){return te({App:G,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},y.default.createElement(S.RouterContext.Provider,{value:(0,h.makePublicRouterInstance)(V)},y.default.createElement(_.HeadManagerContext.Provider,{value:z},t))))}var ue=function(e){return function(t){var n=(0,m.default)((0,m.default)({},t),{},{Component:X,err:I,router:V});return(y.default.createElement(ie,null,y.default.createElement(e,n)))}};function ce(e){return se.apply(this,arguments)}function se(){return(se=o(r.mark((function e(t){var n,o,a,i,u,c,s;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.App,o=t.Component,a=t.props,i=t.err,o=o||U.Component,a=a||U.props,u=(0,m.default)((0,m.default)({},a),{},{Component:o,err:i,router:V}),U=u,s=new Promise((function(e,t){H&&H(),c=function(){H=null,e()},H=function(){H=null,t()}})),r=y.default.createElement(fe,{callback:c},y.default.createElement(ie,null,y.default.createElement(n,u))),f=J,x.ST&&performance.mark("beforeRender"),ne?(g.default.hydrate(r,f,re),ne=!1,W&&x.ST&&(0,C.default)(W)):g.default.render(r,f,oe),e.next=10,s;case 10:case"end":return e.stop()}var r,f}),e)})))).apply(this,arguments)}function fe(e){var t=e.callback,n=e.children;return y.default.useLayoutEffect((function(){return t()}),[t]),n}},DwFL:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}},"GD+L":function(e,t,n){"use strict";var r=n("vNd4"),o="function"===typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,v="function"===typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function w(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||g}function S(){}function E(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=w.prototype;var b=E.prototype=new S;b.constructor=E,r(b,w.prototype),b.isPureReactComponent=!0;var x={current:null},R=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:x.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,I=[];function M(e,t,n,r){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function F(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+D(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var f=n+D(u=t[s],s);c+=e(u,f,r,o)}else if(null===t||"object"!==typeof t?f=null:f="function"===typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"===typeof f)for(t=f.call(t),s=0;!(u=t.next()).done;)c+=e(u=u.value,f=n+D(u,s++),r,o);else if("object"===u)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function D(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?j(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function j(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(T,"$&/")+"/"),F(e,A,t=M(t,a,r,o)),N(t)}var O={current:null};function q(){var e=O.current;if(null===e)throw Error(y(321));return e}var $={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return j(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;F(e,L,t=M(null,null,t,n)),N(t)},count:function(e){return F(e,(function(){return null}),null)},toArray:function(e){var t=[];return j(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(y(143));return e}},t.Component=w,t.Fragment=u,t.Profiler=s,t.PureComponent=E,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(y(267,e));var o=r({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in t)R.call(t,f)&&!k.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==s?s[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:a,type:e.type,key:i,ref:u,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},TL4d:function(e,t,n){"use strict";e.exports=n("GD+L")},ZQ1m:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},fqWk:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return m})),n.d(t,"getFCP",(function(){return v})),n.d(t,"getFID",(function(){return y})),n.d(t,"getLCP",(function(){return _})),n.d(t,"getTTFB",(function(){return w}));var r,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},c=!1,s=!1,f=function(e){c=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("unload",(function(){}))},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:c})}),{capture:!0,once:t})},d=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),r=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),a())},o=u("layout-shift",r),a=d(e,n,o,t);p((function(e){var t=e.isUnloading;o&&o.takeRecords().map(r),t&&(n.isFinal=!0),a()}))},h=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,p((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},v=function(e){var t=i("FCP"),n=h(),r=u("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=d(e,t,r)},y=function(e){var t=i("FID"),n=h(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=u("first-input",r),a=d(e,t,o);p((function(){o&&(o.takeRecords().map(r),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],a())}))},g=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),r=h(),o=function(e){var t=e.startTime;t<r.timeStamp?(n.value=t,n.entries.push(e)):n.isFinal=!0,c()},a=u("largest-contentful-paint",o),c=d(e,n,a,t),s=function(){n.isFinal||(a&&a.takeRecords().map(o),n.isFinal=!0,c())};g().then(s),p(s,!0)},w=function(e){var t,n=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},"h+VK":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("fqWk");t.default=function(e){(0,r.getCLS)(e),(0,r.getFID)(e),(0,r.getFCP)(e),(0,r.getLCP)(e),(0,r.getTTFB)(e)}},qQwm:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){var e=null;return function(t){var n=e=Promise.resolve().then((function(){if(n===e){e=null;var r={};t.forEach((function(e){var t=r[e.type]||[];t.push(e),r[e.type]=t}));var a=r.title?r.title[0]:null,i="";if(a){var u=a.props.children;i="string"===typeof u?u:u.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]");0;for(var a=Number(r.content),i=[],u=0,c=r.previousElementSibling;u<a;u++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var s=t.map(o).filter((function(e){for(var t=0,n=i.length;t<n;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return n.insertBefore(e,r)})),r.content=(a-i.length+s.length).toString()}(e,r[e]||[])}))}}))}};var r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,n=e.props,o=document.createElement(t);for(var a in n)if(n.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==n[a]){var i=r[a]||a.toLowerCase();o.setAttribute(i,n[a])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?o.innerHTML=c.__html||"":u&&(o.textContent="string"===typeof u?u:u.join("")),o}},vNd4:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports}},[["4h/s",0,2]]]);