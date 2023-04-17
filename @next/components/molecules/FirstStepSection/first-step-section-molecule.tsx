import { Box, Typography } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { MintingCalculation } from '@next/components/atoms/MintingCalculation'
export const FirstStepSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        margin: {
          xl: '5rem 0',
          lg: '3rem 0',
          md: '5rem 0',
          sm: '2.5rem 0',
          xs: '2.5rem 0'
        }
      }}
    >
      <FieldLabel FieldLabel={'Allowlist Mint'} />
      <MintingCalculation />
    </Box>
  )
}
