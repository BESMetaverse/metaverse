import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
export const PlanetCard = ({
  icon,
  title,
  planetSize
}: {
  icon: any
  title: string
  planetSize: string
}): JSX.Element => {
  return (
    <Link href="/mint-land" className="planet-item">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
          background: 'url(/images/Subtract.svg)',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          margin: '0 auto',
          // padding: '1.5rem 1.5rem 1rem 1rem',
          height: 100,
          width: 220
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            boxShadow: '0px 0px 9px 8px rgba(66,49,66,1)',
            margin: '0 0 0 -0.75rem'
          }}
        >
          <Image src={icon} height={50} width={50} alt={title} />
        </Box>
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 0 0 0.875rem'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontSize: '1.625rem',
              fontFamily: 'Amaranth'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontSize: '0.875rem',
              fontFamily: 'Amaranth'
            }}
          >
            {planetSize} square km
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}
