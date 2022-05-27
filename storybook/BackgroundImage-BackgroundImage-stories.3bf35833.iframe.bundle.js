(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[6867],{"../../packages/core/src/BackgroundImage/BackgroundImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FixedHeight:()=>FixedHeight,FixedIntHeight:()=>FixedIntHeight,Responsive:()=>Responsive,Rounded:()=>Rounded,_BackgroundImage:()=>_BackgroundImage,default:()=>BackgroundImage_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var BackgroundImage=__webpack_require__("../../packages/core/src/BackgroundImage/BackgroundImage.tsx"),Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),Text=__webpack_require__("../../packages/core/src/Text/Text.tsx"),Card=__webpack_require__("../../packages/core/src/Card/Card.tsx"),args=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/src/storybook/args/index.ts")),variations=["static","parallax"],defaultArgs={height:"320px",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4",variation:"static"},argTypes={variation:{name:"variation",type:{name:"string",required:!1},description:"Control attachment mode of background",table:{type:{summary:"Variations",detail:"- "+variations.join("\n- ")},defaultValue:{summary:"fill"}},control:{type:"select",options:variations}},borderRadius:{name:"borderRadius",type:{name:"string"},options:args.LL,description:"borderRadius",control:{type:"select"}},rounded:{name:"rounded",type:{name:"string"},options:args.eP,description:"rounded",control:{type:"select"}},height:{name:"height",type:{name:"string",required:!1},description:"height",table:{defaultValue:{summary:void 0}}},width:{name:"width",type:{name:"string",required:!1},description:"width",table:{defaultValue:{summary:void 0}}},image:{name:"image",type:{name:"string",required:!1},description:"url of background image",table:{defaultValue:{summary:void 0}}}},jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const BackgroundImage_stories={title:"core / BackgroundImage",component:BackgroundImage.Z,args:defaultArgs,argTypes,decorators:[function(story){return(0,jsx_runtime.jsx)(Box.Z,{height:"600px",width:"100%",children:story()})}],parameters:{docs:{description:{component:"Use the <code>&lt;BackgroundImage /&gt;</code> component to render a\n    background image. Use the *variation* prop to change the attachment mode\n    of the background."}}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(BackgroundImage.Z,Object.assign({},args))};Template.displayName="Template";var _BackgroundImage=Template.bind({}),StoryChildren=function StoryChildren(){return(0,jsx_runtime.jsx)(Box.Z,{p:4,children:(0,jsx_runtime.jsx)(Text.ZP,{fontSize:6,fontWeight:"bold",textAlign:"center",color:"white",children:"Hello"})})};StoryChildren.displayName="StoryChildren";var FixedHeight=Template.bind({});FixedHeight.args={height:"320px",width:"360px",children:(0,jsx_runtime.jsx)(StoryChildren,{})};var FixedIntHeight=Template.bind({});FixedIntHeight.storyName="Fixed Height (Integer)",FixedIntHeight.args={height:400,width:"360px",children:(0,jsx_runtime.jsx)(StoryChildren,{})};var Responsive=Template.bind({});Responsive.args={height:["100px","300px","600px"],width:["100%","216px","260px"],children:(0,jsx_runtime.jsx)(StoryChildren,{})},Responsive.parameters={viewport:{defaultViewport:"designSystem_xs"}};var RoundedTemplate=function RoundedTemplate(args){return(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",children:[(0,jsx_runtime.jsx)(BackgroundImage.Z,Object.assign({},args)),(0,jsx_runtime.jsx)(Card.Z,{rounded:"bottom",height:"100px",children:(0,jsx_runtime.jsx)(Text.ZP,{textAlign:"center",my:3,children:"Hello Priceline!"})})]})};RoundedTemplate.displayName="RoundedTemplate";var Rounded=RoundedTemplate.bind({});Rounded.args={borderRadius:"full",rounded:"top",height:"100px"},_BackgroundImage.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},_BackgroundImage.parameters),FixedHeight.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},FixedHeight.parameters),FixedIntHeight.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},FixedIntHeight.parameters),Responsive.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},Responsive.parameters),Rounded.parameters=Object.assign({storySource:{source:"(args) => (\n  <Box width='300px'>\n    <BackgroundImage {...args} />\n    <Card rounded='bottom' height='100px'>\n      <Text textAlign='center' my={3}>\n        Hello Priceline!\n      </Text>\n    </Card>\n  </Box>\n)"}},Rounded.parameters)},"../../packages/core/src/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["borderWidth","borderColor"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={borderColor:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)(),color:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)(),borderWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf([0,1,2])},Card=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_7__.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.hO)("Card"),(function boxBorder(_ref){var borderWidth=_ref.borderWidth,borderColor=_ref.borderColor,props=_objectWithoutProperties(_ref,_excluded);return{border:0===borderWidth?"0":borderWidth+"px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_4__.ow)(borderColor,"base")(props)}}));Card.propTypes=propTypes,Card.defaultProps={borderColor:"border",borderRadius:"xsm",borderWidth:1},Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card},"../../packages/core/src/storybook/args/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors,LL:()=>borderRadii,eP:()=>rounded,q:()=>shadows,sq:()=>textStyles,aJ:()=>inputArgs,CH:()=>fontSizes});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.name.js");var _utils__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/core/src/utils/createPalette.ts"),_utils__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../packages/core/src/utils/attrs/typographyAttrs.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var colors=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_13__.g),["NOTVALID"]),borderRadii=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_14__.Ze),["NOTVALID"]),rounded=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_14__.YP),["NOTVALID"]),shadows=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_15__.d),["NOTVALID"]),textStyles=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_16__.F),["NOTVALID"]),inputArgs=["sm","md","lg","xl"],fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{}),[0,1,2,3,4,5,6,7,8])},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),bind=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind})}}]);