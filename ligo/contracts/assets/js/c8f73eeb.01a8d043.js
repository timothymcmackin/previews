"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,u=h["".concat(i,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>o});var a=n(67294),r=n(75402);const o=function(e){return a.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},96851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));n(48720);const o={id:"contracts",title:"Contracts"},s=void 0,c={unversionedId:"tezos/contracts/contracts",id:"version-1.7.0/tezos/contracts/contracts",title:"Contracts",description:"We explain very briefly here what the blockchain Tezos is, what smart",source:"@site/versioned_docs/version-1.7.0/tezos/contracts/contracts.md",sourceDirName:"tezos/contracts",slug:"/tezos/contracts/",permalink:"/previews/ligo/contracts/docs/tezos/contracts/",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"contracts",title:"Contracts"},sidebar:"docs",previous:{title:"view",permalink:"/previews/ligo/contracts/docs/tezos/decorators/view"},next:{title:"Contract addresses",permalink:"/previews/ligo/contracts/docs/tezos/contracts/contract-address"}},i={},l=[{value:"Tezos in a nutshell",id:"tezos-in-a-nutshell",level:3},{value:"Smart contracts in a nutshell",id:"smart-contracts-in-a-nutshell",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We explain very briefly here what the blockchain Tezos is, what smart\ncontracts are, what addresses and operations are, etc."),(0,r.kt)("h3",{id:"tezos-in-a-nutshell"},"Tezos in a nutshell"),(0,r.kt)("p",null,"The economic protocol of Tezos handles a ledger of transactions as a\n",(0,r.kt)("em",{parentName:"p"},"blockchain"),". In a nutshell: a replicated database with strong access\ncontrol, immutable entries and resilience to malicious users."),(0,r.kt)("p",null,"Those transactions consist in the exchange of assets (tokens) between\npeers of the network. Each peer has an address and an account (an\namount of tokens), but a physical person can be several\npeers."),(0,r.kt)("p",null,"Public-key cryptography is used to secure the identity of the senders\nof transactions and to ensure that past transactions are not tempered\nwith. An address is the hash of the peer's public key."),(0,r.kt)("p",null,"The business logic between the peers is ",(0,r.kt)("em",{parentName:"p"},"not")," recorded in the chain,\nthat is, the knowledge of what they agree should trigger transfers of\ntokens. The economic protocol of Tezos offers the possibility to\nrecord in the chain that logic as a ",(0,r.kt)("em",{parentName:"p"},"smart contract"),"."),(0,r.kt)("h3",{id:"smart-contracts-in-a-nutshell"},"Smart contracts in a nutshell"),(0,r.kt)("p",null,"A smart contract is a peer that also has a program associated to a\nprivate storage. That storage is writable only by the contract, but is\npublicly readable. The smart contract is executed each time a specific\ntransaction is sent to its address. The transaction may include some\nparameters."),(0,r.kt)("p",null,"Any call to a contract in a block is replicated by all the nodes in\nthe chain, to check whether the block is valid before including it in\ntheir local view of the head of the chain. Once the block is\nvalidated, it is broadcasted by the underlying peer-to-peer, gossip\nnetwork (as usual). The validation of smart contracts therefore adds a\n",(0,r.kt)("em",{parentName:"p"},"delay")," in the validation of a block: the execution time of all the\nsmart contracts in it must fit the interblock time for the chain."),(0,r.kt)("p",null,"Therefore, each smart contract is allowed a given and fixed quantity\nof computation, measured in ",(0,r.kt)("em",{parentName:"p"},"gas"),"."),(0,r.kt)("p",null,"Each instruction has an associated cost expected to be proportional to\nthe wall-clock time and an ",(0,r.kt)("em",{parentName:"p"},"ad hoc")," estimation is given by the node's\nclient."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"node")," is a server process that is accessed by a command-line client\nor RPCs. A node comprises a view of the chain so far, the ",(0,r.kt)("em",{parentName:"p"},"context of\nthe chain")," (a map from addresses to token amounts, used to validate\ntransactions), and the ",(0,r.kt)("em",{parentName:"p"},"mempool"),"."),(0,r.kt)("p",null,"When the execution exceeds the alloted gas, it is stopped, its effect\non the storage is rolled back, a failed transaction is included in the\nblock, and thus fees are collected to discourage spamming attacks."),(0,r.kt)("p",null,"The economic protocol sets limits on gas per block and per\ntransaction. Each smart contract has a ",(0,r.kt)("em",{parentName:"p"},"code size")," and a ",(0,r.kt)("em",{parentName:"p"},"storage\nsize"),", which are allocated on every node on the chain (in their\ncontext). To limit the memory needed to synchronise the chain and\nstore it, a fee is set per byte and collected when a contract is\ndeployed (",(0,r.kt)("em",{parentName:"p"},"originated"),", in Tezos parlance)."),(0,r.kt)("p",null,"It is only at the normal termination of a contract that the effects of\na contract becomes atomically visible to the network: the storage may\nappear modified and a list of ",(0,r.kt)("em",{parentName:"p"},"operations")," may have been returned\n(transactions, contract creations and delegate settings) and\nvalidated. In particular, a smart contract can transfer tokens to\nother smart contracts, enabling the design of complex distributed\napplications in Tezos. Note that, in Tezos, a transaction (transfer of\nassets) is a special case of operation, and smart contracts can also\ntrigger the creation of other contracts and set delegates for\naccounts."),(0,r.kt)("p",null,"Operations that are produced by a smart contract are said to be\n",(0,r.kt)("em",{parentName:"p"},"internal"),", as opposed to the ",(0,r.kt)("em",{parentName:"p"},"external")," transactions that a smart\ncontract may receive."))}d.isMDXComponent=!0}}]);