// import { walletSliceState, WalletAccountNumber } from './auth.types'
/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WalletAccountNumber } from './wallet.types'

export const WalletAccountInitialState: WalletAccountNumber = {
  walletAccountNumber: null
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState: WalletAccountInitialState,
  reducers: {
    setWalleAccount(
      state: WalletAccountNumber,
      { payload }: PayloadAction<string>
    ) {
      state.walletAccountNumber = payload
      console.log('Payload', payload)
    }
  }
})

export const walletActions = walletSlice.actions
export const walletReducer = walletSlice.reducer
