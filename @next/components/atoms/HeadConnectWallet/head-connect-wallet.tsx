import { Button } from '@mui/material'
import { useRouter } from 'next/router'
export const HeadConnectWallet = (): JSX.Element => {
  const router = useRouter()

  const handleConnectWallet = (): void => {
    router.push('/wallet')
  }
  return (
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
      Connect wallet
    </Button>
  )
}
