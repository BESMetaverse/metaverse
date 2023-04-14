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
        height: '100%',
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
          height: '100vh',
          padding: '5rem 0.5rem 0',
          width: '100%'
        }}
      >
        <MintingCard setLoading={setLoading} />
      </Box>
    </Box>
  )
}
