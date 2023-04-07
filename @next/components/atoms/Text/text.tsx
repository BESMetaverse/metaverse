import { Typography } from '@mui/material'
export const Text = ({ Text }: { Text: string }): JSX.Element => {
  return (
    <Typography
      variant="h2"
      sx={{
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 500,
        fontFamily: 'Inter',
        margin: '0 0 1.5rem'
      }}
    >
      {Text}
    </Typography>
  )
}
