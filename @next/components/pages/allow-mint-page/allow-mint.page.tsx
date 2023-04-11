import { Box } from '@mui/material'
import { SoldOut } from '@next/components/atoms/SoldOut'
import { SpinLoader } from '@next/components/atoms/SpinLoader'
import { WalletConnecting } from '@next/components/atoms/WalletConnecting'
import { AllowMintCard } from '@next/components/organisms/AllowMintCard'

export const AllowMintPage = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        width: '100%'
      }}
    >
      {/* <SpinLoader /> */}
      {/* <WalletConnecting /> */}
      {/* <SoldOut /> */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          padding: '0 0.5rem',
          width: '100%'
        }}
      >
        <AllowMintCard />
      </Box>
    </Box>
  )
}
