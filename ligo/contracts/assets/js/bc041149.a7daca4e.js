"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92931],{48720:(e,t,n)=>{n.d(t,{D:()=>s.Z,Z:()=>r});var a=n(67294),s=n(75402);const r=function(e){return a.createElement(s.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},99191:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(43164),s=n(67294),r=n(52263),o=n(48720),c=n(11506);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}const{Prism:l}=n(43164);l.languages={...l.languages,cameligo:{...l.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:l.languages.typescript};const d=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=(0,r.Z)(),n=t.singleTheme||c.Z,[l,d]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{d(!0)}),[]),s.createElement(o.D.Consumer,null,(t=>{let{syntax:r}=t;return r===e.syntax?s.createElement(a.default,i({},a.defaultProps,{key:l,language:e.syntax,code:e.children,theme:n}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:r}=e;return s.createElement("h4",{className:t,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},n.map(((e,t)=>s.createElement("div",a({line:e,key:t}),e.map(((e,t)=>s.createElement("span",r({token:e,key:t}))))))))})):s.createElement("div",null)}))}},82688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),r=(n(48720),n(99191));const o={id:"test.next.account-reference",title:"account",hide_table_of_contents:!0},c=void 0,i={unversionedId:"reference/test.next.account-reference",id:"version-1.6.0/reference/test.next.account-reference",title:"account",description:"module contract",source:"@site/versioned_docs/version-1.6.0/reference/test.next.account.md",sourceDirName:"reference",slug:"/reference/test.next.account-reference",permalink:"/previews/ligo/contracts/docs/1.6.0/reference/test.next.account-reference",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"test.next.account-reference",title:"account",hide_table_of_contents:!0},sidebar:"API",previous:{title:"contract",permalink:"/previews/ligo/contracts/docs/1.6.0/reference/test.next.michelson.contract-reference"},next:{title:"contract",permalink:"/previews/ligo/contracts/docs/1.6.0/reference/test.next.account.contract-reference"}},l={},d=[],u={toc:d};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/previews/ligo/contracts/docs/1.6.0/reference/test.next.account.contract-reference"},"module contract")),(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val address : nat -> address"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let address: (n: nat) => address"),"Returns the address of the nth bootstrapped account.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val alice : unit -> address"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let alice: (_: unit) => address"),"Returns the address of the 0th bootstrapped account.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val bob : unit -> address"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let bob: (_: unit) => address"),"Returns the address of the 1st bootstrapped account.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val carol : unit -> address"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let carol: (_: unit) => address"),"Returns the address of the 2nd bootstrapped account.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val dan : unit -> address"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let dan: (_: unit) => address"),"Returns the address of the 3rd bootstrapped account.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val add : string -> key -> unit"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let add: (_: string) => (_: key) => unit"),"Adds an account specfied by secret key & public key to the test context.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"type info = { addr : address; pk : key; sk : string }"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"type info = { addr: address; pk: key; sk: string }"),(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val info : nat -> Test.Next.Account.info"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let info: (_: nat) => Test.Next.Account.info"),"Returns the address information of the nth bootstrapped account.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val new : unit -> Test.Next.Account.info"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let new: (_: unit) => Test.Next.Account.info"),"Creates and returns information of a new account.")}y.isMDXComponent=!0}}]);