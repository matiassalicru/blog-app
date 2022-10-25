import clientPromise from 'src/services/mongodb'
import { FindOptions } from 'mongodb'

const getDB = async () => {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  return db
}

export const getPost = async (postId: number) => {
  const db = await getDB()
  const doc = db.collection(process.env.POSTS_COLLECTION_NAME as string).findOne({ id: Number(postId) })
  return doc
}

export const getPosts = async () => {
  const db = await getDB()
  // Options to sort documents from newer to older
  const options: FindOptions = {
    sort: { date: -1 },
  }
  const collection = db.collection(process.env.POSTS_COLLECTION_NAME as string)

  if ((await db.collection(process.env.POSTS_COLLECTION_NAME as string).countDocuments()) === 0) {
    console.log('No documents found!')
  }

  const posts = collection.find({}, options)
  const formattedData = await posts.toArray()

  return formattedData
}

export const createPost = async (postData: any) => {
  const db = await getDB()

  if (!postData) throw 'Invalid Data'
  const result = await db.collection(process.env.POSTS_COLLECTION_NAME as string)
  .insertOne(postData)
  
  console.log('🚀 ~ createPost ~ result', result)
  return result
}

export const deletePost = async (postId: number) => {
  const db = await getDB()
  const doc = db.collection(process.env.POSTS_COLLECTION_NAME as string).findOneAndDelete({ id: Number(postId) })
  return doc
}

export const getLastPostId = async () => {
  // Get data from your database
  const db = await getDB()
  const cursor = db
    .collection(process.env.POSTS_COLLECTION_NAME as string)
    .find({}).sort( [['_id', -1]] ).limit(1) // get last created item
  const formattedData = await cursor.toArray()

  return formattedData[0].id
}