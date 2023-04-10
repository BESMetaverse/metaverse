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
import { useState, useEffect } from 'react'

import {
  configureWeb3Modal,
  createSignClient,
  openWalletConnectConn,
  subscribeToEvents
} from '@utils'

export const AllowMintCard = (): JSX.Element => {
  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)
  const [walletProvider, setWalletProvider] = useState('')

  const [signClient, setSignClient] = useState()
  const [session, setSession] = useState([])
  const [account, setAccount] = useState([])

  const changeWalletProvider = (selectedOption: string): void => {
    setWalletProvider(selectedOption)
  }

  const handleStepOne = () => {
    setStepOne(false)
    setStepTwo(true)
    setStepThree(false)
  }
  const handleStepTwo = async (): Promise<any> => {
    // check which wallet provider is selected
    if (walletProvider === 'Freighter') {
      console.log('user has selected Freighter wallet')
    } else if (walletProvider === 'WalletConnect') {
      const web3modal = await configureWeb3Modal()
      const session = await openWalletConnectConn(signClient, web3modal)
      if (session) {
        console.log('session is', session)
        console.log(
          'user Account is ',
          session.namespaces.eip155.accounts[0].slice(9)
        )

        setSession(session)
        setAccount(session.namespaces.eip155.accounts[0].slice(9))

        // Now moving to the next step for walletConnect success scenario
        setStepOne(false)
        setStepTwo(false)
        setStepThree(true)
      }
    } else if (walletProvider === 'XBULL') {
      // XBULL
      console.log('user has selected XBUll wallet')
    }
  }

  useEffect(() => {
    const createClient = async (): Promise<any> => {
      if (!signClient) {
        const tempsignClient = await createSignClient()
        if (tempsignClient) {
          setSignClient(tempsignClient)
          await subscribeToEvents(tempsignClient)
        }
      }
    }
    createClient()
  }, [signClient])

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
            <SecondStepSection
              walletProvider={walletProvider}
              changeWalletProvider={changeWalletProvider}
            />
            <ContinueButton
              // disabled={!signClient}
              handleStepTwo={handleStepTwo}
              Text={'Continue'}
            />
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
