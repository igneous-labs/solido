import type { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import type { Solido } from './snapshot';
export interface ProgramAddresses {
    solidoProgramId: PublicKey;
    solidoInstanceId: PublicKey;
    stSolMintAddress: PublicKey;
}
export declare class Lamports {
    lamports: BN;
    constructor(lamports: number | string | BN);
}
export declare class StLamports {
    stLamports: BN;
    constructor(stLamports: number | string | BN);
}
export interface Snapshot {
    solido: Solido;
    programAddresses: ProgramAddresses;
    reserveAccountBalance: Lamports;
    stSolSupply: StLamports;
    stakeAccountRentExemptionBalance: Lamports;
    validatorsStakeAccounts: {
        validatorVoteAddress: PublicKey;
        address: PublicKey;
        balance: Lamports;
    }[];
}
