"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),y=o,f=g["".concat(l,".").concat(y)]||g[y]||u[y]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>o.Z,Z:()=>i});var r=n(67294),o=n(75402);const i=function(e){return r.createElement(o.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},15406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),i=n(48720);const a={id:"sizing",title:"Sizing"},s=void 0,l={unversionedId:"tezos/bytes/sizing",id:"version-1.6.0/tezos/bytes/sizing",title:"Sizing",description:"In order to obtain the length of a sequence of bytes, use the",source:"@site/versioned_docs/version-1.6.0/tezos/bytes/sizing.md",sourceDirName:"tezos/bytes",slug:"/tezos/bytes/sizing",permalink:"/docs/1.6.0/tezos/bytes/sizing",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"sizing",title:"Sizing"},sidebar:"docs",previous:{title:"Concatenating",permalink:"/docs/1.6.0/tezos/bytes/concatenating"},next:{title:"Slicing",permalink:"/docs/1.6.0/tezos/bytes/slicing"}},c={},p=[],u={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to obtain the length of a sequence of bytes, use the\npredefined function ",(0,o.kt)("inlineCode",{parentName:"p"},"Bytes.length")," like so:"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=sizing",group:"sizing"},"let len : nat = Bytes.length 0x0AFF // len = 2n\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=sizing",group:"sizing"},"const len: nat = Bytes.length(0x0AFF); // len == 2n\n"))))}g.isMDXComponent=!0}}]);