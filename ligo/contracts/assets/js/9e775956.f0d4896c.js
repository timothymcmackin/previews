"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=l(n),g=o,m=y["".concat(s,".").concat(g)]||y[g]||u[g]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>o.Z,Z:()=>a});var r=n(67294),o=n(75402);const a=function(e){return r.createElement(o.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},73149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(48720);const c={id:"concatenating",title:"Concatenating"},i=void 0,s={unversionedId:"tezos/bytes/concatenating",id:"version-1.6.0/tezos/bytes/concatenating",title:"Concatenating",description:"Two or more bytes can be concatenated.",source:"@site/versioned_docs/version-1.6.0/tezos/bytes/concatenating.md",sourceDirName:"tezos/bytes",slug:"/tezos/bytes/concatenating",permalink:"/previews/ligo/contracts/docs/1.6.0/tezos/bytes/concatenating",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"concatenating",title:"Concatenating"},sidebar:"docs",previous:{title:"Sequences of bytes",permalink:"/previews/ligo/contracts/docs/1.6.0/tezos/bytes/"},next:{title:"Sizing",permalink:"/previews/ligo/contracts/docs/1.6.0/tezos/bytes/sizing"}},l={},p=[],u={toc:p};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Two or more bytes can be concatenated."),(0,o.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=concatenating",group:"concatenating"},"let two : bytes = Bytes.concat 0x70 0xAA\nlet three : bytes = Bytes.concats [0x70; 0xAA; 0xFF]\n"))),(0,o.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=concatenating",group:"concatenating"},"const two: bytes = Bytes.concat(0x70, 0xAA);\nconst three: bytes = Bytes.concats([0x70, 0xAA, 0xFF]);\n"))))}y.isMDXComponent=!0}}]);