/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import { useState } from 'react'
import { authActions } from '@store'
import { useAppDispatch } from '@hooks'
import { useRouter } from 'next/router'
import { AxiosResponse } from 'axios'
import { useSnackbar } from 'notistack'

type SetSnackbarProps = (
  message: string,
  show: boolean,
  type: 'success' | 'error' | 'warning' | 'info' | undefined
) => void

type fetchDataProps = (
  url: (...props: any) => Promise<AxiosResponse<unknown, any>>,
  handleErrorResponse?: () => void,
  shouldHandleError?: boolean
) => any
export const useAxiosFetch = (
  setSnackbarProps?: SetSnackbarProps | boolean
): any => {
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState<any>(null)
  const [data, setData] = useState<any>()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const fetchData: fetchDataProps = async (
    url,
    handleErrorResponse,
    shouldHandleError
  ) => {
    setIsLoading(true)
    setFetchError(null)
    setData(null)
    try {
      const res: any = await url()

      const statusCode = res?.data?.statusCode
      if (!shouldHandleError) {
        return setData(res.data)
      }
      switch (statusCode) {
        case 1000:
        case 2876:
        case 200:
          setData(res.data)
          setFetchError(null)
          break
        case 1003:
        case 1002:
        case 401:
          dispatch(authActions.logout())
          void router.push('/')
          break
        case 1001: {
          if (setSnackbarProps) {
            enqueueSnackbar('Invalid input', { variant: 'warning' })
          }
          break
        }
        default:
          setData(null)
          setFetchError(res?.data)
          if (handleErrorResponse) {
            handleErrorResponse()
          }
          break
      }
    } catch (err: any) {
      if (err?.response?.data?.statusCode === 400) {
        enqueueSnackbar(err?.response?.data?.message, { variant: 'error' })
      }
      if (err?.response?.data?.statusCode === 401) {
        dispatch(authActions.logout())
        void router.push('/')
      } else if (!err?.response?.data) {
        enqueueSnackbar(err?.message, { variant: 'error' })
        setFetchError({ data: { statusCode: 500, message: 'Network Error' } })
        setData(null)
        return
      }
      setFetchError(err.response)
      setData(null)
      // dispatch(authActions.setNetworkError(true))
    } finally {
      setIsLoading(false)
    }
  }

  return { data, fetchError, isLoading, fetchData }
}
