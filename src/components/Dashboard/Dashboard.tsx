import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Types
import { IPosts } from '../PostPreviews/types'
import { ISessionProps } from 'src/types/globalTypes.interface'
import { NextPage } from 'next'

// UIComponents
import { PostPreviewSkeleton } from '../PostPreviews/Skeleton/PostPreviewSkeleton'
import { PostPreview } from '../PostPreviews/PostPreview'
import { Button } from '../Button/Button'

// Styles
import {
  SCDashboardContainer,
  SCSeparator,
  SCNavDashboard,
  SCDashTitle,
  SCButtonContainer,
  SCPostContainer,
} from './styles'

// Utils
import { getData } from './utils'


export const Dashboard: NextPage<ISessionProps> = ({ session }) => {
  const [posts, setPosts] = useState<IPosts[]>([])
  const [skeletons] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])

  const getPosts = useCallback(async () => {
    const posts = await getData()
    setPosts(posts)
  }, [])
  
  useEffect(() => {
    getPosts()
  }, [getPosts])

  const router = useRouter()

  return (
    <SCDashboardContainer>
      <SCNavDashboard>
        <SCDashTitle>Last posts</SCDashTitle>
        {session && (
          <SCButtonContainer>
            <Button
              onClick={() => router.push('/new/create-post')}
              text='New post'
            />
          </SCButtonContainer>
        )}
      </SCNavDashboard>
      {!!posts?.length
        ? posts.map((post) => (
            <SCPostContainer key={post.id}>
              <PostPreview key={post._id} post={post} />
              <SCSeparator />
            </SCPostContainer>
          ))
        : skeletons.map((skeleton) => (
            <SCPostContainer key={skeleton.id}>
              <PostPreviewSkeleton />
              <SCSeparator />
            </SCPostContainer>
          ))}
    </SCDashboardContainer>
  )
}
