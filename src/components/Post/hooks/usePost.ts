import { useContext, useState } from 'react'
// Services
import axios from 'axios'
// Hooks
import { useRouter } from 'next/router'
// Types
import { IPosts } from '../../PostPreviews/types'
// Constants
import { HOME_PATH } from '../../../utils/contants'
import { AlertContext } from '../../../context/AlertContext/AlertContext'
import { IAlertContext } from '../../../context/AlertContext/AlertContext.interface'

export const usePost = () => {
  const [post, setPost] = useState<IPosts>()
  const [isPostLoading, setIsPostLoading] = useState<boolean>(true)
  const { query, push } = useRouter()
  const { post: postId } = query
  const { setAlertInfo } = useContext(AlertContext)

  const getPostData = async (postID: string | string[]) => {
    const { data: postData } = await axios.get(`/api/posts/${postID}`)
    setPost(postData)
    setIsPostLoading(false)
  }

  const handleDeletePost = async () => {
    const {
      data: { ok },
    } = await axios.delete(`/api/posts/${postId}`)
    if (ok) setAlertInfo((prev: IAlertContext) => ({ ...prev, show: true }))
    setTimeout(() => {
      push(HOME_PATH)
    }, 1000)
  }

  return {
    post,
    getPostData,
    isPostLoading,
    handleDeletePost,
  }
}
