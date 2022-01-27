"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[5826],{"../../packages/icons/dist/esm/ChevronDown.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_Svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/icons/dist/esm/Svg.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),_excluded=["size","title","desc","titleId","descId"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SvgChevronDown=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)((function BaseComponent(_ref){var size=_ref.size,title=_ref.title,desc=_ref.desc,titleId=_ref.titleId,descId=_ref.descId,props=_objectWithoutProperties(_ref,_excluded),ariaLabelledBy=titleId||"";return ariaLabelledBy=(ariaLabelledBy+=desc&&descId?" ".concat(descId):"")||void 0,props["aria-labelledby"]=ariaLabelledBy,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_5__.Z,_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:size,width:size,title,titleId,desc,descId,"aria-labelledby":ariaLabelledBy,"aria-hidden":!ariaLabelledBy,fill:"currentcolor"},props),!!title&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("title",{id:titleId},title),!!desc&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("desc",{id:descId},desc),react__WEBPACK_IMPORTED_MODULE_4__.createElement("path",{d:"M7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6-6-6L7.4 8z"}))})).withConfig({displayName:"ChevronDown__SvgChevronDown",componentId:"sc-qsesrt-0"})(["outline:none;"]);SvgChevronDown.isIcon=!0,SvgChevronDown.defaultProps={size:24,tabIndex:-1,focusable:!1,"aria-hidden":!0,role:"img"};const __WEBPACK_DEFAULT_EXPORT__=SvgChevronDown},"../../packages/popover/dist/esm/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popover_Popover});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),Manager=__webpack_require__("../../common/temp/node_modules/.pnpm/react-popper@1.3.11_react@17.0.2/node_modules/react-popper/lib/esm/Manager.js"),Reference=__webpack_require__("../../common/temp/node_modules/.pnpm/react-popper@1.3.11_react@17.0.2/node_modules/react-popper/lib/esm/Reference.js"),utils=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),react_dom=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js")),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),Popper=__webpack_require__("../../common/temp/node_modules/.pnpm/react-popper@1.3.11_react@17.0.2/node_modules/react-popper/lib/esm/Popper.js"),ThemeProvider=__webpack_require__("../../packages/core/lib-esm/ThemeProvider/ThemeProvider.js"),Box=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),es2015=__webpack_require__("../../common/temp/node_modules/.pnpm/react-focus-lock@2.7.1_react@17.0.2/node_modules/react-focus-lock/dist/es2015/index.js"),_excluded=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),["color","borderColor"]);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PopoverArrow=function PopoverArrow(_ref){var arrowProps=_ref.arrowProps,placement=_ref.placement,borderColor=_ref.borderColor,color=_ref.color,className=_ref.className;return react.createElement(Arrow,{className,style:arrowProps.style,"data-placement":placement,borderColor,color,"aria-hidden":"true","data-testid":"popover-arrow"},react.createElement("div",{ref:arrowProps.ref}))},Arrow=styled_components_browser_esm.ZP.span.withConfig({displayName:"Arrow",componentId:"sc-1svjbfl-0"})(["position:absolute;"," ",""],(function ArrowAlignment(){return'\n    &[data-placement*="right"] {\n      left: 0;\n    }\n    &[data-placement*="left"] {\n      right: 0;\n    }\n    &[data-placement*="top"] {\n      bottom: 0;\n    }\n    &[data-placement*="bottom"] {\n      top: 0;\n    }\n    &[data-placement*="bottom"]::before,\n    &[data-placement*="right"]::before,\n    &[data-placement*="top"]::after,\n    &[data-placement*="left"]::after {\n      content: \'\';\n      position: absolute;\n      width: 0;\n      height: 0;\n      margin: auto;\n      border-style: solid;\n      transform-origin: 0 0;\n      transform: rotate(-45deg);\n      border-width: 6px;\n    }\n  '}),(function ArrowPlacement(_ref2){var color=_ref2.color,borderColor=_ref2.borderColor,props=_objectWithoutProperties(_ref2,_excluded),bgColor=(0,utils.ow)(color,"base")(props),brColor=(0,utils.ow)(borderColor,"base")(props);return'\n    &[data-placement*="right"]::before {\n      left: 8px;\n      border-color: '.concat(bgColor," transparent transparent ").concat(bgColor,";\n      box-shadow: -0.75px -0.75px 0px 0.25px ").concat(brColor,';\n    }\n    &[data-placement*="left"]::after {\n      right: 13px;\n      border-color: transparent ').concat(bgColor," ").concat(bgColor," transparent;\n      box-shadow: 0.75px 0.75px 0px 0.25px ").concat(brColor,';\n    }\n    &[data-placement*="top"]::after {\n      top: -16px;\n      margin-left: -5px;\n      border-color: transparent transparent ').concat(bgColor," ").concat(bgColor,";\n      box-shadow: -0.75px 0.75px 0px 0.25px ").concat(brColor,';\n    }\n    &[data-placement*="bottom"]::before {\n      top: 16px;\n      margin-left: -5px;\n      border-color: ').concat(bgColor," ").concat(bgColor," transparent transparent;\n      box-shadow: 0.75px -0.75px 0px 0.25px ").concat(brColor,";\n    }\n  ")}));PopoverArrow.propTypes={arrowProps:prop_types_default().shape({ref:prop_types_default().func,style:prop_types_default().object}).isRequired,className:prop_types_default().string,color:prop_types_default().string,bg:(0,utils.aR)("color"),borderColor:prop_types_default().string,placement:prop_types_default().string},PopoverArrow.defaultProps={placement:"top"},PopoverArrow.__docgenInfo={description:"",methods:[],displayName:"PopoverArrow",props:{placement:{defaultValue:{value:"'top'",computed:!1},type:{name:"string"},required:!1,description:""},arrowProps:{type:{name:"shape",value:{ref:{name:"func",required:!1},style:{name:"object",required:!1}}},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},bg:{type:{name:"custom",raw:"deprecatedPropType('color')"},required:!1,description:""},borderColor:{type:{name:"string"},required:!1,description:""}}};const Arrow_Arrow=PopoverArrow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/popover/dist/esm/Arrow/Arrow.js"]={name:"PopoverArrow",docgenInfo:PopoverArrow.__docgenInfo,path:"../../packages/popover/dist/esm/Arrow/Arrow.js"});var StyledOverlay=(0,styled_components_browser_esm.ZP)(Box.Z).withConfig({displayName:"Overlay__StyledOverlay",componentId:"sc-7dw43-0"})(["display:block;position:fixed;top:0;bottom:0;left:0;right:0;opacity:",";z-index:",";cursor:pointer;"],(function(_ref){var popoverOpen=_ref.popoverOpen,overlayOpacity=_ref.overlayOpacity;return popoverOpen?overlayOpacity:0}),(function(_ref2){var zIndex=_ref2.zIndex;return zIndex<0?0:zIndex})),Overlay=function Overlay(_ref3){var className=_ref3.className,popoverOpen=_ref3.popoverOpen,handleClick=_ref3.handleClick,overlayOpacity=_ref3.overlayOpacity,zIndex=_ref3.zIndex;return react.createElement(StyledOverlay,{className,"aria-hidden":"true",tabIndex:"-1",onClick:handleClick,popoverOpen,overlayOpacity,zIndex,bg:"background.darkest","data-testid":"__pcln-popover_Overlay"})};Overlay.propTypes={className:prop_types_default().string,popoverOpen:prop_types_default().bool,handleClick:prop_types_default().func,overlayOpacity:prop_types_default().number,zIndex:prop_types_default().number},Overlay.defaultProps={popoverOpen:!0,overlayOpacity:0,zIndex:101},Overlay.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{popoverOpen:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},overlayOpacity:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},zIndex:{defaultValue:{value:"101",computed:!1},type:{name:"number"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},handleClick:{type:{name:"func"},required:!1,description:""}}};const Overlay_Overlay=Overlay;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/popover/dist/esm/Overlay/Overlay.js"]={name:"Overlay",docgenInfo:Overlay.__docgenInfo,path:"../../packages/popover/dist/esm/Overlay/Overlay.js"});const defaultModifiers={shift:{enabled:!0},preventOverflow:{enabled:!0},flip:{enabled:!0,behavior:["top","right","bottom","left","top"]},arrow:{enabled:!0}};function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var PopoverContent=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(PopoverContent,_Component);var _super=_createSuper(PopoverContent);function PopoverContent(){var _this;_classCallCheck(this,PopoverContent);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"handleKeyUp",(function(evt){var onCloseRequest=_this.props.onCloseRequest,keys={27:function _(){onCloseRequest(evt)}};keys[evt.keyCode]&&(evt.stopPropagation(),evt.preventDefault(),keys[evt.keyCode]())})),_defineProperty(_assertThisInitialized(_this),"calcOffset",(function(placement){return RegExp("start*").test(placement)?"-16px":RegExp("end*").test(placement)?"16px":0})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PopoverContent,[{key:"componentDidMount",value:function componentDidMount(){window.addEventListener("keyup",this.handleKeyUp,!1)}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("keyup",this.handleKeyUp,!1)}},{key:"getBorderColorName",value:function getBorderColorName(color,borderColor){var borderColorName=borderColor;return borderColor||(borderColorName=color||"border.base"),borderColorName}},{key:"render",value:function render(){var _this$props=this.props,className=_this$props.className,contentRef=_this$props.contentRef,idx=_this$props.idx,onCloseRequest=_this$props.onCloseRequest,overlayOpacity=_this$props.overlayOpacity,placement=_this$props.placement,renderContent=_this$props.renderContent,trapFocus=_this$props.trapFocus,hideArrow=_this$props.hideArrow,hideOverlay=_this$props.hideOverlay,styleProps={borderColor:this.getBorderColorName(this.props.color,this.props.borderColor),zIndex:this.props.zIndex,width:this.props.width},color=this.props.color?this.props.color:"background.lightest",content=trapFocus?react.createElement(es2015.ZP,null,renderContent({handleClose:onCloseRequest})):renderContent({handleClose:onCloseRequest}),modifiers=_objectSpread(_objectSpread({},defaultModifiers),{},{offset:{offset:this.calcOffset(placement)}});return react_dom.createPortal(react.createElement(react.Fragment,null,react.createElement(Popper.ZP,_extends({positionFixed:!0,modifiers},this.props),(function(_ref){var placement=_ref.placement,ref=_ref.ref,style=_ref.style,arrowProps=_ref.arrowProps;return react.createElement(PopperGuide,_extends({className,ref,style,"data-placement":placement},styleProps,{role:"dialog","aria-describedby":"dialog-description-".concat(idx)}),react.createElement(styled_components_browser_esm.Sf,null,(function(theme){return react.createElement(ThemeProvider.f,{theme},react.createElement(ContentContainer,_extends({ref:contentRef},styleProps,{tabIndex:"-1"}),react.createElement(Box.Z,{color,"data-testid":"dialog-content",id:"popover-description-".concat(idx),borderRadius:"xl"},content)))})),!hideArrow&&react.createElement(Arrow_Arrow,{arrowProps,placement,color,borderColor:styleProps.borderColor}))})),!hideOverlay&&react.createElement(Overlay_Overlay,{handleClick:onCloseRequest,zIndex:styleProps.zIndex-1,overlayOpacity})),document.querySelector("body"))}}]),PopoverContent}(react.Component),PopperGuide=(0,styled_components_browser_esm.ZP)(Box.Z).withConfig({displayName:"PopoverContent__PopperGuide",componentId:"sc-17m9nsb-0"})(["padding:16px;z-index:",";max-width:",";width:100%;box-sizing:border-box;"],(function(_ref2){var zIndex=_ref2.zIndex;return zIndex<0?1:zIndex}),(function(_ref3){var width=_ref3.width;return"number"==typeof width?"".concat(width,"px"):width})),ContentContainer=styled_components_browser_esm.ZP.section.withConfig({displayName:"PopoverContent__ContentContainer",componentId:"sc-17m9nsb-1"})(["box-shadow:0 0 0 1px ",",0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08);font-size:","px;border-radius:",";box-sizing:border-box;outline:0;max-width:100%;"],(function(props){return(0,utils.ow)(props.borderColor,"base")(props)}),(0,index_esm.R)("fontSizes.0"),(0,index_esm.R)("borderRadii.xl"));PopoverContent.propTypes={idx:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]).isRequired,renderContent:prop_types_default().func.isRequired,onCloseRequest:prop_types_default().func.isRequired,contentRef:prop_types_default().object,className:prop_types_default().string,p:prop_types_default().number,color:prop_types_default().string,bg:(0,utils.aR)("color"),borderColor:prop_types_default().string,placement:prop_types_default().string,zIndex:prop_types_default().number,width:prop_types_default().number,overlayOpacity:prop_types_default().number,trapFocus:prop_types_default().bool,hideArrow:prop_types_default().bool,hideOverlay:prop_types_default().bool},PopoverContent.defaultProps={p:2,placement:"top",zIndex:102,width:400};const PopoverContent_PopoverContent=PopoverContent;function Popover_typeof(obj){return Popover_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Popover_typeof(obj)}function Popover_extends(){return Popover_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Popover_extends.apply(this,arguments)}function Popover_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function Popover_setPrototypeOf(o,p){return Popover_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},Popover_setPrototypeOf(o,p)}function Popover_createSuper(Derived){var hasNativeReflectConstruct=function Popover_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=Popover_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=Popover_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return Popover_possibleConstructorReturn(this,result)}}function Popover_possibleConstructorReturn(self,call){if(call&&("object"===Popover_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return Popover_assertThisInitialized(self)}function Popover_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function Popover_getPrototypeOf(o){return Popover_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},Popover_getPrototypeOf(o)}var Popover=function(_Component){!function Popover_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&Popover_setPrototypeOf(subClass,superClass)}(Popover,_Component);var _super=Popover_createSuper(Popover);function Popover(props){var _this;return function Popover_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Popover),(_this=_super.call(this,props)).state={isPopoverOpen:props.openOnMount},_this.contentRef=react.createRef(),_this.triggerRef=react.createRef(),_this.handleToggle=_this.handleToggle.bind(Popover_assertThisInitialized(_this)),_this.handleClose=_this.handleClose.bind(Popover_assertThisInitialized(_this)),_this.handleOpen=_this.handleOpen.bind(Popover_assertThisInitialized(_this)),_this.setFocusToRef=_this.setFocusToRef.bind(Popover_assertThisInitialized(_this)),_this}return function Popover_createClass(Constructor,protoProps,staticProps){return protoProps&&Popover_defineProperties(Constructor.prototype,protoProps),staticProps&&Popover_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Popover,[{key:"handleToggle",value:function handleToggle(evt,isOpen){evt.preventDefault(),evt.stopPropagation(),isOpen?this.handleClose(evt):this.handleOpen(evt)}},{key:"handleClose",value:function handleClose(evt){var _this2=this;this.setState({isPopoverOpen:!1},(function(){_this2.setFocusToRef(_this2.triggerRef)})),this.props.onClose&&this.props.onClose(evt)}},{key:"handleOpen",value:function handleOpen(evt){var _this3=this;this.setState({isPopoverOpen:!0},(function(){_this3.setFocusToRef(_this3.contentRef)})),this.props.onOpen&&this.props.onOpen(evt)}},{key:"setFocusToRef",value:function setFocusToRef(ref){try{ref.current.focus({preventScroll:!0})}catch(_unused){return!1}}},{key:"render",value:function render(){var _this4=this,isOpenState=this.state.isPopoverOpen,_this$props=this.props,ariaLabel=_this$props.ariaLabel,children=_this$props.children,isOpenProp=_this$props.isOpen,isPopoverOpen=isOpenState||isOpenProp;return react.createElement(Manager.ZP,null,react.createElement(Reference.Z,null,(function(_ref){var ref=_ref.ref;return react.createElement(InlineContainer,{ref},react.cloneElement(children,{"aria-label":ariaLabel,onClick:function onClick(evt){return _this4.handleToggle(evt,isPopoverOpen)},ref:_this4.triggerRef}))})),isPopoverOpen&&react.createElement(PopoverContent_PopoverContent,Popover_extends({},this.props,{onCloseRequest:this.handleClose,contentRef:this.contentRef})))}}]),Popover}(react.Component),InlineContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Popover__InlineContainer",componentId:"sc-1u2cycp-0"})(["display:inline-block;"]);Popover.propTypes={idx:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]).isRequired,renderContent:prop_types_default().func.isRequired,ariaLabel:prop_types_default().string,className:prop_types_default().string,p:prop_types_default().number,color:prop_types_default().string,bg:(0,utils.aR)("color"),borderColor:prop_types_default().string,placement:prop_types_default().string,zIndex:prop_types_default().number,width:prop_types_default().number,overlayOpacity:prop_types_default().number,trapFocus:prop_types_default().bool,isOpen:prop_types_default().bool,openOnMount:prop_types_default().bool,children:prop_types_default().node,onOpen:prop_types_default().func,onClose:prop_types_default().func,hideArrow:prop_types_default().bool,hideOverlay:prop_types_default().bool},Popover.defaultProps={ariaLabel:"Click to open popover with more information"};const Popover_Popover=Popover}}]);