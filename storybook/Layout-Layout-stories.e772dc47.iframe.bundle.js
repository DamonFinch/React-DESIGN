"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[7775],{"../../packages/core/src/Layout/Layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Overlap:()=>Overlap,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Layout_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.bind.js");var _templateObject,react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),moize=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/moize@6.1.1/node_modules/moize/dist/moize.js")),moize_default=__webpack_require__.n(moize),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");var getWidthsForVariation=function getWidthsForVariation(variation,numChildren){return variation?"50-50"===variation?Array(numChildren).fill(.5):"33-33-33"===variation?Array(numChildren).fill(1/3):"25-25-25-25"===variation?Array(numChildren).fill(1/4):"100"!==variation?function getNonhomogeneousWidths(variationWidth,numChildren){for(var variationWidths=variationWidth.split("-").map((function(width){return parseInt(width,10)})),widths=[],i=0;i<numChildren;i++)widths.push(variationWidths[i%variationWidths.length]/100);return widths}(variation,numChildren):Array(numChildren).fill(1):null},memoGetChildrenWidths=moize_default()((function getChildrenWidths(variation,numChildren){if(Array.isArray(variation)){for(var variationWidths=variation.map((function(v){return getWidthsForVariation(v,numChildren)})),widthsPerChild=[],_loop=function _loop(i){var widths=variationWidths.map((function(v){return v&&v[i]}));widthsPerChild.push(widths)},i=0;i<numChildren;i++)_loop(i);return widthsPerChild}return getWidthsForVariation(variation,numChildren)})),gapValues={sm:1,md:2,lg:3,xl:4},memoGetGapValues=moize_default()((function getGapValues(gapProp,rowGapProp){var boxPaddingX,boxPaddingY,flexMarginX,flexMarginY;return Array.isArray(gapProp)?(boxPaddingX=gapProp.map((function(gap){return gapValues[gap]})),flexMarginX=gapProp.map((function(gap){return gapValues[gap]?-1*gapValues[gap]:null}))):(boxPaddingX=gapValues[gapProp],flexMarginX=-1*gapValues[gapProp]),Array.isArray(rowGapProp)?(boxPaddingY=rowGapProp.map((function(gap){return gapValues[gap]||null})),flexMarginY=rowGapProp.map((function(gap){return gapValues[gap]?-1*gapValues[gap]:null}))):(boxPaddingY=gapValues[rowGapProp],flexMarginY=-1*gapValues[rowGapProp]),{boxPaddingX,boxPaddingY,flexMarginX,flexMarginY}})),ALLOWED_LAYOUT_VALUES=["50-50","33-33-33","33-66","66-33","25-25-25-25","60-40","40-60","100"],ALLOWED_GAP_VALUES=["sm","md","lg","xl"],propTypes={children:prop_types_default().node.isRequired,variation:prop_types_default().oneOfType([prop_types_default().oneOf(ALLOWED_LAYOUT_VALUES),prop_types_default().arrayOf(prop_types_default().oneOf(ALLOWED_LAYOUT_VALUES))]).isRequired,gap:prop_types_default().oneOfType([prop_types_default().oneOf(ALLOWED_GAP_VALUES),prop_types_default().arrayOf(prop_types_default().oneOf(ALLOWED_GAP_VALUES))]),rowGap:prop_types_default().oneOfType([prop_types_default().oneOf(ALLOWED_GAP_VALUES),prop_types_default().arrayOf(prop_types_default().oneOf(ALLOWED_GAP_VALUES))]),stretchHeight:prop_types_default().bool},ZIndexBox=(0,styled_components_browser_esm.ZP)(Box.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n"])),index_esm.W5),Layout=function Layout(_ref){var children=_ref.children,gap=_ref.gap,rowGap=_ref.rowGap,variation=_ref.variation,stretchHeight=_ref.stretchHeight,widths=memoGetChildrenWidths(variation,children.length),_memoGetGapValues=memoGetGapValues(gap,rowGap),boxPaddingX=_memoGetGapValues.boxPaddingX,boxPaddingY=_memoGetGapValues.boxPaddingY,flexMarginX=_memoGetGapValues.flexMarginX,flexMarginY=_memoGetGapValues.flexMarginY;return(0,jsx_runtime.jsx)(Flex.Z,{flexWrap:"wrap",mx:flexMarginX,my:flexMarginY,"data-testid":"layout-flex",children:react.Children.map(children,(function(child,idx){return child&&(0,jsx_runtime.jsx)(ZIndexBox,{width:widths[idx],px:boxPaddingX,py:boxPaddingY,"data-testid":"box-"+idx,zIndex:child.props.zIndex,children:react.cloneElement(child,{minHeight:stretchHeight?"100%":void 0})})}))})};Layout.displayName="Layout",Layout.propTypes=propTypes,Layout.defaultProps={},Layout.displayName="Layout";const Layout_Layout=Layout;var Layout_stories_templateObject,Container=__webpack_require__("../../packages/core/src/Container/Container.tsx"),Relative=__webpack_require__("../../packages/core/src/Relative/Relative.tsx"),Absolute=__webpack_require__("../../packages/core/src/Absolute/Absolute.tsx");const Layout_stories={title:"Layout",component:Layout_Layout,argTypes:{children:{control:!1}}};var LayoutDemoBox=(0,styled_components_browser_esm.ZP)(Box.Z)(Layout_stories_templateObject||(Layout_stories_templateObject=function Layout_stories_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  height: 100px;\n"]))),Template=function Template(args){return(0,jsx_runtime.jsx)(Flex.Z,{width:"100%",color:"primary.light",children:(0,jsx_runtime.jsx)(Container.Z,{size:"xl",style:{border:"1px solid"},children:(0,jsx_runtime.jsxs)(Layout_Layout,Object.assign({},args,{children:[(0,jsx_runtime.jsx)(LayoutDemoBox,{color:"secondary.base"}),(0,jsx_runtime.jsx)(Box.Z,{height:"120px",color:"warning.base"}),(0,jsx_runtime.jsx)(LayoutDemoBox,{color:"alert"}),(0,jsx_runtime.jsx)(LayoutDemoBox,{color:"primary"}),(0,jsx_runtime.jsx)(LayoutDemoBox,{color:"promoPrimary"}),(0,jsx_runtime.jsx)(LayoutDemoBox,{color:"promoSecondary"})]}))})})};Template.displayName="Template";var Basic=Template.bind({});Basic.args={variation:"33-33-33",gap:"sm",rowGap:"sm"};var Responsive=Template.bind({});Responsive.args={variation:["100","50-50",null,"60-40"],gap:"sm",rowGap:["sm","md"],stretchHeight:!0};var OverlapTemplate=function OverlapTemplate(args){return(0,jsx_runtime.jsx)(Flex.Z,{width:"100%",color:"primary.light",children:(0,jsx_runtime.jsx)(Container.Z,{size:"xl",style:{border:"1px solid"},children:(0,jsx_runtime.jsxs)(Layout_Layout,Object.assign({},args,{children:[(0,jsx_runtime.jsx)(Relative.Z,{color:"secondary.base",zIndex:1,height:"200px",children:(0,jsx_runtime.jsx)(Absolute.Z,{height:100,width:200,color:"notify",top:"30px",right:"-70px"})}),(0,jsx_runtime.jsx)(LayoutDemoBox,{color:"primary.base"})]}))})})};OverlapTemplate.displayName="OverlapTemplate";var Overlap=OverlapTemplate.bind({});Overlap.args={variation:"60-40",gap:"sm",rowGap:"sm"},Basic.parameters=Object.assign({storySource:{source:"(args) => (\n  <Flex width='100%' color='primary.light'>\n    <Container size='xl' style={{ border: `1px solid` }}>\n      <Layout {...args}>\n        <LayoutDemoBox color='secondary.base' />\n        <Box height='120px' color='warning.base' />\n        <LayoutDemoBox color='alert' />\n        <LayoutDemoBox color='primary' />\n        <LayoutDemoBox color='promoPrimary' />\n        <LayoutDemoBox color='promoSecondary' />\n      </Layout>\n    </Container>\n  </Flex>\n)"}},Basic.parameters),Responsive.parameters=Object.assign({storySource:{source:"(args) => (\n  <Flex width='100%' color='primary.light'>\n    <Container size='xl' style={{ border: `1px solid` }}>\n      <Layout {...args}>\n        <LayoutDemoBox color='secondary.base' />\n        <Box height='120px' color='warning.base' />\n        <LayoutDemoBox color='alert' />\n        <LayoutDemoBox color='primary' />\n        <LayoutDemoBox color='promoPrimary' />\n        <LayoutDemoBox color='promoSecondary' />\n      </Layout>\n    </Container>\n  </Flex>\n)"}},Responsive.parameters),Overlap.parameters=Object.assign({storySource:{source:"(args) => (\n  <Flex width='100%' color='primary.light'>\n    <Container size='xl' style={{ border: `1px solid` }}>\n      <Layout {...args}>\n        <Relative color='secondary.base' zIndex={1} height='200px'>\n          <Absolute height={100} width={200} color='notify' top='30px' right='-70px' />\n        </Relative>\n        <LayoutDemoBox color='primary.base' />\n      </Layout>\n    </Container>\n  </Flex>\n)"}},Overlap.parameters);var __namedExportsOrder=["Basic","Responsive","Overlap"]},"../../packages/core/src/Absolute/Absolute.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/Box/Box.tsx");var Absolute=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_3__.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  position: absolute;\n  "," "," "," ","\n  ","\n"])),styled_system__WEBPACK_IMPORTED_MODULE_4__.we,styled_system__WEBPACK_IMPORTED_MODULE_4__.I,styled_system__WEBPACK_IMPORTED_MODULE_4__.t$,styled_system__WEBPACK_IMPORTED_MODULE_4__.F2,styled_system__WEBPACK_IMPORTED_MODULE_4__.W5);Absolute.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_4__.we.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_4__.F2.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_4__.I.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_4__.t$.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_4__.W5.propTypes),Absolute.displayName="Absolute";const __WEBPACK_DEFAULT_EXPORT__=Absolute},"../../packages/core/src/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/createPalette.ts");var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_2__.E0.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.jf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf.propTypes,{bg:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.aR)("color"),borderRadiusSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.Ze),rounded:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.YP),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.d),boxShadowColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_7__.g),color:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.nL)()}),Box=styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div.attrs((function(props){return Object.assign({},(0,_utils__WEBPACK_IMPORTED_MODULE_5__._U)(props),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.v)(props))}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hO)("Box"),styled_system__WEBPACK_IMPORTED_MODULE_2__.jf,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf,_utils__WEBPACK_IMPORTED_MODULE_3__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.E0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn);Box.displayName="Box",Box.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Box},"../../packages/core/src/Container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/Box/Box.tsx");var sizes={sm:640,md:768,lg:1024,xl:1280},paddings={sm:3,md:[3,null,4],lg:[3,null,4],xl:[3,null,4]},propTypes={maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["sm","md","lg","xl"])},Container=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(___WEBPACK_IMPORTED_MODULE_3__.Z).attrs((function(props){return props.size?{px:paddings[props.size],maxWidth:props.size?sizes[props.size]+"px":props.maxWidth}:props.maxWidth?{maxWidth:props.maxWidth+"px"}:{maxWidth:props.theme.maxContainerWidth}}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"])));Container.propTypes=propTypes,Container.displayName="Container";const __WEBPACK_DEFAULT_EXPORT__=Container},"../../packages/core/src/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_5__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.bf.propTypes,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("color")},styled_system__WEBPACK_IMPORTED_MODULE_5__.cq.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me.propTypes,{wrap:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("flexWrap"),align:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("alignItems"),justify:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("justifyContent")}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_8__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_5__.cq,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO);Flex.propTypes=propTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/Relative/Relative.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");var propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_2__.we.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.F2.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.I.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.t$.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_2__.W5.propTypes),Relative=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_4__.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  position: relative;\n  "," "," "," ","\n  ","\n"])),styled_system__WEBPACK_IMPORTED_MODULE_2__.we,styled_system__WEBPACK_IMPORTED_MODULE_2__.I,styled_system__WEBPACK_IMPORTED_MODULE_2__.t$,styled_system__WEBPACK_IMPORTED_MODULE_2__.F2,styled_system__WEBPACK_IMPORTED_MODULE_2__.W5);Relative.propTypes=propTypes,Relative.displayName="Relative";const __WEBPACK_DEFAULT_EXPORT__=Relative},"../../packages/core/src/utils/attrs/borderRadiusAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YP:()=>roundedValues,Ze:()=>borderRadiusValues,_U:()=>borderRadiusAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var roundedValues=["top","right","bottom","left","topLeft","topRight","bottomRight","bottomLeft"],borderRadiusValues=["none","xsm","sm","md","lg","xl","2xl","3xl","full","action-sm","action-md","action-lg"];function calculateRoundedProps(radius,rounded){var topRight=0,bottomRight=0,bottomLeft=0,topLeft=0;return rounded&&"round"!==rounded?("top"===rounded?topLeft=topRight=radius:"right"===rounded?topRight=bottomRight=radius:"bottom"===rounded?bottomRight=bottomLeft=radius:"left"===rounded?topLeft=bottomLeft=radius:"topLeft"===rounded?topLeft=radius:"topRight"===rounded?topRight=radius:"bottomRight"===rounded?bottomRight=radius:"bottomLeft"===rounded&&(bottomLeft=radius),topLeft+" "+topRight+" "+bottomRight+" "+bottomLeft):radius}function borderRadiusAttrs(_ref){var borderRadius=_ref.borderRadius,rounded=_ref.rounded,theme=_ref.theme;if(!borderRadius)return{};if(Array.isArray(borderRadius))return{borderRadius:borderRadius.map((function(radius){return theme.borderRadii[radius]})).map((function(radius){return radius?calculateRoundedProps(radius,rounded):borderRadius}))};var _effectiveRadius=theme.borderRadii[borderRadius];return{borderRadius:_effectiveRadius?calculateRoundedProps(_effectiveRadius,rounded):borderRadius}}},"../../packages/core/src/utils/attrs/boxShadowAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>boxShadowSizeValues,v:()=>boxShadowAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var ___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),boxShadowSizeValues=["sm","md","lg","xl","2xl","overlay-lg","overlay-xl"];function calculateShadowProps(effectiveShadow,effectiveColor){if(effectiveColor){var rgb=(0,___WEBPACK_IMPORTED_MODULE_6__.oo)(effectiveColor);return effectiveShadow.replace("rgba(0,0,0,",rgb.slice(0,rgb.length-1)+", ")}return effectiveShadow}function boxShadowAttrs(props){var effectiveColor,boxShadowSize=props.boxShadowSize,boxShadowColor=props.boxShadowColor,theme=props.theme;if(!boxShadowSize)return{};if(boxShadowColor){var shadowColor=boxShadowColor.split(".")[0]+".dark";effectiveColor=(0,___WEBPACK_IMPORTED_MODULE_6__.ow)(shadowColor)(props)}return Array.isArray(boxShadowSize)?{boxShadow:boxShadowSize.map((function(size){return theme.shadows[size]})).map((function(shadow){return calculateShadowProps(shadow,effectiveColor)}))}:{boxShadow:calculateShadowProps(theme.shadows[boxShadowSize],effectiveColor)}}},"../../packages/core/src/utils/createPalette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>paletteFamilies,r:()=>createPalette});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js");var _excluded=["palette"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var deepmerge=__webpack_require__("../../common/temp/node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"),paletteFamilies=["primary","secondary","text","highlight","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],createPalette=function createPalette(_ref){var _ref$palette=_ref.palette,palette=void 0===_ref$palette?{}:_ref$palette,_theme$colors=_objectWithoutProperties(_ref,_excluded).colors,lightBlue=_theme$colors.lightBlue,tintBlue=_theme$colors.tintBlue,blue=_theme$colors.blue,toneBlue=_theme$colors.toneBlue,darkBlue=_theme$colors.darkBlue,shadeBlue=_theme$colors.shadeBlue,lightGreen=_theme$colors.lightGreen,tintGreen=_theme$colors.tintGreen,green=_theme$colors.green,toneGreen=_theme$colors.toneGreen,darkGreen=_theme$colors.darkGreen,shadeGreen=_theme$colors.shadeGreen,lightRed=_theme$colors.lightRed,tintRed=_theme$colors.tintRed,red=_theme$colors.red,toneRed=_theme$colors.toneRed,darkRed=_theme$colors.darkRed,shadeRed=_theme$colors.shadeRed,lightOrange=_theme$colors.lightOrange,tintOrange=_theme$colors.tintOrange,orange=_theme$colors.orange,toneOrange=_theme$colors.toneOrange,darkOrange=_theme$colors.darkOrange,shadeOrange=_theme$colors.shadeOrange,lightYellow=_theme$colors.lightYellow,tintYellow=_theme$colors.tintYellow,yellow=_theme$colors.yellow,toneYellow=_theme$colors.toneYellow,darkYellow=_theme$colors.darkYellow,shadeYellow=_theme$colors.shadeYellow,lightPurple=_theme$colors.lightPurple,tintPurple=_theme$colors.tintPurple,purple=_theme$colors.purple,tonePurple=_theme$colors.tonePurple,darkPurple=_theme$colors.darkPurple,shadePurple=_theme$colors.shadePurple,lightPink=_theme$colors.lightPink,tintPink=_theme$colors.tintPink,pink=_theme$colors.pink,tonePink=_theme$colors.tonePink,darkPink=_theme$colors.darkPink,shadePink=_theme$colors.shadePink,lightestText=_theme$colors.lightestText,lightText=_theme$colors.lightText,tintText=_theme$colors.tintText,text=_theme$colors.text,darkText=_theme$colors.darkText,headingText=_theme$colors.headingText,lightHighlight=_theme$colors.lightHighlight,tintHighlight=_theme$colors.tintHighlight,highlight=_theme$colors.highlight,toneHighlight=_theme$colors.toneHighlight,darkHighlight=_theme$colors.darkHighlight,shadeHighlight=_theme$colors.shadeHighlight,lightestBackground=_theme$colors.lightestBackground,lightBackground=_theme$colors.lightBackground,tintBackground=_theme$colors.tintBackground,background=_theme$colors.background,toneBackground=_theme$colors.toneBackground,darkBackground=_theme$colors.darkBackground,shadeBackground=_theme$colors.shadeBackground,darkestBackground=_theme$colors.darkestBackground,lightBorder=_theme$colors.lightBorder,tintBorder=_theme$colors.tintBorder,border=_theme$colors.border,toneBorder=_theme$colors.toneBorder,darkBorder=_theme$colors.darkBorder,shadeBorder=_theme$colors.shadeBorder;return deepmerge({primary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},secondary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},text:{lightest:lightestText,light:lightText,tint:tintText,base:text,dark:darkText,heading:headingText},highlight:{light:lightHighlight,tint:tintHighlight,base:highlight,tone:toneHighlight,dark:darkHighlight,shade:shadeHighlight},success:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},error:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},warning:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},alert:{light:lightOrange,tint:tintOrange,base:orange,tone:toneOrange,dark:darkOrange,shade:shadeOrange},caution:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},notify:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},pricePrimary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},priceSecondary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},strike:{base:red},promoPrimary:{light:lightPurple,tint:tintPurple,base:purple,tone:tonePurple,dark:darkPurple,shade:shadePurple},promoSecondary:{light:lightPink,tint:tintPink,base:pink,tone:tonePink,dark:darkPink,shade:shadePink},border:{light:lightBorder,tint:tintBorder,base:border,tone:toneBorder,dark:darkBorder,shade:shadeBorder},background:{lightest:lightestBackground,light:lightBackground,tint:tintBackground,base:background,tone:toneBackground,dark:darkBackground,shade:shadeBackground,darkest:darkestBackground}},palette)}}}]);