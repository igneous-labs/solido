(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8197],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3605:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return l},default:function(){return c}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),s=(n(894),{id:"Orca-pool-Wormhole-guide",title:"Wormhole Transfer and Orca Pool Guide",description:"Step by step description on how to transfer wstETH through Wormhole V2 and invest in stSOL-wstETH pool",keywords:["Orca","wstETH","lido","Mercurial","Farming"],sidebar_label:"Wormhole Guide (Orca Pool)",sidebar_position:8}),r={unversionedId:"staking/Orca-pool-Wormhole-guide",id:"staking/Orca-pool-Wormhole-guide",isDocsHomePage:!1,title:"Wormhole Transfer and Orca Pool Guide",description:"Step by step description on how to transfer wstETH through Wormhole V2 and invest in stSOL-wstETH pool",source:"@site/docs/staking/stSOL-Orca-Wormhole.md",sourceDirName:"staking",slug:"/staking/Orca-pool-Wormhole-guide",permalink:"/staking/Orca-pool-Wormhole-guide",version:"current",sidebar_label:"Wormhole Guide (Orca Pool)",sidebarPosition:8,frontMatter:{id:"Orca-pool-Wormhole-guide",title:"Wormhole Transfer and Orca Pool Guide",description:"Step by step description on how to transfer wstETH through Wormhole V2 and invest in stSOL-wstETH pool",keywords:["Orca","wstETH","lido","Mercurial","Farming"],sidebar_label:"Wormhole Guide (Orca Pool)",sidebar_position:8},sidebar:"solidoSidebar",previous:{title:"How to use stSOL to earn secondary rewards",permalink:"/staking/stSOL-Saber-pool"},next:{title:"Governance",permalink:"/governance"}},l=[{value:"Step-by-step Guide",id:"step-by-step-guide",children:[{value:"Step 1: Getting stETH",id:"step-1-getting-steth",children:[]},{value:"Step 2: Wrapping stETH to get wstETH",id:"step-2-wrapping-steth-to-get-wsteth",children:[]},{value:"Step 3: Connect Ethereum wallet to Wormhole V2 Bridge",id:"step-3-connect-ethereum-wallet-to-wormhole-v2-bridge",children:[]},{value:"Step 4: Select Token Account - wstETH",id:"step-4-select-token-account---wsteth",children:[]},{value:"Step 5: Enter the amount of wstETH to transfer and click on <code>Next</code>",id:"step-5-enter-the-amount-of-wsteth-to-transfer-and-click-on-next",children:[]},{value:"Step 6: Connect Solana Wallet",id:"step-6-connect-solana-wallet",children:[]},{value:"Step 7: Creating Associated Token Account",id:"step-7-creating-associated-token-account",children:[]},{value:"Step 8: Send Tokens",id:"step-8-send-tokens",children:[]},{value:"Step 9: Redeem Tokens",id:"step-9-redeem-tokens",children:[]},{value:"Step 10: Connect to the Orca Pool",id:"step-10-connect-to-the-orca-pool",children:[]},{value:"Step 11: Deposit Tokens to the Orca Pool",id:"step-11-deposit-tokens-to-the-orca-pool",children:[]},{value:"Step 12: Earn extra rewards from Orca Double-Dip",id:"step-12-earn-extra-rewards-from-orca-double-dip",children:[]}]}],p={toc:l};function c(e){var t=e.components,s=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a step-by-step guide on providing liquidity to the following Orca Pool - ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL-wstETH")," to earn more rewards. ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," is an ERC-20 token and therefore this guide also contains the instructions to transfer ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," from Ethereum to Solana ecosystem using ",(0,i.kt)("a",{parentName:"p",href:"https://wormholebridge.com/#/"},"Wormhole V2 bridge")," "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This first-of-its-kind liquidity pool is a very cool DeFi product! Not only is it composed of two staked assets earning staking rewards, but it also has one of these bridged over to Solana from Ethereum in a decentralized way, highlighting the power of cross-chain DeFi!"))),(0,i.kt)("p",null,"You can learn more about ",(0,i.kt)("a",{parentName:"p",href:"https://help.lido.fi/en/articles/5231836-what-is-wrapped-steth-wsteth"},"wstETH on the lido blog"),"."),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," is bridged over Wormhole to Solana you can easily use that to add liquidity to the ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL-wstETH")," pool"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-pool",src:n(8166).Z}),"\n",(0,i.kt)("img",{alt:"orca-pool-deposit",src:n(8312).Z})),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step-by-step Guide"),(0,i.kt)("h3",{id:"step-1-getting-steth"},"Step 1: Getting stETH"),(0,i.kt)("p",null,"If you do not already hold ETH please purchase some ETH and deposit it in Lido to get ",(0,i.kt)("inlineCode",{parentName:"p"},"stETH"),". Visit ",(0,i.kt)("a",{parentName:"p",href:"https://stake.lido.fi/"},"https://stake.lido.fi/"),", connect your wallet, enter the amount of ETH you want to stake and receive stETH tokens after staking."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you stake 1 ETH in Lido, you will get back 1 stETH"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"stake-eth",src:n(3890).Z})),(0,i.kt)("h3",{id:"step-2-wrapping-steth-to-get-wsteth"},"Step 2: Wrapping stETH to get wstETH"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stETH")," can be wrapped by visiting ",(0,i.kt)("a",{parentName:"p",href:"https://stake.lido.fi/wrap"},"https://stake.lido.fi/wrap"),". Once on this link connect your wallet if it is not already connected"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connect-metamask",src:n(4469).Z})),(0,i.kt)("p",null,"Enter the amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"stETH")," tokens you want to wrap. You will first have to approve the Lido contract to wrap these tokens - the button will display ",(0,i.kt)("inlineCode",{parentName:"p"},"Unlock token to wrap"),". Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Unlock")," and approve in the wallet. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unlock",src:n(8776).Z}),"\n",(0,i.kt)("img",{alt:"approved",src:n(22).Z})),(0,i.kt)("p",null,"Once the approval is successful, again enter the same amount of tokens and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Wrap"),". Once you sign the transaction in your wallet, your wallet balance will start reflecting ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," tokens"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you enter a higher number to Wrap, than what you approved, you'll be shown the ",(0,i.kt)("inlineCode",{parentName:"p"},"Unlock")," button again and you will have to approve this higher amount again. However, you can always wrap an amount lower than what you approved."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wrap",src:n(2867).Z})),(0,i.kt)("h3",{id:"step-3-connect-ethereum-wallet-to-wormhole-v2-bridge"},"Step 3: Connect Ethereum wallet to Wormhole V2 Bridge"),(0,i.kt)("p",null,"Now that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," it is time to bridge them over to the Solana ecosystem. The first step in that direction is to visit the ",(0,i.kt)("a",{parentName:"p",href:"https://wormholebridge.com/#/transfer"},"Wormhole Bridge"),". Under ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," select Ethereum as the chain and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole",src:n(7347).Z})),(0,i.kt)("p",null,"Your wallet screen will pop-up. Upon successful connection you should see your ERC-20 address on the Disconnect button."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This process of bridging your wstETH from Ethereum Blockchain to Solana, requires various transactions to be approved in your Ethereum wallet. Make sure you have enough Ethereum to pay for gas fee. In total these transactions can potentially cost roughly between $50-200 in gas fees depending on the conditions on the Ethereum mainnet."))),(0,i.kt)("h3",{id:"step-4-select-token-account---wsteth"},"Step 4: Select Token Account - wstETH"),(0,i.kt)("p",null,"After connecting, scroll down to select ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Token account")," dropdown. It will display your ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH balance")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-token-account",src:n(5925).Z})),(0,i.kt)("h3",{id:"step-5-enter-the-amount-of-wsteth-to-transfer-and-click-on-next"},"Step 5: Enter the amount of wstETH to transfer and click on ",(0,i.kt)("inlineCode",{parentName:"h3"},"Next")),(0,i.kt)("p",null,"Unfortunately, you do not get the option to select ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX")," when filling this amount. So you have to manually type in the amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," that you need to transfer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-source-token-amount",src:n(3109).Z})),(0,i.kt)("p",null,"You will be immediately taken to the next step i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"Target")," and the first step ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," will show up as completed."),(0,i.kt)("h3",{id:"step-6-connect-solana-wallet"},"Step 6: Connect Solana Wallet"),(0,i.kt)("p",null,"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"Target"),", select Solana and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Select Wallet")," to connect to your Solana wallet. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-solana-wallet",src:n(1668).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"From this step onwards, certain transactions will happend on the Solana blockchain. You will need to hold some amount of SOL in your main account for fees (but of course much less than on Ethereum :))"))),(0,i.kt)("h3",{id:"step-7-creating-associated-token-account"},"Step 7: Creating Associated Token Account"),(0,i.kt)("p",null,"Once the wallet is connected, your SOL address will start reflecting to the left of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disconnect")," button. Every new token in the Solana ecosystem gets assigned an ",(0,i.kt)("strong",{parentName:"p"},"Associated Token Account"),". This account is automatically created for you once you click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Associated Token Account")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-ata",src:n(811).Z})),(0,i.kt)("p",null,"You will have to approve the creation of this account in your Solana wallet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-ata-approval",src:n(154).Z})),(0,i.kt)("h3",{id:"step-8-send-tokens"},"Step 8: Send Tokens"),(0,i.kt)("p",null,"You can now send the tokens through Wormhole to the Solana blockchain. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is generally not safe to approve unlimited tokens to be sent over Wormhole but if you envision yourself repeating this process multiple times, it might make sense for you to approve unlimited tokens to be transferred."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-approve-send",src:n(9395).Z})),(0,i.kt)("p",null,"Approve the transaction in your Ethereum wallet"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-approve-send-wallet",src:n(3874).Z})),(0,i.kt)("p",null,"After successful approval, transfer the tokens."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-transfer",src:n(786).Z})),(0,i.kt)("p",null,"Once this transaction is executed successfully the Wormhole V2 bridge waits for 15 Ethereum confirmations (3-5 minutes) to bridge your token to the Solana blockchain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-15-confirmations",src:n(6140).Z}),"\n",(0,i.kt)("img",{alt:"wormhole-4-confirmations",src:n(5922).Z})),(0,i.kt)("h3",{id:"step-9-redeem-tokens"},"Step 9: Redeem Tokens"),(0,i.kt)("p",null,"Once 15 confirmations happen, you will be able to redeem the corresponding Solana token to your wallet. The Solana equivalent of the ERC-20 ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," is also called ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-redeem",src:n(1634).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will be required to Approve multiple transactions to complete the token redemption process. Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Approve")," button every time the wallet screen pops up until the process is completed. You might have to approve 4-5 times."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-multiple-approve",src:n(7957).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using Ledger to approve the Solana transactions, you will need to check the option ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow Blind Signing"),". So the process will be "),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Allow Blind Signatures "),(0,i.kt)("li",{parentName:"ul"},"Click on Approve button on the screen"),(0,i.kt)("li",{parentName:"ul"},"Finally, approve in the Ledger")))),(0,i.kt)("p",null,"After successful approvals, you will finally see the following on the screen"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"wormhole-success",src:n(476).Z})),(0,i.kt)("h3",{id:"step-10-connect-to-the-orca-pool"},"Step 10: Connect to the Orca Pool"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations! You are now the proud owner of ",(0,i.kt)("inlineCode",{parentName:"strong"},"wstETH")," on Solana!")," "),(0,i.kt)("p",null,"In case you do not have ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL")," at this point head over to the following guides to stake your ",(0,i.kt)("inlineCode",{parentName:"p"},"SOL")," and acquire some ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.lido.fi/staking/phantom"},"Guide for getting stSOL using Phantom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.lido.fi/staking/solflare"},"Guide for getting stSOL using Solflare"))),(0,i.kt)("p",null,"Assuming that you have both ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," you can now deposit these to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.orca.so/pools"},"Orca Pool"),". Click on the link and scroll to (or search for ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL"),") the ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL-wstETH")," pool."),(0,i.kt)("p",null,"Before you can deposit you need to connect Orca to your Solana wallet"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-connect",src:n(666).Z})),(0,i.kt)("p",null,"Orca shows you your token balance as well."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-token-balance",src:n(2027).Z})),(0,i.kt)("h3",{id:"step-11-deposit-tokens-to-the-orca-pool"},"Step 11: Deposit Tokens to the Orca Pool"),(0,i.kt)("p",null,"Finally, you may click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deposit")," button next to the pool and enter the amount of liquidity of ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wstETH")," that you want to add."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-deposit",src:n(2303).Z})),(0,i.kt)("p",null,"Alternatively, just click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX")," amount next to either of the tokens and Orca app will pre-fill both the token values according to the prevailing exchange rate on the AMM."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-max-wsteth",src:n(8414).Z})),(0,i.kt)("p",null,"After filling-in the amounts check the ",(0,i.kt)("inlineCode",{parentName:"p"},"I verify")," checkbox and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Deposit")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-deposit-click",src:n(6592).Z})),(0,i.kt)("p",null,"Approve the deposit transaction in the wallet and wait for the successfull completion of the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-approve-deposit",src:n(8488).Z})),(0,i.kt)("p",null,"You've now successfully deposited both the tokens."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-deposit-complete",src:n(9254).Z})),(0,i.kt)("h3",{id:"step-12-earn-extra-rewards-from-orca-double-dip"},"Step 12: Earn extra rewards from Orca Double-Dip"),(0,i.kt)("p",null,"Once you've deposited in the Orca Pool you will become eligible to earn further rewards through ",(0,i.kt)("inlineCode",{parentName:"p"},"Orca Double Dipping"),". Go to the tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Double Dip"),", it should be right next to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Your Liquidity")," tab. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-double-dip-tab",src:n(8061).Z})),(0,i.kt)("p",null,"Search for the ",(0,i.kt)("inlineCode",{parentName:"p"},"stSOL-wstETH")," pool and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Double-dip"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-double-dip",src:n(6705).Z}),"\n",(0,i.kt)("img",{alt:"orca-double-dipping",src:n(140).Z})),(0,i.kt)("p",null,"After you approve the double dipping transaction, you will see that you immediately start earning wLDO tokens as well. Sit back, relax and enjoy the rewards!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orca-dip-success",src:n(9655).Z})))}c.isMDXComponent=!0},894:function(e,t,n){"use strict";t.Z=n.p+"assets/images/claimed-sbr-009c5e0f6f30f8bb717b9aacd1877604.png"},22:function(e,t,n){"use strict";t.Z=n.p+"assets/images/approved-8fbd50d056167a18bd98485965e26679.png"},4469:function(e,t,n){"use strict";t.Z=n.p+"assets/images/connect-metamask-1560d2002bfd09014d2b5a1d2c1a9667.png"},666:function(e,t,n){"use strict";t.Z=n.p+"assets/images/connect-orca-b82020929554f807b71ad6f45e5518ba.png"},8488:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-approve-deposit-6c259c769b8b19ef6206dba06b3f69e1.png"},6592:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-deposit-click-93cbfda9cf0eb799dd854d25958bdd85.png"},9254:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-deposit-complete-3f2a640725c388d07f483f154325fe7f.png"},2303:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-deposit-022a22fcc6c528bba3a32513fb3783fa.png"},9655:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-dip-success-62b5126ec7641bd43f9677bc90dd84aa.png"},8061:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-double-dip-tab-6b963fd8ca62358c6b2a48e781ae5796.png"},6705:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-double-dip-9a9c3521bfb5ab4f2e62c1bfb290b836.png"},140:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-double-dipping-726e61d70a1377e5b64dca0a21d5042c.png"},8414:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-max-wsteth-2945b976b75fde7c1b5e217a28259401.png"},8312:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-pool-deposit-3795fbfd04b2c2855c706bd9309baf88.png"},8166:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-pool-0c06bbb978f6c8a7f274286722b0e63a.png"},2027:function(e,t,n){"use strict";t.Z=n.p+"assets/images/orca-token-balance-2f3a7edbf6734d55f6b6cc376b8e0f6e.png"},3890:function(e,t,n){"use strict";t.Z=n.p+"assets/images/stake-eth-a01cd4657b8f606640b70a6afbf58491.png"},8776:function(e,t,n){"use strict";t.Z=n.p+"assets/images/unlock-d5317b09908c9f9e972684e8337507bd.png"},6140:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-15-confirmations-16135e036bb910541d08c50d29e05998.png"},5922:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-4-confirmations-bc585dd72899a044bb9fdf16067a97d0.png"},3874:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-approve-send-wallet-f86ed2bdc97a406835b49e8696f423f0.png"},9395:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-approve-send-bf15d9c5760940d91a4db999496d5ccb.png"},154:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-ata-approval-2603255892975824ee330f353c7e15e4.png"},811:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-ata-f7175810417804c64b5ab7d4e5f45df1.png"},7957:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-multiple-approve-4bd9f6d0c67a3cf95c28cc1e4f09e58d.png"},1634:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-redeem-f4570bc861aa2d0cb5af2b905a7424a2.png"},1668:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-solana-wallet-22052d011d812194ccfd3d68cf0c3f87.png"},3109:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-source-token-amount-8f35f427e175bf2f081efe88772eba0b.png"},476:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-success-67b3fcaa454ee58433fa06c8f613c633.png"},5925:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-token-account-619a42a8acd2d3f560c539e62fc490d9.png"},786:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-transfer-eeec3ae661f48ad687a4dcd9b1b820ed.png"},7347:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wormhole-e72bd02a1218b66c213db671a65b0d8a.png"},2867:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wrap-f7882338573c6b0763d2ad7a8772033d.png"}}]);