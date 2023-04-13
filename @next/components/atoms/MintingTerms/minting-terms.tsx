import { Box } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface MintingTermsProps {
  setConnectWalletDisabled: (connectWalletDisabled: boolean) => void
}

export const MintingTerms = ({
  setConnectWalletDisabled
}: MintingTermsProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsChecked(event.target.checked)
  }

  useEffect(() => {
    if (isChecked) {
      setConnectWalletDisabled(true)
    } else {
      setConnectWalletDisabled(false)
    }
  }, [isChecked])

  return (
    <Box
      sx={{
        alignItems: 'center',
        color: '#fff',
        display: 'block',
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
        control={
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        }
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
