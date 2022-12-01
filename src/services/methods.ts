import clientPromise from 'src/services/mongodb'
import { FindOptions, ObjectId } from 'mongodb'
import { config } from 'config'

const getDB = async (DBCollectionName: string) => {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection(DBCollectionName)
  return collection
}

export const getUser = async (userId: string) => {
  if (ObjectId.isValid(userId)) {
    const collection = await getDB(config.USERS_COLLECTION_NAME)
    const user = collection.findOne({ _id: new ObjectId(userId) })
    return user
  }
  return null
}

export const getPost = async (postId: number) => {
  const collection = await getDB(config.POSTS_COLLECTION_NAME)
  const post = collection.findOne({ id: Number(postId) })
  return post
}

export const getPosts = async () => {
  const collection = await getDB(config.POSTS_COLLECTION_NAME)
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
  const collection = await getDB(config.POSTS_COLLECTION_NAME)

  if (!postData) return 'Invalid Data'
  const result = await collection.insertOne(postData)

  return result
}

export const deletePost = async (postId: number) => {
  const collection = await getDB(config.POSTS_COLLECTION_NAME)
  const doc = collection.findOneAndDelete({ id: Number(postId) })
  return doc
}

export const getLastPostId = async () => {
  // Get data from your database
  const collection = await getDB(config.POSTS_COLLECTION_NAME)
  // get last created item
  const cursor = collection
    .find({})
    .sort([['_id', -1]])
    .limit(1)
  const formattedData = await cursor.toArray()

  return formattedData[0].id
}
