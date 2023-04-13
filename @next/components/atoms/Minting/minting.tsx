import { Button } from '@mui/material'
import { useRouter } from 'next/router'
export const Minting = (): JSX.Element => {
  const router = useRouter()

  const handleMinting = (): any => {
    return router.push('/minting')
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
        margin: { xl: '0 0 0 1.25rem', xs: '0 0 0 0.875rem' },
        textAlign: 'center',
        width: '3.625rem'
      }}
      onClick={handleMinting}
    >
      Mint
    </Button>
  )
}
