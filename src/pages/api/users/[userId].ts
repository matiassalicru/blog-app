// METHODS
import { getUser } from 'src/services/methods'

const handler = async( req: any, res: any ) => {
  const {
    query: { userId },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get user by ID
      try {
        const doc = await getUser(userId)
        res.status(200).json(doc)
      } catch (error) {
        res.status(500).json({ success: false, error})
      }
      break
  }
}

export default handler
