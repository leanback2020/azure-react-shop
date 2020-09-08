const { MongoClient } = require("mongodb")
const config = {
  url: process.env.MONGODB,
  dbName: "ReactShop",
}

async function createConnection() {
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true,
  })
  const db = connection.db(config.dbName)
  return {
    connection,
    db,
  }
}

module.exports = async (context) => {
  const { db, connection } = await createConnection()
  const Products = db.collection("products")
  const res = await Products.find({})
  const body = await res.toArray()

  connection.close()

  context.res = {
    status: 200,
    body,
  }
}
/*
const axios = require("axios")
module.exports = async (context) => {
  const response = await axios.get("https://reactshopblob.blob.core.windows.net/images/1.jpg?comp=metadata")
  console.log(response.headers)

  const body = await response.headers["x-ms-meta-price"]
  context.res = {
    status: 200,
    body,
  }
}*/
