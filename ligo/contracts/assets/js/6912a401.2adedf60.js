"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),l=s(n),c=r,d=l["".concat(m,".").concat(c)]||l[c]||u[c]||i;return n?a.createElement(d,o(o({ref:t},g),{},{components:n})):a.createElement(d,o({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=l;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>i});var a=n(67294),r=n(75402);const i=function(e){return a.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},95201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>m,toc:()=>g});var a=n(87462),r=(n(67294),n(3905)),i=n(48720);const o={id:"updating",title:"Updating"},p=void 0,m={unversionedId:"tezos/big_maps/updating",id:"version-1.6.0/tezos/big_maps/updating",title:"Updating",description:"Previous sections show how to add and remove a binding from a given",source:"@site/versioned_docs/version-1.6.0/tezos/big_maps/updating.md",sourceDirName:"tezos/big_maps",slug:"/tezos/big_maps/updating",permalink:"/docs/1.6.0/tezos/big_maps/updating",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"updating",title:"Updating"},sidebar:"docs",previous:{title:"Removing",permalink:"/docs/1.6.0/tezos/big_maps/removing"},next:{title:"Declaring",permalink:"/docs/1.6.0/tezos/big_sets/declaring"}},s={},g=[],u={toc:g};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Previous sections show how to add and remove a binding from a given\nbig map. The function ",(0,r.kt)("inlineCode",{parentName:"p"},"Big_map.update")," can do both depending whether\nsome value is given for the new binding or not: in the former case, a\nnew binding is added (and replaces any previous binding with the same\nkey); in the latter case, any binding with the same key is removed and\na new big map is returned."),(0,r.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=big_map_updating",group:"big_map_updating"},'let my_map : (int, string) big_map =\n  Big_map.literal [(1,"one"); (2,"two")]\nlet map_with_3 = Big_map.update 3 (Some "three") my_map\nlet contains_3 = Big_map.mem 3 map_with_3 // = true\nlet map_without_2 = Big_map.update 2 None my_map\nlet contains_2 = Big_map.mem 2 map_without_2 // = false\n'))),(0,r.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=big_map_updating",group:"big_map_updating"},'const my_map: big_map<int,string> =\n  Big_map.literal([[1,"one"],[2,"two"]]);\nconst map_with_3 = Big_map.update (3, Some("three"), my_map);\nconst contains_3 = Big_map.mem(3, map_with_3); // == true\nconst map_without_2 = Big_map.update(2, None(), my_map);\nconst contains_2 = Big_map.mem (2, map_without_2); // == false\n'))),(0,r.kt)("p",null,"When we want to update a big map, but also obtain the value of the\nupdated binding, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Big_map.get_and_update"),"."),(0,r.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=big_map_updating",group:"big_map_updating"},'// three = Some "three"\nlet three, map_without_3 = Big_map.get_and_update 3 None map_with_3\n'))),(0,r.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=big_map_updating",group:"big_map_updating"},'// three == Some("three")\nconst [three, map_without_3] =\n  Big_map.get_and_update(3, None(), map_with_3);\n'))))}l.isMDXComponent=!0}}]);