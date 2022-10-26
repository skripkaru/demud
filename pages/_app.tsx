import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from '@components/UI/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
