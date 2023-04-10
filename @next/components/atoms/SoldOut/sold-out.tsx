import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const SoldOut = (): JSX.Element => {
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
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 385,
          bgcolor: '#171729',
          border: '2px solid #171729',
          borderRadius: '2rem',
          p: '3rem 1rem'
        }}
      >
        <Image
          src="/images/soldout.svg"
          width={90}
          height={90}
          alt="soldout"
          style={{
            margin: '0 0 1.5rem'
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontSize: '1.625rem',
            fontWeight: 600,
            margin: '0 0 1rem',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}
        >
          Sold Out
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 400,
            margin: '0'
          }}
        >
          Your item has been soldout
        </Typography>
      </Box>
    </Box>
  )
}
