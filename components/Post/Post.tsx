import React, { FunctionComponent } from 'react'

// Styles
import { SCPostContainer } from './styles'

// Types
import { PostTypes } from './types'
interface TypePost {
  post: PostTypes
}

export const Post: FunctionComponent<TypePost> = ({ post }) => {
  return (
    <SCPostContainer>
      <h1>Title</h1>
      <p>text</p>
    </SCPostContainer>
  )
}
