"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48720:(e,t,r)=>{r.d(t,{D:()=>a.Z,Z:()=>o});var n=r(67294),a=r(75402);const o=function(e){return n.createElement(a.Z.Consumer,null,(t=>{let{syntax:r}=t;return r===e.syntax?e.children:n.createElement(n.Fragment,null)}))}},82711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(48720);const i={id:"deprecated",title:"deprecated"},c=void 0,l={unversionedId:"tezos/decorators/deprecated",id:"tezos/decorators/deprecated",title:"deprecated",description:'The attribute [@deprecated "Some explanation."] is used in libraries',source:"@site/../docs/tezos/decorators/deprecated.md",sourceDirName:"tezos/decorators",slug:"/tezos/decorators/deprecated",permalink:"/docs/next/tezos/decorators/deprecated",draft:!1,tags:[],version:"current",frontMatter:{id:"deprecated",title:"deprecated"},sidebar:"docs",previous:{title:"annot",permalink:"/docs/next/tezos/decorators/annot"},next:{title:"dyn_entry",permalink:"/docs/next/tezos/decorators/dyn_entry"}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("p",null,"The attribute ",(0,a.kt)("inlineCode",{parentName:"p"},'[@deprecated "Some explanation."]')," is used in libraries\nto deprecate some values. For instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=deprecated",group:"deprecated"},'[@inline] [@deprecated "Use `List.tail` instead."]\nlet tail_opt (type elt) (list: elt List.t) : elt List.t option =\n  List.tail list\n'))),(0,a.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("p",null,"The decorator ",(0,a.kt)("inlineCode",{parentName:"p"},'@deprecated("Some explanation.")')," is used in libraries\nto deprecate some values. For instance, in the module ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," of the\nstandard library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=deprecated",group:"deprecated"},'@inline @deprecated("Use `List.tail` instead.")\nconst tail_opt = <elt>(list: List.t<elt>) : option<List.t<elt>> =>\n  List.tail(list);\n'))))}u.isMDXComponent=!0}}]);