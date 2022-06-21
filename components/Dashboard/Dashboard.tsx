/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useState } from 'react'
import { Post } from '../Post/Post'
import { PostTypes } from '../Post/types'
import { SCDashboardContainer, SCDashboardTitle } from './styles'

export const Dashboard: FunctionComponent<any> = ({ data }) => {
  const [posts, setPosts] = useState<PostTypes[]>(data)

  return (
    <SCDashboardContainer>
      <SCDashboardTitle>BlogApp</SCDashboardTitle>
      {!!posts?.length &&
        posts.map((post) => <Post key={post._id} post={post} />)}
    </SCDashboardContainer>
  )
}
