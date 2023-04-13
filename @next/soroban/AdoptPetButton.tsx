import { useSorobanReact } from '@soroban-react/core'
import Button from '@mui/material/Button'
import {
  useSendTransaction,
  contractTransaction
} from '@soroban-react/contracts'
import * as SorobanClient from 'soroban-client'
import addresses from '../soroban/addresses.json'

interface AdoptPetButtonProps {
  id: number
}

export function AdoptPetButton({ id }: AdoptPetButtonProps): JSX.Element {
  const sorobanContext = useSorobanReact()
  console.log('sorobanContext: ', sorobanContext)
  const { sendTransaction } = useSendTransaction()
  const { activeChain, server, address } = sorobanContext

  const handleAdopt = async (): Promise<void> => {
    if (!activeChain || !address || !server) {
      console.log('No active chain')
      return
    } else {
      try {
        let account = await server.getAccount(address)
        let sequence = account.sequenceNumber()
        let source = new SorobanClient.Account(address, sequence)

        const transaction = contractTransaction({
          networkPassphrase: activeChain.networkPassphrase,
          source: source,
          contractId: addresses.pet_adopt_id,
          method: 'adopt'
        })

        const result = await sendTransaction(transaction, { sorobanContext })
        console.log('adoptPet.tsx:sendTransaction:result: ', result)
      } catch (error) {
        console.log('Error while sending the transaction: ', error)
      }
    }
  }

  return (
    <Button size="small" variant="contained" onClick={handleAdopt}>
      Adopt it now! ❤️
    </Button>
  )
}
