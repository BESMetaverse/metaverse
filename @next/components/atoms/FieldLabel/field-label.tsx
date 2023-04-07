import { Typography } from '@mui/material'
export const FieldLabel = ({
  FieldLabel
}: {
  FieldLabel: string
}): JSX.Element => {
  return (
    <Typography
      variant="h2"
      sx={{
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '0 0 1rem'
      }}
    >
      {FieldLabel}
    </Typography>
  )
}
