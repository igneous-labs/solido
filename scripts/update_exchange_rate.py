from solana.rpc.api import Client
from solders import sysvar
from solders.instruction import AccountMeta, Instruction
from solders.keypair import Keypair
from solders.pubkey import Pubkey
from solders.transaction import Transaction

# need abs path for this
PAYER_PATH = "/TODO/PATH/TO.JSON"

RPC = "https://api.mainnet-beta.solana.com"

LIDO_PROGRAM_ID = Pubkey.from_string("CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi")

LIDO_STATE = Pubkey.from_string("49Yi1TKkNyYjPAFdR9LBvoHcUjuPX4Df5T5yv39w2XTn")
LIDO_RESERVE = Pubkey.from_string("3Kwv3pEAuoe4WevPB4rgMBTZndGDb53XT7qwQKnvHPfX")
STSOL_MINT = Pubkey.from_string("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj")
LIDO_VALIDATOR_LIST = Pubkey.from_string("GL9kqRNUTUosW3RsDoXHCuXUZn73SgQQmBvtp1ng2co4")

UPDATE_EXCHANGE_RATE_V2_IX_DATA = bytes([0x16]) # Note: not 0x17 like in main branch. Refer to V2.1 branch

UPDATE_EXCHANGE_RATE_V2_IX_METAS = [
    AccountMeta(LIDO_STATE, False, True),
    AccountMeta(LIDO_RESERVE, False, False),
    AccountMeta(STSOL_MINT, False, False),
    AccountMeta(LIDO_VALIDATOR_LIST, False, False),
    AccountMeta(sysvar.CLOCK, False, False),
    AccountMeta(sysvar.RENT, False, False),
]

UPDATE_IX = Instruction(LIDO_PROGRAM_ID, UPDATE_EXCHANGE_RATE_V2_IX_DATA, UPDATE_EXCHANGE_RATE_V2_IX_METAS)

def load_keypair(fname):
    with open(fname, "r") as f:
        return Keypair.from_json(f.read())

def make_tx(payer, rbh):
    return Transaction.new_signed_with_payer(
        [UPDATE_IX],
        payer.pubkey(),
        [payer],
        rbh,
    )

if __name__ == "__main__":
    rpc = Client(RPC)
    payer = load_keypair(PAYER_PATH)

    rbh = rpc.get_latest_blockhash().value.blockhash
    tx = make_tx(
        payer,
        rbh,
    )
    tx_bytes = bytes(tx)
    sig = rpc.send_raw_transaction(tx_bytes).value
    print(f"{sig}")
    rpc.confirm_transaction(sig, commitment="finalized")
