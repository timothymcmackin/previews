"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(p,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48720:(e,t,r)=>{r.d(t,{D:()=>o.Z,Z:()=>a});var n=r(67294),o=r(75402);const a=function(e){return n.createElement(o.Z.Consumer,null,(t=>{let{syntax:r}=t;return r===e.syntax?e.children:n.createElement(n.Fragment,null)}))}},42535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));r(48720);const a={id:"timestamp",title:"Timestamps"},i=void 0,s={unversionedId:"tezos/timestamp/timestamp",id:"version-1.5.0/tezos/timestamp/timestamp",title:"Timestamps",description:"LIGO features timestamps by means of the predefined type timestamp,",source:"@site/versioned_docs/version-1.5.0/tezos/timestamp/timestamp.md",sourceDirName:"tezos/timestamp",slug:"/tezos/timestamp/",permalink:"/docs/1.5.0/tezos/timestamp/",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"timestamp",title:"Timestamps"},sidebar:"docs",previous:{title:"Cryptographic Signatures",permalink:"/docs/1.5.0/tezos/signature"},next:{title:"Now",permalink:"/docs/1.5.0/tezos/timestamp/now"}},p={},c=[],m={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LIGO features timestamps by means of the predefined type ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),",\nas Michelson does. Bakers making the block (including the transaction\nin a block) are responsible for providing the given current timestamp\nfor the contract."))}l.isMDXComponent=!0}}]);