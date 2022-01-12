(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[5205],{"../../packages/core/src/BackgroundImage/BackgroundImage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FixedHeight:()=>FixedHeight,FixedIntHeight:()=>FixedIntHeight,Responsive:()=>Responsive,_BackgroundImage:()=>_BackgroundImage,default:()=>BackgroundImage_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var BackgroundImage=__webpack_require__("../../packages/core/src/BackgroundImage/BackgroundImage.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Text=__webpack_require__("../../packages/core/src/Text/Text.js"),variations=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),["static","parallax"]),defaultArgs={height:"320px",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4",variation:"static"},argTypes={variation:{name:"variation",type:{name:"string",required:!1},description:"Control attachment mode of background",table:{type:{summary:"Variations",detail:"- "+variations.join("\n- ")},defaultValue:{summary:"fill"}},control:{type:"select",options:variations}},height:{name:"height",type:{name:"string",required:!1},description:"height",table:{defaultValue:{summary:void 0}}},width:{name:"width",type:{name:"string",required:!1},description:"width",table:{defaultValue:{summary:void 0}}},image:{name:"image",type:{name:"string",required:!1},description:"url of background image",table:{defaultValue:{summary:void 0}}}},jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const BackgroundImage_stories={title:"core / BackgroundImage",component:BackgroundImage.Z,args:defaultArgs,argTypes,decorators:[function(Story){return(0,jsx_runtime.jsx)(Box.Z,{height:"600px",width:"100%",children:Story()})}],parameters:{docs:{description:{component:"Use the <code>&lt;BackgroundImage /&gt;</code> component to render a\n    background image. Use the *variation* prop to change the attachment mode\n    of the background."}}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(BackgroundImage.Z,Object.assign({},args))};Template.displayName="Template";var _BackgroundImage=Template.bind({}),StoryChildren=function StoryChildren(){return(0,jsx_runtime.jsx)(Box.Z,{p:4,children:(0,jsx_runtime.jsx)(Text.ZP,{fontSize:6,fontWeight:"bold",textAlign:"center",color:"white",children:"Hello"})})};StoryChildren.displayName="StoryChildren";var FixedHeight=Template.bind({});FixedHeight.args={height:"320px",width:"360px",children:(0,jsx_runtime.jsx)(StoryChildren,{})};var FixedIntHeight=Template.bind({});FixedIntHeight.storyName="Fixed Height (Integer)",FixedIntHeight.args={height:400,width:"360px",children:(0,jsx_runtime.jsx)(StoryChildren,{})};var Responsive=Template.bind({});Responsive.args={height:["100px","300px","600px"],width:["100%","216px","260px"],children:(0,jsx_runtime.jsx)(StoryChildren,{})},Responsive.parameters={viewport:{defaultViewport:"designSystem_xs"}},_BackgroundImage.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},_BackgroundImage.parameters),FixedHeight.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},FixedHeight.parameters),FixedIntHeight.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},FixedIntHeight.parameters),Responsive.parameters=Object.assign({storySource:{source:"(args) => <BackgroundImage {...args} />"}},Responsive.parameters)},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})}}]);