"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92220],{48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>s});var a=n(67294),r=n(75402);const s=function(e){return a.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},99191:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(43164),r=n(67294),s=n(52263),c=n(48720),i=n(11506);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const{Prism:o}=n(43164);o.languages={...o.languages,cameligo:{...o.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:o.languages.typescript};const m=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=(0,s.Z)(),n=t.singleTheme||i.Z,[o,m]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{m(!0)}),[]),r.createElement(c.D.Consumer,null,(t=>{let{syntax:s}=t;return s===e.syntax?r.createElement(a.default,l({},a.defaultProps,{key:o,language:e.syntax,code:e.children,theme:n}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:s}=e;return r.createElement("h4",{className:t,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},n.map(((e,t)=>r.createElement("div",a({line:e,key:t}),e.map(((e,t)=>r.createElement("span",s({token:e,key:t}))))))))})):r.createElement("div",null)}))}},26171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(48720),c=n(99191);const i={id:"test.next.timelock-reference",title:"timelock",hide_table_of_contents:!0},l=void 0,o={unversionedId:"reference/test.next.timelock-reference",id:"reference/test.next.timelock-reference",title:"timelock",description:"val create : bytes -&gt; nat -&gt; (chest * chest&#95;key)",source:"@site/../docs/reference/test.next.timelock.md",sourceDirName:"reference",slug:"/reference/test.next.timelock-reference",permalink:"/previews/ligo/contracts/docs/next/reference/test.next.timelock-reference",draft:!1,tags:[],version:"current",frontMatter:{id:"test.next.timelock-reference",title:"timelock",hide_table_of_contents:!0},sidebar:"API",previous:{title:"typed_address",permalink:"/previews/ligo/contracts/docs/next/reference/test.next.typed-address-reference"},next:{title:"compare",permalink:"/previews/ligo/contracts/docs/next/reference/test.next.compare-reference"}},m={},p=[],y={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val create : bytes -> nat -> (chest * chest_key)"),(0,r.kt)(c.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let create: (_: bytes) => (_: nat) => [chest, chest_key]"),(0,r.kt)(c.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val create_key : chest -> nat -> chest_key"),(0,r.kt)(c.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let create_key: (_: chest) => (_: nat) => chest_key"),(0,r.kt)(c.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val verify : chest -> chest_key -> nat -> bool"),(0,r.kt)(c.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let verify: (_: chest) => (_: chest_key) => (_: nat) => bool"),(0,r.kt)(s.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,r.kt)("p",null,"The call ",(0,r.kt)("inlineCode",{parentName:"p"},"verify chest chest_key n")," verifies a matching\nbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"chest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chest_key")," (taking into account ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),").")),(0,r.kt)(s.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,r.kt)("p",null,"The call ",(0,r.kt)("inlineCode",{parentName:"p"},"verify(chest, chest_key, n)")," verifies a matching\nbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"chest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chest_key")," (taking into account ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),").")))}k.isMDXComponent=!0}}]);