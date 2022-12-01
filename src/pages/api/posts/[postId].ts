// METHODS
import { deletePost, getPost } from 'src/services/methods'

const handler = async (req: any, res: any) => {
  const {
    query: { postId },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get individual post
      try {
        const doc = await getPost(postId)
        res.status(200).json(doc)
      } catch (error) {
        res.status(500).json({ success: false, error })
      }
      break
    case 'DELETE':
      // Delete individual post
      try {
        const doc = await deletePost(postId)
        res.status(200).json(doc)
      } catch (error) {
        res.status(500).json({ success: false, error })
      }
      break
    default:
      break
  }
}

export default handler
