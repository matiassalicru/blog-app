import React, { FunctionComponent, useState } from 'react'
import { Button } from '../Button/Button'
import { useRouter } from 'next/router'
import { PostPreview } from '../PostPreviews/PostPreview'
import { PostTypes } from '../PostPreviews/types'
import { PostPreviewSkeleton } from '../PostPreviews/Skeleton/PostPreviewSkeleton';
import {
  SCDashboardContainer,
  SCSeparator,
  SCNavDashboard,
  SCDashTitle,
  SCButtonContainer,
  SCPostContainer,
} from './styles'

export const Dashboard: FunctionComponent<any> = ({ data }) => {
  const [posts] = useState<PostTypes[]>([])
  const [skeletons] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}])

  const router = useRouter()

  return (
    <SCDashboardContainer>
      <SCNavDashboard>
        <SCDashTitle>Last posts</SCDashTitle>
        <SCButtonContainer>
          <Button
            onClick={() => router.push('/create-post/create-post')}
            text='New post'
          />
        </SCButtonContainer>
      </SCNavDashboard>
      {!!posts?.length ?
        posts.map((post) => (
          <SCPostContainer key={post.id}>
            <PostPreview key={post._id} post={post} />
            <SCSeparator />
          </SCPostContainer>
        )) : 
        skeletons.map(skeleton => (
        <SCPostContainer key={skeleton.id}>
            <PostPreviewSkeleton />
            <SCSeparator />
          </SCPostContainer>
        ))
      }
    </SCDashboardContainer>
  )
}
