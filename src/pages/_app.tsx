import BasicLayout from 'src/layout/Basic'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Navbar } from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Head>
        <title>BlogApp</title>
        <meta name="description" content="Blog app by Matías Salicrú" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SessionProvider>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </BasicLayout>
  )
}

export default MyApp
