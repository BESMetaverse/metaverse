import { SorobanContextType } from '@soroban-react/core'
import addresses from '../addresses.json'
import { useContractValue } from '@soroban-react/contracts'
import * as SorobanClient from 'soroban-client'

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

  const mintToken = useContractValue({
    //paste line
    contractId: addresses.pet_adopt_id,
    method: 'balance',
    // params: [contractIdentifier(Buffer.from(publicKey, 'hex'))],
    params: [publicKey],

    sorobanContext
  }).result

  return mintToken
}

export const getNFT = async ({
  tokenId,
  sorobanContext
}: {
  tokenId: number
  sorobanContext: SorobanContextType
}): Promise<string | undefined> => {
  const nftId = SorobanClient.xdr.ScVal.scvU32(tokenId)

  const NFT = await useContractValue({
    contractId: addresses.pet_adopt_id,
    method: 'get_nft',
    params: [nftId],
    // params: [tokenIdScval],
    sorobanContext
  }).result

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

  return totalNFTSupply?.value()?.toString()
}
