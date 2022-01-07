"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[7608],{"../../packages/core/src/Container/Container.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultAlignWithThemeMaxWidth:()=>DefaultAlignWithThemeMaxWidth,InputMaxWidth:()=>InputMaxWidth,default:()=>Container_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);var Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  margin-left: auto;\n  margin-right: auto;\n\n  ",";\n"])),(function maxWidth(props){return props.maxWidth?{maxWidth:props.maxWidth+"px"}:{maxWidth:props.theme.maxContainerWidth}}));Container.propTypes={maxWidth:prop_types_default().number},Container.displayName="Container";const Container_Container=Container;var Box=__webpack_require__("../../packages/core/src/Box/Box.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const Container_stories={title:"Container",component:Container_Container};var DefaultAlignWithThemeMaxWidth=function DefaultAlignWithThemeMaxWidth(){return(0,jsx_runtime.jsx)(Container_Container,{children:(0,jsx_runtime.jsx)(Box.Z,{p:4,bg:"lightGray",style:{height:"100vh"},children:"Container Component"})})};DefaultAlignWithThemeMaxWidth.displayName="DefaultAlignWithThemeMaxWidth",DefaultAlignWithThemeMaxWidth.story={name:"Default align with theme max width"};var InputMaxWidth=function InputMaxWidth(){return(0,jsx_runtime.jsx)(Container_Container,{maxWidth:500,children:(0,jsx_runtime.jsx)(Box.Z,{p:4,bg:"lightGray",style:{height:"100vh"},children:"Container Component"})})};InputMaxWidth.displayName="InputMaxWidth",InputMaxWidth.story={name:"Input maxWidth"},DefaultAlignWithThemeMaxWidth.parameters=Object.assign({storySource:{source:"() => (\n  <Container>\n    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>\n      Container Component\n    </Box>\n  </Container>\n)"}},DefaultAlignWithThemeMaxWidth.parameters),InputMaxWidth.parameters=Object.assign({storySource:{source:"() => (\n  <Container maxWidth={500}>\n    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>\n      Container Component\n    </Box>\n  </Container>\n)"}},InputMaxWidth.parameters),DefaultAlignWithThemeMaxWidth.__docgenInfo={description:"",methods:[],displayName:"DefaultAlignWithThemeMaxWidth"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Container/Container.stories.js"]={name:"DefaultAlignWithThemeMaxWidth",docgenInfo:DefaultAlignWithThemeMaxWidth.__docgenInfo,path:"../../packages/core/src/Container/Container.stories.js"}),InputMaxWidth.__docgenInfo={description:"",methods:[],displayName:"InputMaxWidth"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Container/Container.stories.js"]={name:"InputMaxWidth",docgenInfo:InputMaxWidth.__docgenInfo,path:"../../packages/core/src/Container/Container.stories.js"})},"../../packages/core/src/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("../../packages/core/src/theme/theme.js");var _templateObject,utils=__webpack_require__("../../packages/core/src/utils/utils.js");var Box=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n  ","\n"])),(0,utils.hO)("Box"),index_esm.jf,index_esm.Cb,index_esm.kC,index_esm.kk,index_esm.jw,index_esm.ih,index_esm.dp,index_esm.Dh,index_esm.yd,index_esm.bf,(function boxShadow(props){var boxShadowTheme=props.theme.boxShadows||theme.LZ;return{sm:{"box-shadow":boxShadowTheme[0]},md:{"box-shadow":boxShadowTheme[1]},lg:{"box-shadow":boxShadowTheme[2]},xl:{"box-shadow":boxShadowTheme[3]}}[props.boxShadowSize]}),utils.$_);Box.displayName="Box",Box.propTypes=Object.assign({},index_esm.jf.propTypes,index_esm.kC.propTypes,index_esm.kk.propTypes,index_esm.jw.propTypes,index_esm.ih.propTypes,index_esm.dp.propTypes,index_esm.Dh.propTypes,index_esm.yd.propTypes,index_esm.bf.propTypes,{bg:(0,utils.aR)("color"),boxShadowSize:prop_types_default().oneOf(["sm","md","lg","xl"]),color:(0,utils.nL)()});const Box_Box=Box}}]);