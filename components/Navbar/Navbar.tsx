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
        <SCLink>Go to portfolio</SCLink>
      </SCLeftContent>
    </SCNavContainer>
  )
}
