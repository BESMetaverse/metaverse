import { Box, Typography } from '@mui/material'
export const MintingCalculation = (): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: '#171729',
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        margin: {
          xl: '0 0 5rem',
          lg: '0 0 5rem',
          md: '0 0 5rem',
          sm: '0 0 2.5rem',
          xs: '0 0 2.5rem'
        },
        padding: '0.969rem 0.875rem',
        width: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <input
          type="number"
          // value={0}
          placeholder="0"
          className="custom-input"
        />
        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.125rem',
            fontWeight: 500,
            margin: '0 0 0 0.5rem'
          }}
        >
          x= 0.15
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#fff',
          fontSize: '1.125rem',
          fontWeight: 500,
          margin: '0 0 0 0.5rem'
        }}
      >
        =0
      </Typography>
    </Box>
  )
}
