/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useState } from 'react'
import { Post } from '../Post/Post'
import { PostTypes } from '../Post/types'
import { SCDashboardContainer } from './styles'

export const Dashboard: FunctionComponent<any> = ({ data }) => {
  const [posts, setPosts] = useState<PostTypes[]>(data)

  return (
    <SCDashboardContainer>
      {!!posts?.length &&
        posts.map((post) => <Post key={post._id} post={post} />)}
    </SCDashboardContainer>
  )
}
