import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { StLamports } from '../types';
import type { Snapshot } from '../types';
export declare const getWithdrawInstruction: (snapshot: Snapshot, senderStSolAccountOwnerAddress: PublicKey, senderStSolAccountAddress: PublicKey, recipientStakeAccountAddress: PublicKey, amount: StLamports) => Promise<TransactionInstruction>;
