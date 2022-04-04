(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[2724],{"../../packages/core/lib-esm/Tooltip/Tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TooltipComponent:()=>TooltipComponent,WithAnchors:()=>WithAnchors,WithoutAnchors:()=>WithoutAnchors,default:()=>Tooltip_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Flex=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),Tooltip=__webpack_require__("../../packages/core/lib-esm/Tooltip/Tooltip.js"),Box=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),FormField=__webpack_require__("../../packages/core/lib-esm/FormField/FormField.js"),argTypes={borderRadius:{name:"borderRadius",type:{name:"string"},options:__webpack_require__("../../packages/core/lib-esm/storybook/args/index.js").LL,description:"borderRadius",control:{type:"select"}}},styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},FlexColumn=(0,styled_components_browser_esm.ZP)(Flex.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  flex-direction: column;\n"],["\n  flex-direction: column;\n"])));const Tooltip_stories={title:"Tooltip",component:Tooltip.Z,argTypes};var TooltipComponent=function Template(args){return react.createElement(Tooltip.Z,__assign({},args),"I am a tooltip!")}.bind({});TooltipComponent.args={color:"primary"};var templateObject_1,WithoutAnchors=function WithoutAnchors(){return react.createElement(Box.Z,{mt:5,width:500},react.createElement(Tooltip.Z,{bg:"blue",color:"white",top:!0,left:!0},"left tooltip"),react.createElement(Tooltip.Z,{bg:"black",color:"white",top:!0,center:!0},"centered tooltip"),react.createElement(Tooltip.Z,{bg:"red",color:"white",top:!0,right:!0},"right tooltip"),react.createElement("br",null),react.createElement(Tooltip.Z,{bottom:!0,left:!0},"left tooltip"),react.createElement(Tooltip.Z,{bottom:!0,center:!0},"centered tooltip"),react.createElement(Tooltip.Z,{bottom:!0,right:!0},"right tooltip"))},WithAnchors=function WithAnchors(){return react.createElement(FlexColumn,{justifyContent:"space-between",wrap:"wrap"},react.createElement(Box.Z,{width:300,p:2,my:2},react.createElement(Tooltip.Z,{top:!0,left:!0,bg:"blue",color:"white"},"top left tooltip"),react.createElement("div",null,"some text")),react.createElement(Box.Z,{width:"300px",p:2,mb:5},react.createElement("div",null,"some text"),react.createElement(Tooltip.Z,{bottom:!0,left:!0,bg:"red",color:"white"},"bottom left tooltip")),react.createElement(Box.Z,{width:"300px",p:2,mb:55},react.createElement(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-3",placeholder:"example@test.com"}),react.createElement(Tooltip.Z,{bottom:!0,left:!0,bg:"blue",color:"white"},"bottom left tooltip")),react.createElement(Box.Z,{width:"300px",p:2,mb:5},react.createElement(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-4",placeholder:"example@test.com"}),react.createElement(Tooltip.Z,{bottom:!0,center:!0,bg:"blue",color:"white"},"bottom center tooltip")),react.createElement(Box.Z,{width:"300px",p:2,mb:"80px"},react.createElement(FormField.Z,{icon:"circleInfo",color:"red",label:"Email Address",defaultValue:"albus.dumbledore@pr",id:"form-field-5",placeholder:"example@test.com"}),react.createElement(Tooltip.Z,{bottom:!0,right:!0,bg:"red",color:"white"},"Email Address Invalid")),react.createElement(Box.Z,{width:"300px",p:2,mb:5},react.createElement(Tooltip.Z,{top:!0,left:!0,bg:"blue",color:"white"},"top left tooltip"),react.createElement(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-6",placeholder:"example@test.com"})),react.createElement(Box.Z,{width:"300px",p:2,mb:5},react.createElement(Tooltip.Z,{top:!0,center:!0,bg:"blue",color:"white"},"top center tooltip"),react.createElement(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-7",placeholder:"example@test.com"})),react.createElement(Box.Z,{width:"300px",p:2},react.createElement(Tooltip.Z,{top:!0,right:!0,bg:"blue",color:"white"},"top right tooltip"),react.createElement(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-8",placeholder:"example@test.com"})))};TooltipComponent.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(Tooltip, __assign({}, args), "I am a tooltip!"); }'}},TooltipComponent.parameters),WithoutAnchors.parameters=Object.assign({storySource:{source:'function () { return (React.createElement(Box, { mt: 5, width: 500 },\n    React.createElement(Tooltip, { bg: \'blue\', color: \'white\', top: true, left: true }, "left tooltip"),\n    React.createElement(Tooltip, { bg: \'black\', color: \'white\', top: true, center: true }, "centered tooltip"),\n    React.createElement(Tooltip, { bg: \'red\', color: \'white\', top: true, right: true }, "right tooltip"),\n    React.createElement("br", null),\n    React.createElement(Tooltip, { bottom: true, left: true }, "left tooltip"),\n    React.createElement(Tooltip, { bottom: true, center: true }, "centered tooltip"),\n    React.createElement(Tooltip, { bottom: true, right: true }, "right tooltip"))); }'}},WithoutAnchors.parameters),WithAnchors.parameters=Object.assign({storySource:{source:"function () { return (React.createElement(FlexColumn, { justifyContent: 'space-between', wrap: 'wrap' },\n    React.createElement(Box, { width: 300, p: 2, my: 2 },\n        React.createElement(Tooltip, { top: true, left: true, bg: 'blue', color: 'white' }, \"top left tooltip\"),\n        React.createElement(\"div\", null, \"some text\")),\n    React.createElement(Box, { width: '300px', p: 2, mb: 5 },\n        React.createElement(\"div\", null, \"some text\"),\n        React.createElement(Tooltip, { bottom: true, left: true, bg: 'red', color: 'white' }, \"bottom left tooltip\")),\n    React.createElement(Box, { width: '300px', p: 2, mb: 55 },\n        React.createElement(InputField, { icon: 'circleInfo', color: 'blue', label: 'Email Address', defaultValue: 'albus.dumbledore@priceline.com', id: 'form-field-3', placeholder: 'example@test.com' }),\n        React.createElement(Tooltip, { bottom: true, left: true, bg: 'blue', color: 'white' }, \"bottom left tooltip\")),\n    React.createElement(Box, { width: '300px', p: 2, mb: 5 },\n        React.createElement(InputField, { icon: 'circleInfo', color: 'blue', label: 'Email Address', defaultValue: 'albus.dumbledore@priceline.com', id: 'form-field-4', placeholder: 'example@test.com' }),\n        React.createElement(Tooltip, { bottom: true, center: true, bg: 'blue', color: 'white' }, \"bottom center tooltip\")),\n    React.createElement(Box, { width: '300px', p: 2, mb: '80px' },\n        React.createElement(InputField, { icon: 'circleInfo', color: 'red', label: 'Email Address', defaultValue: 'albus.dumbledore@pr', id: 'form-field-5', placeholder: 'example@test.com' }),\n        React.createElement(Tooltip, { bottom: true, right: true, bg: 'red', color: 'white' }, \"Email Address Invalid\")),\n    React.createElement(Box, { width: '300px', p: 2, mb: 5 },\n        React.createElement(Tooltip, { top: true, left: true, bg: 'blue', color: 'white' }, \"top left tooltip\"),\n        React.createElement(InputField, { icon: 'circleInfo', color: 'blue', label: 'Email Address', defaultValue: 'albus.dumbledore@priceline.com', id: 'form-field-6', placeholder: 'example@test.com' })),\n    React.createElement(Box, { width: '300px', p: 2, mb: 5 },\n        React.createElement(Tooltip, { top: true, center: true, bg: 'blue', color: 'white' }, \"top center tooltip\"),\n        React.createElement(InputField, { icon: 'circleInfo', color: 'blue', label: 'Email Address', defaultValue: 'albus.dumbledore@priceline.com', id: 'form-field-7', placeholder: 'example@test.com' })),\n    React.createElement(Box, { width: '300px', p: 2 },\n        React.createElement(Tooltip, { top: true, right: true, bg: 'blue', color: 'white' }, \"top right tooltip\"),\n        React.createElement(InputField, { icon: 'circleInfo', color: 'blue', label: 'Email Address', defaultValue: 'albus.dumbledore@priceline.com', id: 'form-field-8', placeholder: 'example@test.com' })))); }"}},WithAnchors.parameters),WithoutAnchors.__docgenInfo={description:"",methods:[],displayName:"WithoutAnchors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Tooltip/Tooltip.stories.js"]={name:"WithoutAnchors",docgenInfo:WithoutAnchors.__docgenInfo,path:"../../packages/core/lib-esm/Tooltip/Tooltip.stories.js"}),WithAnchors.__docgenInfo={description:"",methods:[],displayName:"WithAnchors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Tooltip/Tooltip.stories.js"]={name:"WithAnchors",docgenInfo:WithAnchors.__docgenInfo,path:"../../packages/core/lib-esm/Tooltip/Tooltip.stories.js"})},"../../packages/core/lib-esm/Flex/Flex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},propTypes=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},styled_system__WEBPACK_IMPORTED_MODULE_4__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.bf.propTypes),{color:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("color")}),styled_system__WEBPACK_IMPORTED_MODULE_4__.cq.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.Kl.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.WO.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.Me.propTypes),{wrap:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("flexWrap"),align:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("alignItems"),justify:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("justifyContent")}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_7__.Z).attrs((function(_a){var wrap=_a.wrap,align=_a.align,justify=_a.justify,props=__rest(_a,["wrap","align","justify"]);return __assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"],["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_5__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_4__.cq,styled_system__WEBPACK_IMPORTED_MODULE_4__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_4__.Me,styled_system__WEBPACK_IMPORTED_MODULE_4__.WO);Flex.propTypes=propTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex;var templateObject_1},"../../packages/core/lib-esm/FormField/FormField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js");var react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),_IconField__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/lib-esm/IconField/IconField.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},FormField=function FormField(_a){var children=_a.children,props=__rest(_a,["children"]),iconBefore=!1,childrenArray=react__WEBPACK_IMPORTED_MODULE_6__.Children.toArray(children),field=childrenArray.filter((function(child){return child.type.isField}))[0],label=childrenArray.filter((function(child){return child.type.isLabel}))[0],valueNoLabel=!label&&field&&!!field.props.value,showLabel=(label&&!label.props.autoHide||field&&!!field.props.value)&&!valueNoLabel,id=field&&(field.props.id||field.props.name),styled=childrenArray.map((function(child,i,arr){return child.type.isField&&arr[i-1]&&arr[i-1].type.isIcon&&(iconBefore=!0),child===field?react__WEBPACK_IMPORTED_MODULE_6__.cloneElement(child,{id,style:__assign(__assign({},child.props.style),{transitionProperty:"padding-top, padding-bottom",transitionDuration:".1s",paddingTop:showLabel?20:14,paddingBottom:showLabel?8:14})}):child})),ml=iconBefore?"40px":"12px",styledLabel=label&&react__WEBPACK_IMPORTED_MODULE_6__.cloneElement(label,{htmlFor:label.props.htmlFor||id,fontSize:10,ml,pt:"6px",mb:"-20px",style:__assign(__assign({},label.props.style),{height:20,transitionProperty:"opacity",transitionDuration:".1s",opacity:showLabel?1:0,pointerEvents:"none",position:"relative",width:"calc(100% - ".concat(ml,")")})});return react__WEBPACK_IMPORTED_MODULE_6__.createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Z,__assign({},props),styledLabel,react__WEBPACK_IMPORTED_MODULE_6__.createElement(_IconField__WEBPACK_IMPORTED_MODULE_8__.Z,null,styled))};FormField.propTypes={children:function childrenPropType(props,propName,componentName){var children=react__WEBPACK_IMPORTED_MODULE_6__.Children.toArray(props.children),label=children.filter((function(child){return child.type.isLabel}))[0];return children.filter((function(child){return child.type.isField}))[0]?label?void 0:new Error("No label found for ".concat(componentName,". Please include a Label as a child.")):new Error("No form field found for ".concat(componentName,". Please include an Input, Select, or other form field as a child."))}},FormField.displayName="FormField",FormField.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{children:{type:{name:"custom",raw:"childrenPropType"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=FormField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/FormField/FormField.js"]={name:"FormField",docgenInfo:FormField.__docgenInfo,path:"../../packages/core/lib-esm/FormField/FormField.js"})},"../../packages/core/lib-esm/IconField/IconField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js");var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_Flex__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},IconField=function IconField(props){var children=react__WEBPACK_IMPORTED_MODULE_5__.Children.toArray(props.children).filter((function(child){return(null==child?void 0:child.type.isField)||function isIcon(item){return item.type.isIcon||item.type.isIconButton}(child)}));if(0===children.length)return null;var inputIndex=children&&children.findIndex((function(child){return child.type.isField})),prefixIcons=children.slice(0,inputIndex),input=children[inputIndex],suffixIcons=children.slice(inputIndex+1,children.length),paddingLeft=prefixIcons.length>0?40*prefixIcons.length:void 0,paddingRight=suffixIcons.length>0?40*suffixIcons.length:void 0,marginRight=prefixIcons.length>0?-40*prefixIcons.length:void 0,marginLeft=suffixIcons.length>0?-40*suffixIcons.length:void 0;return react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_6__.Z,__assign({alignItems:"center"},props),prefixIcons.length>0&&react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_6__.Z,{mr:marginRight,"data-testid":"icon-field-prefix-icons"},prefixIcons.map((function(icon,index){return react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(icon,{ml:0===index?2:0,mr:2})}))),input&&react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(input,{pl:paddingLeft,pr:paddingRight}),suffixIcons.length>0&&react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_6__.Z,{ml:marginLeft,"data-testid":"icon-field-suffix-icons"},suffixIcons.map((function(icon,index){return react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(icon,{ml:2,mr:0===index?2:0})}))))};IconField.__docgenInfo={description:"",methods:[],displayName:"IconField"};const __WEBPACK_DEFAULT_EXPORT__=IconField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/IconField/IconField.js"]={name:"IconField",docgenInfo:IconField.__docgenInfo,path:"../../packages/core/lib-esm/IconField/IconField.js"})},"../../packages/core/lib-esm/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),_Box__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TooltipContent=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_6__.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  display: inline;\n  box-shadow: ",";\n  font-size: ","px;\n  position: absolute;\n  box-sizing: border-box;\n  background: ",";\n  text-align: center;\n\n  "," "," &::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent\n      ","\n      ",";\n\n    "," "," "," ",";\n  }\n\n  ","\n"],["\n  display: inline;\n  box-shadow: ",";\n  font-size: ","px;\n  position: absolute;\n  box-sizing: border-box;\n  background: ",";\n  text-align: center;\n\n  "," "," &::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent\n      ","\n      ",";\n\n    "," "," "," ",";\n  }\n\n  ","\n"])),(function(_a){return _a.theme.boxShadows[1]}),(function(_a){return _a.theme.fontSizes[0]}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.bg||props.color,"base")(props)}),(function tooltipPosition(props){return props.top?{bottom:"-8px"}:{top:0}}),(function tooltipAlign(props){return props.right?{right:0}:props.center?{left:"50%",width:"auto",transform:"translateX(-50%)"}:null}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.bg||props.color,"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.bg||props.color,"base")(props)}),(function arrow(props){return props.top?{"transform-origin":"0 0",transform:"rotate(-45deg)"}:{"transform-origin":"0 0",transform:"rotate(-225deg)"}}),(function arrowPosition(props){return props.top?{"transform-origin":"0 0",transform:"rotate(-45deg)",bottom:"-10px"}:{"transform-origin":"0 0",transform:"rotate(-225deg)",top:"0"}}),(function arrowAlign(props){return props.left?{left:"16px","margin-left":props.top?0:"15px"}:props.center?{left:"50%","margin-left":props.top?"-7px":"7px"}:{right:"16px","margin-right":props.top?"5px":"-10px"}}),(function arrowShadow(props){return props.top?{"box-shadow":"-9.66px 9.66px 8px 0 rgba(0,0,0,0.04), -4px 4px 4px 0 rgba(0,0,0,0.08)"}:{"box-shadow":"-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)"}}),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Tooltip")),propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_8___default().any.isRequired,bg:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("color"),color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),bottom:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,top:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,center:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,left:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,right:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,zIndex:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().number,prop_types__WEBPACK_IMPORTED_MODULE_8___default().string])},Tooltip=function Tooltip(_a){var children=_a.children,props=__rest(_a,["children"]);return react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{style:{position:"relative",zIndex:props.zIndex}},react__WEBPACK_IMPORTED_MODULE_4__.createElement(TooltipContent,__assign({p:2,mb:3,mt:2},props),children))};Tooltip.propTypes=propTypes,Tooltip.defaultProps={borderRadius:"md",position:"bottom",color:"background.lightest",zIndex:"auto"},Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{borderRadius:{defaultValue:{value:"'md'",computed:!1},required:!1},position:{defaultValue:{value:"'bottom'",computed:!1},required:!1},color:{defaultValue:{value:"'background.lightest'",computed:!1},type:{name:"custom",raw:"deprecatedColorValue()"},required:!1,description:""},zIndex:{defaultValue:{value:"'auto'",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},children:{type:{name:"any"},required:!0,description:""},bg:{type:{name:"custom",raw:"deprecatedPropType('color')"},required:!1,description:""},bottom:{type:{name:"bool"},required:!1,description:""},top:{type:{name:"bool"},required:!1,description:""},center:{type:{name:"bool"},required:!1,description:""},left:{type:{name:"bool"},required:!1,description:""},right:{type:{name:"bool"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Zz)(Tooltip);var templateObject_1;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Tooltip/Tooltip.js"]={name:"Tooltip",docgenInfo:Tooltip.__docgenInfo,path:"../../packages/core/lib-esm/Tooltip/Tooltip.js"})},"../../packages/core/lib-esm/storybook/args/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors,LL:()=>borderRadii,eP:()=>rounded,q:()=>shadows,sq:()=>textStyles,CH:()=>fontSizes});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/utils/createPalette.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/boxShadowAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},colors=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_3__.g,!0),["NOTVALID"],!1),borderRadii=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.Ze,!0),["NOTVALID"],!1),rounded=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.YP,!0),["NOTVALID"],!1),shadows=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_5__.d,!0),["NOTVALID"],!1),textStyles=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_6__.F,!0),["NOTVALID"],!1),fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{}),[0,1,2,3,4,5,6,7,8])},"../../packages/core/lib-esm/utils/attrs/typographyAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","paragraph","caption","overline","disclaimer","highlight","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"];function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){var styleProps=style&&style.hasOwnProperty("fontSize")?Object.keys(style):[];return 0===styleProps.length?["fontSize","fontWeight","lineHeight","letterSpacing","textTransform"].forEach((function(styleProp){acc[styleProp].push(null)})):styleProps.forEach((function(styleProp){acc[styleProp].push(style[styleProp])})),acc}),{fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[],textTransform:[]}):theme.typography[textStyle]:{}}},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),bind=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind})}}]);