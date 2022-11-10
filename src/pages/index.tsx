import { getSession, GetSessionParams } from 'next-auth/react'

// Components
import { Dashboard } from '../components/Dashboard/Dashboard'
import { InfoTile } from '../components/InfoTile/InfoTile'

// Styles
import { SCIndexMain, SCIndexContent } from '../styles'

interface IUser {
  name: string;
  image: string;
  email: string;
}

interface HomeTypes {
  session: ISession
}

interface ISession {
  expires: string;
  user: IUser
}

const Home = ({ session }: HomeTypes) => {
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