const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

const main = async () => {
  await client.connect()
  const db = client.db('usertable')
  const user = db.collection('user')
  const info = await user.find()
  console.log(await info.toArray())
}

main().finally(() => client.close())
