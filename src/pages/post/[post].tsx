import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

// Types
import { IPosts } from '../../components/PostPreviews/types'

// Component
import { Button } from '../../components/Button/Button'

// Styles
import {
  SCPostContent,
  SCPostTitle,
  SCPostText,
  SCButtonsContainer,
} from '../../styles/post/styles'

// Services
import api from 'src/services/api'

// Constants
import { HOME_PATH } from 'src/utils/contants'

const Post: NextPage = () => {
  const [post, setPost] = useState<IPosts>()
  const { query, back, push } = useRouter()
  const { post: postId } = query

  const getData = async (postId: string | string[]) => {
    const { data: post } = await api.get(`/posts/${postId}`)
    setPost(post)
  }

  useEffect(() => {
    const { post: postId } = query
    postId && getData(postId)
  }, [query])

  const onBackButtonClick = () => {
    back()
  }

  const onDeletePost = async () => {
    const {
      data: { ok },
    } = await api.delete(`/posts/${postId}`)
    if (ok) alert('se eliminó el post')
    push(HOME_PATH)
  }

  return (
    <SCPostContent>
      <SCButtonsContainer>
        <Button onClick={onBackButtonClick} text='Back' />
        <Button onClick={onDeletePost} text='Delete' />
      </SCButtonsContainer>
      <SCPostTitle>{post?.title}</SCPostTitle>
      <SCPostText>{post?.text}</SCPostText>
    </SCPostContent>
  )
}

export default Post
