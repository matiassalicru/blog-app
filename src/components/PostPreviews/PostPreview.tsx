import Link from 'next/link'
import React, { FunctionComponent } from 'react'

// Styles
import { SCPostContainer, SCPostTitle, SCPostText } from './styles'

// Types
import { IPosts } from './types'

interface TypePost {
  post: IPosts
}

export const PostPreview: FunctionComponent<TypePost> = ({ post }) => {
  const { title, text, id } = post
  return (
    <Link href={`/post/${id}`}>
      <SCPostContainer>
        <SCPostTitle>{title}</SCPostTitle>
        <SCPostText>{text}</SCPostText>
      </SCPostContainer>
    </Link>
  )
}
