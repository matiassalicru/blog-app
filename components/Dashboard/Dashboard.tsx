/* eslint-disable react/jsx-key */
import { Button } from 'components/Button/Button'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useState } from 'react'
import { PostPreview } from '../PostPreviews/PostPreview'
import { PostTypes } from '../PostPreviews/types'
import { SCDashboardContainer, SCSeparator, SCNavDashboard } from './styles'

export const Dashboard: FunctionComponent<any> = ({ data }) => {
  const [posts, setPosts] = useState<PostTypes[]>(data)

  const router = useRouter()

  return (
    <SCDashboardContainer>
      <SCNavDashboard>
        <Button
          onClick={() => router.push('/create-post/create-post')}
          text='New post'
        />
      </SCNavDashboard>
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
