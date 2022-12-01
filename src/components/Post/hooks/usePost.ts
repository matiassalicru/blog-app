import { useState } from 'react'
// Types
// Services
import api from 'src/services/api'
// Hooks
import { useRouter } from 'next/router'
import { IPosts } from '../../PostPreviews/types'
// Constants
import { HOME_PATH } from '../../../utils/contants'

export const usePost = () => {
  const [post, setPost] = useState<IPosts>()
  const [isPostLoading, setIsPostLoading] = useState<boolean>(true)
  const { query, push } = useRouter()
  const { post: postId } = query

  const getPostData = async (postID: string | string[]) => {
    const { data: postData } = await api.get(`/posts/${postID}`)
    setPost(postData)
    setIsPostLoading(false)
  }

  const handleDeletePost = async () => {
    const {
      data: { ok },
    } = await api.delete(`/posts/${postId}`)
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
