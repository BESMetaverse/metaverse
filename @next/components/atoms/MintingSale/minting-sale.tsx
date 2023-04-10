import { Typography } from '@mui/material'

export const MintingSale = (): JSX.Element => {
  return (
    <Typography
      sx={{
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'Inter',
        justifyContent: 'center',
        margin: '0 0 1.875rem',
        width: '100%'
      }}
    >
      <b
        style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0.5rem 0 0' }}
      >
        Sale is:
      </b>
      Open for listed accounts — 3999/4000 minted
    </Typography>
  )
}
