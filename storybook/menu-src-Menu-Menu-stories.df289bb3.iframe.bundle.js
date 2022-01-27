"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[9091],{"../../packages/menu/src/Menu/Menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BreakpointColumns:()=>BreakpointColumns,ButtonProps:()=>ButtonProps,ChipAsPopoverButton:()=>ChipAsPopoverButton,MultilineMenu:()=>MultilineMenu,MultilineMenuWithCustomColors:()=>MultilineMenuWithCustomColors,Scrollable:()=>Scrollable,TwoColumns:()=>TwoColumns,default:()=>Menu_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.from.js");var _templateObject,react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Box=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),Flex=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),Text=__webpack_require__("../../packages/core/lib-esm/Text/Text.js"),ButtonChip=__webpack_require__("../../packages/core/lib-esm/Chip/ButtonChip/ButtonChip.js"),prop_types=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("../../packages/core/lib-esm/Button/Button.js"),ChevronDown=__webpack_require__("../../packages/icons/dist/esm/ChevronDown.js"),Popover=__webpack_require__("../../packages/popover/dist/esm/Popover/Popover.js"),MenuList=__webpack_require__("../../packages/menu/src/MenuList/MenuList.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["id","buttonNode","buttonProps","buttonText","color","width","height","size","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var LinkButton=(0,styled_components_browser_esm.ZP)(Button.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  align-items: center;\n"])));function Menu(_ref){var id=_ref.id,buttonNode=_ref.buttonNode,buttonProps=_ref.buttonProps,buttonText=_ref.buttonText,color=_ref.color,width=_ref.width,height=_ref.height,size=_ref.size,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),MenuContent=function MenuContent(_ref2){var handleClose=_ref2.handleClose;return(0,jsx_runtime.jsx)(MenuList.Z,{id,color,size,height,handleClose,children})};MenuContent.propTypes={handleClose:prop_types_default().func};var onKeyDown=(0,react.useCallback)((function(evt){var key=evt.key;"ArrowDown"!==key&&"ArrowUp"!==key||(evt.preventDefault(),evt.target.click())}),[]),ClickableNode=function ClickableNode(props){return buttonNode?react.cloneElement(buttonNode,Object.assign({onKeyDown},props)):(0,jsx_runtime.jsxs)(LinkButton,Object.assign({variation:"link"},props,{p:2},buttonProps,{onKeyDown,children:[buttonText,(0,jsx_runtime.jsx)(ChevronDown.Z,{ml:1})]}))};return(0,jsx_runtime.jsx)(Popover.Z,Object.assign({hideArrow:!0,trapFocus:!0,width,zIndex:1600,placement:"bottom","aria-controls":id,renderContent:MenuContent},props,{children:(0,jsx_runtime.jsx)(ClickableNode,{})}))}Menu.displayName="Menu",Menu.displayName="Menu",Menu.propTypes={id:prop_types_default().string,buttonNode:prop_types_default().node,buttonProps:prop_types_default().shape(Button.Z.propTypes),buttonText:prop_types_default().node,color:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),height:prop_types_default().number,size:prop_types_default().string,children:prop_types_default().node},Menu.defaultProps={width:"650px",size:"singleColumn"},Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{width:{defaultValue:{value:"'650px'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""},size:{defaultValue:{value:"'singleColumn'",computed:!1},type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},buttonNode:{type:{name:"node"},required:!1,description:""},buttonProps:{type:{name:"shape",value:"Button.propTypes",computed:!0},required:!1,description:""},buttonText:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};const Menu_Menu=Menu;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.js"]={name:"Menu",docgenInfo:Menu.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.js"});var MenuItem=__webpack_require__("../../packages/menu/src/MenuItem/MenuItem.js"),mocks_Menu=__webpack_require__("../../packages/menu/test/mocks/Menu.js"),colors=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/lib-esm/storybook/args/index.js").O9),argTypes={id:{name:"id",type:{name:"string",required:!1},description:"DOM id",table:{defaultValue:{summary:void 0}}},isOpen:{name:"isOpen",type:{name:"boolean",required:!1},description:"Is the menu open?",table:{defaultValue:{summary:!0}},control:{type:"boolean"}},buttonText:{name:"buttonText",type:{name:"string",required:!1},description:"text on Button trigger",table:{defaultValue:{summary:void 0}}},height:{name:"height",type:{name:"string",required:!1},description:"height of open menu",table:{defaultValue:{summary:void 0}}},width:{name:"width",type:{name:"string",required:!1},description:"width of open menu",table:{defaultValue:{summary:void 0}}},color:{name:"color",type:{name:"string",required:!1},description:"Palette color to use",table:{type:{summary:"Colors",detail:"- "+colors.join("\n- ")},defaultValue:{summary:"primary"}},control:{type:"select",options:colors}},size:{name:"size",type:{name:"string",required:!1},description:"Column layout",table:{defaultValue:{summary:"singleColumn"}},control:{type:"select",options:["singleColumn","twoColumns"]}}};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const Menu_stories={title:"pcln-menu / Menu",component:Menu_Menu,subcomponents:{MenuItem:MenuItem.Z,MenuList:MenuList.Z},args:{isOpen:!0,buttonText:"Menu"},argTypes,decorators:[function(Story){return(0,jsx_runtime.jsx)(Box.Z,{height:"320px",children:Story()})}],parameters:{docs:{description:{component:"some component **markdown**"}}}};var MenuItems=function MenuItems(){var _useState2=_slicedToArray((0,react.useState)("one"),2),value=_useState2[0],setValue=_useState2[1];return mocks_Menu.L.map((function(item,index){var selected=value===item.value;return(0,jsx_runtime.jsx)(MenuItem.Z,{selected,onClick:function onClick(){return setValue(item.value)},children:(0,jsx_runtime.jsxs)(Flex.Z,{flexDirection:"column",alignItems:"flex-start",children:[(0,jsx_runtime.jsx)(Text.ZP,{children:item.label}),(0,jsx_runtime.jsx)(Text.ZP,{fontSize:0,regular:!0,children:"Helper Text"})]})},index)}))},CurrencyItems=function CurrencyItems(_ref){var currencyCode=_ref.currencyCode,setCurrencyCode=_ref.setCurrencyCode;return mocks_Menu.Q.map((function(currency,index){var selected=currencyCode===currency.code;return(0,jsx_runtime.jsxs)(MenuItem.Z,{selected,onClick:function onClick(){return setCurrencyCode(currency.code)},children:[(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,width:32,textAlign:"center",mr:3,children:currency.symbol}),(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,children:currency.label})]},index)}))},Template=function Template(args){return(0,jsx_runtime.jsx)(Menu_Menu,Object.assign({},args))};Template.displayName="Template";var MultilineMenu=Template.bind({});MultilineMenu.args={children:(0,jsx_runtime.jsx)(MenuItems,{})};var MultilineMenuWithCustomColors=function MultilineMenuWithCustomColors(){var _useState4=_slicedToArray((0,react.useState)("one"),2),value=_useState4[0],setValue=_useState4[1];return(0,jsx_runtime.jsx)(Menu_Menu,{isOpen:!0,buttonText:"Menu",children:mocks_Menu.L.map((function(item,index){var selected=value===item.value,color=selected?"promoPrimary":"text",helperColor=!selected&&"text.light";return(0,jsx_runtime.jsx)(MenuItem.Z,{selected,color,onClick:function onClick(){return setValue(item.value)},children:(0,jsx_runtime.jsxs)(Flex.Z,{flexDirection:"column",alignItems:"flex-start",children:[(0,jsx_runtime.jsx)(Text.ZP,{children:item.label}),(0,jsx_runtime.jsx)(Text.ZP,{color:helperColor,fontSize:0,regular:!0,children:"Helper Text"})]})},index)}))})};MultilineMenuWithCustomColors.displayName="MultilineMenuWithCustomColors";var TwoColumns=function TwoColumns(){var _useState6=_slicedToArray((0,react.useState)("USD"),2),currencyCode=_useState6[0],setCurrencyCode=_useState6[1];return(0,jsx_runtime.jsx)(Menu_Menu,{buttonText:currencyCode,size:"twoColumns",children:(0,jsx_runtime.jsx)(CurrencyItems,{currencyCode,setCurrencyCode})})};TwoColumns.displayName="TwoColumns";var Scrollable=function Scrollable(){var _useState8=_slicedToArray((0,react.useState)("USD"),2),currencyCode=_useState8[0],setCurrencyCode=_useState8[1];return(0,jsx_runtime.jsx)(Menu_Menu,{buttonText:currencyCode,width:350,height:300,children:(0,jsx_runtime.jsx)(CurrencyItems,{currencyCode,setCurrencyCode})})};Scrollable.displayName="Scrollable";var BreakpointColumns=function BreakpointColumns(){var _useState10=_slicedToArray((0,react.useState)("USD"),2),currencyCode=_useState10[0],setCurrencyCode=_useState10[1];return(0,jsx_runtime.jsx)(Menu_Menu,{buttonText:currencyCode,size:["singleColumn",null,null,"twoColumns"],children:(0,jsx_runtime.jsx)(CurrencyItems,{currencyCode,setCurrencyCode})})};BreakpointColumns.displayName="BreakpointColumns";var ButtonProps=function ButtonProps(){return(0,jsx_runtime.jsxs)(Flex.Z,{flexDirection:"column",color:"background.darkest",width:1,p:2,children:[(0,jsx_runtime.jsx)(Text.ZP,{children:"Pretend Header"}),(0,jsx_runtime.jsx)(Text.ZP,{children:"Example"}),(0,jsx_runtime.jsx)(Menu_Menu,{width:300,buttonText:"Menu",buttonProps:{color:"text.lightest",size:"large",width:1,p:3},children:(0,jsx_runtime.jsx)(MenuItems,{})}),(0,jsx_runtime.jsx)(Text.ZP,{children:"Example"})]})};ButtonProps.displayName="ButtonProps";var ChipAsPopoverButton=function ChipAsPopoverButton(){var _useState12=_slicedToArray((0,react.useState)("USD"),2),currencyCode=_useState12[0],setCurrencyCode=_useState12[1],buttonNode=(0,jsx_runtime.jsx)(ButtonChip.Z,{label:currencyCode});return(0,jsx_runtime.jsx)(Menu_Menu,{idx:"currency-selector",buttonNode,size:"twoColumns",children:mocks_Menu.Q.map((function(currency,index){var selected=currencyCode===currency.code;return(0,jsx_runtime.jsxs)(MenuItem.Z,{selected,onClick:function onClick(){return setCurrencyCode(currency.code)},children:[(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,width:32,textAlign:"center",mr:3,children:currency.symbol}),(0,jsx_runtime.jsx)(Text.ZP,{regular:!0,children:currency.label})]},index)}))})};ChipAsPopoverButton.displayName="ChipAsPopoverButton",MultilineMenu.parameters=Object.assign({storySource:{source:"(args) => <Menu {...args} />"}},MultilineMenu.parameters),MultilineMenuWithCustomColors.parameters=Object.assign({storySource:{source:"() => {\n  const [value, setValue] = useState('one')\n\n  return (\n    <Menu isOpen buttonText='Menu'>\n      {listItems.map((item, index) => {\n        const selected = value === item.value\n        const color = selected ? 'promoPrimary' : 'text'\n        const helperColor = !selected && 'text.light'\n        const onClick = () => setValue(item.value)\n        return (\n          <MenuItem key={index} selected={selected} color={color} onClick={onClick}>\n            <Flex flexDirection='column' alignItems='flex-start'>\n              <Text>{item.label}</Text>\n              <Text color={helperColor} fontSize={0} regular>\n                Helper Text\n              </Text>\n            </Flex>\n          </MenuItem>\n        )\n      })}\n    </Menu>\n  )\n}"}},MultilineMenuWithCustomColors.parameters),TwoColumns.parameters=Object.assign({storySource:{source:"() => {\n  const [currencyCode, setCurrencyCode] = useState('USD')\n\n  return (\n    <Menu buttonText={currencyCode} size='twoColumns'>\n      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />\n    </Menu>\n  )\n}"}},TwoColumns.parameters),Scrollable.parameters=Object.assign({storySource:{source:"() => {\n  const [currencyCode, setCurrencyCode] = useState('USD')\n\n  return (\n    <Menu buttonText={currencyCode} width={350} height={300}>\n      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />\n    </Menu>\n  )\n}"}},Scrollable.parameters),BreakpointColumns.parameters=Object.assign({storySource:{source:"() => {\n  const [currencyCode, setCurrencyCode] = useState('USD')\n\n  return (\n    <Menu buttonText={currencyCode} size={['singleColumn', null, null, 'twoColumns']}>\n      <CurrencyItems currencyCode={currencyCode} setCurrencyCode={setCurrencyCode} />\n    </Menu>\n  )\n}"}},BreakpointColumns.parameters),ButtonProps.parameters=Object.assign({storySource:{source:"() => {\n  return (\n    <Flex flexDirection='column' color='background.darkest' width={1} p={2}>\n      <Text>Pretend Header</Text>\n      <Text>Example</Text>\n      <Menu\n        width={300}\n        buttonText='Menu'\n        buttonProps={{ color: 'text.lightest', size: 'large', width: 1, p: 3 }}\n      >\n        <MenuItems />\n      </Menu>\n      <Text>Example</Text>\n    </Flex>\n  )\n}"}},ButtonProps.parameters),ChipAsPopoverButton.parameters=Object.assign({storySource:{source:"() => {\n  const [currencyCode, setCurrencyCode] = useState('USD')\n  const buttonNode = <ButtonChip label={currencyCode} />\n\n  return (\n    <Menu idx='currency-selector' buttonNode={buttonNode} size='twoColumns'>\n      {currencies.map((currency, index) => {\n        const selected = currencyCode === currency.code\n        const onClick = () => setCurrencyCode(currency.code)\n        return (\n          <MenuItem key={index} selected={selected} onClick={onClick}>\n            <Text regular width={32} textAlign='center' mr={3}>\n              {currency.symbol}\n            </Text>\n            <Text regular>{currency.label}</Text>\n          </MenuItem>\n        )\n      })}\n    </Menu>\n  )\n}"}},ChipAsPopoverButton.parameters),MultilineMenuWithCustomColors.__docgenInfo={description:"",methods:[],displayName:"MultilineMenuWithCustomColors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.stories.js"]={name:"MultilineMenuWithCustomColors",docgenInfo:MultilineMenuWithCustomColors.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.stories.js"}),TwoColumns.__docgenInfo={description:"",methods:[],displayName:"TwoColumns"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.stories.js"]={name:"TwoColumns",docgenInfo:TwoColumns.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.stories.js"}),Scrollable.__docgenInfo={description:"",methods:[],displayName:"Scrollable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.stories.js"]={name:"Scrollable",docgenInfo:Scrollable.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.stories.js"}),BreakpointColumns.__docgenInfo={description:"",methods:[],displayName:"BreakpointColumns"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.stories.js"]={name:"BreakpointColumns",docgenInfo:BreakpointColumns.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.stories.js"}),ButtonProps.__docgenInfo={description:"",methods:[],displayName:"ButtonProps"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.stories.js"]={name:"ButtonProps",docgenInfo:ButtonProps.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.stories.js"}),ChipAsPopoverButton.__docgenInfo={description:"",methods:[],displayName:"ChipAsPopoverButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/Menu/Menu.stories.js"]={name:"ChipAsPopoverButton",docgenInfo:ChipAsPopoverButton.__docgenInfo,path:"../../packages/menu/src/Menu/Menu.stories.js"})},"../../packages/core/lib-esm/Chip/ButtonChip/ButtonChip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),pcln_icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/icons/dist/esm/ChevronDown.js"),_ChipContent__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../packages/core/lib-esm/Chip/ChipContent/ChipContent.js"),_ChipContentWrapper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/Chip/ChipContentWrapper.js"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/Button/Button.js"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},ChipButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_Button__WEBPACK_IMPORTED_MODULE_6__.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  border: none;\n  padding: 0;\n  &:focus {\n    box-shadow: none;\n    outline: none;\n  }\n  &:focus > "," {\n    box-shadow: 0 0 0 1px ",";\n    border-color: ",";\n  }\n"],["\n  border: none;\n  padding: 0;\n  &:focus {\n    box-shadow: none;\n    outline: none;\n  }\n  &:focus > "," {\n    box-shadow: 0 0 0 1px ",";\n    border-color: ",";\n  }\n"])),_ChipContentWrapper__WEBPACK_IMPORTED_MODULE_7__.d,(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ow)("base")),getTitle=function getTitle(_a){var disabled=_a.disabled,expanded=_a.expanded;return disabled?"Disabled":expanded?"Collapse":"Expand"},propTypes=__assign(__assign(__assign({},styled_system__WEBPACK_IMPORTED_MODULE_9__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_9__.JB.propTypes),{id:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired,onClick:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired,disabled:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,expanded:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,facet:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,bridgeLabel:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,BridgeIcon:prop_types__WEBPACK_IMPORTED_MODULE_10___default().node,Icon:prop_types__WEBPACK_IMPORTED_MODULE_10___default().node,showActionIcon:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,Image:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object}),ButtonChip=function ButtonChip(_a){var id=_a.id,m=_a.m,disabled=_a.disabled,expanded=_a.expanded,children=_a.children,onClick=_a.onClick,label=_a.label,showActionIcon=_a.showActionIcon,props=__rest(_a,["id","m","disabled","expanded","children","onClick","label","showActionIcon"]);return react__WEBPACK_IMPORTED_MODULE_4__.createElement(ChipButton,{id,"data-testid":id,disabled,onClick,"aria-expanded":expanded,m},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ChipContent__WEBPACK_IMPORTED_MODULE_11__.Z,__assign({label,disabled,selected:expanded,action:showActionIcon&&{Icon:pcln_icons__WEBPACK_IMPORTED_MODULE_12__.Z,title:getTitle({disabled,expanded})}},props),children))};ButtonChip.displayName="ButtonChip",ButtonChip.propTypes=propTypes,ButtonChip.defaultProps={color:"primary"},ButtonChip.__docgenInfo={description:"",methods:[],displayName:"ButtonChip",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=ButtonChip;var templateObject_1;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Chip/ButtonChip/ButtonChip.js"]={name:"ButtonChip",docgenInfo:ButtonChip.__docgenInfo,path:"../../packages/core/lib-esm/Chip/ButtonChip/ButtonChip.js"})},"../../packages/menu/src/MenuList/MenuList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js");var _templateObject,_templateObject2,_templateObject3,react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__),styled_components__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var sizes={singleColumn:(0,styled_components__WEBPACK_IMPORTED_MODULE_14__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    & > * {\n      width: 100%;\n    }\n  "]))),twoColumns:(0,styled_components__WEBPACK_IMPORTED_MODULE_14__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    & > * {\n      width: calc(50% - ","px);\n    }\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("space.1"))},MenuContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_14__.ZP)(pcln_design_system__WEBPACK_IMPORTED_MODULE_16__.Z)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  font-family: ",";\n  overflow-y: scroll;\n\n  & > * {\n    margin-right: ","px;\n    margin-bottom: ","px;\n  }\n\n  ",";\n"])),(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("font")||"'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("space.1"),(0,styled_system__WEBPACK_IMPORTED_MODULE_15__.R)("space.1"),(0,pcln_design_system__WEBPACK_IMPORTED_MODULE_17__.BS)(sizes));function focusNext(item){return null==item?void 0:item.nextElementSibling}function focusPrevious(item){return null==item?void 0:item.previousElementSibling}function moveFocus(currentFocus,traversalFunction){var nextFocus=traversalFunction(currentFocus);null==nextFocus||nextFocus.focus()}function MenuList(_ref){var id=_ref.id,children=_ref.children,color=_ref.color,size=_ref.size,height=_ref.height,handleClose=_ref.handleClose,listRef=(0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),currentItemRef=(0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),2),currentItemId=_useState2[0],setCurrentItemId=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)((function(){var _currentItemRef$curre,_currentItemRef$curre2;setCurrentItemId(null===(_currentItemRef$curre=currentItemRef.current)||void 0===_currentItemRef$curre?void 0:_currentItemRef$curre.id),null===(_currentItemRef$curre2=currentItemRef.current)||void 0===_currentItemRef$curre2||_currentItemRef$curre2.focus()}),[]);var handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((function(evt){var _list$ownerDocument,list=listRef.current,key=evt.key,currentFocus=null==list||null===(_list$ownerDocument=list.ownerDocument)||void 0===_list$ownerDocument?void 0:_list$ownerDocument.activeElement;"ArrowDown"===key?(evt.preventDefault(),moveFocus(currentFocus,focusNext)):"ArrowUp"===key&&(evt.preventDefault(),moveFocus(currentFocus,focusPrevious))}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(MenuContainer,{id,ref:listRef,role:"listbox","aria-activedescendant":currentItemId,flexWrap:"wrap",height,size,p:2,pr:1,pb:1,onKeyDown:handleKeyDown,children:react__WEBPACK_IMPORTED_MODULE_12__.Children.map(children,(function(child,index){return react__WEBPACK_IMPORTED_MODULE_12__.cloneElement(child,{id:"option"+index,ref:child.props.selected?currentItemRef:null,color:child.props.color||color,handleClose})}))})}MenuList.displayName="MenuList",MenuList.displayName="MenuList",MenuList.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_18___default().node,color:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,height:prop_types__WEBPACK_IMPORTED_MODULE_18___default().number,handleClose:prop_types__WEBPACK_IMPORTED_MODULE_18___default().func},MenuList.defaultProps={size:"singleColumn"},MenuList.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{size:{defaultValue:{value:"'singleColumn'",computed:!1},type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""},handleClose:{type:{name:"func"},required:!1,description:""}}};const __WEBPACK_DEFAULT_EXPORT__=MenuList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/MenuList/MenuList.js"]={name:"MenuList",docgenInfo:MenuList.__docgenInfo,path:"../../packages/menu/src/MenuList/MenuList.js"})},"../../packages/menu/test/mocks/Menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>listItems,Q:()=>currencies});var listItems=[{label:"List Item 1",value:"one"},{label:"List Item 2",value:"two"},{label:"List Item 3",value:"three"},{label:"List Item 4",value:"four"}],currencies=[{code:"USD",label:"U.S. Dollar",symbol:"$"},{code:"AUS",label:"Austrailian Dollar",symbol:"AU$"},{code:"BZR",label:"Brazilian Real",symbol:"R$"},{code:"CAD",label:"Canadian Dollar",symbol:"C$"},{code:"GBP",label:"Pound Sterling",symbol:"£"},{code:"CNY",label:"Chinese Yuan Renminbi",symbol:"¥"},{code:"DKK",label:"Danish Krone",symbol:"kr"},{code:"AED",label:"Emirati Dirham",symbol:"AED"},{code:"EUR",label:"Euro",symbol:"€"},{code:"HKD",label:"Hong Kong Dollar",symbol:"HK$"}]}}]);