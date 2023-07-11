"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSnapshot = exports.getSolido = exports.schema = exports.Solido = void 0;
const web3_js_1 = require("@solana/web3.js");
const borsh_1 = require("borsh");
const types_1 = require("./types");
const utils_1 = require("./utils");
class Solido {
    constructor(data) {
        const parsedData = Object.assign(Object.assign({}, data), { manager: new web3_js_1.PublicKey(data.manager.toArray('le')), st_sol_mint: new web3_js_1.PublicKey(data.st_sol_mint.toArray('le')) });
        Object.assign(this, parsedData);
    }
}
exports.Solido = Solido;
class SeedRange {
    constructor(data) {
        Object.assign(this, data);
    }
}
class Validator {
    constructor(data) {
        const parsedData = Object.assign(Object.assign({}, data), { fee_address: new web3_js_1.PublicKey(data.fee_address.toArray('le')) });
        Object.assign(this, parsedData);
    }
}
class ValidatorPubKeyAndEntry {
    constructor(data) {
        const parsedData = Object.assign(Object.assign({}, data), { pubkey: new web3_js_1.PublicKey(data.pubkey.toArray('le')) });
        Object.assign(this, parsedData);
    }
}
class MaintainerPubKeyAndEntry {
    constructor(data) {
        const parsedData = Object.assign(Object.assign({}, data), { pubkey: new web3_js_1.PublicKey(data.pubkey.toArray('le')) });
        Object.assign(this, parsedData);
    }
}
class RewardDistribution {
    constructor(data) {
        Object.assign(this, data);
    }
}
class FeeRecipients {
    constructor(data) {
        const parsedData = Object.assign(Object.assign({}, data), { treasury_account: new web3_js_1.PublicKey(data.treasury_account.toArray('le')), developer_account: new web3_js_1.PublicKey(data.developer_account.toArray('le')) });
        Object.assign(this, parsedData);
    }
}
class Validators {
    constructor(data) {
        Object.assign(this, data);
    }
}
class Maintainers {
    constructor(data) {
        Object.assign(this, data);
    }
}
class ExchangeRate {
    constructor(data) {
        Object.assign(this, data);
    }
}
class Metrics {
    constructor(data) {
        Object.assign(this, data);
    }
}
class LamportsHistogram {
    constructor(data) {
        Object.assign(this, data);
    }
}
class WithdrawMetric {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.schema = new Map([
    [
        ExchangeRate,
        {
            kind: 'struct',
            fields: [
                ['computed_in_epoch', 'u64'],
                ['st_sol_supply', 'u64'],
                ['sol_balance', 'u64'],
            ],
        },
    ],
    [
        LamportsHistogram,
        {
            kind: 'struct',
            fields: [
                ['counts1', 'u64'],
                ['counts2', 'u64'],
                ['counts3', 'u64'],
                ['counts4', 'u64'],
                ['counts5', 'u64'],
                ['counts6', 'u64'],
                ['counts7', 'u64'],
                ['counts8', 'u64'],
                ['counts9', 'u64'],
                ['counts10', 'u64'],
                ['counts11', 'u64'],
                ['counts12', 'u64'],
                ['total', 'u64'],
            ],
        },
    ],
    [
        WithdrawMetric,
        {
            kind: 'struct',
            fields: [
                ['total_st_sol_amount', 'u64'],
                ['total_sol_amount', 'u64'],
                ['count', 'u64'],
            ],
        },
    ],
    [
        Metrics,
        {
            kind: 'struct',
            fields: [
                ['fee_treasury_sol_total', 'u64'],
                ['fee_validation_sol_total', 'u64'],
                ['fee_developer_sol_total', 'u64'],
                ['st_sol_appreciation_sol_total', 'u64'],
                ['fee_treasury_st_sol_total', 'u64'],
                ['fee_validation_st_sol_total', 'u64'],
                ['fee_developer_st_sol_total', 'u64'],
                ['deposit_amount', LamportsHistogram],
                ['withdraw_amount', WithdrawMetric],
            ],
        },
    ],
    [
        SeedRange,
        {
            kind: 'struct',
            fields: [
                ['begin', 'u64'],
                ['end', 'u64'],
            ],
        },
    ],
    [
        Validator,
        {
            kind: 'struct',
            fields: [
                ['fee_credit', 'u64'],
                ['fee_address', 'u256'],
                ['stake_seeds', SeedRange],
                ['unstake_seeds', SeedRange],
                ['stake_accounts_balance', 'u64'],
                ['unstake_accounts_balance', 'u64'],
                ['active', 'u8'],
            ],
        },
    ],
    [
        ValidatorPubKeyAndEntry,
        {
            kind: 'struct',
            fields: [
                ['pubkey', 'u256'],
                ['entry', Validator],
            ],
        },
    ],
    [
        MaintainerPubKeyAndEntry,
        {
            kind: 'struct',
            fields: [
                ['pubkey', 'u256'],
                ['entry', [0]],
            ],
        },
    ],
    [
        RewardDistribution,
        {
            kind: 'struct',
            fields: [
                ['treasury_fee', 'u32'],
                ['validation_fee', 'u32'],
                ['developer_fee', 'u32'],
                ['st_sol_appreciation', 'u32'],
            ],
        },
    ],
    [
        FeeRecipients,
        {
            kind: 'struct',
            fields: [
                ['treasury_account', 'u256'],
                ['developer_account', 'u256'],
            ],
        },
    ],
    [
        Validators,
        {
            kind: 'struct',
            fields: [
                ['entries', [ValidatorPubKeyAndEntry]],
                ['maximum_entries', 'u32'],
            ],
        },
    ],
    [
        Maintainers,
        {
            kind: 'struct',
            fields: [
                ['entries', [MaintainerPubKeyAndEntry]],
                ['maximum_entries', 'u32'],
            ],
        },
    ],
    [
        Solido,
        {
            kind: 'struct',
            fields: [
                ['lido_version', 'u8'],
                ['manager', 'u256'],
                ['st_sol_mint', 'u256'],
                ['exchange_rate', ExchangeRate],
                ['sol_reserve_authority_bump_seed', 'u8'],
                ['stake_authority_bump_seed', 'u8'],
                ['mint_authority_bump_seed', 'u8'],
                ['rewards_withdraw_authority_bump_seed', 'u8'],
                ['reward_distribution', RewardDistribution],
                ['fee_recipients', FeeRecipients],
                ['metrics', Metrics],
                ['validators', Validators],
                ['maintainers', Maintainers],
            ],
        },
    ],
]);
const getSolido = (solidoInstanceDataBuffer) => {
    const deserialized = (0, borsh_1.deserializeUnchecked)(exports.schema, Solido, solidoInstanceDataBuffer);
    return deserialized;
};
exports.getSolido = getSolido;
const getSnapshot = (connection, programAddresses) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsInfo = {
        [programAddresses.stSolMintAddress.toString()]: null,
    };
    const reserveAccountAddress = yield (0, utils_1.findAuthorityProgramAddress)(programAddresses, 'reserve_account');
    while (true) {
        const addressesToGetAccountInfoFor = Object.keys(accountsInfo).map((address) => new web3_js_1.PublicKey(address));
        const multipleAccountInfos = yield connection.getMultipleAccountsInfo(addressesToGetAccountInfoFor, { encoding: 'jsonParsed' });
        multipleAccountInfos.forEach((info, i) => {
            accountsInfo[addressesToGetAccountInfoFor[i].toString()] =
                info;
        });
        const reserveAccountInfo = accountsInfo[reserveAccountAddress.toString()];
        const solidoInstanceAccountInfo = accountsInfo[programAddresses.solidoInstanceId.toString()];
        if (!solidoInstanceAccountInfo || !reserveAccountInfo) {
            accountsInfo[reserveAccountAddress.toString()] = null;
            accountsInfo[programAddresses.solidoInstanceId.toString()] = null;
            continue;
        }
        const solido = (0, exports.getSolido)(solidoInstanceAccountInfo.data);
        const reserveAccountRentExemptionBalance = yield connection.getMinimumBalanceForRentExemption(reserveAccountInfo.data.byteLength);
        const reserveAccountBalance = new types_1.Lamports(reserveAccountInfo.lamports - reserveAccountRentExemptionBalance);
        const stSolMintAccountInfo = accountsInfo[programAddresses.stSolMintAddress.toString()];
        if (!stSolMintAccountInfo) {
            accountsInfo[programAddresses.stSolMintAddress.toString()] = null;
            continue;
        }
        const amount = stSolMintAccountInfo.data.parsed.info.supply;
        const stSolSupply = new types_1.StLamports(amount);
        const stakeAccountRentExemptionBalance = yield connection.getMinimumBalanceForRentExemption(web3_js_1.StakeProgram.space);
        const validatorsStakeAccounts = [];
        for (let i = 0; i < solido.validators.entries.length; i++) {
            const validator = solido.validators.entries[i];
            const validatorStakeAccountAddress = yield (0, utils_1.calculateStakeAccountAddress)(programAddresses.solidoInstanceId, programAddresses.solidoProgramId, validator.pubkey, validator.entry.stake_seeds.begin);
            validatorsStakeAccounts.push({
                validatorVoteAddress: validator.pubkey,
                address: validatorStakeAccountAddress,
                balance: new types_1.Lamports(0),
            });
        }
        const validatorStakeAccountsInfos = validatorsStakeAccounts.map((account) => {
            return accountsInfo[account.address.toString()];
        });
        const countOfInfoFetchedStakeAccounts = validatorStakeAccountsInfos.filter((a) => !!a).length;
        if (countOfInfoFetchedStakeAccounts < validatorsStakeAccounts.length) {
            validatorsStakeAccounts.forEach((a) => {
                accountsInfo[a.address.toString()] = null;
            });
            continue;
        }
        validatorsStakeAccounts.forEach((a, i) => {
            const validatorStakeAccountInfo = validatorStakeAccountsInfos[i];
            if (validatorStakeAccountInfo) {
                a.balance = new types_1.Lamports(validatorStakeAccountInfo.lamports);
            }
        });
        return {
            solido,
            programAddresses,
            reserveAccountBalance: reserveAccountBalance,
            stSolSupply: stSolSupply,
            stakeAccountRentExemptionBalance: new types_1.Lamports(stakeAccountRentExemptionBalance),
            validatorsStakeAccounts,
        };
    }
});
exports.getSnapshot = getSnapshot;
//# sourceMappingURL=snapshot.js.map