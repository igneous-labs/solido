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
exports.exchangeStSol = exports.exchangeSol = exports.getHeaviestValidatorStakeAccount = exports.calculateStakeAccountAddress = exports.findAuthorityProgramAddress = void 0;
const web3_js_1 = require("@solana/web3.js");
const types_1 = require("./types");
const findAuthorityProgramAddress = (programAddresses, additionalSeedString) => __awaiter(void 0, void 0, void 0, function* () {
    const bufferArray = [
        programAddresses.solidoInstanceId.toBuffer(),
        Buffer.from(additionalSeedString),
    ];
    return (yield web3_js_1.PublicKey.findProgramAddress(bufferArray, programAddresses.solidoProgramId))[0];
});
exports.findAuthorityProgramAddress = findAuthorityProgramAddress;
const calculateStakeAccountAddress = (solidoInstanceId, solidoProgramId, validatorVoteAccount, seed) => __awaiter(void 0, void 0, void 0, function* () {
    const bufferArray = [
        solidoInstanceId.toBuffer(),
        validatorVoteAccount.toBuffer(),
        Buffer.from('validator_stake_account'),
        Buffer.from(seed.toArray('le', 8)),
    ];
    const [stakeAccountAddress] = yield web3_js_1.PublicKey.findProgramAddress(bufferArray, solidoProgramId);
    return stakeAccountAddress;
});
exports.calculateStakeAccountAddress = calculateStakeAccountAddress;
const getHeaviestValidatorStakeAccount = (snapshot) => {
    let heaviestValidatorStakeAccount = snapshot.validatorsStakeAccounts[0];
    snapshot.validatorsStakeAccounts.forEach((validatorStakeAccount) => {
        if (validatorStakeAccount.balance.lamports.gt(heaviestValidatorStakeAccount.balance.lamports)) {
            heaviestValidatorStakeAccount = validatorStakeAccount;
        }
    });
    return heaviestValidatorStakeAccount;
};
exports.getHeaviestValidatorStakeAccount = getHeaviestValidatorStakeAccount;
const exchangeSol = (snapshot, amount) => {
    const exchangeRate = snapshot.solido.exchange_rate;
    if (exchangeRate.st_sol_supply.toString() === '0') {
        return new types_1.StLamports(amount.lamports.toString());
    }
    return new types_1.StLamports((amount.lamports.toNumber() * exchangeRate.st_sol_supply.toNumber()) /
        exchangeRate.sol_balance.toNumber());
};
exports.exchangeSol = exchangeSol;
const exchangeStSol = (snapshot, amount) => {
    const exchangeRate = snapshot.solido.exchange_rate;
    return new types_1.Lamports((amount.stLamports.toNumber() * exchangeRate.sol_balance.toNumber()) /
        exchangeRate.st_sol_supply.toNumber());
};
exports.exchangeStSol = exchangeStSol;
//# sourceMappingURL=utils.js.map