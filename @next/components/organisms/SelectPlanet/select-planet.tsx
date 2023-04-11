import { Box, Grid, Typography } from '@mui/material'
import { PlanetCard } from '@next/components/atoms/PlanetCard'
import { PlotDetails } from '@next/components/atoms/PlotDetails'

export const SelectPlanet = (): JSX.Element => {
  const PlanetList = [
    {
      icon: '/images/planets/Earth.svg',
      title: 'Earth',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Saturn.svg',
      title: 'Saturn',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Mars.svg',
      title: 'Mars',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Moon.svg',
      title: 'Moon',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Jupiter.svg',
      title: 'Jupiter',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Neptune.svg',
      title: 'Neptune',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Mercury.svg',
      title: 'Mercury',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Venus.svg',
      title: 'Venus',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/Pluto.svg',
      title: 'Pluto',
      planetSize: '509 600 000'
    }
  ]
  return (
    <Box
      sx={{
        background: 'url(/images/EarthBg.png)',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: {
          xl: '100vh',
          lg: '100vh',
          md: '100vh',
          sm: '100vh',
          xs: '100%'
        },
        padding: {
          xl: '9rem 0',
          lg: '9rem 0',
          md: '9rem 0',
          sm: '9rem 0',
          xs: '7rem 0 3rem'
        },
        width: '100%'
      }}
    >
      {/* <PlotDetails /> */}
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
          maxWidth: '65rem',
          margin: {
            xl: '5rem auto 0',
            lg: '5rem auto 0',
            md: '5rem auto 0',
            sm: '3rem auto 0',
            xs: '2.5rem auto 0'
          },
          padding: {
            xl: '0',
            lg: '0',
            md: '0 1rem',
            sm: '0 1rem',
            xs: '0 1rem'
          },
          width: '100%'
        }}
      >
        <Grid
          container
          spacing={2.5}
          sx={{ justifyContent: 'center', marginLeft: '0' }}
        >
          {PlanetList.map((planet, index) => (
            <Grid xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
              <PlanetCard
                key={index}
                icon={planet.icon}
                title={planet.title}
                planetSize={planet.planetSize}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
