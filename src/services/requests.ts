// Services
import api from 'src/services/api';

// Types
import { IPost } from 'src/types/globalTypes.interface';

// Make the request to get the last post id on client side
export const getLastPostId = async () => {
  const { data: lastPostId } = await api.get('/posts/get-last-post')
  return lastPostId
}

// Creates a new post
export const createNewPost = async (postData: IPost) => {
  const {
    data: { acknowledged },
  } = await api.post('/posts', { post: postData })

  return acknowledged
} 