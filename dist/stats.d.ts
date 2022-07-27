import { Connection, PublicKey } from '@solana/web3.js';
import { Lamports, Snapshot, StLamports } from './types';
export declare const getTotalValueLocked: (snapshot: Snapshot) => Lamports;
export declare const getStSolSupply: (snapshot: Snapshot, type: 'totalcoins' | 'circulating') => StLamports;
export declare const getExchangeRate: (snapshot: Snapshot) => number;
export declare const getTotalNumberOfTokenAccounts: (connection: Connection, tokenMintAddress: PublicKey) => Promise<number>;
export declare const getTokenAccountsByOwner: (connection: Connection, tokenMintAddress: PublicKey, ownerAccountAddress: PublicKey) => Promise<{
    address: PublicKey;
    balance: Lamports;
}[]>;
