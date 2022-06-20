/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useState } from 'react'
import { Post } from '../Post/Post'
import { PostTypes } from '../Post/types'
import { SCDashboardContainer } from './styles'

export const Dashboard: FunctionComponent = () => {
  const [posts, setPosts] = useState<PostTypes[]>([])

  return (
    <SCDashboardContainer>
      {!!posts.length && posts.map((post) => <Post />)}
    </SCDashboardContainer>
  )
}
