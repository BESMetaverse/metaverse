import { Container } from '@mui/material'
import { HeadConnectWallet } from '@next/components/atoms/HeadConnectWallet'
import { HeadLogo } from '@next/components/atoms/HeadLogo'
export const Header = (): JSX.Element => {
  return (
    <header>
      <Container
        maxWidth="xl"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1320px',
          padding: '0 1rem !important'
        }}
      >
        <HeadLogo />
        <HeadConnectWallet />
      </Container>
    </header>
  )
}
