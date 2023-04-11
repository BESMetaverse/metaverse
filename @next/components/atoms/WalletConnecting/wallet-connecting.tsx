import { Box, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import Image from 'next/image'

export const WalletConnecting = (): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: '#171729ab',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        position: 'absolute',
        width: '100%'
      }}
    >
      <Typography
        sx={{
          color: '#fff',
          fontSize: '1.125rem',
          fontWeight: 500,
          margin: '0 0 1.5rem'
        }}
      >
        Connecting...
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#141618',
            border: '1px solid #fff',
            borderRadius: '50%',
            display: 'flex',
            padding: '1rem',
            zIndex: 1
          }}
        >
          <Image
            src="/images/Stellar.svg"
            height={32}
            width={32}
            alt="Stellar"
          />
        </Box>
        <Box
          sx={{
            borderBottom: '1px dashed #fff',
            display: 'block',
            height: '1px',
            position: 'absolute',
            width: '100%',
            zIndex: 0
          }}
        ></Box>
        <Image
          src="/images/tick.svg"
          height={42}
          width={42}
          alt="Tick"
          style={{ margin: '0 3.813rem', zIndex: 1 }}
        />
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#141618',
            border: '1px solid #fff',
            borderRadius: '50%',
            display: 'flex',
            padding: '1rem',
            zIndex: 1
          }}
        >
          <Image
            src="/images/XBULL-svg.svg"
            height={32}
            width={32}
            alt="XBULL"
          />
        </Box>
      </Box>
    </Box>
  )
}
