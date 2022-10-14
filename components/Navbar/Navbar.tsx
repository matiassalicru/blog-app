import React from 'react'
import { SCNavContainer, SCLink, SCLeftContent, SCRightContent, SCLogo } from './styles'

export const Navbar = () => {
  return (
    <SCNavContainer>
      <SCRightContent>
        <SCLink>
          <SCLogo />
          Matías Salicrú
        </SCLink>
      </SCRightContent>
      <SCLeftContent>
        <SCLink>Home</SCLink>
        <SCLink href='https://matiassalicru.vercel.app' target="_blank" rel='noopener noreferrer'>Go to portfolio</SCLink>
      </SCLeftContent>
    </SCNavContainer>
  )
}
