import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  let cursor = {}
  cursor = await req.db.collection(process.env.POSTS_COLLECTION_NAME).find().sort({ date: -1 })
  const arr = []

  while (await cursor.hasNext()) {
    const nextDoc = await cursor.next()
    arr.push(nextDoc)
  }

  res.json(arr)
})

handler.post(async (req, res) => {
  let data = req.body.post
  req.db
    .collection(process.env.POSTS_COLLECTION_NAME)
    .insertOne(data)
    .then((result) => res.status(201).json(result))
    .catch((err) => {
      res.status(500).json({ err: 'no se pudooo' })
    })
})

export default handler
