import React, { useEffect, useMemo, useState } from 'react'

// Next
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

// Types
import { IPosts, IUser } from '../../components/PostPreviews/types'

// Component
import { Button } from '../../components/Button/Button'
import { Modal } from '../../components/Modal/Modal'

// Styles
import {
  SCPostContent,
  SCPostTitle,
  SCPostText,
  SCAuthorName,
  SCAuthorEmail,
  SCAuthorContainer,
  SCDeleteButtonContainer,
} from '../../styles/post/styles'

// Services
import api from 'src/services/api'

// Constants
import { HOME_PATH } from 'src/utils/contants'

const Post: NextPage = () => {
  const [post, setPost] = useState<IPosts>()
  const [author, setAuthor] = useState<IUser>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const { query, back, push } = useRouter()
  const { post: postId } = query
  const { data: userData } = useSession()

  const isUserPost = useMemo(
    () => userData?.user?.id === post?.user_id,
    [userData, post]
  )

  // TODO: Move getData and handleDeletePost to hook
  const getUserData = async (userId: string) => {
    const { data: author } = await api.get(`/users/${userId}`)
    setAuthor(author)
  }

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
    userData && post && getUserData(String(post.user_id))
  }, [userData, post])

  useEffect(() => {
    const { post: postId } = query
    postId && getData(postId)
  }, [query, userData])

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
          title='Delete Post'
          text={`Are you sure about deleting your post?`}
          onCancel={handleCloseModal}
          onSubmit={handleDeletePost}
        />
      )}
      <SCAuthorContainer>
        <SCAuthorName>
          Author: {author ? author.name : 'Old legacy'}
          {isUserPost && <p>(you)</p>}
        </SCAuthorName>
        <SCAuthorEmail>
          {author ? author.email : 'oldlegacy@msalicru.com'}
        </SCAuthorEmail>
      </SCAuthorContainer>
      <SCPostTitle>{post?.title}</SCPostTitle>
      <SCPostText>{post?.text}</SCPostText>
      <SCDeleteButtonContainer>
        <Button onClick={onBackButtonClick} text='Back' variant='secondary' />
        {isUserPost && (
          <Button onClick={onDeletePost} text='Delete post' variant='danger' />
        )}
      </SCDeleteButtonContainer>
    </SCPostContent>
  )
}

export default Post
