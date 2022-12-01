import { useState } from 'react'

// Services
import api from '../../../services/api'
// Types
import { IUser } from '../../PostPreviews/types'

export const useUser = () => {
  const [author, setAuthor] = useState<IUser | null>(null)
  const [isAuthorLoading, setIsAuthorLoading] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()

  const getUserData = async (userId: string) => {
    const { data: authorData } = await api.get(`/users/${userId}`)
    setAuthor(authorData)
    setIsAuthorLoading(false)
  }

  return { author, isAuthorLoading, setIsAuthenticated, isAuthenticated, getUserData }
}
