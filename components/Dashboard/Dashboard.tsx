/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useState } from 'react'
import { PostPreview } from '../PostPreviews/PostPreview'
import { PostTypes } from '../PostPreviews/types'
import { SCDashboardContainer, SCSeparator } from './styles'

export const Dashboard: FunctionComponent<any> = ({ data }) => {
  const [posts, setPosts] = useState<PostTypes[]>(data)

  return (
    <SCDashboardContainer>
      {!!posts?.length &&
        posts.map((post) => (
          <>
            <PostPreview key={post._id} post={post} />
            <SCSeparator />
          </>
        ))}
    </SCDashboardContainer>
  )
}
