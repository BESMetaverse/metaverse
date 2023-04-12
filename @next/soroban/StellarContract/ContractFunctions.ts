import { SorobanContextType } from '@soroban-react/core'
import addresses from '../addresses.json'
import { useContractValue } from '@soroban-react/contracts'
import BigNumber from 'bignumber.js'
import { bigNumberToI128 } from '@soroban-react/utils'

/// Mint NFT function here
interface mintContractProps {
  publicKey: any
  sorobanContext: SorobanContextType
}
export const mintNFT = async ({
  publicKey,
  sorobanContext
}: mintContractProps): Promise<any> => {
  // const publicKeyBN = new BigNumber(publicKey)
  // const publicKeyScval = bigNumberToI128(
  //   publicKeyBN.shiftedBy(0).decimalPlaces(0)
  // )
  console.log('*public key is ', publicKey)

  const mintToken = useContractValue({
    contractId: addresses.pet_adopt_id,
    method: 'balance',
    // params: [contractIdentifier(Buffer.from(publicKey, 'hex'))],
    params: [publicKey],

    sorobanContext
  }).result
  console.log('*Mint NFT response is: ', mintToken)

  return mintToken
}

export const getNFT = async ({
  tokenId,
  sorobanContext
}: {
  tokenId: string
  sorobanContext: SorobanContextType
}): Promise<string | undefined> => {
  const tokenIdBN = new BigNumber(tokenId)
  const tokenIdScval = bigNumberToI128(tokenIdBN.shiftedBy(0).decimalPlaces(0))

  const NFT = await useContractValue({
    contractId: addresses.pet_adopt_id,
    method: 'get_nft',
    params: [tokenIdScval],
    // params: [tokenIdScval],
    sorobanContext
  }).result

  console.log('*NFT for tokenId: ', tokenId, ' is ', NFT?.value()?.toString())

  return NFT?.value()?.toString()
}

/// All Contract getter functions
interface contractProps {
  sorobanContext: SorobanContextType
}

export const getCurrentSupply = async ({
  sorobanContext
}: contractProps): Promise<string | undefined> => {
  const currentSupply = await useContractValue({
    contractId: addresses.pet_adopt_id,
    method: 'current_nft_supply',
    sorobanContext
  }).result

  console.log('Current NFT supply is', currentSupply?.value()?.toString())

  return currentSupply?.value()?.toString()
}

//  to get total NFT supply
export const getTotalNFTSupply = async ({
  sorobanContext
}: contractProps): Promise<string | undefined> => {
  const totalNFTSupply = await useContractValue({
    contractId: addresses.pet_adopt_id,
    method: 'total_nft_supply',
    sorobanContext
  }).result

  console.log('Total NFT supply is ', totalNFTSupply?.value()?.toString())

  return totalNFTSupply?.value()?.toString()
}
