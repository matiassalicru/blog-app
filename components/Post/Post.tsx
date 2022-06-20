import React, { FunctionComponent } from 'react'

// Styles
import { SCPostContainer } from './styles'

// Types
import { PostTypes } from './types'

export const Post: FunctionComponent = () => {
  return (
    <SCPostContainer>
      <h1>Title</h1>
      <p>text</p>
    </SCPostContainer>
  )
}
