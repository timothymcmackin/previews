"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return n?i.createElement(d,s(s({ref:t},m),{},{components:n})):i.createElement(d,s({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>a.Z,Z:()=>r});var i=n(67294),a=n(75402);const r=function(e){return i.createElement(a.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:i.createElement(i.Fragment,null)}))}},30504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=n(87462),a=(n(67294),n(3905)),r=n(48720);const s={id:"declaring",title:"Declaring"},o=void 0,l={unversionedId:"tezos/big_sets/declaring",id:"version-1.5.0/tezos/big_sets/declaring",title:"Declaring",description:"Sets are unordered collections of values of the same type, like lists",source:"@site/versioned_docs/version-1.5.0/tezos/big_sets/declaring.md",sourceDirName:"tezos/big_sets",slug:"/tezos/big_sets/declaring",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/big_sets/declaring",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"declaring",title:"Declaring"},sidebar:"docs",previous:{title:"Updating",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/big_maps/updating"},next:{title:"Searching",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/big_sets/searching"}},p={},m=[],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets are unordered collections of values of the same type, like lists\nare ordered collections. Like the mathematical sets and lists, sets\ncan be empty and, if not, elements of sets in LIGO are ",(0,a.kt)("em",{parentName:"p"},"unique"),",\nwhereas they can be repeated in a ",(0,a.kt)("em",{parentName:"p"},"list"),"."),(0,a.kt)("p",null,"Like lists, the type of sets is parameterised over the type of its\nelements. Like list elements, set elements must all have the same\ntype."),(0,a.kt)("p",null,"Ordinary sets are fine for contracts with a finite lifespan or a\nbounded number of users. For many contracts however, the intention is\nto have a set holding ",(0,a.kt)("em",{parentName:"p"},"many")," entries, potentially millions of\nthem. The cost of loading those entries into the environment each time\na user executes the contract would eventually become too expensive\nwere it not for ",(0,a.kt)("em",{parentName:"p"},"big sets"),". Big sets in LIGO are based on ",(0,a.kt)("em",{parentName:"p"},"big maps"),",\na data structure offered by Michelson which handles the scaling\nconcerns for us. The interface for big sets closer to that of big maps\nthan ordinary sets (for example, it would defeat the purpose to\nrequest the size of a big set)."),(0,a.kt)(r.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("p",null,"The type of big sets is ",(0,a.kt)("inlineCode",{parentName:"p"},"'elt big_set")," or, equivalently, ",(0,a.kt)("inlineCode",{parentName:"p"},"'elt\nBig_set."),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"'elt")," is the type of the elements of the big set. It\nis defined as follows in the standard library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=big_sets",group:"big_sets"},"type 'elt t = ('elt, unit) big_map\n")),(0,a.kt)("p",null,"The empty big set is denoted by the predefined value\n",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.empty"),". In some contexts, it is useful to annotate it with\nits type, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"(empty : int Big_set.t)"),"."),(0,a.kt)("p",null,"A non-empty big set can be built by using the function\n",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.literal")," which takes a list of ",(0,a.kt)("em",{parentName:"p"},"literal elements")," and returns\na set containing them, and only them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=big_sets",group:"big_sets"},"let empty_big_set : int big_set = Big_set.empty\nlet big_set1 : int big_set = Big_set.literal [3; 2; 2; 1]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The element ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," is repeated in the list, but not in the set\nmade from it.")),(0,a.kt)("p",null,"If you want to build a big set from an arbitrary list of arbitrary\nvalues (not just literal values), then you must use ",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.of_list"),"\ninstead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.literal"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=big_sets",group:"big_sets"},"let two = 2\nlet big_set2 : int big_set = Big_set.of_list [3; two; two; 1]\n"))),(0,a.kt)(r.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("p",null,"The type of big sets is ",(0,a.kt)("inlineCode",{parentName:"p"},"big_set<elt>")," or, equivalently,\n",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.t<elt>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"elt")," is the type of the elements of the big\nset. It is defined as follows in the standard library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=big_sets",group:"big_sets"},"type t<elt> = big_map<elt, unit>\n")),(0,a.kt)("p",null,"The empty big set is denoted by the predefined value\n",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.empty"),". In some contexts, it is useful to annotate it with\nits type, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"(empty as Big_set.t<int>)"),"."),(0,a.kt)("p",null,"A non-empty big set can be built by using the function\n",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.literal")," which takes a list of elements and returns a set\ncontaining them, and only them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=big_sets",group:"big_sets"},"const empty_big_set: big_set<int> = Big_set.empty;\nconst big_set1: big_set<int> = Big_set.literal(list([3, 2, 2, 1]));\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The element ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," is repeated in the list, but not in the set\nmade from it.")),(0,a.kt)("p",null,"If you want to build a big set from an arbitrary list of arbitrary\nvalues (not just literal values), then you must use ",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.of_list"),"\ninstead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Big_set.literal"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=big_sets",group:"big_sets"},"const two = 2;\nconst big_set2: big_set<int> = Big_set.of_list(list([3, two, two, 1]));\n"))),(0,a.kt)("p",null,"Set elements are internally sorted by increasing values, so the type\nof the elements must be ",(0,a.kt)("em",{parentName:"p"},"comparable"),", that is, they obey a total order\n(any two elements can be compared)."))}u.isMDXComponent=!0}}]);