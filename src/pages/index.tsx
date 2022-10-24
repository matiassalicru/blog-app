import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import { Dashboard } from '../components/Dashboard/Dashboard'
import { Navbar } from '../components/Navbar/Navbar'
import { InfoTile } from '../components/InfoTile/InfoTile'

// Styles
import { SCIndexMain, SCIndexContent } from '../styles'
import clientPromise from 'src/lib/mongodb'
import { FindOptions } from 'mongodb'

export async function getServerSideProps(context: any) {
  try {
    const client = await clientPromise
    const db = client.db(process.env.DB_NAME)
    const data = db.collection('posts')

    // Options to sort documents from newer to older
    const options: FindOptions = {
      sort: { date: -1 },
    }
    const cursor = data.find({}, options)

    if ((await db.collection('posts').countDocuments()) === 0) {
      console.log('No documents found!')
    }

    const formattedData = await cursor.toArray()

    return {
      props: {
        isConnected: true,
        data: JSON.parse(JSON.stringify(formattedData)),
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

const Home: NextPage<any> = ({ data }) => {
  return (
      <SCIndexMain>
        <SCIndexContent>
          <Dashboard data={data} />
          <InfoTile />
        </SCIndexContent>
      </SCIndexMain>
  )
}

export default Home
