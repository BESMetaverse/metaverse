import { Box, Grid, Typography } from '@mui/material'
import { PlanetCard } from '@next/components/atoms/PlanetCard'
import Image from 'next/image'

export const SelectPlanet = (): JSX.Element => {
  const PlanetList = [
    {
      icon: '/images/planets/Earth.svg',
      title: 'BESterionis',
      url: 'BESterionis',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Saturn.svg',
      title: 'BESblactura',
      url: 'BESblactura',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Mars.svg',
      title: 'BESblactura',
      url: 'BESblactura',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Moon.svg',
      title: 'BESorceum',
      url: 'BESorceum',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Jupiter.svg',
      title: 'BESigonis',
      url: 'BESigonis',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Neptune.svg',
      title: 'BESvoidum',
      url: 'BESvoidum',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Mercury.svg',
      title: 'BESblacktaros',
      url: 'BESblacktaros',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Venus.svg',
      title: 'BESenegos',
      url: 'BESenegos',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Pluto.svg',
      title: 'BESfuscantis',
      url: 'BESfuscantis',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Mercury.svg',
      title: 'BESophoris',
      url: 'BESophoris',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Venus.svg',
      title: 'BESobscurida',
      url: 'BESobscurida',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Pluto.svg',
      title: 'BESinthrakos',
      url: 'BESinthrakos',
      planetSize: '509 600 000'
    }
  ]
  return (
    <Box
      sx={{
        background: 'url(/images/mainBg.svg)',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: {
          xl: '100%',
          lg: '100%',
          md: '100%',
          sm: '100%',
          xs: '100%'
        },
        overflow: 'hidden',
        padding: {
          xl: '9rem 0 0',
          lg: '9rem 0 0',
          md: '9rem 0 0',
          sm: '9rem 0 0',
          xs: '7rem 0 0'
        },
        position: 'relative',
        width: '100%'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '5rem',
          right: '0'
        }}
      >
        <Image src="/images/radar.svg" height={660} width={208} alt="radar" />
      </Box>
      <Typography
        variant="h1"
        sx={{
          color: '#fff',
          fontSize: {
            xl: '5.875rem',
            lg: '5.875rem',
            md: '5.875rem',
            sm: '4rem',
            xs: '2.5rem'
          },
          fontWeight: 800,
          textAlign: 'center',
          textTransform: 'uppercase'
        }}
        className="gradient-text"
      >
        Select Planet
      </Typography>
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: {
            xl: 'space-between',
            lg: 'space-between',
            md: 'center',
            sm: 'center',
            xs: 'center'
          },
          maxWidth: '66.5rem',
          margin: {
            xl: '5rem auto 0',
            lg: '5rem auto 0',
            md: '5rem auto 0',
            sm: '3rem auto 0',
            xs: '2.5rem auto 0'
          },
          position: 'relative',
          padding: {
            xl: '0',
            lg: '0',
            md: '0 1rem',
            sm: '0 1rem',
            xs: '0 1rem'
          },
          width: '100%',
          zIndex: 1
        }}
      >
        <Grid container spacing={2.5} sx={{ marginLeft: '0' }}>
          {PlanetList.map((planet, index) => (
            <Grid xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
              <PlanetCard
                key={index}
                icon={planet.icon}
                title={planet.title}
                planetSize={planet.planetSize}
                url={planet.url}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 0 -5rem',
          width: '100%'
        }}
      >
        <Image src="/images/earth.svg" height={500} width={1920} alt="earth" />
      </Box>
    </Box>
  )
}
