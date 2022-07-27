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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenAccountsByOwner = exports.getTotalNumberOfTokenAccounts = exports.getExchangeRate = exports.getStSolSupply = exports.getTotalValueLocked = void 0;
const spl_token_1 = require("@solana/spl-token");
const bn_js_1 = __importDefault(require("bn.js"));
const types_1 = require("./types");
const getTotalValueLocked = (snapshot) => {
    const validatorsStakeAccountsBalanceInLamports = snapshot.solido.validators.entries
        .map((pubKeyAndEntry) => pubKeyAndEntry.entry)
        .map((validator) => validator.stake_accounts_balance)
        .reduce((acc, current) => acc.add(current), new bn_js_1.default(0));
    return {
        lamports: snapshot.reserveAccountBalance.lamports.add(validatorsStakeAccountsBalanceInLamports),
    };
};
exports.getTotalValueLocked = getTotalValueLocked;
const getStSolSupply = (snapshot, type) => {
    const totalFeeCredits = snapshot.solido.validators.entries.reduce((acc, eachValidator) => acc.add(eachValidator.entry.fee_credit), new bn_js_1.default(0));
    switch (type) {
        case 'circulating': {
            return snapshot.stSolSupply;
        }
        case 'totalcoins': {
            return {
                stLamports: snapshot.stSolSupply.stLamports.add(totalFeeCredits),
            };
        }
    }
};
exports.getStSolSupply = getStSolSupply;
const getExchangeRate = (snapshot) => {
    const totalSolInLamports = snapshot.solido.exchange_rate.sol_balance;
    const stSolSupplyInStLamports = snapshot.solido.exchange_rate.st_sol_supply;
    return totalSolInLamports.toNumber() / stSolSupplyInStLamports.toNumber();
};
exports.getExchangeRate = getExchangeRate;
const getTotalNumberOfTokenAccounts = (connection, tokenMintAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const memcmpFilter = {
        memcmp: { bytes: tokenMintAddress.toString(), offset: 0 },
    };
    const config = {
        filters: [{ dataSize: 165 }, memcmpFilter],
        dataSlice: { offset: 0, length: 0 },
        encoding: 'base64',
    };
    const accounts = yield connection.getParsedProgramAccounts(spl_token_1.TOKEN_PROGRAM_ID, config);
    return accounts.length;
});
exports.getTotalNumberOfTokenAccounts = getTotalNumberOfTokenAccounts;
const getTokenAccountsByOwner = (connection, tokenMintAddress, ownerAccountAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenAccounts = [];
    const { value } = yield connection.getParsedTokenAccountsByOwner(ownerAccountAddress, {
        mint: tokenMintAddress,
    });
    value.forEach((v) => {
        const address = v.pubkey;
        const balance = new types_1.Lamports(v.account.data.parsed.info.tokenAmount.amount);
        tokenAccounts.push({ address, balance });
    });
    return tokenAccounts;
});
exports.getTokenAccountsByOwner = getTokenAccountsByOwner;
//# sourceMappingURL=stats.js.map