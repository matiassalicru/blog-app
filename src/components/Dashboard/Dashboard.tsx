/* eslint-disable @typescript-eslint/indent */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Types
import { NextComponentType, NextPageContext } from 'next'
// Auth
import { useSession } from 'next-auth/react'

// Types
import { IPosts } from '../PostPreviews/types'

// Constants
import { AUTHENTICATED } from '../../utils/contants'

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

// Context
import { AlertContext } from '../../context/AlertContext/AlertContext'
import { Alert } from '../Alert/Alert'

export const Dashboard: NextComponentType<NextPageContext> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPosts[]>([])
  const [skeletons] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
  const { status } = useSession()
  const { alertInfo } = useContext(AlertContext)

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
              <SCPostContainer key={skeleton.id} data-testid="skeleton">
                <PostPreviewSkeleton />
                <SCSeparator />
              </SCPostContainer>
            ))}
        {alertInfo.show && (
          <Alert text={alertInfo.text} icon={alertInfo.icon} time={alertInfo.time} variant={alertInfo.variant} />
        )}
      </SCDashboardContainer>
    </>
  )
}
