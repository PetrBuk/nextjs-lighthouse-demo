import type { AppProps } from 'next/app'

import Layout from '@project/components/layout/Layout'
import '@project/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
