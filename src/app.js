import express from 'express'
import DB from './config/dbConfig.js'

DB.on("error", console.log.bind(console, "connection error"))
DB.once("open", () => {
  console.log("database connection successful")
})



const app = express()
app.use(express.json())

export default app