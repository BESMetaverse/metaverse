import { WalletAccountNumber } from './auth.types'
/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { AuthSliceState, UserInfoType, WalletAccountNumber } from './auth.types'

// export const authInitialState: AuthSliceState = {
//   userInfo: null
// }

export const WalletAccountINitialState: WalletAccountNumber = {
  walletAccountNumber: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: WalletAccountINitialState,
  reducers: {
    // logout(state: AuthSliceState) {
    //   localStorage.clear()
    //   state.userInfo = null
    // },
    // setUserInfo(
    //   state: AuthSliceState,
    //   { payload }: PayloadAction<UserInfoType>
    // ) {
    //   state.userInfo = payload
    // },
    setWalleAccount(
      state: WalletAccountNumber,
      { payload }: PayloadAction<string>
    ) {
      state.walletAccountNumber = payload
      console.log('Payload', payload)
    }
  }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
