import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
// Components
import { BasicLayout } from '../layout/Basic'
import { Navbar } from '../components/Navbar/Navbar'

// Context
import AlertContextProvider from '../context/AlertContext/AlertContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Head>
        <title>BlogApp</title>
        <meta name="description" content="Blog app by Matías Salicrú" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SessionProvider>
        <AlertContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </AlertContextProvider>
      </SessionProvider>
    </BasicLayout>
  )
}

export default MyApp
