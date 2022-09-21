import clientPromise from 'lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

// GET LAST POST ID
const getLastPostHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, method } = req

  switch (method) {
    case 'GET':
      // Get data from your database
        const client = await clientPromise
        const db = client.db(process.env.DB_NAME)
        const cursor = db
          .collection(process.env.POSTS_COLLECTION_NAME)
          .find({}).sort( [['_id', -1]] ).limit(1) // get last created item
        const formattedData = await cursor.toArray()

        res.status(200).json(formattedData[0].id)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
export default getLastPostHandler
