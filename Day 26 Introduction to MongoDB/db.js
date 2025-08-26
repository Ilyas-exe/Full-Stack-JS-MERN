const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

client
    .connect()
    .then(()=>{console.log('connected in port 27017')})
    .catch((error)=>{console.log(error)})

const db = client.db('mydb')
const collection = db.collection('users')
async function showCollection() {
    const users = await collection.find({}).toArray()
    console.log(users)
}
showCollection()
