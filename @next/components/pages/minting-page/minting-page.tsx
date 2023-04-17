import { Box } from '@mui/material'
// import { SoldOut } from '@next/components/atoms/SoldOut'
import { SpinLoader } from '@next/components/atoms/SpinLoader'
// import { WalletConnecting } from '@next/components/atoms/WalletConnecting'
import { MintingCard } from '@next/components/organisms/MintingCard'
import { useState } from 'react'

export const MintingPage = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  return (
    <Box
      sx={{
        height: '5rem 0.5rem 2rem',
        position: 'relative',
        width: '100%'
      }}
    >
      {loading && <SpinLoader />}

      {/* <WalletConnecting /> */}
      {/* <SoldOut /> */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: {
            xl: '100vh',
            lg: '100%',
            md: '100%',
            sm: '100%',
            xs: '100%'
          },
          padding: {
            xl: '5rem 0.5rem 0',
            lg: '5rem 0.5rem 2rem',
            md: '5rem 0.5rem 2rem',
            sm: '5rem 0.5rem 2rem',
            xs: '5rem 0.5rem 2rem'
          },
          width: '100%'
        }}
      >
        <MintingCard setLoading={setLoading} />
      </Box>
    </Box>
  )
}
