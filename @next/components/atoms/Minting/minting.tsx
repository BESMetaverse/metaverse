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
        margin: '0 1.25rem 0 0',
        textAlign: 'center',
        width: '5rem'
      }}
      onClick={handleMinting}
    >
      Minting
    </Button>
  )
}
