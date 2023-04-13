import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { MintSuccessfullModal } from '@next/components/atoms/MintSuccessfullModal'
import { MintingCalculation } from '@next/components/atoms/MintingCalculation'

// soroban
import * as SorobanClient from 'soroban-client'
import { useSorobanReact } from '@soroban-react/core'
import {
  getCurrentSupply,
  getTotalNFTSupply,
  useSendTransaction,
  contractTransaction
} from '@soroban'

// import { useIsPetAdopted } from '@soroban'

export const ThirdStepSection = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)

  // call contract functions here to check if our contract is working fine
  const sorobanContext = useSorobanReact()
  const { sendTransaction } = useSendTransaction()

  getCurrentSupply({ sorobanContext: sorobanContext })
  getTotalNFTSupply({ sorobanContext: sorobanContext })

  const handleMint = async (): Promise<void> => {
    console.log('sorobanContext: ', sorobanContext)
    const { activeChain, server, address } = sorobanContext
    if (!activeChain || !address || !server) {
      console.log('No active chain')
    } else {
      try {
        let account = await server.getAccount(address)
        let sequence = account.sequenceNumber()
        let source = new SorobanClient.Account(address, sequence)
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
          sorobanContext,
          secretKey: 'SBAYNCPCWBWOCBT2CQYVAXTOTPYJ3B2R6Q7QJJ6BXSJYDXFJLQKNQPWH'
        })
        // check the success response here and then open successfull model
        setOpen(true)
        console.log('adoptPet.tsx:sendTransaction:result: ', txn)
      } catch (error) {
        console.log('Error while sending the transaction: ', error)
      }
    }
  }

  return (
    <Box
      sx={{
        margin: {
          xl: '5rem 0 0',
          lg: '5rem 0 0',
          md: '5rem 0 0',
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
