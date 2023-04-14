import { Box } from '@mui/material'
import { ThirdStepHeading } from '@next/components/molecules/ThirdStepHeading'
import { ThirdStepSection } from '@next/components/molecules/ThirdStepSection'
import { useState } from 'react'
import { useAppSelector } from '@hooks'
import { MintingSale } from '@next/components/atoms/MintingSale'
import { ConnectWalletModal } from '@next/components/molecules/Modals/conect-wallet-modal/connect-wallet-modal'
import { MintingNotAllowedModal } from '@next/components/molecules/Modals/minting-not-allowed-modal'

export const MintingCard = ({
  setLoading
}: {
  setLoading: any
}): JSX.Element => {
  const [connected, setConnected] = useState(false)

  const handleClose = (): void => setConnected(true)

  const account = useAppSelector((state: any) => state.wallet)

  return (
    <Box
      sx={{
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '42.75rem',
        width: '100%'
      }}
    >
      <MintingSale />
      <Box
        sx={{
          backgroundColor: '#262641',
          border: '1px solid #4A4A73',
          borderRadius: '0.75rem',
          padding: {
            xl: '2.5rem 2rem',
            lg: '2.5rem 2rem',
            md: '1.5rem',
            sm: '1.25rem',
            xs: '1.25rem 1rem'
          },
          width: '100%'
        }}
      >
        <ThirdStepHeading walletname={account.walletProvider} />
        <ThirdStepSection setLoading={setLoading} />
      </Box>
      {!account?.walletAccountNumber && (
        <ConnectWalletModal connected={connected} handleClose={handleClose} />
      )}

      {/* Updates required */}
      <MintingNotAllowedModal connected={connected} handleClose={handleClose} />
    </Box>
  )
}
