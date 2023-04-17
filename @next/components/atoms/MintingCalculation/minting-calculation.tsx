import { Box, Typography } from '@mui/material'
import { useState } from 'react'
export const MintingCalculation = (): JSX.Element => {
  const [value, setValue] = useState('0')
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
          lg: '0 0 2rem',
          md: '0 0 2rem',
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
          name="value"
          value={value}
          // value={0}
          onChange={(e) => setValue(e.target.value)}
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
          x= 1
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
        {+value * 1}
      </Typography>
    </Box>
  )
}
