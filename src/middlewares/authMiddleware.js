//autenticação do JWT 
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const verifyToken =  (req,res,next) =>{
    const tokne = req.header

}


const secret = process.env.SECRET;