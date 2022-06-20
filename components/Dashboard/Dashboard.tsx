/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useState } from 'react'
import { Post } from '../Post/Post'
import { PostTypes } from '../Post/types'
import { SCDashboardContainer, SCDashboardTitle } from './styles'

export const Dashboard: FunctionComponent = () => {
  const [posts, setPosts] = useState<PostTypes[]>([
    {
      _id: 'asd',
      date: new Date(),
      user_id: 123,
      title: 'first post',
      text: 'lorem ipsum',
    },
  ])

  return (
    <SCDashboardContainer>
      <SCDashboardTitle>BlogApp</SCDashboardTitle>
      {!!posts.length &&
        posts.map((post) => <Post key={post._id} post={post} />)}
    </SCDashboardContainer>
  )
}
