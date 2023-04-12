import { Box, Typography } from '@mui/material'
import Image from 'next/image'
export const PlotDetails = (): JSX.Element => {
  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: '#13082e',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: {
            xl: '5.188rem 3rem 1rem',
            lg: '5.188rem 3rem 1rem',
            md: '5.188rem 3rem 1rem',
            sm: '5.188rem 3rem 1rem',
            xs: '2.5rem 1.5rem 1rem'
          },
          width: '28.75rem'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#2a2042',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            height: 192,
            width: 254
          }}
        >
          <Image src="/images/unknown.svg" height={192} width={50} alt="Plot" />
        </Box>
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            fontSize: '1rem',
            letterSpacing: '-0.5px',
            margin: '1.5rem 0 3.125rem'
          }}
        >
          {/* Token No:#6373838 */}
          Token No: ?
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#2a2042',
            borderRadius: '0.375rem',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 0 1.875rem',
            padding: '0.75rem',
            width: '100%'
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: '1rem',
              letterSpacing: '-0.5px'
            }}
          >
            Plot ID
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '-0.25px'
            }}
          >
            654
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 0 1rem',
            width: '100%'
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: '1rem',
              letterSpacing: '-0.5px'
            }}
          >
            Plot ID
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '-0.25px'
            }}
          >
            0x5622*******f84
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: '1rem',
              letterSpacing: '-0.5px'
            }}
          >
            Transaction Status
          </Typography>
          <Typography
            sx={{
              color: '#24D915',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '-0.25px'
            }}
          >
            Confirmed
          </Typography>
          {/* <Typography
          sx={{
            color: '#D91515',
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '-0.25px'
          }}
        >
          Sold Out
        </Typography> */}
        </Box>
      </Box>
    </>
  )
}
