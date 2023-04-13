// import { walletSliceState, WalletAccountNumber } from './auth.types'
/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { walletSliceState } from './wallet.types'

export const WalletAccountInitialState: walletSliceState = {
  walletAccountNumber: null,
  walletProvider: null,
  activeChain: null

  // walletAccountNumber: null
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState: WalletAccountInitialState,
  reducers: {
    setWalletAccount(
      state: walletSliceState,
      { payload }: PayloadAction<string>
    ) {
      console.log('payload is ', payload)
      state.walletAccountNumber = payload
    },
    setWalletProvider(
      state: walletSliceState,
      { payload }: PayloadAction<string>
    ) {
      console.log('payload is ', payload)
      state.walletProvider = payload
    },
    setActiveNetwork(
      state: walletSliceState,
      { payload }: PayloadAction<string>
    ) {
      console.log('payload is ', payload)
      state.walletAccountNumber = payload
    }
  }
})

export const walletActions = walletSlice.actions
export const walletReducer = walletSlice.reducer
