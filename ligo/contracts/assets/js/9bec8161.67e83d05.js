"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48720:(e,t,r)=>{r.d(t,{D:()=>a.Z,Z:()=>s});var n=r(67294),a=r(75402);const s=function(e){return n.createElement(a.Z.Consumer,null,(t=>{let{syntax:r}=t;return r===e.syntax?e.children:n.createElement(n.Fragment,null)}))}},93514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),s=r(48720);const o={id:"address",title:"Address"},i=void 0,c={unversionedId:"data-types/address",id:"data-types/address",title:"Address",description:"An address on the Tezos blockchain is a string whose suffix is the",source:"@site/../docs/data-types/address.md",sourceDirName:"data-types",slug:"/data-types/address",permalink:"/docs/next/data-types/address",draft:!1,tags:[],version:"current",frontMatter:{id:"address",title:"Address"},sidebar:"docs",previous:{title:"Cryptographic signatures",permalink:"/docs/next/data-types/signature"},next:{title:"Contracts",permalink:"/docs/next/data-types/contracts-type"}},d={},l=[{value:"Sender",id:"sender",level:2},{value:"Source",id:"source",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An address on the Tezos blockchain is a string whose suffix is the\nhash of the public key of an account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the account is a smart contract (sometimes known as an ",(0,a.kt)("em",{parentName:"p"},"originated account"),"), the address starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"KT1"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the account is a user account (sometimes known as an ",(0,a.kt)("em",{parentName:"p"},"implicit account"),"), the address starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"tz1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tz2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tz3"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"tz4"),"."))),(0,a.kt)("p",null,"For more information about Tezos addresses, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tezos.com/architecture/accounts"},"Accounts and addresses")," on docs.tezos.com."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," type represents a well-formed Tezos address.\nHowever, the type being well-formed does not automatically mean that the address is valid and identifies a real account.\nBeware of failures if the address is invalid."),(0,a.kt)("p",null,"To create an address in LIGO, cast a string to the ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," type, as in this example:"),(0,a.kt)(s.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=address",group:"address"},'let my_account : address =\n  ("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address)\n'))),(0,a.kt)(s.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=address",group:"address"},'const my_account: address =\n  "tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" as address;\n'))),(0,a.kt)("p",null,"To get the address of the current contract, see ",(0,a.kt)("a",{parentName:"p",href:"../syntax/contracts"},"Contracts"),"."),(0,a.kt)("h2",{id:"sender"},"Sender"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"sender")," is the address of the contract (that is, a smart contract\nor an implicit account) that initiated the current internal\ntransaction. Note that, if transactions have been chained, that\naddress could be different from the ",(0,a.kt)("em",{parentName:"p"},"source"),"."),(0,a.kt)(s.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=sender",group:"sender"},"let sender : address = Tezos.get_sender ()\n"))),(0,a.kt)(s.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=sender",group:"sender"},"const sender: address = Tezos.get_sender();\n"))),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"source")," is the address of the implicit account that initiated the\ncurrent transaction. If transactions have been chained, that address\nis different from the ",(0,a.kt)("em",{parentName:"p"},"sender"),"."),(0,a.kt)(s.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=source",group:"source"},"let source : address = Tezos.get_source ()\n"))),(0,a.kt)(s.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=source",group:"source"},"const source: address = Tezos.get_source();\n"))))}u.isMDXComponent=!0}}]);