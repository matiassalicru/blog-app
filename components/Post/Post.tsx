import React, { FunctionComponent } from 'react'

// Styles
import { SCPostContainer, SCPostTitle, SCPostText } from './styles'

// Types
import { PostTypes } from './types'
interface TypePost {
  post: PostTypes
}

export const Post: FunctionComponent<TypePost> = ({ post }) => {
  const { title, text } = post
  return (
    <SCPostContainer>
      <SCPostTitle>Title</SCPostTitle>
      <SCPostText>text</SCPostText>
    </SCPostContainer>
  )
}
