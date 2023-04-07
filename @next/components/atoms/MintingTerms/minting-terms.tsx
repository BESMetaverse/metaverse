import { Box } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from 'next/link'
export const MintingTerms = (): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'Inter',
        justifyContent: 'flex-start',
        margin: '0.5rem 0 0',
        width: '100%'
      }}
    >
      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="By minting you agree to the"
        labelPlacement="end"
        style={{
          marginRight: '0.5rem'
        }}
      />
      <Link
        href="https://ironpaw.io/terms"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'underline'
        }}
      >
        Terms and Conditions.
      </Link>
    </Box>
  )
}
