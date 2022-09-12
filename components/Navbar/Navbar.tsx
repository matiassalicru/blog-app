import React from 'react'
import { SCNavContainer, SCLink, SCLeftContent } from './styles'

export const Navbar = () => {
  return (
    <SCNavContainer>
      {/* Logo */}
      <SCLink>Matías Salicrú</SCLink>
      <SCLeftContent>
        <SCLink>Home</SCLink>
        <SCLink>Go to portfolio</SCLink>
      </SCLeftContent>
      {/* Home */}
      {/* Go to portfolio */}
    </SCNavContainer>
  )
}
