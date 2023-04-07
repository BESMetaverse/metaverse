import { Button } from '@mui/material'
export const HeadConnectWallet = (): JSX.Element => {
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
    >
      Connect wallet
    </Button>
  )
}
