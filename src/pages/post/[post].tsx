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
  SCButtonsContainer
} from '../../styles/post/styles'

// Libs
import useSWR from 'swr'
import api from 'src/services/api'

interface IPost {
  posts: IPosts[]
}

const Post: NextPage<IPost> = () => {
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
    const { data: { ok } } = await api.delete(`/posts/${postId}`)
    if (ok) alert('se eliminó el post')
    push('/')
  }

  return (
    <>
      <SCPostContent>
        <SCButtonsContainer>
          <Button onClick={onBackButtonClick} text='Back' />
          <Button onClick={onDeletePost} text='🗑' />
        </SCButtonsContainer>
        <SCPostTitle>{post?.title}</SCPostTitle>
        <SCPostText>{post?.text}</SCPostText>
      </SCPostContent>
    </>
  )
}

export default Post
