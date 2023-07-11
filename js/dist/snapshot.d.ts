/// <reference types="node" />
import { Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { ProgramAddresses, Snapshot } from './types';
export declare class Solido {
    exchange_rate: ExchangeRate;
    fee_recipients: FeeRecipients;
    lido_version: number;
    maintainers: Maintainers;
    manager: PublicKey;
    metrics: Metrics;
    mint_authority_bump_seed: number;
    reward_distribution: RewardDistribution;
    rewards_withdraw_authority_bump_seed: number;
    sol_reserve_authority_bump_seed: number;
    st_sol_mint: PublicKey;
    stake_authority_bump_seed: number;
    validators: Validators;
    constructor(data: any);
}
declare class SeedRange {
    begin: BN;
    end: BN;
    constructor(data: SeedRange);
}
declare class Validator {
    active: number;
    fee_address: PublicKey;
    fee_credit: BN;
    stake_seeds: SeedRange;
    unstake_seeds: SeedRange;
    stake_accounts_balance: BN;
    unstake_accounts_balance: BN;
    constructor(data: any);
}
declare class ValidatorPubKeyAndEntry {
    pubkey: PublicKey;
    entry: Validator;
    constructor(data: any);
}
declare class MaintainerPubKeyAndEntry {
    pubkey: PublicKey;
    entry: Uint8Array;
    constructor(data: any);
}
declare class RewardDistribution {
    treasury_fee: number;
    validation_fee: number;
    developer_fee: number;
    st_sol_appreciation: number;
    constructor(data: RewardDistribution);
}
declare class FeeRecipients {
    treasury_account: PublicKey;
    developer_account: PublicKey;
    constructor(data: any);
}
declare class Validators {
    entries: ValidatorPubKeyAndEntry[];
    maximum_entries: number;
    constructor(data: Validators);
}
declare class Maintainers {
    entries: MaintainerPubKeyAndEntry[];
    maximum_entries: number;
    constructor(data: Maintainers);
}
declare class ExchangeRate {
    computed_in_epoch: BN;
    st_sol_supply: BN;
    sol_balance: BN;
    constructor(data: ExchangeRate);
}
declare class Metrics {
    fee_treasury_sol_total: BN;
    fee_validation_sol_total: BN;
    fee_developer_sol_total: BN;
    st_sol_appreciation_sol_total: BN;
    fee_treasury_st_sol_total: BN;
    fee_validation_st_sol_total: BN;
    fee_developer_st_sol_total: BN;
    deposit_amount: LamportsHistogram;
    withdraw_amount: WithdrawMetric;
    constructor(data: Metrics);
}
declare class LamportsHistogram {
    counts1: BN;
    counts2: BN;
    counts3: BN;
    counts4: BN;
    counts5: BN;
    counts6: BN;
    counts7: BN;
    counts8: BN;
    counts9: BN;
    counts10: BN;
    counts11: BN;
    counts12: BN;
    total: BN;
    constructor(data: LamportsHistogram);
}
declare class WithdrawMetric {
    count: BN;
    total_sol_amount: BN;
    total_st_sol_amount: BN;
    constructor(data: WithdrawMetric);
}
export declare const schema: Map<typeof ExchangeRate, {
    kind: string;
    fields: ((string | typeof LamportsHistogram)[] | (string | typeof WithdrawMetric)[])[];
} | {
    kind: string;
    fields: (string | typeof SeedRange)[][];
} | {
    kind: string;
    fields: (string | typeof Validator)[][];
} | {
    kind: string;
    fields: (string | number[])[][];
} | {
    kind: string;
    fields: (string | (typeof ValidatorPubKeyAndEntry)[])[][];
} | {
    kind: string;
    fields: (string | (typeof MaintainerPubKeyAndEntry)[])[][];
} | {
    kind: string;
    fields: ((string | typeof ExchangeRate)[] | (string | typeof RewardDistribution)[] | (string | typeof FeeRecipients)[] | (string | typeof Metrics)[] | (string | typeof Validators)[] | (string | typeof Maintainers)[])[];
}>;
export declare const getSolido: (solidoInstanceDataBuffer: Buffer) => Solido;
export declare const getSnapshot: (connection: Connection, programAddresses: ProgramAddresses) => Promise<Snapshot>;
export {};
