"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>o});var a=n(67294),r=n(75402);const o=function(e){return a.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},49742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(48720);const s={id:"lambdas",title:"Lambdas"},i=void 0,l={unversionedId:"functions/lambdas",id:"functions/lambdas",title:"Lambdas",description:"We have seen that function are declarated by given them a name,",source:"@site/../docs/functions/lambdas.md",sourceDirName:"functions",slug:"/functions/lambdas",permalink:"/previews/ligo/contracts/docs/next/functions/lambdas",draft:!1,tags:[],version:"current",frontMatter:{id:"lambdas",title:"Lambdas"},sidebar:"docs",previous:{title:"Declaring",permalink:"/previews/ligo/contracts/docs/next/functions/declaring"},next:{title:"Higher-order",permalink:"/previews/ligo/contracts/docs/next/functions/higher-order"}},p={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have seen that function are declarated by given them a name,\nparameters and a body. Sometimes we need a function that is used only\nonce, and hence does not deserve to have a name (perhaps not only\ndifficult to come up with, but also would incur a slight risk of\nclutter of the scope, or even capture). In other words, we need\n",(0,r.kt)("em",{parentName:"p"},"function expressions"),". Those are sometimes called ",(0,r.kt)("em",{parentName:"p"},"lambdas")," or\n",(0,r.kt)("em",{parentName:"p"},"anonymous functions"),"."),(0,r.kt)("p",null,"First, let us see how to declare functions with function expressions,\ninstead of the dedicated syntax we already know. This is a useful\nexercise, before we see more useful use-cases."),(0,r.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("p",null,"Function expressions are introduced with the ",(0,r.kt)("inlineCode",{parentName:"p"},"fun")," keyword, followed\nby the parameters, then an arrow ",(0,r.kt)("inlineCode",{parentName:"p"},"->"),", followed by the body (an\nexpression):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=lambdas",group:"lambdas"},"let sum = fun x y -> x + y      // Uncurried\nlet add = fun (x,y) -> x + y    // Curried\nlet increment = fun x -> x + 1\n")),(0,r.kt)("p",null,"We now see that ",(0,r.kt)("inlineCode",{parentName:"p"},"fun x y -> x + y")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fun (x,y) -> x + y")," are\nexpressions, and we can use them ",(0,r.kt)("em",{parentName:"p"},"without a name")," in contexts where\nfunctions of type ",(0,r.kt)("inlineCode",{parentName:"p"},"int -> int -> int"),", respectively ",(0,r.kt)("inlineCode",{parentName:"p"},"int * int ->\nint"),", are valid. In the dedicated sections on lists, maps and sets, we\npresent how lambdas are most useful.")),(0,r.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("p",null,"Function expressions are called ",(0,r.kt)("em",{parentName:"p"},"arrow functions")," in JsLIGO:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=lambdas",group:"lambdas"},"const sum = (x,y) => x + y;\nconst increment = x => x + 1; // Or (x) => x + 1\n")),(0,r.kt)("p",null,"Note that when there is a single parameter that is not given a type,\nthe parentheses are not necessary, but they are if the return type is\ngive, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=lambdas",group:"lambdas"},"const decrement = (x) : int => x - 1;\n")),(0,r.kt)("p",null,"We understand that ",(0,r.kt)("inlineCode",{parentName:"p"},"(x,y) => x + y")," is an expression, and we can use\nit ",(0,r.kt)("em",{parentName:"p"},"without a name")," in contexts where functions of type ",(0,r.kt)("inlineCode",{parentName:"p"},"(x: int, y: int) =>\nint")," are valid. In the dedicated sections on lists, maps and sets, we\npresent how lambdas are most useful."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: When a function takes ",(0,r.kt)("em",{parentName:"p"},"one")," argument that is a tuple,\nparentheses are mandatory, like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=lambdas",group:"lambdas"},"const comp_sum = ([x,y]) => x + y;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"That function is different from ",(0,r.kt)("inlineCode",{parentName:"p"},"(x,y) => x + y"),", which takes ",(0,r.kt)("em",{parentName:"p"},"two"),"\narguments. In other words, ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," has type ",(0,r.kt)("inlineCode",{parentName:"p"},"(x: int, y: int) => int"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"comp_sum")," has type ",(0,r.kt)("inlineCode",{parentName:"p"},"([x,y] : [int,int]) => int"),"."))))}m.isMDXComponent=!0}}]);