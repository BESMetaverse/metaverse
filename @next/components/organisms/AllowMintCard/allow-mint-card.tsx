import { Box } from '@mui/material'
import { ContinueButton } from '@next/components/atoms/ContinueButton'
import { MintingTerms } from '@next/components/atoms/MintingTerms'
import { CardButtonSection } from '@next/components/molecules/CardButtonSection'
import { CardHeadingSection } from '@next/components/molecules/CardHeadingSection'
import { FirstStepSection } from '@next/components/molecules/FirstStepSection'
import { SecondStepHeading } from '@next/components/molecules/SecondStepHeading'
import { SecondStepSection } from '@next/components/molecules/SecondStepSection'
import { ThirdStepHeading } from '@next/components/molecules/ThirdStepHeading'
import { ThirdStepSection } from '@next/components/molecules/ThirdStepSection'
import { useState } from 'react'

export const AllowMintCard = (): JSX.Element => {
  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)

  const handleStepOne = () => {
    setStepOne(false)
    setStepTwo(true)
    setStepThree(false)
  }
  const handleStepTwo = () => {
    setStepOne(false)
    setStepTwo(false)
    setStepThree(true)
  }

  return (
    <Box sx={{ maxWidth: '42.75rem', width: '100%' }}>
      {/* <MintingSale /> */}
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
            <CardButtonSection
              handleStepOne={handleStepOne}
              Text={'Connect Wallet'}
            />
          </>
        )}
        {stepTwo && (
          <>
            <SecondStepHeading />
            <SecondStepSection />
            <ContinueButton handleStepTwo={handleStepTwo} Text={'Continue'} />
          </>
        )}
        {stepThree && (
          <>
            <ThirdStepHeading />
            <ThirdStepSection />
          </>
        )}
      </Box>
      {stepOne ? <MintingTerms /> : null}
    </Box>
  )
}
