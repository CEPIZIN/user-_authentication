import express from 'express'
import DB from './config/dbConfig.js'
import routes from './router/index.js'

DB.on("error", console.log.bind(console, "connection error"))
DB.once("open", () => {
  console.log("database connection successful")
})

const app = express()
app.use(express.json())
routes(app)


export default app