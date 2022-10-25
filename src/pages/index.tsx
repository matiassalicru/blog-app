import type { NextPage } from 'next'

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
