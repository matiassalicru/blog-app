import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

// Types
import { PostTypes } from '../../components/PostPreviews/types'

// Component 
import { Button } from '../../components/Button/Button'

// Styles
import { SCPostContent, SCPostTitle, SCPostText } from './styles'

interface PostType {
  posts: PostTypes[]
}

const Post: NextPage<PostType> = ({ posts }) => {
  const [post, setPost] = useState<PostTypes>()
  const { query, back } = useRouter()
  const { post: postId } = query

  const onBackButtonClick = () => {
    back()
  }

  useEffect(() => {
    const thisPost = posts?.find((post) => post.id.toString() === postId)
    setPost(thisPost)
  }, [postId, posts])

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

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  const paths = posts.map((post: PostTypes) => ({
    params: { post: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()

  return {
    props: {
      posts: json,
    },
  }
}

export default Post
