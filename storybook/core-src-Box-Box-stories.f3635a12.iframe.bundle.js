(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[9699],{"../../packages/core/src/Box/Box.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxShadow:()=>BoxShadow,Color:()=>Color,DirectionalMargin:()=>DirectionalMargin,DirectionalPadding:()=>DirectionalPadding,DisplayAndSize:()=>DisplayAndSize,Height:()=>Height,Margin:()=>Margin,MaxAndMinValues:()=>MaxAndMinValues,Padding:()=>Padding,PixelWidth:()=>PixelWidth,Size:()=>Size,ThemeUserCaseColorText:()=>ThemeUserCaseColorText,VwWidth:()=>VwWidth,Width:()=>Width,_Box:()=>_Box,default:()=>Box_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Text=__webpack_require__("../../packages/core/src/Text/Text.js"),args=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/storybook/args/index.js")),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),defaultArgs={p:3,m:0,children:(0,jsx_runtime.jsx)(Text.ZP,{children:"Hello!"})},argTypes={color:{name:"color",type:{name:"string",required:!1},description:"Palette color to use",table:{type:{summary:"Colors",detail:"- "+args.O9.join("\n- ")},defaultValue:{summary:"primary"}},control:{type:"select",options:args.O9}},boxShadowSize:{name:"boxShadowSize",type:{name:"string",required:!1},description:"Size of the box shadow",table:{defaultValue:{summary:null}},control:{type:"select",options:["sm","md","lg","xl"]}},size:{name:"size",type:{name:"string",required:!1},description:"size",table:{defaultValue:{summary:void 0}}},height:{name:"height",type:{name:"string",required:!1},description:"height",table:{defaultValue:{summary:void 0}}},width:{name:"width",type:{name:"string",required:!1},description:"width",table:{defaultValue:{summary:void 0}}},minHeight:{name:"minHeight",type:{name:"string",required:!1},description:"minHeight",table:{defaultValue:{summary:void 0}}},minWidth:{name:"minWidth",type:{name:"string",required:!1},description:"minWidth",table:{defaultValue:{summary:void 0}}},maxHeight:{name:"maxHeight",type:{name:"string",required:!1},description:"maxHeight",table:{defaultValue:{summary:void 0}}},maxWidth:{name:"maxWidth",type:{name:"string",required:!1},description:"maxWidth",table:{defaultValue:{summary:void 0}}}};const Box_stories={title:"core / Box",component:Box.Z,args:defaultArgs,argTypes,parameters:{docs:{description:{component:"A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width."}}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(Box.Z,Object.assign({},args))};Template.displayName="Template";var _Box=Template.bind({}),DisplayAndSize=Template.bind({});DisplayAndSize.storyName="Display and Size",DisplayAndSize.args={color:"alert.base",display:["none",null,"block"],size:250};var Padding=Template.bind({});Padding.args={p:4,color:"background.base"};var Height=Template.bind({});Height.args={color:"warning.base",height:[250,350,450,550],width:[150,250,350,450]};var MaxAndMinValues=Template.bind({});MaxAndMinValues.storyName="Min and Max Values",MaxAndMinValues.args={color:"priceSecondary.base",maxHeight:[300,null,400,null,500],maxWidth:[300,null,400,null,500],minHeight:[100,null,200,null,300],minWidth:[300,null,200,null,100]};var Margin=Template.bind({});Margin.args={m:3,color:"background.base"};var Color=Template.bind({});Color.args={color:"primary.base"};var BoxShadow=Template.bind({});BoxShadow.args={boxShadowSize:"sm",p:2,mb:"42px",color:"primary.base"};var Size=Template.bind({});Size.args={color:"primary.base",size:200};var DimsChildren=function DimsChildren(){return(0,jsx_runtime.jsx)(Text.ZP,{color:"text.lightest",children:"Box Dimensions"})};DimsChildren.displayName="DimsChildren";var Width=Template.bind({});Width.args={color:"primary.base",width:.5,children:(0,jsx_runtime.jsx)(DimsChildren,{})};var PixelWidth=Template.bind({});PixelWidth.args={color:"primary.base",width:256,children:(0,jsx_runtime.jsx)(DimsChildren,{})};var VwWidth=Template.bind({});VwWidth.storyName="Viewport Width unit",VwWidth.args={color:"primary.base",width:"75vw",children:(0,jsx_runtime.jsx)(DimsChildren,{})};var DirectionalPadding=function DirectionalPadding(){return(0,jsx_runtime.jsxs)(Box.Z,{p:3,children:[(0,jsx_runtime.jsx)(Box.Z,{m:1,pt:3,color:"white",bg:"blue",children:"Padding Top"}),(0,jsx_runtime.jsx)(Box.Z,{m:1,pr:3,color:"white",bg:"blue",children:"Padding Right"}),(0,jsx_runtime.jsx)(Box.Z,{m:1,pb:3,color:"white",bg:"blue",children:"Padding Bottom"}),(0,jsx_runtime.jsx)(Box.Z,{m:1,pl:3,color:"white",bg:"blue",children:"Padding Left"}),(0,jsx_runtime.jsx)(Box.Z,{m:1,px:3,color:"white",bg:"blue",children:"Padding X-Axis"}),(0,jsx_runtime.jsx)(Box.Z,{m:1,py:3,color:"white",bg:"blue",children:"Padding Y-Axis"})]})};DirectionalPadding.displayName="DirectionalPadding";var DirectionalMargin=function DirectionalMargin(){return(0,jsx_runtime.jsxs)(Box.Z,{p:3,children:[(0,jsx_runtime.jsx)(Box.Z,{mt:3,color:"white",bg:"blue",children:"Margin Top"}),(0,jsx_runtime.jsx)(Box.Z,{mr:3,color:"white",bg:"blue",children:"Margin Right"}),(0,jsx_runtime.jsx)(Box.Z,{mb:3,color:"white",bg:"blue",children:"Margin Bottom"}),(0,jsx_runtime.jsx)(Box.Z,{ml:3,color:"white",bg:"blue",children:"Margin Left"}),(0,jsx_runtime.jsx)(Box.Z,{mx:3,color:"white",bg:"blue",children:"Margin X-Axis"}),(0,jsx_runtime.jsx)(Box.Z,{my:3,color:"white",bg:"blue",children:"Margin Y-Axis"})]})};DirectionalMargin.displayName="DirectionalMargin";var ThemeUserCaseColorText=function ThemeUserCaseColorText(){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)(Box.Z,{p:3,children:[(0,jsx_runtime.jsx)(Box.Z,{mt:3,color:"text",children:'color="text" w/o bg prop: retains the original "text" color from original color set as backward compatible: expected style w. "text" color and white background'}),(0,jsx_runtime.jsx)(Box.Z,{mt:3,color:"purple",children:'color="purple" as none "text" color w/o bg prop'})]}),(0,jsx_runtime.jsxs)(Box.Z,{p:5,children:[(0,jsx_runtime.jsx)(Box.Z,{mt:3,color:"text.lightest",bg:"background.dark",children:'Theme 1: color="text.lightest" value & bg="background.dark"'}),(0,jsx_runtime.jsx)(Box.Z,{mt:3,color:"text",bg:"background.lightest",children:'Theme 2: color="text" & "bg"="background.lightest"'})]})]})};ThemeUserCaseColorText.displayName="ThemeUserCaseColorText",ThemeUserCaseColorText.storyName="Theme user case: color=text",_Box.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},_Box.parameters),DisplayAndSize.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},DisplayAndSize.parameters),Padding.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Padding.parameters),Height.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Height.parameters),MaxAndMinValues.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},MaxAndMinValues.parameters),Margin.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Margin.parameters),Color.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Color.parameters),BoxShadow.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},BoxShadow.parameters),Size.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Size.parameters),Width.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Width.parameters),PixelWidth.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},PixelWidth.parameters),VwWidth.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},VwWidth.parameters),DirectionalPadding.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Box m={1} pt={3} color='white' bg='blue'>\n      Padding Top\n    </Box>\n    <Box m={1} pr={3} color='white' bg='blue'>\n      Padding Right\n    </Box>\n    <Box m={1} pb={3} color='white' bg='blue'>\n      Padding Bottom\n    </Box>\n    <Box m={1} pl={3} color='white' bg='blue'>\n      Padding Left\n    </Box>\n    <Box m={1} px={3} color='white' bg='blue'>\n      Padding X-Axis\n    </Box>\n    <Box m={1} py={3} color='white' bg='blue'>\n      Padding Y-Axis\n    </Box>\n  </Box>\n)"}},DirectionalPadding.parameters),DirectionalMargin.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Box mt={3} color='white' bg='blue'>\n      Margin Top\n    </Box>\n    <Box mr={3} color='white' bg='blue'>\n      Margin Right\n    </Box>\n    <Box mb={3} color='white' bg='blue'>\n      Margin Bottom\n    </Box>\n    <Box ml={3} color='white' bg='blue'>\n      Margin Left\n    </Box>\n    <Box mx={3} color='white' bg='blue'>\n      Margin X-Axis\n    </Box>\n    <Box my={3} color='white' bg='blue'>\n      Margin Y-Axis\n    </Box>\n  </Box>\n)"}},DirectionalMargin.parameters),ThemeUserCaseColorText.parameters=Object.assign({storySource:{source:'() => (\n  <React.Fragment>\n    <Box p={3}>\n      <Box mt={3} color=\'text\'>\n        color="text" w/o bg prop: retains the original "text" color from original color set as backward\n        compatible: expected style w. "text" color and white background\n      </Box>\n      <Box mt={3} color=\'purple\'>\n        color="purple" as none "text" color w/o bg prop\n      </Box>\n    </Box>\n    <Box p={5}>\n      <Box mt={3} color=\'text.lightest\' bg=\'background.dark\'>\n        Theme 1: color="text.lightest" value & bg="background.dark"\n      </Box>\n      <Box mt={3} color=\'text\' bg=\'background.lightest\'>\n        Theme 2: color="text" & "bg"="background.lightest"\n      </Box>\n    </Box>\n  </React.Fragment>\n)'}},ThemeUserCaseColorText.parameters),DirectionalPadding.__docgenInfo={description:"",methods:[],displayName:"DirectionalPadding"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Box/Box.stories.js"]={name:"DirectionalPadding",docgenInfo:DirectionalPadding.__docgenInfo,path:"../../packages/core/src/Box/Box.stories.js"}),DirectionalMargin.__docgenInfo={description:"",methods:[],displayName:"DirectionalMargin"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Box/Box.stories.js"]={name:"DirectionalMargin",docgenInfo:DirectionalMargin.__docgenInfo,path:"../../packages/core/src/Box/Box.stories.js"}),ThemeUserCaseColorText.__docgenInfo={description:"",methods:[],displayName:"ThemeUserCaseColorText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Box/Box.stories.js"]={name:"ThemeUserCaseColorText",docgenInfo:ThemeUserCaseColorText.__docgenInfo,path:"../../packages/core/src/Box/Box.stories.js"})},"../../packages/core/src/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("../../packages/core/src/theme/theme.js");var _templateObject,utils=__webpack_require__("../../packages/core/src/utils/utils.js");var Box=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n  ","\n"])),(0,utils.hO)("Box"),index_esm.jf,index_esm.Cb,index_esm.kC,index_esm.kk,index_esm.jw,index_esm.ih,index_esm.dp,index_esm.Dh,index_esm.yd,index_esm.bf,(function boxShadow(props){var boxShadowTheme=props.theme.boxShadows||theme.LZ;return{sm:{"box-shadow":boxShadowTheme[0]},md:{"box-shadow":boxShadowTheme[1]},lg:{"box-shadow":boxShadowTheme[2]},xl:{"box-shadow":boxShadowTheme[3]}}[props.boxShadowSize]}),utils.$_);Box.displayName="Box",Box.propTypes=Object.assign({},index_esm.jf.propTypes,index_esm.kC.propTypes,index_esm.kk.propTypes,index_esm.jw.propTypes,index_esm.ih.propTypes,index_esm.dp.propTypes,index_esm.Dh.propTypes,index_esm.yd.propTypes,index_esm.bf.propTypes,{bg:(0,utils.aR)("color"),boxShadowSize:prop_types_default().oneOf(["sm","md","lg","xl"]),color:(0,utils.nL)()});const Box_Box=Box},"../../packages/core/src/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),styled_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["align"],_excluded2=["align"],_excluded3=["align"],_excluded4=["align"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var textProps=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.hO)("Text"),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ow)("base"),(function(props){return props.bg?"background-color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ow)(props.bg,"base")(props)+";":""}),styled_system__WEBPACK_IMPORTED_MODULE_6__.jf,styled_system__WEBPACK_IMPORTED_MODULE_6__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_6__.kC,styled_system__WEBPACK_IMPORTED_MODULE_6__.kk,styled_system__WEBPACK_IMPORTED_MODULE_6__.jw,styled_system__WEBPACK_IMPORTED_MODULE_6__.ih,styled_system__WEBPACK_IMPORTED_MODULE_6__.tx,styled_system__WEBPACK_IMPORTED_MODULE_6__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_6__.bf,(function caps(props){return props.caps?{textTransform:"uppercase",letterSpacing:(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("letterSpacings.caps")(props)}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return props.bold?{fontWeight:props.theme.bold}:null}),styled_system__WEBPACK_IMPORTED_MODULE_6__.JB,styled_system__WEBPACK_IMPORTED_MODULE_6__.p_,styled_system__WEBPACK_IMPORTED_MODULE_6__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_6__.Nv,styled_system__WEBPACK_IMPORTED_MODULE_6__.yd,(function textDecoration(props){return props.textDecoration?"text-decoration: "+props.textDecoration+";":""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),styled_system__WEBPACK_IMPORTED_MODULE_6__.YK,styled_system__WEBPACK_IMPORTED_MODULE_6__.W5),Text=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div.attrs((function(_ref){var align=_ref.align,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({textAlign:align},props)}))(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Span=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.span.attrs((function(_ref2){var align=_ref2.align,props=_objectWithoutProperties(_ref2,_excluded2);return Object.assign({textAlign:align},props)}))(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Paragraph=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.p.attrs((function(_ref3){var align=_ref3.align,props=_objectWithoutProperties(_ref3,_excluded3);return Object.assign({textAlign:align},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Strike=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.s.attrs((function(_ref4){var align=_ref4.align,props=_objectWithoutProperties(_ref4,_excluded4);return Object.assign({textAlign:align},props)}))(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_6__.jf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.JB.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.p_.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.Ue.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.Cb.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.Nv.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.kC.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.kk.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.jw.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.ih.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.tx.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.yd.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.YK.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.bf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.W5.propTypes,{align:(0,_utils__WEBPACK_IMPORTED_MODULE_8__.aR)("textAlign"),bold:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,caps:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,color:(0,_utils__WEBPACK_IMPORTED_MODULE_8__.nL)(),enableTextShadow:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,regular:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,textDecoration:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,textShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["sm","md"])}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s";const __WEBPACK_DEFAULT_EXPORT__=Text},"../../packages/core/storybook/args/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors,CH:()=>fontSizes});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js");var colors=["primary","secondary","text","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string",required:!1},description:prop,table:{defaultValue:{summary:void 0}}},acc}),{}),[0,1,2,3,4,5,6,7,8])},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})}}]);