// Types
import type { NextApiRequest, NextApiResponse } from 'next'

// Services
import { getLastPostId } from 'src/services/methods'

// GET LAST POST ID
const getLastPostHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case 'GET':
      // Get data from your database
        const data = await getLastPostId()
        res.status(200).json(data)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
export default getLastPostHandler
