import { Box } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { IconItem } from '@next/components/atoms/IconItem'
export const SecondStepSection = ({
  wallet,
  network,
  setNetwork,
  setWallet
}: {
  wallet: string
  network: string
  setNetwork: (network: string) => void
  setWallet: (wallet: string) => void
}): JSX.Element => {
  return (
    <Box
      sx={{
        margin: {
          xl: '5rem 0 2.5rem',
          lg: '4rem 0 2.5rem',
          md: '4rem 0 2.5rem',
          sm: '2.5rem 0',
          xs: '2.5rem 0'
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          margin: {
            xl: '0 0 7.813rem',
            lg: '0 0 4rem',
            md: '0 0 4rem',
            sm: '2.5rem 0',
            xs: '2.5rem 0'
          },
          width: '100%'
        }}
      >
        <FieldLabel FieldLabel={'Connect Network'} />
        <Box
          sx={{
            width: {
              xl: '32%',
              lg: '32%',
              md: '32%',
              sm: '48%',
              xs: '100%'
            }
          }}
          onClick={() => setNetwork('Stellar')}
        >
          <IconItem
            selected={network === 'Stellar'}
            Title={'Stellar'}
            icon={'/images/Stellar.svg'}
          />
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%'
        }}
      >
        <FieldLabel FieldLabel={'Connect Wallet'} />
        <Box
          sx={{
            // alignItems: 'flex-start',
            alignItems: 'center',
            display: 'flex',
            flexWrap: {
              xl: 'nowrap',
              lg: 'nowrap',
              md: 'nowrap',
              sm: 'wrap',
              xs: 'wrap'
            },
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Box
            sx={{
              margin: {
                xl: '0',
                lg: '0',
                md: '0',
                sm: '0 0 1.5rem',
                xs: '0'
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xl: '32%', lg: '32%', md: '32%', sm: '48%', xs: '100%' }
            }}
            onClick={() => setWallet('Freighter')}
          >
            <IconItem
              selected={wallet === 'Freighter'}
              Title={'Freighter'}
              icon={'/images/Freighter.svg'}
            />
          </Box>
          <Box
            sx={{
              width: { xl: '32%', lg: '32%', md: '32%', sm: '48%', xs: '100%' },
              margin: {
                xl: '0 1.5rem',
                lg: '0 1.5rem',
                md: '0 1.5rem',
                sm: '0 0 1.5rem',
                xs: '1.5rem 0'
              }
            }}
            onClick={() => setWallet('WalletConnect')}
          >
            <IconItem
              selected={wallet === 'WalletConnect'}
              Title={'WalletConnect'}
              icon={'/images/WalletConnect.svg'}
            />
          </Box>
          <Box
            sx={{
              width: { xl: '32%', lg: '32%', md: '32%', sm: '48%', xs: '100%' }
            }}
            onClick={() => setWallet('XBULL')}
          >
            <IconItem
              selected={wallet === 'XBULL'}
              Title={'XBULL'}
              icon={'/images/XBULL.svg'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
