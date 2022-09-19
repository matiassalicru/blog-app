import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'
import { config } from '../config'

const client = new MongoClient(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function database(req, res, next) {
  await client.connect()
  req.dbClient = client
  req.db = client.db(config.DB_NAME)
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
