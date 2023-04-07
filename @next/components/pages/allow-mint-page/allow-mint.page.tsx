import { Box } from '@mui/material'
import { AllowMintCard } from '@next/components/organisms/AllowMintCard'

export const AllowMintPage = (): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100%'
      }}
    >
      <AllowMintCard />
    </Box>
  )
}
