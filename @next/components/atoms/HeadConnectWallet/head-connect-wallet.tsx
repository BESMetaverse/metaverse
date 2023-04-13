import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useAppSelector } from '@hooks'

export const HeadConnectWallet = (): JSX.Element => {
  const account = useAppSelector((state: any) => state.wallet)

  const router = useRouter()

  const handleConnectWallet = (): any => {
    return router.push('/wallet')
  }

  return (
    <>
      {/* eslint-disable-next-line multiline-ternary */}
      {account?.walletAccountNumber ? (
        <Button
          sx={{
            backgroundColor: 'transparent',
            border: '1px solid #fff',
            borderRadius: '0.625rem',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 600,
            height: '2.5rem',
            textAlign: 'center',
            width: '8.813rem'
          }}
        >
          {account?.walletAccountNumber.substr(0, 4) +
            '....' +
            account?.walletAccountNumber.substr(
              account?.walletAccountNumber.length - 4,
              account?.walletAccountNumber.length
            )}
        </Button>
      ) : (
        <Button
          sx={{
            backgroundColor: 'transparent',
            border: '1px solid #fff',
            borderRadius: '0.625rem',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 600,
            height: '2.5rem',
            textAlign: 'center',
            width: '8.813rem'
          }}
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </Button>
      )}
    </>
  )
}
