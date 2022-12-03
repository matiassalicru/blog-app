// Services
import axios from 'axios'

export const getData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get('/api/posts')
    return data
  } catch (error) {
    return error
  }
}
