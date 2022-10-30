import React, { useEffect, useState } from 'react'
import {
  getSession,
  GetSessionParams,
  useSession,
  signOut,
  signIn,
} from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  SCNavContainer,
  SCLink,
  SCLeftContent,
  SCRightContent,
  SCLogo,
  SCSignOut,
  SCSignTitle,
  SCUserName,
  SCButtonLink,
} from './styles'

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    setIsAuthenticated(status === 'authenticated')
    setIsLoading(status === 'loading')
  }, [status])

  return (
    <SCNavContainer>
      <SCRightContent>
        <SCButtonLink onClick={() => router.push('/')}>
          <SCLogo />
          Matías Salicrú
        </SCButtonLink>
      </SCRightContent>
      <SCLeftContent>
        <SCLink
          href='https://matiassalicru.vercel.app'
          target='_blank'
          rel='noopener noreferrer'>
          Go to portfolio
        </SCLink>
        {isLoading ? (
          <>Skeleton</>
        ) : (
          <SCButtonLink>
            <SCSignOut
              onClick={
                isAuthenticated ? () => signOut() : () => signIn('github')
              }>
              <SCSignTitle>
                {isAuthenticated ? 'Sign out' : 'Sign In'}
              </SCSignTitle>
              {isAuthenticated && data && (
                <SCUserName>{data.user?.name}</SCUserName>
              )}
            </SCSignOut>
          </SCButtonLink>
        )}
      </SCLeftContent>
    </SCNavContainer>
  )
}

export const getServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context)
  return {
    props: {
      session: session,
    },
  }
}
