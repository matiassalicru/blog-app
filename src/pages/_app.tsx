import { Navbar } from '../components/Navbar/Navbar'
import BasicLayout from 'src/layout/Basic'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<null | any>(null)
  
  useEffect(() => {
    ;(async () => {
      const session = await getSession()
      setUser(session?.user)
    })()
  }, [])

  return (
    <BasicLayout> 
      <Head>
        <title>BlogApp</title>
        <meta name='description' content='Blog app by Matías Salicrú' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar user={user} />
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
