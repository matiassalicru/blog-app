import Link from 'next/link'
import React, { FunctionComponent } from 'react'

// Styles
import { SCPostContainer, SCPostTitle, SCPostText } from './styles'

// Types
import { PostTypes } from './types'
interface TypePost {
  post: PostTypes
}

export const PostPreview: FunctionComponent<TypePost> = ({ post }) => {
  const { title, text, _id } = post
  return (
    <Link href={`/post/${_id}`}>
      <SCPostContainer>
        <SCPostTitle>{title}</SCPostTitle>
        <SCPostText>{text}</SCPostText>
      </SCPostContainer>
    </Link>
  )
}
