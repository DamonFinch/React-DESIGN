(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[3984],{"../../packages/menu/src/MenuList/MenuList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CurrencyMenuListWithArgs:()=>CurrencyMenuListWithArgs,CurrencyMenuListWithSelection:()=>CurrencyMenuListWithSelection,default:()=>MenuList_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Text=__webpack_require__("../../packages/core/lib-esm/Text/Text.js"),MenuList=__webpack_require__("../../packages/menu/src/MenuList/MenuList.js"),MenuItem=__webpack_require__("../../packages/menu/src/MenuItem/MenuItem.js"),Menu=__webpack_require__("../../packages/menu/test/mocks/Menu.js"),colors=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/lib-esm/storybook/args/index.js").O9),argTypes={id:{name:"id",type:{name:"string",required:!1},description:"DOM id",table:{defaultValue:{summary:void 0}}},color:{name:"color",type:{name:"string",required:!1},description:"Palette color to use",table:{type:{summary:"Colors",detail:"- "+colors.join("\n- ")},defaultValue:{summary:"primary"}},control:{type:"select",options:colors}},size:{name:"size",type:{name:"string",required:!1},description:"Column layout",table:{defaultValue:{summary:"singleColumn"}},control:{type:"select",options:["singleColumn","twoColumns"]}},height:{name:"height",type:{name:"string",required:!1},description:"height of open menu",table:{defaultValue:{summary:void 0}}},handleClose:{name:"handleClose",type:{name:"function",required:!1},description:"Handle close",table:{defaultValue:{summary:void 0}},action:"handleClose from <MenuList>"}},jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const MenuList_stories={title:"pcln-menu / MenuList",component:MenuList.Z,subcomponents:{MenuItem:MenuItem.Z},args:{size:"singleColumn"},argTypes,parameters:{docs:{description:{component:"some component **markdown**"}}}};var CurrencyItems=function CurrencyItems(_ref){var currencyCode=_ref.currencyCode;return Menu.Q.map((function(currency,index){var selected=currencyCode===currency.code;return(0,jsx_runtime.jsxs)(MenuItem.Z,{selected,children:[(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,width:32,textAlign:"center",mr:3,children:currency.symbol}),(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,children:currency.label})]},index)}))},Template=function Template(args){return(0,jsx_runtime.jsx)(MenuList.Z,Object.assign({},args))};Template.displayName="Template";var CurrencyMenuListWithArgs=Template.bind({});CurrencyMenuListWithArgs.args={children:(0,jsx_runtime.jsx)(CurrencyItems,{})};var CurrencyMenuListWithSelection=function CurrencyMenuListWithSelection(){var _useState2=_slicedToArray((0,react.useState)("USD"),2),currencyCode=_useState2[0],setCurrencyCode=_useState2[1];return(0,jsx_runtime.jsx)(MenuList.Z,{children:Menu.Q.map((function(currency,index){var selected=currencyCode===currency.code;return(0,jsx_runtime.jsxs)(MenuItem.Z,{selected,onClick:function onClick(){return setCurrencyCode(currency.code)},children:[(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,width:32,textAlign:"center",mr:3,children:currency.symbol}),(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,children:currency.label})]},index)}))})};CurrencyMenuListWithSelection.displayName="CurrencyMenuListWithSelection",CurrencyMenuListWithArgs.parameters=Object.assign({storySource:{source:"(args) => <MenuList {...args} />"}},CurrencyMenuListWithArgs.parameters),CurrencyMenuListWithSelection.parameters=Object.assign({storySource:{source:"() => {\n  const [currencyCode, setCurrencyCode] = useState('USD')\n\n  return (\n    <MenuList>\n      {currencies.map((currency, index) => {\n        const selected = currencyCode === currency.code\n        const onClick = () => setCurrencyCode(currency.code)\n        return (\n          <MenuItem key={index} selected={selected} onClick={onClick}>\n            <Text regular width={32} textAlign='center' mr={3}>\n              {currency.symbol}\n            </Text>\n            <Text regular>{currency.label}</Text>\n          </MenuItem>\n        )\n      })}\n    </MenuList>\n  )\n}"}},CurrencyMenuListWithSelection.parameters),CurrencyMenuListWithSelection.__docgenInfo={description:"",methods:[],displayName:"CurrencyMenuListWithSelection"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/MenuList/MenuList.stories.js"]={name:"CurrencyMenuListWithSelection",docgenInfo:CurrencyMenuListWithSelection.__docgenInfo,path:"../../packages/menu/src/MenuList/MenuList.stories.js"})},"../../packages/core/lib-esm/storybook/args/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/utils/createPalette.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/boxShadowAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},colors=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_3__.g,!0),["NOTVALID"],!1);__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.Ze,!0),["NOTVALID"],!1),__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.YP,!0),["NOTVALID"],!1),__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_5__.d,!0),["NOTVALID"],!1),__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_6__.F,!0),["NOTVALID"],!1),["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{})},"../../packages/icons/dist/esm/Check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_Svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/icons/dist/esm/Svg.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),_excluded=["size","title","desc","titleId","descId"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SvgCheck=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)((function BaseComponent(_ref){var size=_ref.size,title=_ref.title,desc=_ref.desc,titleId=_ref.titleId,descId=_ref.descId,props=_objectWithoutProperties(_ref,_excluded),ariaLabelledBy=titleId||"";return ariaLabelledBy=(ariaLabelledBy+=desc&&descId?" ".concat(descId):"")||void 0,props["aria-labelledby"]=ariaLabelledBy,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_5__.Z,_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:size,width:size,title,titleId,desc,descId,"aria-labelledby":ariaLabelledBy,"aria-hidden":!ariaLabelledBy,fill:"currentcolor"},props),!!title&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("title",{id:titleId},title),!!desc&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("desc",{id:descId},desc),react__WEBPACK_IMPORTED_MODULE_4__.createElement("path",{d:"M8.6 15.6l-4.2-4.2L3 12.8l5.6 5.6 12-12L19.2 5 8.6 15.6z"}))})).withConfig({displayName:"Check__SvgCheck",componentId:"sc-178aua9-0"})(["outline:none;"]);SvgCheck.isIcon=!0,SvgCheck.defaultProps={size:24,tabIndex:-1,focusable:!1,"aria-hidden":!0,role:"img"};const __WEBPACK_DEFAULT_EXPORT__=SvgCheck},"../../packages/menu/src/MenuItem/MenuItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var _templateObject,react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/lib-esm/Button/Button.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),styled_system__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),pcln_icons__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/icons/dist/esm/Check.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["id","selected","children","handleClose","onClick"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var MenuButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(pcln_design_system__WEBPACK_IMPORTED_MODULE_8__.ZP).attrs(pcln_design_system__WEBPACK_IMPORTED_MODULE_9__._U)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid transparent;\n  color: ",";\n  outline: none;\n  padding: 12px;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  ","\n\n  ",";\n"])),(0,pcln_design_system__WEBPACK_IMPORTED_MODULE_10__.ow)("text.dark"),(0,pcln_design_system__WEBPACK_IMPORTED_MODULE_10__.ow)("base"),(function(props){return props.selected?"background-color: "+(0,pcln_design_system__WEBPACK_IMPORTED_MODULE_10__.ow)("background.base")(props)+";":"background-color: "+(0,pcln_design_system__WEBPACK_IMPORTED_MODULE_10__.ow)("background.lightest")(props)+";"}),styled_system__WEBPACK_IMPORTED_MODULE_11__.E0),MenuItem=react__WEBPACK_IMPORTED_MODULE_5__.forwardRef((function MenuItem(_ref,ref){var id=_ref.id,selected=_ref.selected,children=_ref.children,handleClose=_ref.handleClose,onClick=_ref.onClick,props=_objectWithoutProperties(_ref,_excluded),handleClick=(0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((function(){onClick&&onClick(),handleClose&&handleClose()}),[onClick,handleClose]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(MenuButton,Object.assign({id,ref,role:"option","aria-selected":selected,selected,onClick:handleClick,borderRadius:"lg"},props,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(pcln_design_system__WEBPACK_IMPORTED_MODULE_12__.Z,{alignItems:"center",children}),selected&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(pcln_icons__WEBPACK_IMPORTED_MODULE_13__.Z,{title:"check",size:20,ml:3})]}))}));MenuItem.displayName="MenuItem",MenuItem.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,selected:prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_14___default().node,handleClose:prop_types__WEBPACK_IMPORTED_MODULE_14___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_14___default().func},MenuItem.defaultProps={color:"primary"},MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{color:{defaultValue:{value:"'primary'",computed:!1},type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},selected:{type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},handleClose:{type:{name:"func"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(MenuItem);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/MenuItem/MenuItem.js"]={name:"MenuItem",docgenInfo:MenuItem.__docgenInfo,path:"../../packages/menu/src/MenuItem/MenuItem.js"})},"../../packages/menu/src/MenuList/MenuList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js");var _templateObject,_templateObject2,_templateObject3,react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__),styled_components__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var sizes={singleColumn:(0,styled_components__WEBPACK_IMPORTED_MODULE_14__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    & > * {\n      width: 100%;\n    }\n  "]))),twoColumns:(0,styled_components__WEBPACK_IMPORTED_MODULE_14__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    & > * {\n      width: calc(50% - ","px);\n    }\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("space.1"))},MenuContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_14__.ZP)(pcln_design_system__WEBPACK_IMPORTED_MODULE_16__.Z)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  font-family: ",";\n  overflow-y: auto;\n\n  & > * {\n    margin-right: ","px;\n    margin-bottom: ","px;\n  }\n\n  ",";\n"])),(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("font")||"'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("space.1"),(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("space.1"),(0,pcln_design_system__WEBPACK_IMPORTED_MODULE_17__.BS)(sizes));function focusNext(item){return null==item?void 0:item.nextElementSibling}function focusPrevious(item){return null==item?void 0:item.previousElementSibling}function moveFocus(currentFocus,traversalFunction){var nextFocus=traversalFunction(currentFocus);null==nextFocus||nextFocus.focus()}function MenuList(_ref){var id=_ref.id,children=_ref.children,color=_ref.color,size=_ref.size,height=_ref.height,handleClose=_ref.handleClose,listRef=(0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),currentItemRef=(0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),2),currentItemId=_useState2[0],setCurrentItemId=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)((function(){var _currentItemRef$curre,_currentItemRef$curre2;setCurrentItemId(null===(_currentItemRef$curre=currentItemRef.current)||void 0===_currentItemRef$curre?void 0:_currentItemRef$curre.id),null===(_currentItemRef$curre2=currentItemRef.current)||void 0===_currentItemRef$curre2||_currentItemRef$curre2.focus()}),[]);var handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((function(evt){var _list$ownerDocument,list=listRef.current,key=evt.key,currentFocus=null==list||null===(_list$ownerDocument=list.ownerDocument)||void 0===_list$ownerDocument?void 0:_list$ownerDocument.activeElement;"ArrowDown"===key?(evt.preventDefault(),moveFocus(currentFocus,focusNext)):"ArrowUp"===key&&(evt.preventDefault(),moveFocus(currentFocus,focusPrevious))}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(MenuContainer,{id,ref:listRef,role:"listbox","aria-activedescendant":currentItemId,flexWrap:"wrap",height,size,p:2,pr:1,pb:1,onKeyDown:handleKeyDown,children:react__WEBPACK_IMPORTED_MODULE_12__.Children.map(children,(function(child,index){return react__WEBPACK_IMPORTED_MODULE_12__.cloneElement(child,{id:"option"+index,ref:child.props.selected?currentItemRef:null,color:child.props.color||color,handleClose})}))})}MenuList.displayName="MenuList",MenuList.displayName="MenuList",MenuList.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_18___default().node,color:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,height:prop_types__WEBPACK_IMPORTED_MODULE_18___default().number,handleClose:prop_types__WEBPACK_IMPORTED_MODULE_18___default().func},MenuList.defaultProps={size:"singleColumn"},MenuList.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{size:{defaultValue:{value:"'singleColumn'",computed:!1},type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""},handleClose:{type:{name:"func"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=MenuList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/MenuList/MenuList.js"]={name:"MenuList",docgenInfo:MenuList.__docgenInfo,path:"../../packages/menu/src/MenuList/MenuList.js"})},"../../packages/menu/test/mocks/Menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>listItems,Q:()=>currencies});var listItems=[{label:"List Item 1",value:"one"},{label:"List Item 2",value:"two"},{label:"List Item 3",value:"three"},{label:"List Item 4",value:"four"}],currencies=[{code:"USD",label:"U.S. Dollar",symbol:"$"},{code:"AUS",label:"Austrailian Dollar",symbol:"AU$"},{code:"BZR",label:"Brazilian Real",symbol:"R$"},{code:"CAD",label:"Canadian Dollar",symbol:"C$"},{code:"GBP",label:"Pound Sterling",symbol:"£"},{code:"CNY",label:"Chinese Yuan Renminbi",symbol:"¥"},{code:"DKK",label:"Danish Krone",symbol:"kr"},{code:"AED",label:"Emirati Dirham",symbol:"AED"},{code:"EUR",label:"Euro",symbol:"€"},{code:"HKD",label:"Hong Kong Dollar",symbol:"HK$"}]},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),bind=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind})},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-properties.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),DESCRIPTORS=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/descriptors.js"),defineProperties=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/object-define-properties.js").f;$({target:"Object",stat:!0,forced:Object.defineProperties!==defineProperties,sham:!DESCRIPTORS},{defineProperties})}}]);