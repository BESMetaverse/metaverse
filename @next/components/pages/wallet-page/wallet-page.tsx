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
            height: '100vh',
            padding: '0 0.5rem',
            width: '100%'
          }}
        >
          <ConnectWalletCard setLoading={setLoading} />
        </Box>
      </Box>
    </>
  )
}
