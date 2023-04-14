import React from 'react'
import { SorobanReactProvider } from '@soroban-react/core'
// eslint-disable-next-line
import { public_chain, futurenet, testnet } from '@soroban-react/chains'
import { ChainMetadata, Connector } from '@soroban-react/types'
import { freighter } from '@soroban-react/freighter'

const allowedChains: ChainMetadata[] = [public_chain, testnet, futurenet]

const allowedConnectors: Connector[] = [freighter()]
// const allowedConnectors: Connector[] = []
export function MySorobanReactProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <SorobanReactProvider chains={allowedChains} connectors={allowedConnectors}>
      {children}
    </SorobanReactProvider>
  )
}
