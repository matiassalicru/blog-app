
// Services
import api from 'src/services/api'

export const getData = async () => {
  const { data: { data } } = await api.get('/posts')
  const posts = await data
  return posts
}