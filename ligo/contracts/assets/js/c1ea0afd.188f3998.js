"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28754],{48720:(e,t,n)=>{n.d(t,{D:()=>s.Z,Z:()=>i});var a=n(67294),s=n(75402);const i=function(e){return a.createElement(s.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},99191:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(43164),s=n(67294),i=n(52263),r=n(48720),o=n(11506);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const{Prism:p}=n(43164);p.languages={...p.languages,cameligo:{...p.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:p.languages.typescript};const c=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=(0,i.Z)(),n=t.singleTheme||o.Z,[p,c]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{c(!0)}),[]),s.createElement(r.D.Consumer,null,(t=>{let{syntax:i}=t;return i===e.syntax?s.createElement(a.default,l({},a.defaultProps,{key:p,language:e.syntax,code:e.children,theme:n}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:i}=e;return s.createElement("h4",{className:t,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},n.map(((e,t)=>s.createElement("div",a({line:e,key:t}),e.map(((e,t)=>s.createElement("span",i({token:e,key:t}))))))))})):s.createElement("div",null)}))}},68577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),i=n(48720),r=n(99191);const o={id:"tezos.next.sapling-reference",title:"sapling",hide_table_of_contents:!0},l=void 0,p={unversionedId:"reference/tezos.next.sapling-reference",id:"reference/tezos.next.sapling-reference",title:"sapling",description:"val empty&#95;state : &#39;sap&#95;t.&#39;sap&#95;t sapling&#95;state",source:"@site/../docs/reference/tezos.next.sapling.md",sourceDirName:"reference",slug:"/reference/tezos.next.sapling-reference",permalink:"/docs/next/reference/tezos.next.sapling-reference",draft:!1,tags:[],version:"current",frontMatter:{id:"tezos.next.sapling-reference",title:"sapling",hide_table_of_contents:!0},sidebar:"API",previous:{title:"tezos",permalink:"/docs/next/reference/tezos-reference"},next:{title:"view",permalink:"/docs/next/reference/tezos.next.view-reference"}},c={},d=[],m={toc:d};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val empty_state : 'sap_t.'sap_t sapling_state"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let empty_state: <sap_t>sapling_state<sap_t>"),"The evaluation of the constant `empty_state` is an empty sapling state, that is, no one can spend tokens from it.",(0,s.kt)(r.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val verify_update : 'sap_a.'sap_a sapling_transaction -> 'sap_a sapling_state -> (bytes * int * 'sap_a sapling_state) option"),(0,s.kt)(r.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let verify_update: <sap_a>(_: sapling_transaction<sap_a>) => (_: sapling_state<sap_a>) => option<[bytes, [int, sapling_state<sap_a>]]>"),(0,s.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,s.kt)("p",null,"The call ",(0,s.kt)("inlineCode",{parentName:"p"},"verify_update trans state"),", where the\ntransaction ",(0,s.kt)("inlineCode",{parentName:"p"},"trans")," can be applied to the state ",(0,s.kt)("inlineCode",{parentName:"p"},"state"),", returns\n",(0,s.kt)("inlineCode",{parentName:"p"},"Some (data, (delta, new_state))"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," is the bound data\n(as bytes), ",(0,s.kt)("inlineCode",{parentName:"p"},"delta")," is the difference between the outputs and the\ninputs of the transaction, and ",(0,s.kt)("inlineCode",{parentName:"p"},"new_state")," is the updated\nstate.")),(0,s.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,s.kt)("p",null,"The call ",(0,s.kt)("inlineCode",{parentName:"p"},"verify_update(trans, state)"),", where the\ntransaction ",(0,s.kt)("inlineCode",{parentName:"p"},"trans")," can be applied to the state ",(0,s.kt)("inlineCode",{parentName:"p"},"state"),", returns\n",(0,s.kt)("inlineCode",{parentName:"p"},"Some ([data, [delta, new_state]])"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," is the bound data\n(as bytes), ",(0,s.kt)("inlineCode",{parentName:"p"},"delta")," is the difference between the outputs and the\ninputs of the transaction, and ",(0,s.kt)("inlineCode",{parentName:"p"},"new_state")," is the updated\nstate.")))}u.isMDXComponent=!0}}]);