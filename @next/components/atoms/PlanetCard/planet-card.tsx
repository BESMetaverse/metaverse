import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
export const PlanetCard = ({
  icon,
  title,
  planetSize,
  url
}: {
  icon: any
  title: string
  planetSize: string
  url: string
}): JSX.Element => {
  const matches1400 = useMediaQuery('(min-width:1400px)')
  return (
    <Link href={`/metaverse/${url}`} className="planet-item">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
          background: 'url(/images/Subtract.svg)',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          margin: '0 auto'
          // height: `${matches1400 ? 120 : 100}`,
          // width: `${matches1400 ? 260 : 220} `
        }}
        className="planet-card"
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
          <Image
            src={icon}
            height={matches1400 ? 65 : 50}
            width={matches1400 ? 65 : 50}
            alt={title}
          />
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
              fontSize: { xl: '1.625rem', lg: '1.25rem', sm: '1rem' },
              fontFamily: 'Amaranth'
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}
