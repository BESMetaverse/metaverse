import { SignClient } from '@walletconnect/sign-client'
import { Web3Modal } from '@web3modal/standalone'

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

const web3Modal = new Web3Modal({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  standaloneChains: ['eip155:5']
})

export const ConnectWalletCard = (): JSX.Element => {
  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)
  const [connectWalletDisabled, setConnectWalletDisabled] = useState(false)
  const [continueDisabled, setContinueDisabled] = useState(false)
  const [network, setNetwork] = useState('')
  const [wallet, setWallet] = useState('')
  const [walletProvider, setWalletProvider] = useState('')

  // wallet connect
  const [signClient, setSignClient] = useState<any>()
  const [sessions, setSessions] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    if (network !== '' && wallet !== '') {
      setContinueDisabled(true)
    } else {
      setConnectWalletDisabled(false)
    }
  }, [network, wallet])

  const changeWalletProvider = (selectedOption: string): void => {
    setWalletProvider(selectedOption)
  }

  const handleStepOne = (): void => {
    setStepOne(false)
    setStepTwo(true)
    setStepThree(false)
  }
  const handleStepTwo = async (): Promise<any> => {
    // check which wallet provider is selected
    if (walletProvider === 'Freighter') {
      setStepOne(false)
      setStepTwo(false)
      setStepThree(true)

      console.log('user has selected Freighter wallet')
    } else if (walletProvider === 'WalletConnect') {
      await handleWalletConnect()
      setStepOne(false)
      setStepTwo(false)
      setStepThree(true)
    } else if (walletProvider === 'XBULL') {
      // XBULL
      console.log('user has selected XBUll wallet')
    }
  }

  async function createClient(): Promise<void> {
    try {
      const client = await SignClient.init({
        projectId: '7948ceba0f5cf15f799771ed57ec69f6'
      })
      console.log('client is ', client)
      setSignClient(client)
      await subscribeToEvents(client)
    } catch (e) {
      console.log(e)
    }
  }
  async function handleWalletConnect(): Promise<void> {
    if (!signClient) throw Error('Cannot connect. Sign Client is not created')
    try {
      // dapp is going to send a proposal namespace
      const proposalNamespace = {
        eip155: {
          chains: ['eip155:5'],
          methods: ['eth_sendTransaction'],
          events: ['connect', 'disconnect']
        }
      }

      const { uri, approval } = await signClient.connect({
        requiredNamespaces: proposalNamespace
      })

      if (uri) {
        console.log('uri is ', uri)
        await web3Modal.openModal({ uri })
        const sessionNamespace = await approval()
        await onSessionConnect(sessionNamespace)
        web3Modal.closeModal()
      }
    } catch (e) {
      console.log(e)
    }
  }
  async function onSessionConnect(session: any): Promise<void> {
    if (!session) throw Error("session doesn't exist")
    try {
      console.log('session connected ', session)
      setSessions(session)
      setAccounts(session.namespaces.eip155.accounts[0].slice(9))
    } catch (e) {
      console.log(e)
    }
  }
  async function subscribeToEvents(client: any): Promise<void> {
    if (!client) {
      throw Error('No events to subscribe to b/c the client does not exist')
    }

    try {
      client.on('session_delete', () => {
        console.log('user disconnected the session from their wallet')
        reset()
      })
    } catch (e) {
      console.log(e)
    }
  }
  const reset = (): void => {
    setAccounts([])
    setSessions([])
  }

  useEffect(() => {
    if (!signClient) {
      void createClient()
    }
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
              disabled={!connectWalletDisabled}
            />
          </>
        )}
        {stepTwo && (
          <>
            <SecondStepHeading />
            <SecondStepSection
              walletProvider={walletProvider}
              changeWalletProvider={changeWalletProvider}
              setNetwork={setNetwork}
              setWallet={setWallet}
            />
            <ContinueButton
              disabled={!continueDisabled}
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
      {stepOne && (
        <MintingTerms setConnectWalletDisabled={setConnectWalletDisabled} />
      )}
    </Box>
  )
}
