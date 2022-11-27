import { NextPage } from 'next'
import { getSession, GetSessionParams } from 'next-auth/react'

// Components
import { Dashboard } from '../components/Dashboard/Dashboard'
import { InfoTile } from '../components/InfoTile/InfoTile'

// Styles
import { SCIndexMain, SCIndexContent } from '../styles'

const Home: NextPage = () => {
  return (
    <SCIndexMain>
      <SCIndexContent>
        <Dashboard />
        <InfoTile />
      </SCIndexContent>
    </SCIndexMain>
  )
}

export default Home

export const getServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context)
  return {
    props: {
      session: session,
    },
  }
}
