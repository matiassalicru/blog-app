/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'

// Next
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
// Component
import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'
import { PostSkeleton } from './Skeleton/PostSkeleton'
// Styles
import {
  SCPostContent,
  SCPostTitle,
  SCPostText,
  SCAuthorName,
  SCAuthorEmail,
  SCAuthorContainer,
  SCDeleteButtonContainer,
} from './styles'
// Hooks
import { usePost } from './hooks/usePost'
import { useUser } from './hooks/useUser'
// Constants
import { AUTHENTICATED } from '../../utils/contants'

export const Post: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { query, push } = useRouter()
  const { status, data: userData } = useSession()

  const { post, isPostLoading, getPostData, handleDeletePost } = usePost()

  const {
    author,
    getUserData,
    isAuthorLoading,
    isAuthenticated,
    setIsAuthenticated,
  } = useUser()

  const isUserPost = useMemo(
    () => userData?.user?.id === post?.user_id,
    [userData, post]
  )

  useEffect(() => {
    post && getUserData(String(post.user_id))
    setIsAuthenticated(status === AUTHENTICATED)
  }, [userData, post, status])

  useEffect(() => {
    const { post: postId } = query
    postId && getPostData(postId)
  }, [query, userData])

  const onBackButtonClick = () => {
    push('/')
  }

  const onDeletePost = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <SCPostContent>
      {!isPostLoading && !isAuthorLoading ? (
        <>
          {showModal && (
            <Modal
              title='Delete Post'
              text={`Are you sure about deleting your post?`}
              onCancel={handleCloseModal}
              onSubmit={handleDeletePost}
            />
          )}
          <SCAuthorContainer>
            <SCAuthorName>
              Author: {author ? author.name : 'Legacy user'}
              {isAuthenticated && isUserPost && <p>(you)</p>}
            </SCAuthorName>
            <SCAuthorEmail>
              {author ? author.email : 'legacyuser@msalicru.com'}
            </SCAuthorEmail>
          </SCAuthorContainer>
          <SCPostTitle>{post?.title}</SCPostTitle>
          <SCPostText>{post?.text}</SCPostText>
          <SCDeleteButtonContainer>
            <Button
              onClick={onBackButtonClick}
              text='Back'
              variant='secondary'
            />
            {isUserPost && isAuthenticated && (
              <Button
                onClick={onDeletePost}
                text='Delete post'
                variant='danger'
              />
            )}
          </SCDeleteButtonContainer>
        </>
      ) : (
        <PostSkeleton />
      )}
    </SCPostContent>
  )
}
