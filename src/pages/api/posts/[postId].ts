// METHODS
import { deletePost, getPost } from 'src/services/methods'

const handler = async( req: any, res: any ) => {
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
        res.status(500).json({ success: false, error})
      }
      break
    case 'DELETE':
      // Delete individual post
      try {
        const doc = await deletePost(postId)
        res.status(200).json(doc)
      } catch (error) {
        res.status(500).json({ success: false, error})
      }
    default:
      break;
  }
}

export default handler



// import clientPromise from '../../lib/mongodb'

// // CREATE NEW POST TO DB
// const handler = async (req, res) => {
//   if (req.method !== 'POST') {
//     res.status(405).send({ message: 'Only POST requests allowed' })
//     return
//   }

//   const client = await clientPromise
//   const db = client.db(process.env.DB_NAME)

//   let postData = req.body.post
//   db.collection(process.env.POSTS_COLLECTION_NAME)
//     .insertOne(postData)
//     .then((result) => res.status(201).json(result))
//     .catch((err) => {
//       res.status(500).json({ err: 'There was an error writing on the DB' })
//     })
// }

// export default handler
