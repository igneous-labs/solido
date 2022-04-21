(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9428],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9096:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={},l={unversionedId:"deployments",id:"deployments",isDocsHomePage:!1,title:"Deployments",description:"This page lists official addresses at which Lido for Solana is deployed, in the",source:"@site/docs/deployments.md",sourceDirName:".",slug:"/deployments",permalink:"/deployments",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Incentives",permalink:"/incentives"},next:{title:"Security",permalink:"/security"}},d=[{value:"Mainnet-beta",id:"mainnet-beta",children:[]},{value:"Testnet",id:"testnet",children:[]}],s={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page lists official addresses at which Lido for Solana is deployed, in the\nform of ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility#configuration"},"a ",(0,o.kt)("inlineCode",{parentName:"a"},"solido")," config file"),"."),(0,o.kt)("p",null,"Aside from the config keys, we list a few additional addresses that do not need\nto be part of the config file, and that can be obtained through ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility"},(0,o.kt)("inlineCode",{parentName:"a"},"solido\nshow-solido"))," and ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility"},(0,o.kt)("inlineCode",{parentName:"a"},"solido anker show")),", but which are useful to\nknow anyway."),(0,o.kt)("h2",{id:"mainnet-beta"},"Mainnet-beta"),(0,o.kt)("p",null,"Solido version: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/releases/tag/v1.0.1"},"v1.0.1"),".\nAnker version: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/releases/tag/v1.3.0"},"v1.3.0"),"."),(0,o.kt)("p",null,"Configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster": "https://api.mainnet-beta.solana.com",\n\n  "multisig_program_id": "AAHT26ecV3FEeFmL2gDZW6FfEqjPkghHbAkNZGqwT8Ww",\n  "multisig_address": "3cXyJbjoAUNLpQsFrFJTTTp8GD3uPeabYbsCVobkQpD1",\n\n  "solido_program_id": "CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi",\n  "solido_address": "49Yi1TKkNyYjPAFdR9LBvoHcUjuPX4Df5T5yv39w2XTn",\n\n  "anker_program_id": "BNVB8pd4coHpY7MVcrtiHLCLst7fyDGzMtPmfJqFAhwj",\n  "anker_address": "2kDSwqbzm2zJ2GzeS1uRXpRZFR8H9A9XhNFVcnG9sEUY"\n}\n')),(0,o.kt)("p",null,"Related addresses:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Account"),(0,o.kt)("th",{parentName:"tr",align:null},"Address"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Multisig PDA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GQ3QPrB1RHPRr4Reen772WrMZkHcFM4DL5q44x1BBTFm")),(0,o.kt)("td",{parentName:"tr",align:null},"Address that the multisig can sign on behalf of, used as the manager of the Solido instance, and upgrade authority of the Solido and Anker programs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stSOL Mint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj")),(0,o.kt)("td",{parentName:"tr",align:null},"SPL token mint for stSOL, managed by Solido.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bSOL Mint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"EbMg3VYAE9Krhndw7FuogpHNcEPkXVhtXr7mGisdeaur")),(0,o.kt)("td",{parentName:"tr",align:null},"SPL token mint for bSOL, managed by Anker.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Stake Authority"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"W1ZQRwUfSkDKy2oefRBUWph82Vr2zg9txWMA8RQazN5")),(0,o.kt)("td",{parentName:"tr",align:null},"Stake and withdraw authority of stake accounts managed by Solido.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Withdraw Authority"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GgrQiJ8s2pfHsfMbEFtNcejnzLegzZ16c9XtJ2X2FpuF")),(0,o.kt)("td",{parentName:"tr",align:null},"Withdraw authority of vote accounts of Lido validators.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Solido Reserve"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3Kwv3pEAuoe4WevPB4rgMBTZndGDb53XT7qwQKnvHPfX")),(0,o.kt)("td",{parentName:"tr",align:null},"Solido\u2019s reserve that holds deposited SOL until it is staked near the epoch boundary.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anker stSOL Reserve"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"6emGaZGVvehtMNTr1mxhw9RNPptX6BVZVypTgbuq55GN")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds stSOL deposited into Anker.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Anker UST Reserve"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"BBuh4WDeS6GJTGdZvi2SYzZnmVJ1kZXRcudEcyuAXfUE")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds Anker's proceeds until they are sent to Terra.")))),(0,o.kt)("p",null,"Multisig owners (including past owners):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Cv6GM219kzMrdUUdgDGVJUPW6fGosvrhsFrvmEhz3Mc6": "P2P",\n  "ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp": "Staking Facilities",\n  "6CawqfAJDviZGfUpHFJgeauq6H9vhKuivMMZULZeGnPw": "Figment",\n  "F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm": "Saber",\n  "AnoVUukL1fMAwEp4y2rrZV45BNHLes8ZwWsCRgEwhGH4": "ChainLayer",\n  "6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK": "Chorus One",\n  "DHLXnJdACTY83yKwnUkeoDjqi4QBbsYGa1v8tJL76ViX": "Mercurial",\n  "8Lep9addZWUWqBNj3igx4QoHe43GBfvLhGJy18jJgWQa": "Solana Foundation"\n}\n')),(0,o.kt)("p",null,"Maintainers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AR7FaVeVvUQwnLtojZNUc42H987KiHqfc4AN1qEwPUJw": "Chorus One",\n  "2rqLzNZCBWykEs8bFMbmgqCz4eosaEfU3aRL4RJWdZgQ": "Figment",\n  "DqCZaFR6cTMvFMuz43HS77Zcz1quR93n11kT1yY6aVf4": "Staking Facilities",\n  "p2pokvNcNc1SFCMoUrp1UBQ6SBET7H5EdLqahz4g55k":  "P2P"\n}\n')),(0,o.kt)("h2",{id:"testnet"},"Testnet"),(0,o.kt)("p",null,"There is no official testnet or devnet deployment of a recent version of the\nSolido program. For testing, you can create your own instance instead."))}p.isMDXComponent=!0}}]);