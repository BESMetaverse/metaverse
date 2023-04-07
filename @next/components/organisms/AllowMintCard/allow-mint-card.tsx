import { Box } from '@mui/material'
import { MintingTerms } from '@next/components/atoms/MintingTerms'
import { CardButtonSection } from '@next/components/molecules/CardButtonSection'
import { CardHeadingSection } from '@next/components/molecules/CardHeadingSection'
import { FirstStepSection } from '@next/components/molecules/FirstStepSection'
import { SecondStepHeading } from '@next/components/molecules/SecondStepHeading'
import { SecondStepSection } from '@next/components/molecules/SecondStepSection'
import { useState } from 'react'

export const AllowMintCard = (): JSX.Element => {
  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(false)

  const handleStepOne = () => {
    setStepOne(false)
    setStepTwo(true)
  }

  return (
    <Box sx={{ maxWidth: '42.75rem', width: '100%' }}>
      <Box
        sx={{
          backgroundColor: '#262641',
          border: '1px solid #4A4A73',
          borderRadius: '0.75rem',
          padding: {
            xl: '2.5rem 2rem',
            lg: '2.5rem 2rem',
            md: '1.5rem',
            sm: '1.25rem',
            xs: '1.25rem 0.5rem'
          },
          width: '100%'
        }}
      >
        {stepOne && (
          <>
            <CardHeadingSection />
            <FirstStepSection />
          </>
        )}
        {stepTwo && (
          <>
            <SecondStepHeading />
            <SecondStepSection />
          </>
        )}
        <CardButtonSection
          handleStepOne={handleStepOne}
          Text={'Connect Wallet'}
        />
      </Box>
      {stepOne ? <MintingTerms /> : null}
    </Box>
  )
}
