import { PublicKey } from '@solana/web3.js';
import type BN from 'bn.js';
import type { ProgramAddresses, Snapshot } from './types';
import { Lamports, StLamports } from './types';
export declare const findAuthorityProgramAddress: (programAddresses: ProgramAddresses, additionalSeedString: string) => Promise<PublicKey>;
export declare const calculateStakeAccountAddress: (solidoInstanceId: PublicKey, solidoProgramId: PublicKey, validatorVoteAccount: PublicKey, seed: BN) => Promise<PublicKey>;
export declare const getHeaviestValidatorStakeAccount: (snapshot: Snapshot) => Snapshot['validatorsStakeAccounts'][0];
export declare const exchangeSol: (snapshot: Snapshot, amount: Lamports) => StLamports;
export declare const exchangeStSol: (snapshot: Snapshot, amount: StLamports) => Lamports;
