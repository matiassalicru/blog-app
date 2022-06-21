import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  let cursor = {}
  cursor = await req.db.collection(process.env.POSTS_COLLECTION_NAME).find()
  const arr = []

  while (await cursor.hasNext()) {
    const nextDoc = await cursor.next()
    arr.push(nextDoc)
  }

  res.json(arr)
})

// handler.post(async (req, res) => {
//   let data = req.body
//   data = JSON.parse(data)
//   data.date = new Date(data.date)
//   let doc = await req.db
//     .collection('Daily')
//     .updateOne({ date: new Date(data.date) }, { $set: data }, { upsert: true })

//   res.json({ message: 'ok' })
// })

export default handler
