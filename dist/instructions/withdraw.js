"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getWithdrawInstruction = void 0;
const BufferLayout = __importStar(require("@solana/buffer-layout"));
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const bn_js_1 = __importDefault(require("bn.js"));
const types_1 = require("../types");
const utils_1 = require("../utils");
const getWithdrawInstruction = (snapshot, senderStSolAccountOwnerAddress, senderStSolAccountAddress, recipientStakeAccountAddress, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const stakeAuthorityAddress = yield (0, utils_1.findAuthorityProgramAddress)(snapshot.programAddresses, 'stake_authority');
    const heaviestValidatorStakeAccount = (0, utils_1.getHeaviestValidatorStakeAccount)(snapshot);
    const { exchange_rate } = snapshot.solido;
    const withdrawAmountInSol = new types_1.Lamports(amount.stLamports.mul(exchange_rate.sol_balance.div(exchange_rate.st_sol_supply)));
    if (withdrawAmountInSol.lamports.lte(snapshot.stakeAccountRentExemptionBalance.lamports)) {
        throw new Error('Amount must be greater than the rent exemption balance');
    }
    const maxWithdrawAmount = new types_1.Lamports(heaviestValidatorStakeAccount.balance.lamports
        .div(new bn_js_1.default(10))
        .add(new bn_js_1.default(10 * web3_js_1.LAMPORTS_PER_SOL)));
    if (withdrawAmountInSol.lamports.gte(maxWithdrawAmount.lamports)) {
        throw new Error('Amount must be less than the maximum withdrawal amount');
    }
    const keys = [
        {
            pubkey: snapshot.programAddresses.solidoInstanceId,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: senderStSolAccountOwnerAddress,
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: senderStSolAccountAddress,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: snapshot.programAddresses.stSolMintAddress,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: heaviestValidatorStakeAccount.validatorVoteAddress,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: heaviestValidatorStakeAccount.address,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: recipientStakeAccountAddress,
            isSigner: true,
            isWritable: true,
        },
        { pubkey: stakeAuthorityAddress, isSigner: false, isWritable: false },
        { pubkey: spl_token_1.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: web3_js_1.StakeProgram.programId, isSigner: false, isWritable: false },
    ];
    const dataLayout = BufferLayout.struct([
        BufferLayout.u8('instruction'),
        BufferLayout.nu64('amount'),
    ]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: 2,
        amount: amount.stLamports,
    }, data);
    return new web3_js_1.TransactionInstruction({
        keys,
        data,
        programId: snapshot.programAddresses.solidoProgramId,
    });
});
exports.getWithdrawInstruction = getWithdrawInstruction;
//# sourceMappingURL=withdraw.js.map