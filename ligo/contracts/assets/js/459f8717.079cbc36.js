"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>i});var a=n(67294),r=n(75402);const i=function(e){return a.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},84743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(48720);const o={id:"variants",title:"Variants"},s=void 0,l={unversionedId:"variants/variants",id:"version-1.6.0/variants/variants",title:"Variants",description:"A variant type is a type that defines a type by the union of",source:"@site/versioned_docs/version-1.6.0/variants/variants.md",sourceDirName:"variants",slug:"/variants/",permalink:"/previews/ligo/contracts/docs/1.6.0/variants/",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"variants",title:"Variants"},sidebar:"docs",previous:{title:"Unit",permalink:"/previews/ligo/contracts/docs/1.6.0/variants/unit"},next:{title:"Options",permalink:"/previews/ligo/contracts/docs/1.6.0/variants/options"}},p={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A variant type is a type that defines a type by the union of\nnon-overlapping cases, so a value of a variant type is either this, or\nthat or... The simplest variant type is equivalent to the enumerated\ntypes found in Java, C++, JavaScript etc."),(0,r.kt)("p",null,"Here is how we define a coin as being either head or tail (and nothing\nelse):"),(0,r.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=variants",group:"variants"},"type coin = Head | Tail\nlet head : coin = Head\nlet tail : coin = Tail\n"))),(0,r.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=variants",group:"variants"},'type coin = ["Head"] | ["Tail"];\nlet head: coin = Head();\nlet tail: coin = Tail();\n'))),(0,r.kt)("p",null,"The names ",(0,r.kt)("inlineCode",{parentName:"p"},"Head")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Tail")," in the definition of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"coin")," are\ncalled ",(0,r.kt)("em",{parentName:"p"},"data constructors"),", or ",(0,r.kt)("em",{parentName:"p"},"variants"),". In this particular case,\nthey carry no information beyond their names, so they are called\n",(0,r.kt)("em",{parentName:"p"},"constant constructors"),"."),(0,r.kt)("p",null,"In general, it is interesting for variants to carry some information,\nand thus go beyond enumerated types. In the following, we show how to\ndefine different kinds of users of a system."),(0,r.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=variants",group:"variants"},"type id = nat\n\ntype user =\n  Admin   of id\n| Manager of id\n| Guest\n\nlet bob : user = Admin 1000n\nlet carl : user = Guest\n")),(0,r.kt)("p",null,"A constant constructor is equivalent to the same constructor taking an\nargument of type ",(0,r.kt)("inlineCode",{parentName:"p"},"unit"),", so, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," is the same value as\n",(0,r.kt)("inlineCode",{parentName:"p"},"Guest ()"),".")),(0,r.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=variants",group:"variants"},'type id = nat;\n\ntype user =\n  ["Admin", id]\n| ["Manager", id]\n| ["Guest"];\n\nconst bob : user = Admin(1000n);\nconst carl : user = Guest();\n')),(0,r.kt)("p",null,"A constant constructor is equivalent to the same constructor taking an\nargument of type ",(0,r.kt)("inlineCode",{parentName:"p"},"unit"),", so, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest()")," is the same value\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest([])")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest(unit)"),".")))}m.isMDXComponent=!0}}]);