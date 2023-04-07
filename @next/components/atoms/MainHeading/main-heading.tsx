import { Typography } from '@mui/material'
export const MainHeading = ({ Heading }: { Heading: string }): JSX.Element => {
  return (
    <Typography
      variant="h2"
      sx={{
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 600,
        fontFamily: 'Inter',
        margin: '0 0 1.5rem'
      }}
    >
      {Heading}
    </Typography>
  )
}
