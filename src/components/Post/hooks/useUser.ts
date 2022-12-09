import { useState } from 'react'

// Services
import axios from 'axios'
// Types
import { IUser } from '../../PostPreviews/types'
// Constants
import { AUTHENTICATED } from '../../../utils/contants'

export const useUser = (status: string) => {
  const [author, setAuthor] = useState<IUser | null>(null)
  const [isAuthorLoading, setIsAuthorLoading] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()

  const getUserData = async (userId: string) => {
    const { data: authorData } = await axios.get(`/api/users/${userId}`)
    setAuthor(authorData)
    setIsAuthorLoading(false)
    setIsAuthenticated(status === AUTHENTICATED)
  }

  return { author, isAuthorLoading, setIsAuthenticated, isAuthenticated, getUserData }
}
