import { useAppSelector } from '@hooks'
import { Box } from '@mui/material'
// import { SoldOut } from '@next/components/atoms/SoldOut'
// import { SpinLoader } from '@next/components/atoms/SpinLoader'
// import { WalletConnecting } from '@next/components/atoms/WalletConnecting'
import { ConnectWalletCard } from '@next/components/organisms/ConnectWalletCard'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'
import { SpinLoader } from '@next/components/atoms/SpinLoader'

interface WalletPageProps {
  props: {
    privateData?: string
  }
}
export const WalletPage = ({ props }: WalletPageProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const account = useAppSelector((state: any) => state.wallet)
  const router = useRouter()
  useEffect(() => {
    if (account?.wallet) {
      handleClick()

      void router.push('/minting')
    }
  }, [])

  const handleClick = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Wallet is already connected!"
        key="topcenter"
      />
      <Box
        sx={{
          height: '100%',
          position: 'relative',
          width: '100%'
        }}
      >
        {loading && <SpinLoader />}
        {/* <SpinLoader /> */}
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
          <ConnectWalletCard setLoading={setLoading} />
        </Box>
      </Box>
    </>
  )
}
