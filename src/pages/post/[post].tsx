import React, { useEffect, useMemo, useState } from 'react'

// Next
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

// Types
import { IPosts } from '../../components/PostPreviews/types'

// Component
import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'

// Styles
import {
  SCPostContent,
  SCPostTitle,
  SCPostText,
  SCAuthorContainer,
  SCDeleteButtonContainer,
} from '../../styles/post/styles'

// Services
import api from 'src/services/api'

// Constants
import { HOME_PATH } from 'src/utils/contants'

const Post: NextPage = () => {
  const [post, setPost] = useState<IPosts>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const { query, back, push } = useRouter()
  const { post: postId } = query
  const { data: userData } = useSession()

  const isUserPost = useMemo(
    () => userData?.user?.id === post?.user_id,
    [userData, post]
  )

  // TODO: Move getData and handleDeletePost to hook
  const getData = async (postId: string | string[]) => {
    const { data: post } = await api.get(`/posts/${postId}`)
    setPost(post)
  }

  const handleDeletePost = async () => {
    const {
      data: { ok },
    } = await api.delete(`/posts/${postId}`)
    if (ok) alert('se eliminó el post')
    push(HOME_PATH)
  }

  useEffect(() => {
    const { post: postId } = query
    postId && getData(postId)
  }, [query])

  const onBackButtonClick = () => {
    back()
  }

  const onDeletePost = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <SCPostContent>
      {showModal && (
        <Modal
          text='Are you sure about deleting the post?'
          onCancel={handleCloseModal}
          onSubmit={handleDeletePost}
        />
      )}
      <SCAuthorContainer>
        <small>
          {post?.user_id} {isUserPost && <span>(you)</span>}
        </small>
      </SCAuthorContainer>
      <SCPostTitle>{post?.title}</SCPostTitle>
      <SCPostText>{post?.text}</SCPostText>
      <SCDeleteButtonContainer>
        <Button onClick={onBackButtonClick} text='Back' variant='secondary' />
        <Button onClick={onDeletePost} text='Delete post' variant='danger' />
      </SCDeleteButtonContainer>
    </SCPostContent>
  )
}

export default Post
