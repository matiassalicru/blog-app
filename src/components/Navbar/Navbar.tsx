import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Session
import { getSession, GetSessionParams, useSession, signOut, signIn } from 'next-auth/react'

// Styles
import { AUTHENTICATED, GITHUB_SIGN_IN, HOME_PATH, LOADING } from 'src/utils/contants'
import {
  SCNavContainer,
  SCLink,
  SCLeftContent,
  SCRightContent,
  SCLogo,
  SCSignOut,
  SCSignTitle,
  SCButtonLink,
  SCUserImage,
} from './styles'

// Constants

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    setIsAuthenticated(status === AUTHENTICATED)
    setIsLoading(status === LOADING)
  }, [status])

  const onLogInOut = async () => {
    if (isAuthenticated) {
      if (router.pathname !== HOME_PATH) {
        await router.replace(HOME_PATH)
      }
      signOut()
    } else {
      signIn(GITHUB_SIGN_IN)
    }
  }

  return (
    <SCNavContainer>
      <SCRightContent>
        <SCButtonLink onClick={() => router.push(HOME_PATH)}>
          <SCLogo />
          Matías Salicrú
        </SCButtonLink>
      </SCRightContent>
      <SCLeftContent>
        <SCLink href="https://matiassalicru.vercel.app" target="_blank" rel="noopener noreferrer">
          Go to portfolio
        </SCLink>
        {isLoading ? (
          <>Skeleton</>
        ) : (
          <SCButtonLink>
            <SCSignOut onClick={onLogInOut}>
              <SCSignTitle>{isAuthenticated ? 'Sign out' : 'Sign In'}</SCSignTitle>
              {isAuthenticated && data && <SCUserImage loading="lazy" src={data.user?.image || ''} />}
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
      session,
    },
  }
}
