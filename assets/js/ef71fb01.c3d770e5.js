(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1971],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),g=i,c=p["".concat(l,".").concat(g)]||p[g]||m[g]||n;return t?r.createElement(c,o(o({ref:a},u),{},{components:t})):r.createElement(c,o({ref:a},u))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},180:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=t(2122),i=t(9756),n=(t(7294),t(3905)),o={title:"multisigcli",description:"Overview of CLI for Governance",keywords:["governance","multi-sig","lido","solana","cli"],sidebar_position:4},s={unversionedId:"Guides/Governance/UsingCLIForMultiSig",id:"Guides/Governance/UsingCLIForMultiSig",isDocsHomePage:!1,title:"Using the Lido for Solana CLI for Governance",description:"Overview of CLI for Governance",source:"@site/docs/Guides/Governance/UsingCLIForMultiSig.md",sourceDirName:"Guides/Governance",slug:"/Guides/Governance/UsingCLIForMultiSig",permalink:"/solido/docs/Guides/Governance/UsingCLIForMultiSig",version:"current",sidebarPosition:4,frontMatter:{title:"multisigcli",description:"Overview of CLI for Governance",keywords:["governance","multi-sig","lido","solana","cli"],sidebar_position:4},sidebar:"solidoSidebar",previous:{title:"Fee Management",permalink:"/solido/docs/Guides/Governance/FeeManagement"},next:{title:"Validation Overview",permalink:"/solido/docs/Guides/Validation/Validation"}},l=[{value:"MultiSig Governance",id:"multisig-governance",children:[{value:"Creating a new MultiSig address",id:"creating-a-new-multisig-address",children:[]},{value:"Showing details of the MultiSig",id:"showing-details-of-the-multisig",children:[]},{value:"Approving a MultiSig Transaction",id:"approving-a-multisig-transaction",children:[]},{value:"Executing a MultiSig Transaction",id:"executing-a-multisig-transaction",children:[]},{value:"Proposing a change",id:"proposing-a-change",children:[]},{value:"Proposing an upgrade",id:"proposing-an-upgrade",children:[]}]},{value:"General Governance",id:"general-governance",children:[{value:"Adding a maintainer",id:"adding-a-maintainer",children:[]},{value:"Removing a maintainer",id:"removing-a-maintainer",children:[]},{value:"Adding a validator",id:"adding-a-validator",children:[]},{value:"Creating a validator stake account",id:"creating-a-validator-stake-account",children:[]},{value:"Creating the Lido for Solana instance.",id:"creating-the-lido-for-solana-instance",children:[]}]}],d={toc:l};function u(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"multisig-governance"},"MultiSig Governance"),(0,n.kt)("p",null,"All mutlisig functionality relating to Lido for Solana can be accessed through the multisig subcommand:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address ...\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$multisig-program-address")," is the id of the on-chain multisig program."),(0,n.kt)("p",null,"The following sections go through descriptions of the subcommands."),(0,n.kt)("h3",{id:"creating-a-new-multisig-address"},"Creating a new MultiSig address"),(0,n.kt)("p",null,"In order to create a new multisig address"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address create-multisig --threshold $threshold --owner $owner1 --owner $owner2 ...\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"threshold")," -> This is the minimum number of signatures required to approve a transaction.  At most, this should be the number of multisig participants."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"owner")," ->  The public key  of a multisig participant. Multiples of this argument can be supplied to cover all participants."))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig address"),": The public key address of the multisig program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig program derived address"),": The public key derived address of the multisig program")))),(0,n.kt)("h3",{id:"showing-details-of-the-multisig"},"Showing details of the MultiSig"),(0,n.kt)("p",null,"To view details of the MultiSig"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address show-multisig  --multisig-address $multisig-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-address")," -> This is the address of the multisig program"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig program derived address"),": The public key derived address of the multisig program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"threshold"),": The current minimum number of signers required to approve a transaction"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"owners"),": List of the multisig owner public keys")))),(0,n.kt)("h3",{id:"approving-a-multisig-transaction"},"Approving a MultiSig Transaction"),(0,n.kt)("p",null,"A MultiSig owner can approve a transaction using the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address approve  --multisig-address $owner-address --transaction-address $transaction-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"owner-address")," -> This is the address of the multisig owner who"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address")," -> The address of the transaction to be approved"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"signature"),": The signature of the approval")))),(0,n.kt)("h3",{id:"executing-a-multisig-transaction"},"Executing a MultiSig Transaction"),(0,n.kt)("p",null,"A transaction can be executed, once it has the required number of a approvals, using the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address execute-transaction  --multisig-address $multisig-address --transaction-address $transaction-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-address")," -> This is the address of the multisig program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address")," -> The address of the transaction to be approved"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"signature"),": The signature of the transaction")))),(0,n.kt)("h3",{id:"proposing-a-change"},"Proposing a change"),(0,n.kt)("p",null,"Proposing a change to the threshold or owners of the multisig can be achieved with the following:\nA transaction can be executed, once it has the required number of a approvals, using the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address propose-change-multisig  --multisig-address $multisig-address --threshold $threshold --owner $owner1 --owner $owner2 ...\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"threshold")," -> This is the minimum number of signatures required to approve a transaction.  At most, this should be the number of multisig participants."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-address")," -> This is the address of the multisig program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"owner")," ->  The public key  of a multisig participant. Multiples of this argument can be supplied to cover all participants."))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))),(0,n.kt)("h3",{id:"proposing-an-upgrade"},"Proposing an upgrade"),(0,n.kt)("p",null,"Proposing a change to the threshold or owners of the multisig can be achieved with the following:\nA transaction can be executed, once it has the required number of a approvals, using the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido multisig --multisig-program-id $multisig-program-address propose-change-multisig  --multisig-address $multisig-address --program-address $program-address --buffer-address $buffer-address --spill-address $spill-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-address")," -> This is the address of the multisig program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"program-address")," -> This is the address of the program to upgrade"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"buffer-address")," -> This is the address that holds the new program data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"spill-address")," -> This address will receive leftover funds from the buffer account"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))),(0,n.kt)("h2",{id:"general-governance"},"General Governance"),(0,n.kt)("h3",{id:"adding-a-maintainer"},"Adding a maintainer"),(0,n.kt)("p",null,"To add a maintainer for Lido for Solana one can use the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido add-maintainer --solido-program-id $solido-program-id --solido-address $solido-address --maintainer-address $maintainer-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-program-id")," -> This is the address of the Lido for Solana program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-address")," -> This is the address of the account that stores the data for the Lido for Solana instance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maintainer-address")," -> This is the address of the maintainer to be added"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-address")," -> This is the address of the multisig account"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-program-id")," -> This is the address of the multisig program"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))),(0,n.kt)("h3",{id:"removing-a-maintainer"},"Removing a maintainer"),(0,n.kt)("p",null,"To remove a maintainer for Lido for Solana one can use the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido remove-maintainer --solido-program-id $solido-program-id --solido-address $solido-address --maintainer-address $maintainer-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-program-id")," -> This is the address of the Lido for Solana program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-address")," -> This is the address of the account that stores the data for the Lido for Solana instance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maintainer-address")," -> This is the address of the maintainer to be added"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-address")," -> This is the address of the multisig account"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multisig-program-id")," -> This is the address of the multisig program"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))),(0,n.kt)("h3",{id:"adding-a-validator"},"Adding a validator"),(0,n.kt)("p",null,"To add a validator for Lido for Solana one can use the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido add-validator --solido-program-id $solido-program-id --solido-address $solido-address --stake-pool-program-id  $stake-pool-program-id  --validator-vote $validator-vote-account --validator-rewards-address  $validator-rewards-address\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-program-id")," -> This is the address of the Lido for Solana program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-address")," -> This is the address of the account that stores the data for the Lido for Solana instance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stake-pool-program-id")," -> This is the address of the stake pool program deployed with Lido for Solana"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validator-vote")," -> This is the address of the vote account for the validator being added"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validator-rewards-address")," -> This is the address that stSol rewards will be sent to"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))),(0,n.kt)("h3",{id:"creating-a-validator-stake-account"},"Creating a validator stake account"),(0,n.kt)("p",null,"In order to create the stake account that a validator will use, the solido cli provides the following operation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido create-validator-stake-account --solido-program-id $solido-program-id --solido-address $solido-address --stake-pool-program-id  $stake-pool-program-id  --validator-vote $validator-vote-account\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-program-id")," -> This is the address of the Lido for Solana program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-address")," -> This is the address of the account that stores the data for the Lido for Solana instance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stake-pool-program-id")," -> This is the address of the stake pool program deployed with Lido for Solana"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validator-vote")," -> This is the address of the vote account for the validator being added"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))),(0,n.kt)("h3",{id:"creating-the-lido-for-solana-instance"},"Creating the Lido for Solana instance."),(0,n.kt)("p",null,"In order to create the Lido for Solana instance it is necessary to supply commands to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"solido create-solido --solido-program-id $solido-program-id --stake-pool-program-id  $stake-pool-program-id --fee-numerator $fee-numerator --fee-denominator $fee-denominator --max-validators $max-validators --max-maintainers $max-maintainers --insurance-fee $insurance-fee --treasury-fee $treasury-fee --validation-fee $validation-fee --manager-fee $manager-fee --insurance-account-owner $insurance-account-owner --treasury-account-owner $treasury-account-ownder --manager-fee-account-owner $manager-fee-account-owner --manager $manager\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"where:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"solido-program-id")," -> This is the address of the Lido for Solana program"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stake-pool-program-id")," -> This is the address of the stake pool program deployed with Lido for Solana"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee-numerator")," -> The numerator of the fee fraction"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee-denominator")," -> The denominator of the fee fraction"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"max-validators")," -> The maximum number of validators that the Lido for Solana instance will support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"max-maintainers")," -> The maximum number of maintainers that the Lido for Solana instance will support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"insurance-fee")," -> The share of the fee for insurance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"treasury-fee")," -> The share of the fee for treasury"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validation-fee")," -> The share of the fee for validation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"manager-fee")," -> The share of the fee for manager"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"insurance-account-owner")," -> The account who will own the stSOL SPL token account that receives the treasury fees"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"treasury-account-owner")," -> The account who will own the stSOL SPL token account that receives the treasury fees"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"manager-fee-account-owner")," -> The account who will own the stSOL SPL token account that receives the manager fees"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"manager(optional)")," -> If defined, the Lido for Solana instance is created with a manager, otherwise the default fee payer is used"))),(0,n.kt)("li",{parentName:"ul"},"return:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transaction-address"),": The address of the transaction")))))}u.isMDXComponent=!0}}]);