"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44210],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,c(c({ref:e},l),{},{components:n})):r.createElement(m,c({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48720:(t,e,n)=>{n.d(e,{D:()=>o.Z,Z:()=>a});var r=n(67294),o=n(75402);const a=function(t){return r.createElement(o.Z.Consumer,null,(e=>{let{syntax:n}=e;return n===t.syntax?t.children:r.createElement(r.Fragment,null)}))}},77985:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905)),a=n(48720);const c={id:"convert-address-to-contract",title:"How to convert an address to a contract in LIGO testing framework ?"},s=void 0,i={unversionedId:"faq/convert-address-to-contract",id:"version-1.5.0/faq/convert-address-to-contract",title:"How to convert an address to a contract in LIGO testing framework ?",description:"In the context of testing framework,",source:"@site/versioned_docs/version-1.5.0/faq/addr-to-contract.md",sourceDirName:"faq",slug:"/faq/convert-address-to-contract",permalink:"/docs/1.5.0/faq/convert-address-to-contract",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"convert-address-to-contract",title:"How to convert an address to a contract in LIGO testing framework ?"},sidebar:"faq",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/1.5.0/faq/intro"},next:{title:"How to write a polymorphic comparison function ?",permalink:"/docs/1.5.0/faq/polymorphic-comparison"}},d={},l=[],p={toc:l};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the context of testing framework,\nif you want to convert an address to a contract,\nyou need to convert ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"typed_address")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"Test.cast_address"),"."),(0,o.kt)("p",null,"Then convert ",(0,o.kt)("inlineCode",{parentName:"p"},"typed_address")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," using\n",(0,o.kt)("inlineCode",{parentName:"p"},"Test.to_contract"),". For example:"),(0,o.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"test-ligo group=addr2contract","test-ligo":!0,group:"addr2contract"},'let test =\n  let addr = ("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address) in\n  let taddr : (unit, unit) typed_address = Test.cast_address addr in\n  let contract : (unit) contract = Test.to_contract taddr in\n  contract\n'))),(0,o.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"test-ligo group=addr2contract","test-ligo":!0,group:"addr2contract"},'const test = do {\n  const addr = ("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" as address);\n  const taddr : typed_address<unit,unit> = Test.cast_address(addr);\n  const contract : contract<unit> = Test.to_contract(taddr);\n  return contract;\n};\n'))),(0,o.kt)("p",null,"Check out the reference of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," framework for exact signature of the functions ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.5.0/reference/test-reference"},"here"),"."))}u.isMDXComponent=!0}}]);