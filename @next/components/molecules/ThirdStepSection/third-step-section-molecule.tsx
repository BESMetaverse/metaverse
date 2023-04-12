import { Box, Typography } from '@mui/material'
import { DisconnectWalletModal } from '@next/components/atoms/DisconnectWalletModal'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { MintSuccessfullModal } from '@next/components/atoms/MintSuccessfullModal'
import { MintingCalculation } from '@next/components/atoms/MintingCalculation'

// soroban
import { useSorobanReact } from '@soroban-react/core'
import { WalletData } from '@soroban-react/wallet-data'
import { getCurrentSupply, getTotalNFTSupply, mintNFT } from '@soroban'
// import { useIsPetAdopted } from '@soroban'

export const ThirdStepSection = (): JSX.Element => {
  // call contract functions here to check if our contract is working fine
  const sorobanContext = useSorobanReact()

  getCurrentSupply({ sorobanContext: sorobanContext })
  getTotalNFTSupply({ sorobanContext: sorobanContext })

  // mintNFT({
  //   publicKey: 'GARZ4OVDBZ2XEVLJMDECDQOHXERLXU4D3W2CVAZ3SCRBSJFZQUWKVQ4O',
  //   sorobanContext: sorobanContext
  // })

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
      <MintSuccessfullModal Text={'Mint'} />
      {/* to display frighter wallet details */}
      {/* If the Connector is not connected, will show the ConnectButton. If the Connector is connected, will show address and network. */}
      {/* <WalletData sorobanContext={useSorobanReact()} /> */}

      {/* <DisconnectWalletModal /> */}
    </Box>
  )
}
