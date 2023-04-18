import { Box, Grid, Typography } from '@mui/material'
import { PlanetCard } from '@next/components/atoms/PlanetCard'

export const SelectPlanet = (): JSX.Element => {
  const PlanetList = [
    {
      icon: '/images/planets/BESterionis.png',
      title: 'BESterionis',
      url: 'BESterionis',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESblactura.png',
      title: 'BESblactura',
      url: 'BESblactura',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESergynebula.png',
      title: 'BESergynebula',
      url: 'BESergynebula',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESorceum.png',
      title: 'BESorceum',
      url: 'BESorceum',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESigonis.png',
      title: 'BESigonis',
      url: 'BESigonis',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESvoidum.png',
      title: 'BESvoidum',
      url: 'BESvoidum',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESblacktaros.png',
      title: 'BESblacktaros',
      url: 'BESblacktaros',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESenegos.png',
      title: 'BESenegos',
      url: 'BESenegos',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESfuscantis.png',
      title: 'BESfuscantis',
      url: 'BESfuscantis',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESophoris.png',
      title: 'BESophoris',
      url: 'BESophoris',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESobscurida.png',
      title: 'BESobscurida',
      url: 'BESobscurida',
      planetSize: '509 600 000'
    },
    {
      icon: '/images/planets/BESinthrakos.png',
      title: 'BESinthrakos',
      url: 'BESinthrakos',
      planetSize: '509 600 000'
    }
  ]
  return (
    <Box
      sx={{
        background: 'url(/images/mainBg.jpg)',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: {
          xl: '100vh',
          lg: '100vh',
          md: '100vh',
          sm: '100%',
          xs: '100%'
        },
        overflow: 'hidden',
        padding: {
          xl: '9rem 0',
          lg: '7rem 0',
          md: '5rem 0 2.5rem',
          sm: '5rem 0 2.5rem',
          xs: '5rem 0 2.5rem'
        },
        position: 'relative',
        width: '100%'
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#fff',
          fontSize: {
            xl: '5.875rem',
            lg: '4.5rem',
            md: '3rem',
            sm: '3rem',
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
          maxWidth: '72.5rem',
          margin: {
            xl: '5rem auto 0',
            lg: '3rem auto 0',
            md: '2.5rem auto 0',
            sm: '2.5rem auto 0',
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
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
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
    </Box>
  )
}
