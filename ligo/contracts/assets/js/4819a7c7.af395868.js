"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24457],{48720:(t,e,n)=>{n.d(e,{D:()=>i.Z,Z:()=>o});var a=n(67294),i=n(75402);const o=function(t){return a.createElement(i.Z.Consumer,null,(e=>{let{syntax:n}=e;return n===t.syntax?t.children:a.createElement(a.Fragment,null)}))}},99191:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(43164),i=n(67294),o=n(52263),s=n(48720),c=n(11506);function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}const{Prism:r}=n(43164);r.languages={...r.languages,cameligo:{...r.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:r.languages.typescript};const p=function(t){const{siteConfig:{themeConfig:{prism:e={}}}}=(0,o.Z)(),n=e.singleTheme||c.Z,[r,p]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{p(!0)}),[]),i.createElement(s.D.Consumer,null,(e=>{let{syntax:o}=e;return o===t.syntax?i.createElement(a.default,l({},a.defaultProps,{key:r,language:t.syntax,code:t.children,theme:n}),(t=>{let{className:e,tokens:n,getLineProps:a,getTokenProps:o}=t;return i.createElement("h4",{className:e,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},n.map(((t,e)=>i.createElement("div",a({line:t,key:e}),t.map(((t,e)=>i.createElement("span",o({token:t,key:e}))))))))})):i.createElement("div",null)}))}},78846:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>k});var a=n(87462),i=(n(67294),n(3905)),o=n(48720),s=n(99191);const c={id:"tickets",title:"Tickets",description:"Ticket operations for Tezos",hide_table_of_contents:!0},l=void 0,r={unversionedId:"contract/tickets",id:"version-1.5.0/contract/tickets",title:"Tickets",description:"Ticket operations for Tezos",source:"@site/versioned_docs/version-1.5.0/contract/tickets.md",sourceDirName:"contract",slug:"/contract/tickets",permalink:"/previews/ligo/contracts/docs/1.5.0/contract/tickets",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"tickets",title:"Tickets",description:"Ticket operations for Tezos",hide_table_of_contents:!0}},p={},k=[],m={toc:k};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following functions are available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tezos.")," namespace."),(0,i.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val Tezos.create_ticket : 'value -> nat -> ('value ticket) option"),(0,i.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let Tezos.create_ticket: 'value => nat => option<ticket<'value>>"),(0,i.kt)("p",null,"To create a ticket, the value and the amount of tickets to be created needs to be provided.\nThe ticket will also contain the contract address it originated from (which corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"Tezos.self"),").\nThe resulting value is ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," if the amount is zero."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=manip_ticket",group:"manip_ticket"},'let my_ticket1 = Option.unopt (Tezos.create_ticket 1 10n)\nlet my_ticket2 = Option.unopt (Tezos.create_ticket "one" 10n)\n'))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=manip_ticket",group:"manip_ticket"},'const my_ticket1 = Option.unopt(Tezos.create_ticket(1, 10n));\nconst my_ticket2 = Option.unopt(Tezos.create_ticket("one", 10n));\n'))),(0,i.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val Tezos.read_ticket : 'value ticket -> (address * ('value * nat)) * 'value ticket"),(0,i.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let Tezos.read_ticket: ticket<'value> => <<address, <'value , nat>> , ticket<'value>>"),(0,i.kt)("p",null,"Reading a ticket will return a tuple with the ticket address, the value and the same ticket for later use.\nA ticket is only consumed when it is dropped (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP"),"-ed from the Michelson stack) so if the returned ticket isn't stored in some form by your contract, it will be fully consumed."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("p",null,"To read the content of a ticket, you can either use tuple\ndestructuring or pattern matching:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=manip_ticket",group:"manip_ticket"},"let v =\n  let (_addr, (payload, _amt)), _ticket = Tezos.read_ticket my_ticket1\n  in payload\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("p",null,"To read the content of a ticket, you need to use tuple destructuring:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=manip_ticket",group:"manip_ticket"},"const v2 = do {\n  let [[_addr, [payload, _amt]], _ticket] = Tezos.read_ticket (my_ticket2);\n  return payload;\n}\n"))),(0,i.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val Tezos.split_ticket : 'value ticket -> nat * nat -> ('value ticket * 'value ticket) option"),(0,i.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let Tezos.split_ticket: ticket<'value> => <nat , nat> => option <<ticket<'value>, ticket<'value>>>"),(0,i.kt)("p",null,"To partially use/consume a ticket, you have to split it.\nProvided a ticket and two amounts, two new tickets will be returned to you if, and only if, the sum equals to the amount of the original ticket."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=manip_ticket",group:"manip_ticket"},'let ta, tb =\n  match Tezos.split_ticket my_ticket1 (6n, 4n) with\n    None -> failwith "amt_a + amt_v <> amt"\n  | Some split_tickets -> split_tickets\n'))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=manip_ticket",group:"manip_ticket"},'const [ta, tb] =\n  match(Tezos.split_ticket(my_ticket1, [6n, 4n])) {\n    when(None()): failwith("amt_a + amt_v != amt");\n    when(Some(split_tickets)): split_tickets\n  };\n'))),(0,i.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val Tezos.join_tickets : 'value ticket * 'value ticket -> ('value ticket) option"),(0,i.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let Tezos.join_tickets = <ticket<'value>, ticket<'value>> => option <ticket<'value>>"),(0,i.kt)("p",null,"To add two tickets, you have to join them. This works as the inverse\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"Tezos.split_ticket"),".  Provided two tickets with the same ticketer\nand content, they are deleted and a new ticket will be returned with\nan amount equal to the sum of the amounts of the input tickets."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=manip_ticket",group:"manip_ticket"},"let tc : int ticket option =\n  let ta = Option.unopt (Tezos.create_ticket 1 10n) in\n  let tb = Option.unopt (Tezos.create_ticket 1 5n) in\n  Tezos.join_tickets (ta, tb)\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=manip_ticket2",group:"manip_ticket2"},"const ta = Option.unopt(Tezos.create_ticket(1, 10n));\nconst tb = Option.unopt(Tezos.create_ticket(1, 5n));\nconst tc = Tezos.join_tickets([ta, tb]);\n"))))}u.isMDXComponent=!0}}]);