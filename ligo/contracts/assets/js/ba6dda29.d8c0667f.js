"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(r),u=a,d=y["".concat(l,".").concat(u)]||y[u]||m[u]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},48720:(e,t,r)=>{r.d(t,{D:()=>a.Z,Z:()=>i});var n=r(67294),a=r(75402);const i=function(e){return n.createElement(a.Z.Consumer,null,(t=>{let{syntax:r}=t;return r===e.syntax?e.children:n.createElement(n.Fragment,null)}))}},6497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(48720);const o={id:"parametric_types",title:"Parameteric types"},p=void 0,l={unversionedId:"polymorphism/parametric_types",id:"version-1.7.0/polymorphism/parametric_types",title:"Parameteric types",description:"When values are parameterised by values, we obtain",source:"@site/versioned_docs/version-1.7.0/polymorphism/parametric_type.md",sourceDirName:"polymorphism",slug:"/polymorphism/parametric_types",permalink:"/previews/ligo/contracts/docs/polymorphism/parametric_types",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"parametric_types",title:"Parameteric types"},sidebar:"docs",previous:{title:"Polymorphism",permalink:"/previews/ligo/contracts/docs/polymorphism/"},next:{title:"Functions",permalink:"/previews/ligo/contracts/docs/polymorphism/functions"}},s={},c=[],m={toc:c};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When values are parameterised by values, we obtain\nfunctions. Similarly, when a type is parameterised by a type, we\nobtain ",(0,a.kt)("em",{parentName:"p"},"parametric types"),"."),(0,a.kt)("p",null,"For example, we might want to define a type for a pair made of a\nstring and an open type parameter, which be call a binding of a key\nand a value:"),(0,a.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=parametric_types",group:"parametric_types"},'type key = string\ntype \'value binding = key * \'value\n\nlet int_binding : int binding = "Alice", 4\nlet string_binding : string binding = "Bob", "cat"\n')),(0,a.kt)("p",null,"Note how, like in OCaml, the type parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"'value")," requires to be\nprefixed by a quote (tick) to be distinguished from an already defined\ntype. Also, the type parameter is placed before the type name, as in\n",(0,a.kt)("inlineCode",{parentName:"p"},"int binding"),".")),(0,a.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=parametric_types",group:"parametric_types"},'type key = string;\ntype binding<value> = [key, value];\n\nconst int_binding : binding<int> = ["Alice", 4];\nconst string_binding : binding<string> = ["Bob", "cat"];\n'))))}y.isMDXComponent=!0}}]);