"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[7214],{"../../packages/core/src/RatingBadge/RatingBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,Default:()=>Default,DeprecatedBgProp:()=>DeprecatedBgProp,MixBgAndColorProps:()=>MixBgAndColorProps,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RatingBadge_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),dist_index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),utils=__webpack_require__("../../packages/core/src/utils/utils.ts"),borderRadiusAttrs=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts");var defaultProps={fontWeight:"bold",px:2,color:"alert",borderRadius:"md",bg:"alert"};Object.assign({},Box.Z.propTypes,{fontWeight:dist_index_esm.ZP.typography.fontWeight,bg:(0,utils.nL)(),color:(0,utils.nL)()});var RatingBadge=(0,styled_components_browser_esm.ZP)(Box.Z).attrs((function(props){return Object.assign({},function getBgAndColorProps(_ref){var color=_ref.color,bg=_ref.bg,defaultBg=defaultProps.bg,defaultColor=defaultProps.color;return bg&&color&&bg!==defaultBg&&color!==defaultColor?{bg,color}:bg===defaultBg&&color===defaultColor||bg===defaultBg&&color!==defaultColor?{bg:void 0,color}:color===defaultColor?{color:bg,bg:void 0}:void 0}(props),(0,borderRadiusAttrs._U)(props))}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: inline-block;\n  line-height: 1.5;\n  ","\n"])),(function(props){return(0,index_esm.qC)(index_esm.Ue,index_esm.E0)(props)}));RatingBadge.defaultProps=defaultProps,RatingBadge.propTypes=dist_index_esm.ZP;const RatingBadge_RatingBadge=RatingBadge;var Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const RatingBadge_stories={title:"RatingBadge",component:RatingBadge_RatingBadge};var Default=function Default(){return(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{children:"9.0"})};Default.displayName="Default";var DeprecatedBgProp=function DeprecatedBgProp(){return(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{bg:"primary.base",children:"9.0"})};DeprecatedBgProp.displayName="DeprecatedBgProp";var MixBgAndColorProps=function MixBgAndColorProps(){return(0,jsx_runtime.jsxs)(Flex.Z,{width:"150px",justifyContent:"space-between",children:[(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{color:"text.lightest",bg:"alert.base",children:"9.0"}),(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{color:"text.dark",bg:"secondary.base",children:"9.0"})]})};MixBgAndColorProps.displayName="MixBgAndColorProps";var Colors=function Colors(){return(0,jsx_runtime.jsxs)(Flex.Z,{width:"150px",justifyContent:"space-between",children:[(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{color:"primary",children:"7.6"}),(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{color:"secondary",children:"8.1"}),(0,jsx_runtime.jsx)(RatingBadge_RatingBadge,{color:"alert",children:"9.0"})]})};Colors.displayName="Colors",Default.parameters=Object.assign({storySource:{source:"() => <RatingBadge>9.0</RatingBadge>"}},Default.parameters),DeprecatedBgProp.parameters=Object.assign({storySource:{source:"() => <RatingBadge bg='primary.base'>9.0</RatingBadge>"}},DeprecatedBgProp.parameters),MixBgAndColorProps.parameters=Object.assign({storySource:{source:"() => (\n  <Flex width='150px' justifyContent='space-between'>\n    <RatingBadge color='text.lightest' bg='alert.base'>\n      9.0\n    </RatingBadge>\n    <RatingBadge color='text.dark' bg='secondary.base'>\n      9.0\n    </RatingBadge>\n  </Flex>\n)"}},MixBgAndColorProps.parameters),Colors.parameters=Object.assign({storySource:{source:"() => (\n  <Flex width='150px' justifyContent='space-between'>\n    <RatingBadge color='primary'>7.6</RatingBadge>\n    <RatingBadge color='secondary'>8.1</RatingBadge>\n    <RatingBadge color='alert'>9.0</RatingBadge>\n  </Flex>\n)"}},Colors.parameters);var __namedExportsOrder=["Default","DeprecatedBgProp","MixBgAndColorProps","Colors"]},"../../packages/core/src/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/utils/createPalette.ts");var boxPropTypes=Object.assign({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.border,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.boxShadow,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.display,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.maxHeight,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.maxWidth,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.minHeight,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.minWidth,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.height,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.size,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.space,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.textAlign,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.width,{bg:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)(),borderRadiusSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.Ze),rounded:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.YP),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_7__.d),boxShadowColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_8__.g),color:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)()}),Box=styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP.div.attrs((function(props){return Object.assign({},(0,_utils__WEBPACK_IMPORTED_MODULE_6__._U)(props),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.v)(props))}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  ","\n\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.hO)("Box"),_utils__WEBPACK_IMPORTED_MODULE_4__.$_,(function(props){return(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.bf,styled_system__WEBPACK_IMPORTED_MODULE_2__.jf,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd,styled_system__WEBPACK_IMPORTED_MODULE_2__.E0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn)(props)}));Box.displayName="Box",Box.propTypes=boxPropTypes;const __WEBPACK_DEFAULT_EXPORT__=Box},"../../packages/core/src/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var flexPropTypes=Object.assign({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.space,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.width,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.alignItems,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.justifyContent,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.flexWrap,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.flexDirection,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)()}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_9__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Flex"),(function(props){return(0,styled_system__WEBPACK_IMPORTED_MODULE_5__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_5__.cq,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO)(props)}));Flex.propTypes=flexPropTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/utils/attrs/borderRadiusAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YP:()=>roundedValues,Ze:()=>borderRadiusValues,_U:()=>borderRadiusAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var roundedValues=["top","right","bottom","left","topLeft","topRight","bottomRight","bottomLeft"],borderRadiusValues=["none","xsm","sm","md","lg","xl","2xl","3xl","full","action-sm","action-md","action-lg"];function calculateRoundedProps(radius,rounded){var topRight=0,bottomRight=0,bottomLeft=0,topLeft=0;return rounded&&"round"!==rounded?("top"===rounded?topLeft=topRight=radius:"right"===rounded?topRight=bottomRight=radius:"bottom"===rounded?bottomRight=bottomLeft=radius:"left"===rounded?topLeft=bottomLeft=radius:"topLeft"===rounded?topLeft=radius:"topRight"===rounded?topRight=radius:"bottomRight"===rounded?bottomRight=radius:"bottomLeft"===rounded&&(bottomLeft=radius),topLeft+" "+topRight+" "+bottomRight+" "+bottomLeft):radius}function borderRadiusAttrs(_ref){var borderRadius=_ref.borderRadius,rounded=_ref.rounded,theme=_ref.theme;if(!borderRadius)return{};if(Array.isArray(borderRadius))return{borderRadius:borderRadius.map((function(radius){return theme.borderRadii[radius]})).map((function(radius){return radius?calculateRoundedProps(radius,rounded):borderRadius}))};var _effectiveRadius=theme.borderRadii[borderRadius];return{borderRadius:_effectiveRadius?calculateRoundedProps(_effectiveRadius,rounded):borderRadius}}},"../../packages/core/src/utils/attrs/boxShadowAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>boxShadowSizeValues,v:()=>boxShadowAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var ___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),boxShadowSizeValues=["sm","md","lg","xl","2xl","overlay-lg","overlay-xl"];function calculateShadowProps(effectiveShadow,effectiveColor){if(effectiveColor){var rgb=(0,___WEBPACK_IMPORTED_MODULE_6__.oo)(effectiveColor);return effectiveShadow.replace("rgba(0,0,0,",rgb.slice(0,rgb.length-1)+", ")}return effectiveShadow}function boxShadowAttrs(props){var effectiveColor,boxShadowSize=props.boxShadowSize,boxShadowColor=props.boxShadowColor,theme=props.theme;if(!boxShadowSize)return{};if(boxShadowColor){var shadowColor=boxShadowColor.split(".")[0]+".dark";effectiveColor=(0,___WEBPACK_IMPORTED_MODULE_6__.ow)(shadowColor)(props)}return Array.isArray(boxShadowSize)?{boxShadow:boxShadowSize.map((function(size){return theme.shadows[size]})).map((function(shadow){return calculateShadowProps(shadow,effectiveColor)}))}:{boxShadow:calculateShadowProps(theme.shadows[boxShadowSize],effectiveColor)}}},"../../packages/core/src/utils/createPalette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>paletteFamilies,r:()=>createPalette});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js");var _excluded=["palette"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var deepmerge=__webpack_require__("../../common/temp/node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"),paletteFamilies=["primary","secondary","text","highlight","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],createPalette=function createPalette(_ref){var _ref$palette=_ref.palette,palette=void 0===_ref$palette?{}:_ref$palette,_theme$colors=_objectWithoutProperties(_ref,_excluded).colors,lightBlue=_theme$colors.lightBlue,tintBlue=_theme$colors.tintBlue,blue=_theme$colors.blue,toneBlue=_theme$colors.toneBlue,darkBlue=_theme$colors.darkBlue,shadeBlue=_theme$colors.shadeBlue,lightGreen=_theme$colors.lightGreen,tintGreen=_theme$colors.tintGreen,green=_theme$colors.green,toneGreen=_theme$colors.toneGreen,darkGreen=_theme$colors.darkGreen,shadeGreen=_theme$colors.shadeGreen,lightRed=_theme$colors.lightRed,tintRed=_theme$colors.tintRed,red=_theme$colors.red,toneRed=_theme$colors.toneRed,darkRed=_theme$colors.darkRed,shadeRed=_theme$colors.shadeRed,lightOrange=_theme$colors.lightOrange,tintOrange=_theme$colors.tintOrange,orange=_theme$colors.orange,toneOrange=_theme$colors.toneOrange,darkOrange=_theme$colors.darkOrange,shadeOrange=_theme$colors.shadeOrange,lightYellow=_theme$colors.lightYellow,tintYellow=_theme$colors.tintYellow,yellow=_theme$colors.yellow,toneYellow=_theme$colors.toneYellow,darkYellow=_theme$colors.darkYellow,shadeYellow=_theme$colors.shadeYellow,lightPurple=_theme$colors.lightPurple,tintPurple=_theme$colors.tintPurple,purple=_theme$colors.purple,tonePurple=_theme$colors.tonePurple,darkPurple=_theme$colors.darkPurple,shadePurple=_theme$colors.shadePurple,lightPink=_theme$colors.lightPink,tintPink=_theme$colors.tintPink,pink=_theme$colors.pink,tonePink=_theme$colors.tonePink,darkPink=_theme$colors.darkPink,shadePink=_theme$colors.shadePink,lightestText=_theme$colors.lightestText,lightText=_theme$colors.lightText,tintText=_theme$colors.tintText,text=_theme$colors.text,darkText=_theme$colors.darkText,headingText=_theme$colors.headingText,lightHighlight=_theme$colors.lightHighlight,tintHighlight=_theme$colors.tintHighlight,highlight=_theme$colors.highlight,toneHighlight=_theme$colors.toneHighlight,darkHighlight=_theme$colors.darkHighlight,shadeHighlight=_theme$colors.shadeHighlight,lightestBackground=_theme$colors.lightestBackground,lightBackground=_theme$colors.lightBackground,tintBackground=_theme$colors.tintBackground,background=_theme$colors.background,toneBackground=_theme$colors.toneBackground,darkBackground=_theme$colors.darkBackground,shadeBackground=_theme$colors.shadeBackground,darkestBackground=_theme$colors.darkestBackground,lightBorder=_theme$colors.lightBorder,tintBorder=_theme$colors.tintBorder,border=_theme$colors.border,toneBorder=_theme$colors.toneBorder,darkBorder=_theme$colors.darkBorder,shadeBorder=_theme$colors.shadeBorder;return deepmerge({primary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},secondary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},text:{lightest:lightestText,light:lightText,tint:tintText,base:text,dark:darkText,heading:headingText},highlight:{light:lightHighlight,tint:tintHighlight,base:highlight,tone:toneHighlight,dark:darkHighlight,shade:shadeHighlight},success:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},error:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},warning:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},alert:{light:lightOrange,tint:tintOrange,base:orange,tone:toneOrange,dark:darkOrange,shade:shadeOrange},caution:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},notify:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},pricePrimary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},priceSecondary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},strike:{base:red},promoPrimary:{light:lightPurple,tint:tintPurple,base:purple,tone:tonePurple,dark:darkPurple,shade:shadePurple},promoSecondary:{light:lightPink,tint:tintPink,base:pink,tone:tonePink,dark:darkPink,shade:shadePink},border:{light:lightBorder,tint:tintBorder,base:border,tone:toneBorder,dark:darkBorder,shade:shadeBorder},background:{lightest:lightestBackground,light:lightBackground,tint:tintBackground,base:background,tone:toneBackground,dark:darkBackground,shade:shadeBackground,darkest:darkestBackground}},palette)}}}]);