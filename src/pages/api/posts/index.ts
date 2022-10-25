// METHODS
import { getPosts, createPost } from 'src/services/methods'

// Types
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async( req: NextApiRequest, res: NextApiResponse ) => {
  
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const posts = await getPosts()
        res.status(200).json({ success: true, data: posts })
      } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error})
      }
      break;
    case 'POST':
      try {
        const { post } = await req.body
        const result = await createPost(post)
        res.status(201).json(result)
      } catch (error) {
        res.status(500).json({ err: 'There was an error writing on the DB' })
      }
    default:
      break;
  }
}

export default handler