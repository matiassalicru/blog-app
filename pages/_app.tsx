import { Navbar } from '../components/Navbar/Navbar'
import BasicLayout from 'layout/Basic'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout> 
      <Head>
        <title>BlogApp</title>
        <meta name='description' content='Blog app by Matías Salicrú' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
