import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
  const { query } = useRouter()
  const { post } = query

  return (
    <div>
      <div>Post as it is, {post}</div>
    </div>
  )
}

export default Post
