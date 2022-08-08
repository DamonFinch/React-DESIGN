"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[6390],{"../../packages/core/src/Container/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultAlignWithThemeMaxWidth:()=>DefaultAlignWithThemeMaxWidth,InputMaxWidth:()=>InputMaxWidth,SizeProp:()=>SizeProp,__namedExportsOrder:()=>Container_stories_namedExportsOrder,default:()=>Container_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var Container=__webpack_require__("../../packages/core/src/Container/Container.tsx"),Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const Container_stories={title:"Container",component:Container.Z,argTypes:{size:{name:"size",type:{name:"string"},options:["sm","md","lg","xl"],description:"Set the max width and padding of the container",control:{type:"select"}}}};var DefaultAlignWithThemeMaxWidth=function DefaultAlignWithThemeMaxWidth(){return(0,jsx_runtime.jsx)(Container.Z,{children:(0,jsx_runtime.jsx)(Box.Z,{p:4,bg:"lightGray",style:{height:"100vh"},children:"Container Component"})})};DefaultAlignWithThemeMaxWidth.displayName="DefaultAlignWithThemeMaxWidth",DefaultAlignWithThemeMaxWidth.story={name:"Default align with theme max width"};var InputMaxWidth=function InputMaxWidth(){return(0,jsx_runtime.jsx)(Container.Z,{maxWidth:500,children:(0,jsx_runtime.jsx)(Box.Z,{p:4,bg:"lightGray",style:{height:"100vh"},children:"Container Component"})})};InputMaxWidth.displayName="InputMaxWidth",InputMaxWidth.story={name:"Input maxWidth"};var Template=function Template(args){return(0,jsx_runtime.jsx)(Flex.Z,{width:"100%",color:"primary",children:(0,jsx_runtime.jsx)(Container.Z,Object.assign({},args,{style:{border:"1px solid"},children:(0,jsx_runtime.jsx)(Box.Z,{color:"background.light",style:{height:"100vh",border:"1px solid"},children:"Container Component"})}))})};Template.displayName="Template";var SizeProp=Template.bind({});SizeProp.args={size:"md"},DefaultAlignWithThemeMaxWidth.parameters=Object.assign({storySource:{source:"() => (\n  <Container>\n    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>\n      Container Component\n    </Box>\n  </Container>\n)"}},DefaultAlignWithThemeMaxWidth.parameters),InputMaxWidth.parameters=Object.assign({storySource:{source:"() => (\n  <Container maxWidth={500}>\n    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>\n      Container Component\n    </Box>\n  </Container>\n)"}},InputMaxWidth.parameters),SizeProp.parameters=Object.assign({storySource:{source:"(args) => (\n  <Flex width='100%' color='primary'>\n    <Container {...args} style={{ border: `1px solid` }}>\n      <Box color='background.light' style={{ height: `100vh`, border: `1px solid` }}>\n        Container Component\n      </Box>\n    </Container>\n  </Flex>\n)"}},SizeProp.parameters);var Container_stories_namedExportsOrder=["DefaultAlignWithThemeMaxWidth","InputMaxWidth","SizeProp"]},"../../packages/core/src/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/createPalette.ts");var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_2__.E0.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.jf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf.propTypes,{bg:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.aR)("color"),borderRadiusSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.Ze),rounded:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.YP),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.d),boxShadowColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_7__.g),color:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.nL)()}),Box=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div.attrs((function(props){return Object.assign({},(0,_utils__WEBPACK_IMPORTED_MODULE_5__._U)(props),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.v)(props))}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hO)("Box"),styled_system__WEBPACK_IMPORTED_MODULE_2__.jf,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf,_utils__WEBPACK_IMPORTED_MODULE_3__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.E0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn);Box.displayName="Box",Box.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Box},"../../packages/core/src/Container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/Box/Box.tsx");var sizes={sm:640,md:768,lg:1024,xl:1280},paddings={sm:3,md:[3,null,4],lg:[3,null,4],xl:[3,null,4]},propTypes={maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["sm","md","lg","xl"])},Container=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(___WEBPACK_IMPORTED_MODULE_3__.Z).attrs((function(props){return props.size?{px:paddings[props.size],maxWidth:props.size?sizes[props.size]+"px":props.maxWidth}:props.maxWidth?{maxWidth:props.maxWidth+"px"}:{maxWidth:props.theme.maxContainerWidth}}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"])));Container.propTypes=propTypes,Container.displayName="Container";const __WEBPACK_DEFAULT_EXPORT__=Container},"../../packages/core/src/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_5__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.bf.propTypes,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("color")},styled_system__WEBPACK_IMPORTED_MODULE_5__.cq.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me.propTypes,{wrap:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("flexWrap"),align:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("alignItems"),justify:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("justifyContent")}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_8__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_5__.cq,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO);Flex.propTypes=propTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/utils/attrs/borderRadiusAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YP:()=>roundedValues,Ze:()=>borderRadiusValues,_U:()=>borderRadiusAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var roundedValues=["top","right","bottom","left","topLeft","topRight","bottomRight","bottomLeft"],borderRadiusValues=["none","xsm","sm","md","lg","xl","2xl","3xl","full","action-sm","action-md","action-lg"];function calculateRoundedProps(radius,rounded){var topRight=0,bottomRight=0,bottomLeft=0,topLeft=0;return rounded&&"round"!==rounded?("top"===rounded?topLeft=topRight=radius:"right"===rounded?topRight=bottomRight=radius:"bottom"===rounded?bottomRight=bottomLeft=radius:"left"===rounded?topLeft=bottomLeft=radius:"topLeft"===rounded?topLeft=radius:"topRight"===rounded?topRight=radius:"bottomRight"===rounded?bottomRight=radius:"bottomLeft"===rounded&&(bottomLeft=radius),topLeft+" "+topRight+" "+bottomRight+" "+bottomLeft):radius}function borderRadiusAttrs(_ref){var borderRadius=_ref.borderRadius,rounded=_ref.rounded,theme=_ref.theme;if(!borderRadius)return{};if(Array.isArray(borderRadius))return{borderRadius:borderRadius.map((function(radius){return theme.borderRadii[radius]})).map((function(radius){return radius?calculateRoundedProps(radius,rounded):borderRadius}))};var _effectiveRadius=theme.borderRadii[borderRadius];return{borderRadius:_effectiveRadius?calculateRoundedProps(_effectiveRadius,rounded):borderRadius}}},"../../packages/core/src/utils/attrs/boxShadowAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>boxShadowSizeValues,v:()=>boxShadowAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var ___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),boxShadowSizeValues=["sm","md","lg","xl","2xl","overlay-lg","overlay-xl"];function calculateShadowProps(effectiveShadow,effectiveColor){if(effectiveColor){var rgb=(0,___WEBPACK_IMPORTED_MODULE_6__.oo)(effectiveColor);return effectiveShadow.replace("rgba(0,0,0,",rgb.slice(0,rgb.length-1)+", ")}return effectiveShadow}function boxShadowAttrs(props){var effectiveColor,boxShadowSize=props.boxShadowSize,boxShadowColor=props.boxShadowColor,theme=props.theme;if(!boxShadowSize)return{};if(boxShadowColor){var shadowColor=boxShadowColor.split(".")[0]+".dark";effectiveColor=(0,___WEBPACK_IMPORTED_MODULE_6__.ow)(shadowColor)(props)}return Array.isArray(boxShadowSize)?{boxShadow:boxShadowSize.map((function(size){return theme.shadows[size]})).map((function(shadow){return calculateShadowProps(shadow,effectiveColor)}))}:{boxShadow:calculateShadowProps(theme.shadows[boxShadowSize],effectiveColor)}}},"../../packages/core/src/utils/createPalette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>paletteFamilies,r:()=>createPalette});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js");var _excluded=["palette"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var deepmerge=__webpack_require__("../../common/temp/node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"),paletteFamilies=["primary","secondary","text","highlight","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],createPalette=function createPalette(_ref){var _ref$palette=_ref.palette,palette=void 0===_ref$palette?{}:_ref$palette,_theme$colors=_objectWithoutProperties(_ref,_excluded).colors,lightBlue=_theme$colors.lightBlue,tintBlue=_theme$colors.tintBlue,blue=_theme$colors.blue,toneBlue=_theme$colors.toneBlue,darkBlue=_theme$colors.darkBlue,shadeBlue=_theme$colors.shadeBlue,lightGreen=_theme$colors.lightGreen,tintGreen=_theme$colors.tintGreen,green=_theme$colors.green,toneGreen=_theme$colors.toneGreen,darkGreen=_theme$colors.darkGreen,shadeGreen=_theme$colors.shadeGreen,lightRed=_theme$colors.lightRed,tintRed=_theme$colors.tintRed,red=_theme$colors.red,toneRed=_theme$colors.toneRed,darkRed=_theme$colors.darkRed,shadeRed=_theme$colors.shadeRed,lightOrange=_theme$colors.lightOrange,tintOrange=_theme$colors.tintOrange,orange=_theme$colors.orange,toneOrange=_theme$colors.toneOrange,darkOrange=_theme$colors.darkOrange,shadeOrange=_theme$colors.shadeOrange,lightYellow=_theme$colors.lightYellow,tintYellow=_theme$colors.tintYellow,yellow=_theme$colors.yellow,toneYellow=_theme$colors.toneYellow,darkYellow=_theme$colors.darkYellow,shadeYellow=_theme$colors.shadeYellow,lightPurple=_theme$colors.lightPurple,tintPurple=_theme$colors.tintPurple,purple=_theme$colors.purple,tonePurple=_theme$colors.tonePurple,darkPurple=_theme$colors.darkPurple,shadePurple=_theme$colors.shadePurple,lightPink=_theme$colors.lightPink,tintPink=_theme$colors.tintPink,pink=_theme$colors.pink,tonePink=_theme$colors.tonePink,darkPink=_theme$colors.darkPink,shadePink=_theme$colors.shadePink,lightestText=_theme$colors.lightestText,lightText=_theme$colors.lightText,tintText=_theme$colors.tintText,text=_theme$colors.text,darkText=_theme$colors.darkText,headingText=_theme$colors.headingText,lightHighlight=_theme$colors.lightHighlight,tintHighlight=_theme$colors.tintHighlight,highlight=_theme$colors.highlight,toneHighlight=_theme$colors.toneHighlight,darkHighlight=_theme$colors.darkHighlight,shadeHighlight=_theme$colors.shadeHighlight,lightestBackground=_theme$colors.lightestBackground,lightBackground=_theme$colors.lightBackground,tintBackground=_theme$colors.tintBackground,background=_theme$colors.background,toneBackground=_theme$colors.toneBackground,darkBackground=_theme$colors.darkBackground,shadeBackground=_theme$colors.shadeBackground,darkestBackground=_theme$colors.darkestBackground,lightBorder=_theme$colors.lightBorder,tintBorder=_theme$colors.tintBorder,border=_theme$colors.border,toneBorder=_theme$colors.toneBorder,darkBorder=_theme$colors.darkBorder,shadeBorder=_theme$colors.shadeBorder;return deepmerge({primary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},secondary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},text:{lightest:lightestText,light:lightText,tint:tintText,base:text,dark:darkText,heading:headingText},highlight:{light:lightHighlight,tint:tintHighlight,base:highlight,tone:toneHighlight,dark:darkHighlight,shade:shadeHighlight},success:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},error:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},warning:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},alert:{light:lightOrange,tint:tintOrange,base:orange,tone:toneOrange,dark:darkOrange,shade:shadeOrange},caution:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},notify:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},pricePrimary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},priceSecondary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},strike:{base:red},promoPrimary:{light:lightPurple,tint:tintPurple,base:purple,tone:tonePurple,dark:darkPurple,shade:shadePurple},promoSecondary:{light:lightPink,tint:tintPink,base:pink,tone:tonePink,dark:darkPink,shade:shadePink},border:{light:lightBorder,tint:tintBorder,base:border,tone:toneBorder,dark:darkBorder,shade:shadeBorder},background:{lightest:lightestBackground,light:lightBackground,tint:tintBackground,base:background,tone:toneBackground,dark:darkBackground,shade:shadeBackground,darkest:darkestBackground}},palette)}}}]);