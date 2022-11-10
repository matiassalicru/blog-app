import clientPromise from 'src/services/mongodb'
import { FindOptions } from 'mongodb'

const getDB = async () => {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection(process.env.POSTS_COLLECTION_NAME as string)
  return collection
}

export const getPost = async (postId: number) => {
  const collection = await getDB()
  const post = collection.findOne({ id: Number(postId) })
  return post
}

export const getPosts = async () => {
  const collection = await getDB()
  // Options to sort documents from newer to older
  const options: FindOptions = {
    sort: { date: -1 },
  }

  if ((await collection.countDocuments()) === 0) {
    console.log('No documents found!')
  }

  const posts = collection.find({}, options)
  const formattedData = await posts.toArray()

  return formattedData
}

export const createPost = async (postData: any) => {
  const collection = await getDB()

  if (!postData) throw 'Invalid Data'
  const result = await collection.insertOne(postData)
  
  return result
}

export const deletePost = async (postId: number) => {
  const collection = await getDB()
  const doc = collection.findOneAndDelete({ id: Number(postId) })
  return doc
}

export const getLastPostId = async () => {
  // Get data from your database
  const collection = await getDB()
  // get last created item
  const cursor = collection.find({}).sort( [['_id', -1]] ).limit(1) 
  const formattedData = await cursor.toArray()

  return formattedData[0].id
}