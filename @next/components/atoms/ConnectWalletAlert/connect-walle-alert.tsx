import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const ConnectWalletAlert = (): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: '#D91515',
        borderRadius: '0.5rem',
        display: 'flex',
        margin: '1.875rem 0 0',
        padding: '0.75rem'
      }}
    >
      <Image src="/images/info.svg" height={16} width={16} alt="info" />
      <Typography
        sx={{
          color: '#fff',
          fontSize: '0.875rem',
          fontWeight: 500,
          fontFamily: 'Inter',
          margin: '0 0.5rem',
          width: '100%'
        }}
      >
        Your Wallet is not connected first you have to connect the wallet
      </Typography>
      <Link href="/wallet" className="connect-wallet">
        Connect Wallet
      </Link>
    </Box>
  )
}
