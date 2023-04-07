import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestUrl } from '@hooks'

export const authenticateQR = createAsyncThunk(
  'admin/AuthenticateQR',
  async (
    { authCode, token }: { authCode: string; token: string | undefined },
    { getState, extra }
  ) => {
    return await requestUrl
      .post(
        `your/auth/url`,
        { authCode },
        {
          headers: {
            token: token || ''
          }
        }
      )
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err))
  }
)
