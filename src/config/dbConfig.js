import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME 

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.o2kwfql.mongodb.net/${dbName}`)

let DB = mongoose.connection

export default DB 