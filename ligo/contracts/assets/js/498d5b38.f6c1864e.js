"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,g=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>a.Z,Z:()=>o});var r=n(67294),a=n(75402);const o=function(e){return r.createElement(a.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},28385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905)),o=n(48720);const i={id:"packing",title:"Packing & Unpacking"},s=void 0,c={unversionedId:"tezos/bytes/packing",id:"version-1.5.0/tezos/bytes/packing",title:"Packing & Unpacking",description:"As Michelson provides the instructions PACK and UNPACK for data",source:"@site/versioned_docs/version-1.5.0/tezos/bytes/packing.md",sourceDirName:"tezos/bytes",slug:"/tezos/bytes/packing",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/bytes/packing",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"packing",title:"Packing & Unpacking"},sidebar:"docs",previous:{title:"Bitwise",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/bytes/bitwise"},next:{title:"Cryptography",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/bytes/crypto"}},p={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As Michelson provides the instructions ",(0,a.kt)("inlineCode",{parentName:"p"},"PACK")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UNPACK")," for data\nserialisation, so does LIGO with ",(0,a.kt)("inlineCode",{parentName:"p"},"Bytes.pack")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Bytes.unpack"),".  The\nformer serialises Michelson data structures into a binary format, and\nthe latter reverses that transformation. Unpacking may fail, so the\nreturn type of ",(0,a.kt)("inlineCode",{parentName:"p"},"Byte.unpack")," is an option that needs to be annotated."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"PACK")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UNPACK")," are Michelson instructions that are\nintended to be used by people that really know what they are\ndoing. There are several risks and failure cases, such as unpacking\na lambda from an untrusted source or casting the result to the wrong\ntype. Be careful.")),(0,a.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=packing",group:"packing"},"let id_string (p : string) : string option =\n  let packed: bytes = Bytes.pack p\n  in Bytes.unpack packed\n"))),(0,a.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=packing",group:"packing"},"const id_string = (p: string) : option<string> => {\n  let packed = Bytes.pack(p);\n  return Bytes.unpack(packed);\n};\n"))))}d.isMDXComponent=!0}}]);