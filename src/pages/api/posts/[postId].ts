import clientPromise from 'src/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

// GET INDIVIDUAL POST 
const postHandler = async(req: NextApiRequest, res: NextApiResponse) => {

  const {
    query,
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      if (query.postId !== 'undefined') {
        const client = await clientPromise
        const db = client.db(process.env.DB_NAME)
        const doc = await db.collection(process.env.POSTS_COLLECTION_NAME || '').findOne({ id: Number(req.query.postId) })
        res.status(200).json(doc)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
export default postHandler