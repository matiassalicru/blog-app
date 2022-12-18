import React, { useContext, useEffect, useMemo, useState } from 'react'

// Next
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
// Component
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
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

// Context
import { AlertContext } from '../../context/AlertContext/AlertContext'

export const Post: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { alertInfo } = useContext(AlertContext)

  const { query, push } = useRouter()
  const { status, data: userData } = useSession()

  const { post, isPostLoading, getPostData, handleDeletePost } = usePost()

  const { author, getUserData, isAuthorLoading, isAuthenticated } = useUser(status)

  const isUserPost = useMemo(() => userData?.user?.id === post?.user_id, [userData, post])

  useEffect(() => {
    post && getUserData(String(post.user_id))
  }, [userData, post])

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
              title="Delete Post"
              text="Are you sure about deleting your post?"
              onCancel={handleCloseModal}
              onSubmit={handleDeletePost}
              disableButtons={alertInfo?.show}
            />
          )}
          <SCAuthorContainer>
            <SCAuthorName data-testid="author-name">
              Author: {author ? author.name : 'Legacy user'}
              {isAuthenticated && isUserPost && <p>(you)</p>}
            </SCAuthorName>
            <SCAuthorEmail data-testid="author-email">
              {author ? author.email : 'legacyuser@msalicru.com'}
            </SCAuthorEmail>
          </SCAuthorContainer>
          <SCPostTitle>{post?.title}</SCPostTitle>
          <SCPostText>{post?.text}</SCPostText>
          <SCDeleteButtonContainer>
            <Button onClick={onBackButtonClick} text="Back" variant="secondary" disabled={alertInfo?.show} />
            {isUserPost && isAuthenticated && (
              <Button onClick={onDeletePost} text="Delete post" variant="danger" disabled={alertInfo?.show} />
            )}
          </SCDeleteButtonContainer>
        </>
      ) : (
        <PostSkeleton />
      )}
    </SCPostContent>
  )
}
