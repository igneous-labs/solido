import { PublicKey, TransactionInstruction } from '@solana/web3.js';
export declare const getATAInitializeInstruction: (mintAddress: PublicKey, ownerAddress: PublicKey) => Promise<TransactionInstruction>;
