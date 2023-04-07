import { Box } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { IconItem } from '@next/components/atoms/IconItem'
export const SecondStepSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        margin: '5rem 0 2.5rem'
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          margin: '0 0 7.813rem',
          width: '100%'
        }}
      >
        {' '}
        <FieldLabel FieldLabel={'Connect Network'} />
        <Box sx={{ width: '33%' }}>
          <IconItem Title={'Steller'} icon={'/images/Stellar.svg'} />
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
        {' '}
        <FieldLabel FieldLabel={'Connect Wallet'} />
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Box sx={{ width: '32%' }}>
            {' '}
            <IconItem Title={'Freighter'} icon={'/images/Freighter.svg'} />
          </Box>
          <Box sx={{ width: '32%', margin: '0 1.5rem' }}>
            {' '}
            <IconItem
              Title={'WalletConnect'}
              icon={'/images/WalletConnect.svg'}
            />
          </Box>
          <Box sx={{ width: '32%' }}>
            <IconItem Title={'XBULL'} icon={'/images/XBULL.svg'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
