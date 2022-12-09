import { useState } from 'react'
// Services
import axios from 'axios'
// Hooks
import { useRouter } from 'next/router'
// Types
import { IPosts } from '../../PostPreviews/types'
// Constants
import { HOME_PATH } from '../../../utils/contants'

export const usePost = () => {
  const [post, setPost] = useState<IPosts>()
  const [isPostLoading, setIsPostLoading] = useState<boolean>(true)
  const { query, push } = useRouter()
  const { post: postId } = query

  const getPostData = async (postID: string | string[]) => {
    const { data: postData } = await axios.get(`/api/posts/${postID}`)
    setPost(postData)
    setIsPostLoading(false)
  }

  const handleDeletePost = async () => {
    const {
      data: { ok },
    } = await axios.delete(`/api/posts/${postId}`)
    if (ok) alert('se eliminó el post')
    push(HOME_PATH)
  }

  return {
    post,
    getPostData,
    isPostLoading,
    handleDeletePost,
  }
}
