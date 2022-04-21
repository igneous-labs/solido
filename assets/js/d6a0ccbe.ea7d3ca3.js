(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3135],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var h=n.createContext({}),l=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,h=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=o,u=c["".concat(h,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5749:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return h},default:function(){return d}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={},s={unversionedId:"internals/withdrawals",id:"internals/withdrawals",isDocsHomePage:!1,title:"Withdrawals",description:"This page describes how withdrawals in Lido for Solana work, and why we went",source:"@site/docs/internals/withdrawals.md",sourceDirName:"internals",slug:"/internals/withdrawals",permalink:"/internals/withdrawals",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Commission",permalink:"/internals/commission"},next:{title:"Exchange rate",permalink:"/internals/exchange-rate"}},h=[{value:"Background: Solido staking",id:"background-solido-staking",children:[]},{value:"Background: Solido rewards",id:"background-solido-rewards",children:[]},{value:"Withdrawal approach",id:"withdrawal-approach",children:[]},{value:"Possible concerns",id:"possible-concerns",children:[]},{value:"Comparison to Lido for Ethereum",id:"comparison-to-lido-for-ethereum",children:[]}],l={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page describes how withdrawals in Lido for Solana work, and why we went\nwith this approach. If you haven\u2019t done so yet, now is a good time to review\n",(0,r.kt)("a",{parentName:"p",href:"/internals/solana-staking#stake-accounts"},"how stake accounts work on Solana"),"."),(0,r.kt)("h2",{id:"background-solido-staking"},"Background: Solido staking"),(0,r.kt)("p",null,"For Solido, we require validators to set up a new vote account, with 100%\ncommission, and the withdraw authority set to a Solido-controlled address. (See\nalso ",(0,r.kt)("a",{parentName:"p",href:"/internals/commission"},"the commission page"),".) This means that all validation\nrewards are controlled by the Solido program. Solido then computes fee amounts\nand distributes those to validators. This is a bit different from a typical\nnon-pooled validator setup, where validators set themselves as withdraw\nauthority, and fee distribution happens automatically due to the\ncommission/delegator split. Because for Solido all validation rewards are paid\nas commission into vote accounts, rewards do not compound automatically, so the\nSolido maintenance bot withdraws the rewards from the vote accounts and stakes\nthem, just like it stakes deposits."),(0,r.kt)("h2",{id:"background-solido-rewards"},"Background: Solido rewards"),(0,r.kt)("p",null,"On Solana, vote accounts gain rewards proportional to how many times they voted,\nand proportional to the stake delegated to them. The stake amount is the\n",(0,r.kt)("em",{parentName:"p"},"active")," stake at the start of the epoch (so active and deactivating stake, but\nnot activating and inactive stake). Rewards for votes in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", are then\npaid by the runtime at the start of epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1. In the optimal case, this\nmeans that if you activate (delegate) stake in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", it will be activating\nfor the remainder of epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", it will be active in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1, and the\nrewards gained over epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1 will be paid at the start of epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 2."),(0,r.kt)("p",null,"Solido splits validation rewards into two parts: fees, that get paid in the form\nof stSOL, and rewards that benefit stSOL holders implicitly, by making the SOL\nvalue of stSOL go up. Solido maintains a fixed exchange rate per epoch, that is\nupdated once at the start of the epoch."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the start of epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", the maintenance bot triggers an exchange rate\nupdate. Solido then reads the SOL balance managed, and the amount of stSOL in\nexistence, and this becomes the new exchange rate for epoch ",(0,r.kt)("em",{parentName:"p"},"k"),". The SOL\nbalance managed by Solido does not yet include rewards received at the start\nof epoch ",(0,r.kt)("em",{parentName:"p"},"k"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the exchange rate update, the maintenance bot triggers fee collection\nfor every validator. This looks at the vote accounts, and withdraws the\nrewards in there into the Solido reserve. These rewards are the rewards over\nepoch ",(0,r.kt)("em",{parentName:"p"},"k")," - 1. Solido mints stSOL fees according to the current (just\nupdated) exchange rate, and the remainder goes to stSOL value accrual, which\nwill go into effect when the next exchange rate update observes the new\nbalance."))),(0,r.kt)("p",null,"A user who deposits in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", can withdraw more SOL than initially\ndeposited, in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1. Therefore, the user benefits from rewards in epoch\n",(0,r.kt)("em",{parentName:"p"},"k")," + 1. This benefit is not due to the user\u2019s own deposit, because that stake\nonly started being active in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1; it\u2019s the reward over epoch ",(0,r.kt)("em",{parentName:"p"},"k")," - 1,\nthat benefits stSOL holders at the transition from epoch ",(0,r.kt)("em",{parentName:"p"},"k")," to ",(0,r.kt)("em",{parentName:"p"},"k")," + 1. This\nmeans rewards are \u201cshifted in time\u201d: users can already benefit, even though\ntheir share of the pool is not yet active and gaining rewards."),(0,r.kt)("p",null,"On the flip side of this, users do not benefit from rewards gained over the\nepoch where they withdraw. If a user withdraws and deactivates in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),",\nthen the stake still gains rewards over epoch ",(0,r.kt)("em",{parentName:"p"},"k"),". The stake is deactivating,\nbut that counts as active stake for the purpose of rewards. Those rewards over\nepoch ",(0,r.kt)("em",{parentName:"p"},"k")," get paid at the start of epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1, and they will benefit stSOL\nholders at the exchange rate update of epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 2. A user who withdraws in\nepoch ",(0,r.kt)("em",{parentName:"p"},"k"),", therefore benefitted for the last time at transition from epoch\n",(0,r.kt)("em",{parentName:"p"},"k")," - 1 to ",(0,r.kt)("em",{parentName:"p"},"k"),", and that benefit was due to the stake active in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," - 2."),(0,r.kt)("p",null,"Aside from reward differences due to differences in activating stake, Solana has\nan inflation schedule that reduces the reward slightly with every epoch."),(0,r.kt)("h2",{id:"withdrawal-approach"},"Withdrawal approach"),(0,r.kt)("p",null,"This section describes how withdrawals work in Lido for Solana. In the next\nsection, we can then investigate possible concerns to see if they are a problem\nfor this withdrawal method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Withdrawals withdraw an active stake account."),"\nWhen a user withdraws, we take the stSOL and burn it. Then we split one of the\nSolido-managed stake accounts, to split off the corresponding amount of SOL.\n(The amount is determined by the internal exchange rate, see below.) We set the\nstake and withdraw authority of this new stake account to the withdrawing user\u2019s\naddress, so the user is now in full control of this stake account. The stake\nremains active, and delegated to one of the Solido validators. It is up to the\nuser to deactivate the stake, and then withdraw from the stake account. We might\nautomatically include a deactivate instruction from the withdraw widget or CLI\ncommand, to save users the deactivate step."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solido picks the validator to withdraw from."),"\nSolido maintains a target stake balance and actual balance for every validator.\nIt only allows withdrawing from a validator, if there is no other validator\nwhose stake balance is further above its target than the one we try to withdraw\nfrom. If the maintenance bot kept the stake exactly balanced, this could be any\nvalidator, but in practice, due to the minimum stake amount, validator balances\ncan differ slightly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Withdrawal amounts are constrained."),"\nBecause withdrawal splits a stake account, the maximum amount to withdraw is the\namount of stake in the target stake account, minus the minimum stake balance. If\nusers want to withdraw more, they should do multiple withdrawals. Also, because\nof the minimum rent-exempt balance of stake accounts, the minimum amount to\nwithdraw is the minimum rent-exempt balance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Withdrawal amounts are capped further."),"\nAside from the above limitations, we cap withdrawals so users can withdraw at\nmost 10% of a validator\u2019s stake."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The exchange rate is fixed per epoch."),"\nSolido uses a fixed SOL/stSOL exchange rate that is updated once per epoch. The\nnet effect of this is that the relative order of deposits and withdrawals within\nan epoch no longer matters. Effectively, time is discrete, and only epochs\nmatter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Withdrawals are for advanced users."),"\nBecause withdrawals are subject to some constraints, and because they require\nmultiple advanced steps from the user (deactivate and withdraw from the stake\naccount), we don\u2019t expect regular users to withdraw from Solido. Those users can\nwithdraw on the open market (e.g. Saber or Serum) instead. We mainly expect\npower users such as market makers to withdraw directly from Solido."),(0,r.kt)("p",null,"Consequences of this approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solido gains rewards over stake that was withdrawn, over the epoch that the\nstake was withdrawn in. (And possibly longer, if the user doesn\u2019t deactivate\nthe stake.)"),(0,r.kt)("li",{parentName:"ul"},"Withdrawals are instant for Solido, we do not need to store ongoing\nwithdrawals anywhere. Withdrawals are instant for users too, in the sense\nthat the funds immediately move to an account controlled by the user, but\nusers still need to deactivate their stake and wait for it to cool down\nbefore they can spend the SOL. This is enforced by the Solana network, Solido\nis not involved in the cooldown.")),(0,r.kt)("h2",{id:"possible-concerns"},"Possible concerns"),(0,r.kt)("p",null,"This section lists some possible issues, and explains how they affect Solido\u2019s\nwithdrawal approach."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Non-issue]"," Withdrawals causing churn, which cause Solido to miss rewards."),"\nIf stake that is withdrawn no longer incurs rewards, then a user could withdraw\n",(0,r.kt)("em",{parentName:"p"},"x")," SOL, and then deposit ",(0,r.kt)("em",{parentName:"p"},"x")," SOL. (They might be different users too.) The end\nresult is the same balance for Solido, except that we gain fewer rewards,\nbecause newly deposited SOL needs to be activated first, and it\u2019s not gaining\nrewards while it is activating. This turns out to be a non-issue, because\ndeactivating stake still gains rewards, so when users withdraw, even though they\nare in control of the stake account from that point on, Solido still gets the\nrewards that epoch. Therefore, withdrawing does not cause Solido to miss\nrewards."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Non-issue]"," Users who have knowledge about future slashings can withdraw to\navoid the penalty.")," This is not a problem, because slashing does not exist on\nSolana."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Non-issue]"," Bank run.")," Aside from the minimum mentioned above, nothing\nprevents users from withdrawing, and users who withdraw do not have a negative\nimpact on Solido."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Low impact]"," Users can disturb the stake balance."),"\nEven though Solido only allows withdrawing from the validator with the most\nexcess stake, users can withdraw a large amount that disturbs the stake\ndistribution by a lot. This is less of a problem with more validators. Users\ncould also wait for their target validator to be the one with the most excess\nstake, and then withdraw. A validator with less stake is not a problem for that\nvalidator, because Solido distributes validation rewards among all validators,\nso the validator will still have income, even if it temporarily has less stake.\nStill, to limit the impact of this issue, we cap the amount per withdrawal to a\npercentage of the validator\u2019s stake. For larger withdrawals, the user needs to\nbreak them up, and then Solido enforces that the parts are withdrawn from\ndifferent validators. Furthermore, in v1, the only way to return to the target\nstake distribution is by staking more new deposits, but in v2, we plan for the\nmaintenance bot to actively redistribute stake, which will limit the possibility\nfor imbalance at larger timescales."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Low impact]"," Solido balance cannot be fully withdrawn.")," Because we require a\nminimum amount to remain in every stake account, not all funds can be withdrawn.\nWe need to keep at least one stake account, with the minimum stake account\nbalance, per validator. In the long term, this can be resolved by implementing\nvalidator removal. Because the \u201clocked\u201d amount is proportional to the number of\nvalidators, it can be reduced by reducing the number of validators. But even\nwithout validator removal, this is not a problem in practice. The minimum stake\naccount balance is only 1 SOL, so if every validator who joins deposits 1 SOL\nwithout the intention of withdrawing it, then all users who wish to withdraw can\ndo so."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Unknown impact]"," Time shift of rewards.")," When users deposit at epoch ",(0,r.kt)("em",{parentName:"p"},"k")," and\nwithdraw in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1, the reward is really the reward over the stake active\nin epoch ",(0,r.kt)("em",{parentName:"p"},"k")," - 1, see also the earlier section on Solido rewards. When the\nbalance managed by Solido is steady, and when deposits and withdrawals are small\nwith respect to size of the pool, the rewards over those epochs will be very\nsimilar. However, when the pool is growing or shrinking a lot, this difference\nmight be significant. Let\u2019s consider three scenarios:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In epoch ",(0,r.kt)("em",{parentName:"li"},"k")," - 1, the pool size was a lot smaller than ",(0,r.kt)("em",{parentName:"li"},"x"),", and in epoch\n",(0,r.kt)("em",{parentName:"li"},"k"),", it\u2019s ",(0,r.kt)("em",{parentName:"li"},"x"),". (The pool is growing fast.)"),(0,r.kt)("li",{parentName:"ol"},"In epoch ",(0,r.kt)("em",{parentName:"li"},"k")," - 1, the pool size was about ",(0,r.kt)("em",{parentName:"li"},"x"),", and in epoch ",(0,r.kt)("em",{parentName:"li"},"k"),", it\u2019s ",(0,r.kt)("em",{parentName:"li"},"x"),".\n(The pool is steady.)"),(0,r.kt)("li",{parentName:"ol"},"In epoch ",(0,r.kt)("em",{parentName:"li"},"k")," - 1, the pool size was a lot larger than ",(0,r.kt)("em",{parentName:"li"},"x"),", and in epoch ",(0,r.kt)("em",{parentName:"li"},"k"),",\nit\u2019s ",(0,r.kt)("em",{parentName:"li"},"x"),". (The pool is shrinking quickly.)")),(0,r.kt)("p",null,"For a user who deposits SOL in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", and withdraws all of it in epoch\n",(0,r.kt)("em",{parentName:"p"},"k")," + 1, the benefit in scenario 1 is smaller than scenario 2, and the benefit\nin scenario 3 is larger than in scenario 2. In other words, it\u2019s more lucrative\nto jump in and out when the pool is shrinking to ",(0,r.kt)("em",{parentName:"p"},"x"),", than when the pool is\ngrowing to ",(0,r.kt)("em",{parentName:"p"},"x"),". (Note, this compares growing and shrinking to ",(0,r.kt)("em",{parentName:"p"},"x"),", not just\ngrowing or shrinking in general!) We don\u2019t know how this impacts long-term\nstability; withdrawing in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1 is still more lucrative than withdrawing\nin epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", regardless of whether the pool is growing or shrinking. Also, due\nto the fixed exchange rate, withdrawing ",(0,r.kt)("em",{parentName:"p"},"x")," SOL in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," and depositing the\nsame amount again in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", is equivalent for the user to just holding the\nstSOL. There might be other interesting behaviors though, this needs more\nanalysis."),(0,r.kt)("h2",{id:"comparison-to-lido-for-ethereum"},"Comparison to Lido for Ethereum"),(0,r.kt)("p",null,"We also investigate some of ",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/handling-withdrawals-in-lidos-eth-liquid-staking-protocol/8873"},"the concerns that were investigated for Lido for\nEthereum"),", to benefit from the analysis done there. This is not an\napples-to-apples comparison because Solana and Ethereum are very different, but\nit is good to still go over the scenarios, to see if and how they affect Solido."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[N/A]"," Discrete withdrawal amounts."),"\nOn Ethereum 2, withdrawal amounts are less flexible than on Solana. On Solana,\nwe can split off a stake account for almost any amount of SOL, but limited by\nthe constraints mentioned before."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[N/A]"," Oracle reports on network state."),"\nSolido does not involve any oracles, everything happens on-chain."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[N/A]"," Network turbulence."),"\nEthereum 2 can lose finality. This is not a problem on Solana; in the worst case\nthe network halts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[N/A]"," Ongoing slashings."),"\nSlashing does not exist on Solana."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Non-issue]"," Ongoing rewards."),"\nRewards on Solana are paid once per epoch. Solido discretizes time such that\nonly epochs matter. Users who deposit in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", benefit (from the new\nexchange rate) in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1. Users who withdraw in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", can access\ntheir funds at the earliest in epoch ",(0,r.kt)("em",{parentName:"p"},"k")," + 1 (and possibly later, if cooldown\ntakes longer, this depends on the state of the entire network). Users who\nwithdraw in epoch ",(0,r.kt)("em",{parentName:"p"},"k"),", do not benefit from the rewards incurred over epoch ",(0,r.kt)("em",{parentName:"p"},"k"),".\nTo benefit from rewards, users need to stake with Solido for at least one epoch\nboundary."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Non-issue]"," Unbonding period."),"\nStake on Solana is subject to a cooldown period. We move this problem to the\nuser, by making withdrawals return an active stake account, so we don\u2019t need to\nkeep track of the cooldown."))}d.isMDXComponent=!0}}]);