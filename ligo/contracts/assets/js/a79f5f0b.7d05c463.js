"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=l(n),u=a,k=y["".concat(c,".").concat(u)]||y[u]||h[u]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>a.Z,Z:()=>o});var r=n(67294),a=n(75402);const o=function(e){return r.createElement(a.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},21398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(48720);const s={id:"hash_key",title:"Hash of keys"},i=void 0,c={unversionedId:"data-types/hash_key",id:"data-types/hash_key",title:"Hash of keys",description:"In some contexts, the hash of a public key is easier to use than the key itself.",source:"@site/../docs/data-types/hash_key.md",sourceDirName:"data-types",slug:"/data-types/hash_key",permalink:"/previews/ligo/contracts/docs/next/data-types/hash_key",draft:!1,tags:[],version:"current",frontMatter:{id:"hash_key",title:"Hash of keys"},sidebar:"docs",previous:{title:"Keys",permalink:"/previews/ligo/contracts/docs/next/data-types/key"},next:{title:"Cryptographic signatures",permalink:"/previews/ligo/contracts/docs/next/data-types/signature"}},l={},p=[],h={toc:p};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some contexts, the hash of a public key is easier to use than the key itself.\nFor example, in Michelson, some data structures such as maps do not allow the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," type.\nAlso, hashes are much smaller than keys."),(0,a.kt)("p",null,"You can hash keys with the predefined function ",(0,a.kt)("inlineCode",{parentName:"p"},"Crypto.hash_key"),", which returns a value\nof the type ",(0,a.kt)("inlineCode",{parentName:"p"},"key_hash"),"."),(0,a.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=hash_key",group:"hash_key"},"let check_hash_key (kh1, k2 : key_hash * key) : bool * key_hash =\n  let kh2 : key_hash = Crypto.hash_key k2\n  in (kh1 = kh2), kh2\n"))),(0,a.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=hash_key",group:"hash_key"},"const check_hash_key = (kh1: key_hash, k2: key) => {\n  let kh2 = Crypto.hash_key(k2);\n  return [kh1 == kh2, kh2];\n};\n"))))}y.isMDXComponent=!0}}]);