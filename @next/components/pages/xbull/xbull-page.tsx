import { useState } from 'react';
import { xBullWalletConnect } from './signtx';
import * as SorobanClient from 'soroban-client'
import { useSorobanReact } from '@soroban-react/core'
import { contractTransaction, useSendTransaction } from './useSendTransaction'
import { StellarWalletsKit, WalletNetwork, WalletType } from 'stellar-wallets-kit';


interface xBullProps {
    props: {
        privateData?: string;
    };
}

export const xBullPage = ({ props }: xBullProps): JSX.Element => {
    const [connected, setConnected] = useState(false);
    const sorobanContext = useSorobanReact()
    const { sendTransaction } = useSendTransaction()

    const connect = async () => {
        // perform connection logic
        const kit = new StellarWalletsKit({
            network: WalletNetwork.FUTURENET,
            selectedWallet: WalletType.FREIGHTER,
        });
        const publicKeys = await kit.getPublicKey();
        console.log(publicKeys)
        setConnected(true);
        const { activeChain, server, address } = sorobanContext
        if (!server) {
            console.log('No server')
        } else {
            try {
                const account = await server.getAccount(publicKeys)
                const sequence = account.sequenceNumber()
                const source = new SorobanClient.Account(publicKeys, sequence)
                console.log("Sequence number is :", sequence)
                console.log(new SorobanClient.Address(publicKeys).toScVal())
                const transaction = contractTransaction({
                    networkPassphrase: 'Test SDF Future Network ; October 2022',
                    source,
                    contractId:
                        '2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350',
                    method: 'mint_nft',
                    params: [new SorobanClient.Address(publicKeys).toScVal()]
                })
                console.log(transaction.toXDR())
                // let txn = transaction.toXDR();
                let txn = await server.prepareTransaction(transaction, 'Test SDF Future Network ; October 2022');
                console.log("HASSAN", txn)
                const signedXDR = await kit.sign({
                    xdr: txn.toXDR(),
                    network: WalletNetwork.FUTURENET,
                    publicKey: publicKeys
                });
                console.log("HELLO ", signedXDR)
                const transactionToSubmit = SorobanClient.TransactionBuilder.fromXDR(signedXDR.signedXDR, WalletNetwork.FUTURENET);
                const { hash, errorResultXdr } = await server.sendTransaction(transactionToSubmit);
                console.log(hash)
                const timeout = 60000
                const sleepTime = Math.min(1000, timeout);
                console.log("HELLO")
                for (let i = 0; i <= timeout; i += sleepTime) {
                    await sleep(sleepTime);
                    try {
                        console.debug("tx id:", hash)
                        console.log("HELLO")
                        const response = await server.getTransaction(hash);
                        console.debug(response)

                        switch (response.status) {
                            case "NOT_FOUND": {
                                continue;
                            }
                            case "SUCCESS": {
                                // setState('success');
                                let resultXdr = response.resultXdr
                                if (!resultXdr) {
                                    // FIXME: Return a more sensible value for classic transactions.
                                    return SorobanClient.xdr.ScVal.scvI32(-1)
                                }
                                let results = SorobanClient.xdr.TransactionResult.fromXDR(resultXdr, 'base64').result().results()
                                if (results.length > 1) {
                                    throw new Error(`Expected exactly one result, got ${results}.`);
                                }

                                let value = results[0].value();
                                if (value?.switch() !== SorobanClient.xdr.OperationType.invokeHostFunction()) {
                                    // FIXME: Return a more sensible value for classic transactions.
                                    return SorobanClient.xdr.ScVal.scvI32(-1)
                                }
                                console.log("Success", value.invokeHostFunctionResult().success())
                                return value.invokeHostFunctionResult().success();
                            }
                            case "FAILED": {
                                // setState('error');
                                let resultXdr = response.resultXdr
                                if (!resultXdr) {
                                    // FIXME: Return a more sensible value for classic transactions.
                                    return SorobanClient.xdr.ScVal.scvI32(-1)
                                }
                                let results = SorobanClient.xdr.TransactionResult.fromXDR(resultXdr, 'base64').result().results()
                                if (results.length > 1) {
                                    throw new Error(`Expected exactly one result, got ${results}.`);
                                }

                                let value = results[0].value();
                                if (value?.switch() !== SorobanClient.xdr.OperationType.invokeHostFunction()) {
                                    // FIXME: Return a more sensible value for classic transactions.
                                    return SorobanClient.xdr.ScVal.scvI32(-1)
                                }

                                let result = value.invokeHostFunctionResult()
                                switch (result.switch()) {
                                    case SorobanClient.xdr.InvokeHostFunctionResultCode.invokeHostFunctionMalformed(): {
                                        throw new Error("Transaction failed: malformed");
                                    }
                                    case SorobanClient.xdr.InvokeHostFunctionResultCode.invokeHostFunctionTrapped(): {
                                        throw new Error("Transaction failed: trapped");
                                    }
                                    default: {
                                        throw new Error(`Unexpected result code: ${result.switch().name}.`);
                                    }
                                }
                            }
                            default: {
                                throw new Error("Unexpected transaction status: " + response.status);
                            }
                        }
                    } catch (err: any) {
                        // setState('error');
                        if ('code' in err && err.code === 404) {
                            // No-op
                        } else {
                            throw err;
                        }
                    }
                }
                if (errorResultXdr) {
                    throw new Error(errorResultXdr);
                }
                // open sign pop-up
                // const txn = await sendTransaction(transaction, {
                //     sorobanContext
                // })
                // check the success response here and then open successfull model
                console.log('adoptPet.tsx:sendTransaction:result: ')
            } catch (error) {
                console.log('Error while sending the transaction: ', error)

            }

        };
    }
    const centerButtonStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', // adjust as needed
    };
    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    return (
        <>
            <div style={centerButtonStyles}>
                <h1 style={{ color: "white" }}>X_BULL WALLET</h1>
                {!connected && <button onClick={connect}>Connect xBULL</button>}
                {connected && <p style={{ color: "white" }}>Connected!</p>}
            </div>
        </>
    );
};
