import { NextPage } from 'next'
import { getSession, GetSessionParams } from 'next-auth/react'

// Types
import { ISessionProps } from 'src/types/globalTypes.interface'

// Components
import { Dashboard } from '../components/Dashboard/Dashboard'
import { InfoTile } from '../components/InfoTile/InfoTile'

// Styles
import { SCIndexMain, SCIndexContent } from '../styles'


const Home: NextPage<ISessionProps> = ({ session }) => {
  return (
    <SCIndexMain>
      <SCIndexContent>
        <Dashboard session={session} />
        <InfoTile />
      </SCIndexContent>
    </SCIndexMain>
  )
}

export default Home


export const getServerSideProps =  async (context: GetSessionParams) => {
  const session = await getSession(context)
  return {
    props: {
      session: session 
    }
  }
}