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
  getCurrentSupply,
  getTotalNFTSupply,
  useSendTransaction,
  contractTransaction
} from '@soroban'

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
  console.log('soroban context activechain is ==> ', activeChain, address)

  console.log('soroban context is ', sorobanContext)

  const { sendTransaction } = useSendTransaction()
  if (!activeChain || !address || !server) {
    console.log('No active chain')
  } else {
    // getCurrentSupply({ sorobanContext: sorobanContext })
    // getTotalNFTSupply({ sorobanContext: sorobanContext })
  }

  const handleMint = async (): Promise<void> => {
    if (wallet?.walletProvider === 'Freighter') {
      const { activeChain, server, address } = sorobanContext
      console.log('active chain is ', activeChain, server)
      if (!activeChain || !address || !server) {
        console.log('No active chain')
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
            contractId:
              '2101c55919d5836b253bd425d9b81f51ba4855d0543325fc8c58aded04379350',
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
          console.log('adoptPet.tsx:sendTransaction:result: ')
        } catch (error) {
          setLoading(false)
          const errorMessage = error as string
          if (errorMessage.toString().includes('not found (at ledger ')) {
            enqueueSnackbar(
              "Your account isn't in the ledger yet. Please fund your account",
              {
                variant: 'error'
              }
            )
          } else if (
            errorMessage
              .toString()
              .includes('Request failed with status code 405')
          ) {
            enqueueSnackbar(
              'Please select custom FUTURE NET in your wallet and refresh the page',
              {
                variant: 'error'
              }
            )
          } else if (
            errorMessage
              .toString()
              .includes('soroban_env_host::host::err_helper')
          ) {
            enqueueSnackbar('Your account is not a white listed account', {
              variant: 'error'
            })
          } else {
            enqueueSnackbar(
              'Please select futurenet in the wallet and enable experimental mode in your wallet preferences',
              { variant: 'info' }
            )
          }
        }
      }
    } else if (wallet?.walletProvider === 'XBULL') {
      try {
        const kit = new StellarWalletsKit({
          network: WalletNetwork.FUTURENET,
          selectedWallet: WalletType.XBULL
        })
        const publickey = wallet?.walletAccountNumber
        // create transaction xdr rightly
        // const signedXDR = await kit.sign({
        //   xdr: 'AAAAAgAAAQAAAAAAAAAAAOwLt5VQAsyVhQr7Ps0XaKsE99JVCRWUV0V3t+B/5iYdAAABLAAAUN4AAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAElRoaXMgaXMgYSBuZXcgdGVzdAAAAAAAAwAAAAAAAAAAAAAAAGP4PCOshTlRoCoEFOyQZW8dCyRa4t28ju+DWOyBGWmQAAAAAACYloAAAAAAAAAAAQAAAQAAAAAAAAAAAGP4PCOshTlRoCoEFOyQZW8dCyRa4t28ju+DWOyBGWmQAAAAAAAAAAAC+vCAAAAAAAAAAAEAAAEAAAAAAAAAAABj+DwjrIU5UaAqBBTskGVvHQskWuLdvI7vg1jsgRlpkAAAAAAAAAAABycOAAAAAAAAAAAA',
        //   network: WalletNetwork.FUTURENET,
        //   publicKey: publickey
        // })
        // console.log('signed XDR is ', signedXDR)
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
