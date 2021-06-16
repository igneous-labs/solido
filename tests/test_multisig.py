#!/usr/bin/env python3

"""
This script calls 'solana' and 'solido multisig' to go through two flows:

 * Upgrade a program managed by a multisig.
 * Change the owners of a multisig.

It exits with exit code 0 if everything works as expected, or with a nonzero
exit code if anything fails. It expects a test validator to be running at at the
default localhost port, and it expects a keypair at ~/.config/solana/id.json
that corresponds to a sufficiently funded account.
"""

import json
import os.path
import shutil
import subprocess
import sys
import tempfile

from typing import Any, Dict, Optional, NamedTuple

from util import (
    solana,
    create_test_account,
    solana_program_deploy,
    solana_program_show,
    get_multisig,
)


# We start by generating accounts that we will need later. We put the tests
# keys in a directory where we can .gitignore them, so they don't litter the
# working directory so much.
print('Creating test accounts ...')
os.makedirs('tests/.keys', exist_ok=True)
addr1 = create_test_account('tests/.keys/test-key-1.json')
addr2 = create_test_account('tests/.keys/test-key-2.json')
addr3 = create_test_account('tests/.keys/test-key-3.json')
print(f'> {addr1}')
print(f'> {addr2}')
print(f'> {addr3}')


print('\nUploading Multisig program ...')
multisig_program_id = solana_program_deploy('target/deploy/multisig.so')
print(f'> Multisig program id is {multisig_program_id}.')
multisig = get_multisig(multisig_program_id)

print('\nCreating new multisig ...')
result = multisig(
    'create-multisig',
    '--threshold',
    '2',
    '--owner',
    addr1.pubkey,
    '--owner',
    addr2.pubkey,
    '--owner',
    addr3.pubkey,
)
multisig_address = result['multisig_address']
multisig_program_derived_address = result['multisig_program_derived_address']
print(f'> Multisig address is {multisig_address}.')


print('\nUploading v1 of program to upgrade ...')
with tempfile.TemporaryDirectory() as scratch_dir:
    # We reuse the multisig binary for this purpose, but copy it to a different
    # location so 'solana program deploy' doesn't reuse the program id.
    program_fname = os.path.join(scratch_dir, 'program_v1.so')
    shutil.copyfile('target/deploy/multisig.so', program_fname)
    program_id = solana_program_deploy(program_fname)
    print(f'> Program id is {program_id}.')

    # Change the owner of the program to the multisig derived address. Although
    # 'solana program deploy' sports an '--upgrade-authority' option, using that
    # does not actually set the upgrade authority on deploy, so we do it in a
    # separate step.
    solana(
        'program',
        'set-upgrade-authority',
        '--new-upgrade-authority',
        multisig_program_derived_address,
        program_id,
    )

    upload_info = solana_program_show(program_id)
    print(f'> Program was uploaded in slot {upload_info.last_deploy_slot}.')
    assert upload_info.upgrade_authority == multisig_program_derived_address

    print('\nUploading v2 of program to buffer ...')
    program_fname = os.path.join(scratch_dir, 'program_v2.so')
    shutil.copyfile('target/deploy/multisig.so', program_fname)
    result = solana(
        'program',
        'write-buffer',
        '--output',
        'json',
        '--buffer-authority',
        multisig_program_derived_address,
        program_fname,
    )
    buffer_address = json.loads(result)['buffer']

    # Same for the buffer authority, it must be equal to the upgrade authority
    # of the program to upgrade, but the '--buffer-authority' argument of
    # 'solana write-buffer' does not work for some reason, so we set it after
    # upload instead.
    solana(
        'program',
        'set-buffer-authority',
        '--new-buffer-authority',
        multisig_program_derived_address,
        buffer_address,
    )
    print(f'> Program was uploaded to buffer {buffer_address}.')
    # Exit the scope, clean up the temporary directory.


# Confirm that we are unable to upgrade the program directly, only the multisig
# derived address should be able to.
print('\nAttempting direct upgrade, which should fail ...')
try:
    solana(
        'program',
        'deploy',
        '--program-id',
        program_id,
        '--buffer',
        buffer_address,
    )
except subprocess.CalledProcessError as err:
    assert err.returncode == 1
    new_info = solana_program_show(program_id)
    assert new_info == upload_info, 'Program should not have changed.'
    print('> Deploy failed as expected.')
else:
    print('> Deploy succeeded even though it should not have.')
    sys.exit(1)


print('\nProposing program upgrade ...')
result = multisig(
    'propose-upgrade',
    '--multisig-address',
    multisig_address,
    '--program-address',
    program_id,
    '--buffer-address',
    buffer_address,
    '--spill-address',
    addr1.pubkey,
    keypair_path=addr1.keypair_path,
)
upgrade_transaction_address = result['transaction_address']
print(f'> Transaction address is {upgrade_transaction_address}.')


# Confirm that only the proposer signed the transaction at this point, and that
# it is the upgrade transaction that we intended.
result = multisig(
    'show-transaction',
    '--transaction-address',
    upgrade_transaction_address,
)
assert result['did_execute'] == False

assert 'BpfLoaderUpgrade' in result['parsed_instruction']
assert result['parsed_instruction']['BpfLoaderUpgrade'] == {
    'program_to_upgrade': program_id,
    'program_data_address': upload_info.program_data_address,
    'buffer_address': buffer_address,
    'spill_address': addr1.pubkey,
}
assert result['signers']['Current']['signers'] == [
    {'owner': addr1.pubkey, 'did_sign': True},
    {'owner': addr2.pubkey, 'did_sign': False},
    {'owner': addr3.pubkey, 'did_sign': False},
]


print('\nTrying to execute with 1 of 2 signatures, which should fail ...')
try:
    multisig(
        'execute-transaction',
        '--multisig-address',
        multisig_address,
        '--transaction-address',
        upgrade_transaction_address,
    )
except subprocess.CalledProcessError as err:
    assert err.returncode != 0
    # assert 'Not enough owners signed this transaction' in err.stderr
    # TODO(#177) Previously the error included a human-readable message, why does it
    # only include the error code now? Something to do with different Anchor
    # versions?
    assert 'custom program error: 0x65' in err.stdout
    new_info = solana_program_show(program_id)
    assert new_info == upload_info, 'Program should not have changed.'
    print('> Execution failed as expected.')
else:
    print('> Execution succeeded even though it should not have.')
    sys.exit(1)


print('\nApproving transaction from a second account ...')
multisig(
    'approve',
    '--multisig-address',
    multisig_address,
    '--transaction-address',
    upgrade_transaction_address,
    keypair_path=addr2.keypair_path,
)
result = multisig(
    'show-transaction',
    '--transaction-address',
    upgrade_transaction_address,
)
assert result['signers']['Current']['signers'] == [
    {'owner': addr1.pubkey, 'did_sign': True},
    {'owner': addr2.pubkey, 'did_sign': True},
    {'owner': addr3.pubkey, 'did_sign': False},
]
print(f'> Transaction is now signed by {addr2} as well.')


print('\nTrying to execute with 2 of 2 signatures, which should succeed ...')
multisig(
    'execute-transaction',
    '--multisig-address',
    multisig_address,
    '--transaction-address',
    upgrade_transaction_address,
)
result = multisig(
    'show-transaction',
    '--transaction-address',
    upgrade_transaction_address,
)
assert result['did_execute'] == True
print('> Transaction is marked as executed.')

upgrade_info = solana_program_show(program_id)
assert upgrade_info.last_deploy_slot > upload_info.last_deploy_slot
print(f'> Program was upgraded in slot {upgrade_info.last_deploy_slot}.')


print('\nTrying to execute a second time, which should fail ...')
try:
    multisig(
        'execute-transaction',
        '--multisig-address',
        multisig_address,
        '--transaction-address',
        upgrade_transaction_address,
    )
except subprocess.CalledProcessError as err:
    assert err.returncode != 0
    # assert 'The given transaction has already been executed.' in err.stderr
    # TODO(#177) Previously the error included a human-readable message, why does it
    # only include the error code now? Something to do with different Anchor
    # versions?
    assert 'custom program error: 0x69' in err.stdout
    new_info = solana_program_show(program_id)
    assert new_info == upgrade_info, 'Program should not have changed.'
    print('> Execution failed as expected.')
else:
    print('> Execution succeeded even though it should not have.')
    sys.exit(1)


# Next we are going to test changing the multisig. Before we go and do that,
# confirm that it currently looks like we expect it to look.
multisig_before = multisig('show-multisig', '--multisig-address', multisig_address)
assert multisig_before == {
    'multisig_program_derived_address': multisig_program_derived_address,
    'threshold': 2,
    'owners': [addr1.pubkey, addr2.pubkey, addr3.pubkey],
}


print('\nProposing to remove the third owner from the multisig ...')
# This time we omit the third owner. The threshold remains 2.
result = multisig(
    'propose-change-multisig',
    '--multisig-address',
    multisig_address,
    '--threshold',
    '2',
    '--owner',
    addr1.pubkey,
    '--owner',
    addr2.pubkey,
    keypair_path=addr1.keypair_path,
)
change_multisig_transaction_address = result['transaction_address']
print(f'> Transaction address is {change_multisig_transaction_address}.')


print('\nApproving transaction from a second account ...')
multisig(
    'approve',
    '--multisig-address',
    multisig_address,
    '--transaction-address',
    change_multisig_transaction_address,
    keypair_path=addr3.keypair_path,
)
result = multisig(
    'show-transaction',
    '--transaction-address',
    change_multisig_transaction_address,
)
assert result['signers']['Current']['signers'] == [
    {'owner': addr1.pubkey, 'did_sign': True},
    {'owner': addr2.pubkey, 'did_sign': False},
    {'owner': addr3.pubkey, 'did_sign': True},
]
print('> Transaction has the required number of signatures.')


print('\nExecuting multisig change transaction ...')
multisig(
    'execute-transaction',
    '--multisig-address',
    multisig_address,
    '--transaction-address',
    change_multisig_transaction_address,
)
result = multisig(
    'show-transaction',
    '--transaction-address',
    change_multisig_transaction_address,
)
assert result['did_execute'] == True
print('> Transaction is marked as executed.')

multisig_after = multisig('show-multisig', '--multisig-address', multisig_address)
assert multisig_after == {
    'multisig_program_derived_address': multisig_program_derived_address,
    'threshold': 2,
    'owners': [addr1.pubkey, addr2.pubkey],
}
print(f'> The third owner was removed.')


print('\nChecking that the old transaction does not show outdated owner info ...')
result = multisig(
    'show-transaction',
    '--transaction-address',
    upgrade_transaction_address,
)
assert 'Outdated' in result['signers']
assert result['signers']['Outdated'] == {
    'num_signed': 2,
    'num_owners': 3,
}
print('> Owners ids are gone, but approval count is preserved as expected.')


# Next we will propose a final program upgrade, to confirm that the third owner
# is no longer allowed to approve.
print('\nProposing new program upgrade ...')
result = multisig(
    'propose-upgrade',
    '--multisig-address',
    multisig_address,
    '--program-address',
    program_id,
    '--buffer-address',
    buffer_address,
    '--spill-address',
    addr1.pubkey,
    keypair_path=addr1.keypair_path,
)
upgrade_transaction_address = result['transaction_address']
print(f'> Transaction address is {upgrade_transaction_address}.')


print('\nApproving this transaction from owner 3, which should fail ...')
try:
    multisig(
        'approve',
        '--multisig-address',
        multisig_address,
        '--transaction-address',
        upgrade_transaction_address,
        keypair_path=addr3.keypair_path,
    )
except subprocess.CalledProcessError as err:
    assert err.returncode != 0
    # assert 'The given owner is not part of this multisig.' in err.stderr
    # TODO(#177) Previously the error included a human-readable message, why does it
    # only include the error code now? Something to do with different Anchor
    # versions?
    assert 'custom program error: 0x64' in err.stdout
    result = multisig(
        'show-transaction',
        '--transaction-address',
        upgrade_transaction_address,
    )
    assert result['signers']['Current']['signers'] == [
        {'owner': addr1.pubkey, 'did_sign': True},
        {'owner': addr2.pubkey, 'did_sign': False},
    ]
    print('> Approve failed as expected.')
else:
    print('> Approve succeeded even though it should not have.')
    sys.exit(1)