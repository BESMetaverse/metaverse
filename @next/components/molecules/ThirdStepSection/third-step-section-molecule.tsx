import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { MintSuccessfullModal } from '@next/components/atoms/MintSuccessfullModal'
import { MintingCalculation } from '@next/components/atoms/MintingCalculation'
import { useSnackbar } from 'notistack'
import { useAppSelector } from '@hooks'

// soroban
import * as SorobanClient from 'soroban-client'
import { useSorobanReact } from '@soroban-react/core'
import {
  StellarWalletsKit,
  WalletNetwork,
  WalletType
} from 'stellar-wallets-kit'

import {
  useSendTransaction,
  contractTransaction
} from '@soroban-react/contracts'

import { getCurrentSupply, getTotalNFTSupply } from '@soroban'
// import { useIsPetAdopted } from '@soroban'

export const ThirdStepSection = ({
  setLoading
}: {
  setLoading: any
}): JSX.Element => {
  const wallet = useAppSelector((state: any) => state.wallet)

  const [open, setOpen] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)

  // call contract functions here to check if our contract is working fine
  const sorobanContext = useSorobanReact()
  const { address, activeChain, server } = useSorobanReact()

  const { sendTransaction } = useSendTransaction()

  // getCurrentSupply({ sorobanContext: sorobanContext })
  // getTotalNFTSupply({ sorobanContext: sorobanContext })

  const handleMint = async (): Promise<void> => {
    if (wallet?.walletProvider === 'Freighter') {
      const { activeChain, server, address } = sorobanContext
      if (!activeChain || !address || !server) {
        enqueueSnackbar(
          'No active chain: please refresh or reconnect your wallet',
          { variant: 'error' }
        )
      } else {
        try {
          setLoading(true)
          const account = await server.getAccount(address)
          const sequence = account.sequenceNumber()
          const source = new SorobanClient.Account(address, sequence)
          const transaction = contractTransaction({
            networkPassphrase: activeChain.networkPassphrase,
            source,
            contractId: process.env.NEXT_PUBLIC_CONTRACT_ID as string,
            method: 'mint_nft',
            params: [new SorobanClient.Address(address).toScVal()]
          })
          // open sign pop-up
          const txn = await sendTransaction(transaction, {
            sorobanContext
          })

          // check the success response here and then open successfull model
          setOpen(true)
          setLoading(false)
        } catch (error: any) {
          console.log('error in transaction is ', error, error?.response)
          // console.log(error.)

          setLoading(false)
          if (error?.code) {
            if (error?.code === -32600) {
              enqueueSnackbar(
                "Your account isn't in the ledger yet. Please fund your account",
                {
                  variant: 'error'
                }
              )
            }
          } else if (error?.response) {
            const errorMessage = error?.response
            if (errorMessage?.status === 405) {
              // statusText: "Method Not Allowed"
              enqueueSnackbar(
                'Please select custom FUTURE NET in your wallet and refresh the page',
                {
                  variant: 'error'
                }
              )
            }
          } else {
            const errorMessage = error as string
            if (
              errorMessage
                .toString()
                .includes('soroban_env_host::host::err_helper')
            ) {
              enqueueSnackbar('Your account is not a white listed account', {
                variant: 'error'
              })
            } else if (errorMessage.toString() === 'User declined access') {
              enqueueSnackbar('User declined the access', { variant: 'error' })
            } else {
              enqueueSnackbar(
                'Please select futurenet in the wallet and enable experimental mode in your wallet preferences',
                { variant: 'info' }
              )
            }
          }
        }
      }
    } else if (wallet?.walletProvider === 'XBULL') {
      try {
        const kit = new StellarWalletsKit({
          network: WalletNetwork.FUTURENET,
          selectedWallet: WalletType.XBULL
        })
        const publicKeys = wallet?.walletAccountNumber
        const { server } = sorobanContext
        if (!server) {
          console.log('No server')
        } else {
          // console.log('account')
          // console.log('server')
          // console.log(publicKeys)
          // console.log(server)
          // const account = await server.getAccount(publicKeys)
          // console.log(account)
          // const sequence = account.sequenceNumber()
          // console.log(sequence)
          // const source = new SorobanClient.Account(publicKeys, sequence)
          // console.log('Sequence number is :', sequence)
          // console.log(new SorobanClient.Address(publicKeys).toScVal())
          // console.log('SOURCE IS ', source)
          // console.log('SOURCE IS ', sequence)
          // // create transaction
          // const transaction = contractTransaction({
          //   networkPassphrase: WalletNetwork.FUTURENET,
          //   source,
          //   contractId: process.env.NEXT_PUBLIC_CONTRACT_ID as string,
          //   method: 'mint_nft',
          //   params: [new SorobanClient.Address(publicKeys).toScVal()]
          // })
          // // prepare transaction
          // const txn = await server.prepareTransaction(
          //   transaction,
          //   'Test SDF Future Network ; October 2022'
          // )
          // // sign transaction here
          // const signedXDR = await kit.sign({
          //   xdr: txn.toXDR(),
          //   publicKey: publicKeys,
          //   network: WalletNetwork.FUTURENET
          // })
          // console.log('signed XDR is ', signedXDR)
        }
      } catch (error) {
        console.log('error in xbull sign transaction is', error)
      }
    }
  }

  return (
    <Box
      sx={{
        margin: {
          xl: '5rem 0 0',
          lg: '3rem 0 0',
          md: '3rem 0 0',
          sm: '2.5rem 0 0',
          xs: '2.5rem 0 0'
        }
      }}
    >
      <FieldLabel FieldLabel={'Allowlist Mint'} />
      <Typography
        sx={{
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 400,
          margin: '0 0 1rem'
        }}
      >
        You are eligible to mint 1 token
      </Typography>
      <MintingCalculation />
      <MintSuccessfullModal
        Text={'Mint'}
        open={open}
        handleMint={handleMint}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      {/* to display frighter wallet details */}
      {/* If the Connector is not connected, will show the ConnectButton. If the Connector is connected, will show address and network. */}
      {/* <WalletData sorobanContext={useSorobanReact()} /> */}

      {/* <DisconnectWalletModal /> */}
    </Box>
  )
}
