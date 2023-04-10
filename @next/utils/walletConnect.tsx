import SignClient from '@walletconnect/sign-client'
import { Web3Modal } from '@web3modal/standalone'

// 1. Get projectID at https://cloud.walletconnect.com
// if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
//     throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
// }

// 2. create sign client
export const createSignClient = async (): Promise<any> => {
  try {
    const client = await SignClient.init({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID
    })
    return client
  } catch (e) {
    return null
  }
}

// 3. Configure web3Modal
export const configureWeb3Modal = (): any => {
  const web3Modal = new Web3Modal({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    walletConnectVersion: 2
    // standaloneChains: ["eip155:5"]
  })
  return web3Modal
}

// 4. Initiate connection and pass pairing uri to the modal
export const openWalletConnectConn = async (
  signClient: any,
  web3Modal: any
): Promise<any> => {
  if (signClient) {
    const namespaces = {
      eip155: {
        methods: ['eth_sign'],
        chains: ['eip155:1'],
        events: ['connect', 'disconnect', 'accountsChanged']
      }
    }
    const { uri, approval } = await signClient?.connect({
      requiredNamespaces: namespaces
    })
    console.log('uri is ', uri)
    if (uri) {
      await web3Modal.openModal({
        uri,
        standaloneChains: namespaces.eip155.chains
      })
      const sessionNamespace = await approval()
      web3Modal.closeModal()
      console.log('** session is', sessionNamespace)
      return sessionNamespace
    }
  }
}

// 5 listening to wallet events
export const subscribeToEvents = async (client: any): Promise<any> => {
  if (client) {
    try {
      client.on('session_delete', () => {
        console.log('The user has disconnected the session from their wallet.')
        // reset()
      })
    } catch (e) {
      console.log(e)
    }
  }
}
