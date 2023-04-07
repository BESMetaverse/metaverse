import { Box, Typography } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
export const FirstStepSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        margin: '5rem 0'
      }}
    >
      <FieldLabel FieldLabel={'Allowlist Mint'} />
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: '#171729',
          borderRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
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
    </Box>
  )
}
