"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67473],{48720:(e,t,n)=>{n.d(t,{D:()=>a.Z,Z:()=>s});var r=n(67294),a=n(75402);const s=function(e){return r.createElement(a.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},99191:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(43164),a=n(67294),s=n(52263),c=n(48720),o=n(11506);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const{Prism:i}=n(43164);i.languages={...i.languages,cameligo:{...i.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:i.languages.typescript};const p=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=(0,s.Z)(),n=t.singleTheme||o.Z,[i,p]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{p(!0)}),[]),a.createElement(c.D.Consumer,null,(t=>{let{syntax:s}=t;return s===e.syntax?a.createElement(r.default,l({},r.defaultProps,{key:i,language:e.syntax,code:e.children,theme:n}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:s}=e;return a.createElement("h4",{className:t,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},n.map(((e,t)=>a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>a.createElement("span",s({token:e,key:t}))))))))})):a.createElement("div",null)}))}},81147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),s=(n(48720),n(99191));const c={id:"test.next-reference",title:"next",hide_table_of_contents:!0},o=void 0,l={unversionedId:"reference/test.next-reference",id:"version-1.6.0/reference/test.next-reference",title:"next",description:"module mutation",source:"@site/versioned_docs/version-1.6.0/reference/test.next.md",sourceDirName:"reference",slug:"/reference/test.next-reference",permalink:"/docs/1.6.0/reference/test.next-reference",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"test.next-reference",title:"next",hide_table_of_contents:!0},sidebar:"API",previous:{title:"typed_address",permalink:"/docs/1.6.0/reference/test.next.typed-address-reference"},next:{title:"io",permalink:"/docs/1.6.0/reference/test.next.io-reference"}},i={},p=[],m={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.mutation-reference"},"module mutation")),(0,a.kt)("p",null,"module PBT = PBT"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.state-reference"},"module state")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.account-reference"},"module account")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.compare-reference"},"module compare")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.michelson-reference"},"module michelson")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.io-reference"},"module io")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.assert-reference"},"module assert")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.string-reference"},"module string")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.ticket-reference"},"module ticket")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.originate-reference"},"module originate")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.contract-reference"},"module contract")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.typed-address-reference"},"module typed_address")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.address-reference"},"module address")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.timelock-reference"},"module timelock")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.crypto-reference"},"module crypto")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/reference/test.next.dynamic-entrypoints-reference"},"module dynamic_entrypoints")),(0,a.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val originate : 'p 's.('p, 's) module_contract -> 's -> tez -> ('p, 's) origination_result"),(0,a.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let originate: <p, s>(_: module_contract<p, s>) => (_: s) => (_: tez) => origination_result<p, s>"),(0,a.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val failwith : 'a 'b.'a -> 'b"),(0,a.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let failwith: <a, b>(_: a) => b"))}f.isMDXComponent=!0}}]);