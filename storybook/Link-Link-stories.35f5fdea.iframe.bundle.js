"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[8e3],{"../../packages/core/src/Link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsSmallFilledButton:()=>AsSmallFilledButton,Color:()=>Color,ForwardRefs:()=>ForwardRefs,LargeText:()=>LargeText,LinkComponent:()=>LinkComponent,LinkOpenSelf:()=>LinkOpenSelf,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/Link/Link.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/Button/Button.tsx"),___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/Text/Text.tsx"),_storybook_utils_ForwardRefsDemo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Link",component:___WEBPACK_IMPORTED_MODULE_3__.Z};var LinkComponent=function LinkComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://www.priceline.com/home/",target:"_blank",children:"Priceline Home"})};LinkComponent.displayName="LinkComponent",LinkComponent.story={name:"Link component"};var AsSmallFilledButton=function AsSmallFilledButton(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{variation:"fill",size:"small",href:"https://www.priceline.com/home/",target:"_blank",children:"Priceline Home"})})},LinkOpenSelf=function LinkOpenSelf(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{href:"https://www.priceline.com/home/",target:"_self",children:"Open the Priceline Home in the same window"})};LinkOpenSelf.displayName="LinkOpenSelf",LinkOpenSelf.story={name:"Link open self"};var ForwardRefs=function ForwardRefs(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_utils_ForwardRefsDemo__WEBPACK_IMPORTED_MODULE_5__.Z,{refChild:function refChild(dsRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"text.dark",ref:dsRef,children:"I am a link!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.ZP,{color:"error",onClick:function onClick(){return dsRef.current.innerHTML="Bacon!"},mt:4,children:"Click to update link text via ref"})]})}})};ForwardRefs.displayName="ForwardRefs",ForwardRefs.story={name:"Forward refs"};var Color=function Color(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"text.dark",children:"I am a different color!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"secondary",children:"I am a different color!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"error",children:"I am a different color!"})]})};Color.displayName="Color";var LargeText=function LargeText(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"text.light",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.ZP,{textStyle:"heading2",children:"I am a link with text styles"})})};LargeText.displayName="LargeText",LinkComponent.parameters=Object.assign({storySource:{source:"() => (\n  <Link href='https://www.priceline.com/home/' target='_blank'>\n    Priceline Home\n  </Link>\n)"}},LinkComponent.parameters),AsSmallFilledButton.parameters=Object.assign({storySource:{source:"() => (\n  <>\n    <Link variation='fill' size='small' href='https://www.priceline.com/home/' target='_blank'>\n      Priceline Home\n    </Link>\n  </>\n)"}},AsSmallFilledButton.parameters),LinkOpenSelf.parameters=Object.assign({storySource:{source:"() => (\n  <Link href='https://www.priceline.com/home/' target='_self'>\n    Open the Priceline Home in the same window\n  </Link>\n)"}},LinkOpenSelf.parameters),ForwardRefs.parameters=Object.assign({storySource:{source:"function ForwardRefs() {\n  function refChild(dsRef) {\n    function onClick() {\n      return (dsRef.current.innerHTML = 'Bacon!')\n    }\n    return (\n      <>\n        <Link color='text.dark' ref={dsRef}>\n          I am a link!\n        </Link>\n        <br />\n        <Button color='error' onClick={onClick} mt={4}>\n          Click to update link text via ref\n        </Button>\n      </>\n    )\n  }\n  return <ForwardRefDemo refChild={refChild} />\n}"}},ForwardRefs.parameters),Color.parameters=Object.assign({storySource:{source:"() => (\n  <div>\n    <Link color='text.dark'>I am a different color!</Link>\n    <br />\n    <Link color='secondary'>I am a different color!</Link>\n    <br />\n    <Link color='error'>I am a different color!</Link>\n  </div>\n)"}},Color.parameters),LargeText.parameters=Object.assign({storySource:{source:"() => (\n  <Link color='text.light'>\n    <Text textStyle='heading2'>I am a link with text styles</Text>\n  </Link>\n)"}},LargeText.parameters);var __namedExportsOrder=["LinkComponent","AsSmallFilledButton","LinkOpenSelf","ForwardRefs","Color","LargeText"]},"../../packages/core/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>buttonStyles,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,hH:()=>borderRadiusButtonValues});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.concat.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,styled_components__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__),styled_system__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+theme-get@5.1.2/node_modules/@styled-system/theme-get/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts");function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var borderRadiusButtonValues=["none","sm","md","lg"],isValidBorderRadius=function isValidBorderRadius(size){return size&&borderRadiusButtonValues.includes(size)},sizes={small:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 7px 12px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__.Z)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-sm"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__.Z)("fontSizes.0")),medium:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__.Z)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-md"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__.Z)("fontSizes.1")),large:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 12px 22px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__.Z)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-lg"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_16__.Z)("fontSizes.2"))},variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_18__.MI)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"light":"dark")(props)}),(function(props){return props.disabled?"":"color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.MI)("dark")(props)+";"}),(function(props){return"0px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"":"dark")(props)})),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(function(props){return props.theme.fontWeights.medium}),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("base"),(function(props){return props.theme.lineHeights.standard}),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"light":"base")(props)}),(function(props){return props.disabled?"":"\n      color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark")(props)+";\n      box-shadow: inset 0 0 0 2px "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark")(props)+";\n    "})),plain:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark")),subtle:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("background.base"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark")),white:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("background.lightest"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark")),lightFill:(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("dark"),(function(props){return"0px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)(props.disabled?"":"dark")(props)}))},buttonStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_17__.iv)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(props){return props.theme.fontWeights.bold}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return props.theme.radius}),(function(_ref){var theme=_ref.theme;return(0,_utils__WEBPACK_IMPORTED_MODULE_18__.BS)(sizes,"medium",theme.mediaQueries)}),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.hO)("Button",variations),styled_system__WEBPACK_IMPORTED_MODULE_19__.bf,styled_system__WEBPACK_IMPORTED_MODULE_19__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_19__.Wn,(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("text.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_18__.ow)("background.base")),propTypes=Object.assign({size:prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOf(["small","medium","large"])},styled_system__WEBPACK_IMPORTED_MODULE_19__.bf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_19__.Dh.propTypes,{fullWidth:(0,_utils__WEBPACK_IMPORTED_MODULE_18__.aR)("width"),variation:prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOf(Object.keys(variations)),color:(0,_utils__WEBPACK_IMPORTED_MODULE_18__.nL)(),disabled:prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool},styled_system__WEBPACK_IMPORTED_MODULE_19__.Wn.propTypes,{borderRadius:prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOf(borderRadiusButtonValues),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_20___default().oneOf([""].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_utils__WEBPACK_IMPORTED_MODULE_21__.d)))}),Button=styled_components__WEBPACK_IMPORTED_MODULE_17__.ZP.button.attrs((function(props){var width=props.width,fullWidth=props.fullWidth,title=props.title,ariaLabel=props["aria-label"],borderRadius=props.borderRadius;return Object.assign({borderRadius},(0,_utils__WEBPACK_IMPORTED_MODULE_21__.v)(props),{width:fullWidth?1:width,"aria-label":ariaLabel||title})}))(_templateObject12||(_templateObject12=_taggedTemplateLiteralLoose(["\n  ","\n"])),buttonStyles);Button.propTypes=propTypes,Button.defaultProps={color:"primary",size:"medium",variation:"fill"},Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button},"../../packages/core/src/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/Button/Button.tsx"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["target"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_6__.$Y),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    cursor: pointer;\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_6__.$Y)},propTypes={color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),variation:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(Object.keys(variations))},Link=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a.attrs((function(_ref){var target=_ref.target,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({rel:"_blank"===target?"noopener":null,target},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n  "," ",";\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Link",variations),styled_system__WEBPACK_IMPORTED_MODULE_9__.bf,styled_system__WEBPACK_IMPORTED_MODULE_9__.Dh);Link.displayName="Link",Link.defaultProps={color:"primary",variation:"link",size:"medium"},Link.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Link},"../../packages/core/src/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>Text_Text});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,utils=__webpack_require__("../../packages/core/src/utils/utils.ts"),typographyAttrs=__webpack_require__("../../packages/core/src/utils/attrs/typographyAttrs.ts");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var textProps=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,utils.hO)("Text"),(0,utils.ow)("base"),(function(props){return props.bg?"background-color: "+(0,utils.ow)(props.bg,"base")(props)+";":""}),index_esm.jf,index_esm.Cb,index_esm.kC,index_esm.kk,index_esm.jw,index_esm.ih,index_esm.tx,index_esm.Dh,index_esm.bf,(function caps(props){return Array.isArray(props.caps)&&0===props.caps.length?null:null!=props&&props.caps?{textTransform:"uppercase"}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return Array.isArray(props.bold)&&0===props.bold.length?null:props.bold?{fontWeight:props.theme.bold}:null}),index_esm.JB,index_esm.p_,index_esm.Ue,index_esm.Nv,index_esm.rX,index_esm.yd,(function textDecoration(props){return props.textDecoration?"text-decoration: "+props.textDecoration+";":""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),index_esm.YK,index_esm.W5),textAttrs=function textAttrs(props){return Object.assign({},(0,typographyAttrs.I)(props),function textAlignAttrs(props){var align=props.align;return{textAlign:props.textAlign||align}}(props))},Text=styled_components_browser_esm.ZP.div.attrs(textAttrs)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Span=styled_components_browser_esm.ZP.span.attrs(textAttrs)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Paragraph=styled_components_browser_esm.ZP.p.attrs(textAttrs)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Strike=styled_components_browser_esm.ZP.s.attrs(textAttrs)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=Object.assign({},index_esm.jf.propTypes,index_esm.JB.propTypes,index_esm.p_.propTypes,index_esm.Ue.propTypes,index_esm.Cb.propTypes,index_esm.Nv.propTypes,index_esm.kC.propTypes,index_esm.kk.propTypes,index_esm.jw.propTypes,index_esm.ih.propTypes,index_esm.tx.propTypes,index_esm.Dh.propTypes,index_esm.yd.propTypes,index_esm.YK.propTypes,index_esm.bf.propTypes,index_esm.W5.propTypes,{align:(0,utils.aR)("textAlign"),bold:prop_types_default().bool,caps:prop_types_default().bool,color:(0,utils.nL)(),enableTextShadow:prop_types_default().bool,regular:prop_types_default().bool,textDecoration:prop_types_default().string,textShadowSize:prop_types_default().oneOf(["sm","md"]),textStyle:prop_types_default().oneOf(typographyAttrs.F)}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s";const Text_Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"../../packages/core/src/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ForwardRefsDemo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ForwardRefsDemo(_ref){var refChild=_ref.refChild,dsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:refChild(dsRef)})}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func};try{ForwardRefsDemo.displayName="ForwardRefsDemo",ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",displayName:"ForwardRefsDemo",props:{refChild:{defaultValue:null,description:"",name:"refChild",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx#ForwardRefsDemo"]={docgenInfo:ForwardRefsDemo.__docgenInfo,name:"ForwardRefsDemo",path:"../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx#ForwardRefsDemo"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/core/src/utils/attrs/boxShadowAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>boxShadowSizeValues,v:()=>boxShadowAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var ___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),boxShadowSizeValues=["sm","md","lg","xl","2xl","overlay-lg","overlay-xl"];function calculateShadowProps(effectiveShadow,effectiveColor){if(effectiveColor){var rgb=(0,___WEBPACK_IMPORTED_MODULE_6__.oo)(effectiveColor);return effectiveShadow.replace("rgba(0,0,0,",rgb.slice(0,rgb.length-1)+", ")}return effectiveShadow}function boxShadowAttrs(props){var effectiveColor,boxShadowSize=props.boxShadowSize,boxShadowColor=props.boxShadowColor,theme=props.theme;if(!boxShadowSize)return{};if(boxShadowColor){var shadowColor=boxShadowColor.split(".")[0]+".dark";effectiveColor=(0,___WEBPACK_IMPORTED_MODULE_6__.ow)(shadowColor)(props)}return Array.isArray(boxShadowSize)?{boxShadow:boxShadowSize.map((function(size){return theme.shadows[size]})).map((function(shadow){return calculateShadowProps(shadow,effectiveColor)}))}:{boxShadow:calculateShadowProps(theme.shadows[boxShadowSize],effectiveColor)}}},"../../packages/core/src/utils/attrs/typographyAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","articleBold","paragraph","paragraphBold","paragraph2","paragraph2Bold","caption","captionBold","overline","overlineMedium","disclaimer","disclaimerBold","highlight","highlightBold","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"];function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){var styleProps=style&&style.hasOwnProperty("fontSize")?Object.keys(style):[];return 0===styleProps.length?["fontSize","fontWeight","lineHeight","letterSpacing","textTransform"].forEach((function(styleProp){acc[styleProp].push(null)})):styleProps.forEach((function(styleProp){acc[styleProp].push(style[styleProp])})),acc}),{fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[],textTransform:[]}):theme.typography[textStyle]:{}}},"../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})}}]);