"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,f=u["".concat(s,".").concat(y)]||u[y]||m[y]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>a});var o=n(67294),r=n(75402);const a=function(e){return o.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:o.createElement(o.Fragment,null)}))}},37051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),a=n(48720);const i={id:"polymorphic-comparison",title:"How to write a polymorphic comparison function ?"},l=void 0,s={unversionedId:"faq/polymorphic-comparison",id:"version-1.5.0/faq/polymorphic-comparison",title:"How to write a polymorphic comparison function ?",description:"I'm trying to write some functions in (came)ligo that compare several values as long as they are ints, strings, or nats. compare_equal is one of them.",source:"@site/versioned_docs/version-1.5.0/faq/polymorphic-comparison.md",sourceDirName:"faq",slug:"/faq/polymorphic-comparison",permalink:"/docs/1.5.0/faq/polymorphic-comparison",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"polymorphic-comparison",title:"How to write a polymorphic comparison function ?"},sidebar:"faq",previous:{title:"How to convert an address to a contract in LIGO testing framework ?",permalink:"/docs/1.5.0/faq/convert-address-to-contract"},next:{title:"How to catch an error thrown in a view ?",permalink:"/docs/1.5.0/faq/catch-error-view"}},c={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I'm trying to write some functions in (came)ligo that compare several values as long as they are ints, strings, or nats. compare_equal is one of them."),(0,r.kt)("p",{parentName:"blockquote"},"This errors out with Only composed types of not more than two element are allowed to be compared."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-cameligo"},"let compare_equal (type k) (a, b: k * k) : bool =\n    if(a = b) then true\n    else false\n")),(0,r.kt)("p",{parentName:"blockquote"},"Is it possible to convert a and b to their composed types?"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-cameligo"},"let compare_equal (type k) (a, b: k * k) : bool =\n    match a with\n        int(v) -> if(a=b) then true else false\n     |  string(v) -> if(a=b) then true else false\n")))),(0,r.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I'm trying to write some functions in (came)ligo that compare several values as long as they are ints, strings, or nats. compare_equal is one of them."),(0,r.kt)("p",{parentName:"blockquote"},"This errors out with Only composed types of not more than two element are allowed to be compared."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"const compare_equal = <k>(a : k, b: k) : bool => {\n    if (a == b) {\n      return true;\n    } else {\n      return false;\n    }\n}\n")),(0,r.kt)("p",{parentName:"blockquote"},"Is it possible to convert a and b to their composed types?"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"const compare_equal = <k>(a : k, b: k) : bool =>\n    match (a) {\n      when(int(v)): do { if (a = b) { return true; } else { return false; } };\n      when(string(v)): do { if (a = b) { return true; } else { return false; } };\n    }\n")))),(0,r.kt)("p",null,"The problem here is that LIGO usually tries to prevent you from seeing Michelson typechecking errors, by raising errors early when you do something that might cause a Michelson typechecking error."),(0,r.kt)("p",null,"If LIGO allowed comparisons ",(0,r.kt)("inlineCode",{parentName:"p"},"a = b"),' on any types, you might get such\nan error -- because not all types are "comparable" in Michelson -- and\nit might be difficult to understand the raw Michelson error, or for\nLIGO to explain the error to you in terms of your source program.'),(0,r.kt)("p",null,'In the meantime, if you are willing to risk seeing a Michelson\ntypechecking error, it is possible to work around this by using\n"unsafe" inline Michelson:'),(0,r.kt)(a.Z,{syntax:"camligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cameligo"},"[@inline] let compare_equal (type k) (a : k) (b : k) =\n  [%Michelson ({|{ UNPAIR; COMPARE; EQ }|} : k * k -> bool)] (a, b)\n"))),(0,r.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo"},"// @inline\nconst compare_equal = <k>(a : k, b : k) : bool =>\n  (Michelson `{ UNPAIR; COMPARE; EQ }` as ((x : [k, k]) => bool)) ([a, b])\n"))),(0,r.kt)("p",null,"If you apply this to types which aren't comparable in Michelson, you will get a Michelson typechecking error."))}u.isMDXComponent=!0}}]);