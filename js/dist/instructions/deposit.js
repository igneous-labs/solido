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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepositInstruction = void 0;
const BufferLayout = __importStar(require("@solana/buffer-layout"));
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const utils_1 = require("../utils");
const getDepositInstruction = (senderAddress, recipientStSolAddress, programAddresses, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const dataLayout = BufferLayout.struct([
        BufferLayout.u8('instruction'),
        BufferLayout.nu64('amount'),
    ]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ instruction: 1, amount: amount.lamports }, data);
    const reserveAccountAddress = yield (0, utils_1.findAuthorityProgramAddress)(programAddresses, 'reserve_account');
    const mintAuthorityAddress = yield (0, utils_1.findAuthorityProgramAddress)(programAddresses, 'mint_authority');
    const keys = [
        {
            pubkey: programAddresses.solidoInstanceId,
            isSigner: false,
            isWritable: true,
        },
        { pubkey: senderAddress, isSigner: true, isWritable: true },
        {
            pubkey: recipientStSolAddress,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: programAddresses.stSolMintAddress,
            isSigner: false,
            isWritable: true,
        },
        { pubkey: reserveAccountAddress, isSigner: false, isWritable: true },
        { pubkey: mintAuthorityAddress, isSigner: false, isWritable: false },
        { pubkey: spl_token_1.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: false },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        data,
        programId: programAddresses.solidoProgramId,
    });
});
exports.getDepositInstruction = getDepositInstruction;
//# sourceMappingURL=deposit.js.map