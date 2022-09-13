import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import { Dashboard } from '../components/Dashboard/Dashboard'
import { SCIndexMain, SCIndexContent } from 'styles'
import { Navbar } from 'components/Navbar/Navbar'
import { InfoTile } from 'components/InfoTile/InfoTile'

const Home: NextPage<any> = ({ data }) => {
  return (
    <>
      <Head>
        <title>BlogApp</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SCIndexMain>
        <Navbar />
        <SCIndexContent>
          <Dashboard data={data} />
          <InfoTile />
        </SCIndexContent>
      </SCIndexMain>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()
  return {
    props: {
      data: json,
    },
  }
}

export default Home
