"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48720:(e,n,t)=>{t.d(n,{D:()=>i.Z,Z:()=>a});var r=t(67294),i=t(75402);const a=function(e){return r.createElement(i.Z.Consumer,null,(n=>{let{syntax:t}=n;return t===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},1465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),i=(t(67294),t(3905)),a=t(48720);const o={id:"inline",title:"Inlining"},l=void 0,c={unversionedId:"advanced/inline",id:"version-1.7.0/advanced/inline",title:"Inlining",description:"When compiling a contract in LIGO, declarations will get inlined if they are",source:"@site/versioned_docs/version-1.7.0/advanced/inline.md",sourceDirName:"advanced",slug:"/advanced/inline",permalink:"/docs/advanced/inline",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"inline",title:"Inlining"}},s={},u=[{value:"Inline attribute",id:"inline-attribute",level:2}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When compiling a contract in LIGO, declarations will get inlined if they are\nonly used once and pure. Inlining often results in larger contracts and is\ntherefore not aggressively done."),(0,i.kt)("p",null,"A pure declaration is one that doesn't cause side effects like causing a\nfailure or operation."),(0,i.kt)("p",null,"In some cases you might want to override the default behaviour of LIGO and\nforce inlining. The declaration still needs to be pure though."),(0,i.kt)("h2",{id:"inline-attribute"},"Inline attribute"),(0,i.kt)("p",null,"To force inlining you can use the inline attribute."),(0,i.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo"},"\n[@inline]\nlet fst (p : nat * nat) = p.0\n\n[@entry]\nlet main (p : nat * nat) (s : nat * nat) : operation list * (nat * nat) =\n    ([], (fst (p.0, p.1), fst (s.1, s.0)))\n"))),(0,i.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo"},"// @inline\nconst fst = (p: [nat, nat]) => p[0];\n\nconst main = (p: [nat, nat], s: [nat, nat]) : [list<operation>, [nat, nat]] =>\n    [[], [fst([p[0], p[1]]), fst([s[1], s[0]])]];\n"))),(0,i.kt)("p",null,"Now if we measure the difference between inlining and without inlining, using\n",(0,i.kt)("inlineCode",{parentName:"p"},"ligo info measure-contract name_of_contract.mligo --entry-point <entrypoint>"),", we see the\nfollowing results:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"With inlining"),(0,i.kt)("td",null,"66 bytes")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Without inlining"),(0,i.kt)("td",null,"170 bytes"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that these results can change due to ongoing work to optimise output of\nthe LIGO compiler.")))}d.isMDXComponent=!0}}]);