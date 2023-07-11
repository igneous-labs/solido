import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { Lamports, ProgramAddresses } from '../types';
export declare const getDepositInstruction: (senderAddress: PublicKey, recipientStSolAddress: PublicKey, programAddresses: ProgramAddresses, amount: Lamports) => Promise<TransactionInstruction>;
