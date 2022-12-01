/* eslint-disable @typescript-eslint/indent */
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Types
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { AUTHENTICATED } from 'src/utils/contants'
import { IPosts } from '../PostPreviews/types'

// UIComponents
import { PostPreviewSkeleton } from '../PostPreviews/Skeleton/PostPreviewSkeleton'
import { PostPreview } from '../PostPreviews/PostPreview'
import { Button } from '../Button/Button'

// Icons
import { Plus } from '../../icons/Plus'

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

// Auth

// Constants

export const Dashboard: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [posts, setPosts] = useState<IPosts[]>([])
  const [skeletons] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
  const { status } = useSession()

  const getPosts = useCallback(async () => {
    const postsData = await getData()
    setPosts(postsData)
  }, [])

  useEffect(() => {
    setIsAuthenticated(status === AUTHENTICATED)
  }, [status])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const router = useRouter()

  return (
    <>
      {isAuthenticated && (
        <SCButtonContainer>
          <Button
            onClick={() => router.push('/new/create-post')}
            icon={<Plus height="32px" width="32px" variant="solid" />}
            variant="roundedIcon"
          />
        </SCButtonContainer>
      )}
      <SCDashboardContainer>
        <SCNavDashboard>
          <SCDashTitle>Last posts</SCDashTitle>
        </SCNavDashboard>
        {posts?.length
          ? posts.map(post => (
              <SCPostContainer key={post.id}>
                <PostPreview key={post._id} post={post} />
                <SCSeparator />
              </SCPostContainer>
            ))
          : skeletons.map(skeleton => (
              <SCPostContainer key={skeleton.id}>
                <PostPreviewSkeleton />
                <SCSeparator />
              </SCPostContainer>
            ))}
      </SCDashboardContainer>
    </>
  )
}
