import '../styles/global.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore } from '@store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { appWithTranslation } from 'next-i18next'

import type { Page } from '@types'

import { MainLayout } from '@layouts'
import { SnackbarProvider } from 'notistack'

type Props = AppProps & {
  Component: Page
}
const store = createStore
const persistor = persistStore(store)

const MyApp: FC<Props> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <Head>
        <title>BES Metaverse</title>
      </Head>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider
            maxSnack={1}
            autoHideDuration={5000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
          >
            <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
export default appWithTranslation(MyApp)
