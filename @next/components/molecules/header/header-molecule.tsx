import { Box, Container } from '@mui/material'
// import { DisconnectWalletModal } from '@next/components/atoms/DisconnectWalletModal'
import { HeadConnectWallet } from '@next/components/atoms/HeadConnectWallet'
import { HeadLogo } from '@next/components/atoms/HeadLogo'
import { Minting } from '@next/components/atoms/Minting'
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
          padding: {
            xl: '0 1rem !important',
            xs: '0 0.5rem !important'
          }
        }}
      >
        <HeadLogo />
        <Box>
          <HeadConnectWallet />
          {/* <DisconnectWalletModal Text={'0xab2073j789D66'} /> */}
          <Minting />
        </Box>
      </Container>
    </header>
  )
}
