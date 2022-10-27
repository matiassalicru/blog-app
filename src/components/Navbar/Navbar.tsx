import React from 'react'
import {
  SCNavContainer,
  SCLink,
  SCLeftContent,
  SCRightContent,
  SCLogo,
  SCSignOut,
  SCSignOutTitle,
  SCUserName
} from './styles'

export const Navbar = ({ user }: any) => {
  return (
    <SCNavContainer>
      <SCRightContent>
        <SCLink>
          <SCLogo />
          {user?.name || 'Matías Salicrú'}
        </SCLink>
      </SCRightContent>
      <SCLeftContent>
        <SCLink>Home</SCLink>
        <SCLink
          href='https://matiassalicru.vercel.app'
          target='_blank'
          rel='noopener noreferrer'>
          Go to portfolio
        </SCLink>
        <SCLink
          href={
            user
              ? 'http://localhost:3000/api/auth/signout'
              : 'http://localhost:3000/api/auth/signin'
          }>
          {user ? (
            <SCSignOut>
              <SCSignOutTitle>Sign out</SCSignOutTitle>
              <SCUserName>{user.name}</SCUserName>
            </SCSignOut>
          ) : (
            'Sign In'
          )}
        </SCLink>
      </SCLeftContent>
    </SCNavContainer>
  )
}
