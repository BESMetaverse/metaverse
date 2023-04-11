import { Box, Typography } from '@mui/material'
import { DisconnectWalletModal } from '@next/components/atoms/DisconnectWalletModal'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { MintSuccessfullModal } from '@next/components/atoms/MintSuccessfullModal'
import { MintingCalculation } from '@next/components/atoms/MintingCalculation'
export const ThirdStepSection = (): JSX.Element => {
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
      {/* <DisconnectWalletModal /> */}
    </Box>
  )
}
