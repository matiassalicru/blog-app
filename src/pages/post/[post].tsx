import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

// Types
import { PostTypes } from '../../components/PostPreviews/types'

// Component
import { Button } from '../../components/Button/Button'

// Styles
import {
  SCPostContent,
  SCPostTitle,
  SCPostText,
} from '../../styles/post/styles'

// Libs
import useSWR from 'swr'

interface PostType {
  posts: PostTypes[]
}

const Post: NextPage<PostType> = () => {
  const [post, setPost] = useState<PostTypes>()
  const { query, back } = useRouter()
  const { post: postId } = query

  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  // TODO: Show error if error
  const { data, error } = useSWR(`../api/posts/${postId}`, fetcher)

  useEffect(() => {
    data && setPost(data)
  }, [data])

  const onBackButtonClick = () => {
    back()
  }

  return (
    <>
      <SCPostContent>
        <Button onClick={onBackButtonClick} text='Back' />
        <SCPostTitle>{post?.title}</SCPostTitle>
        <SCPostText>{post?.text}</SCPostText>
      </SCPostContent>
    </>
  )
}

export default Post
