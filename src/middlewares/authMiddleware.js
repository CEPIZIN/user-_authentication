
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

const checkToken =  (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]
    
    if(!token){
        return res.status(401).json({msg:"Access denied"})
    }
    try{
        const secret = process.env.SECRET;
        //console.log("Token recebido:", token);
        jwt.verify(token,secret)
        next()
    }catch(err){
        console.log(err)
        res.status(400).json({msg:"INAVALID TOKEN"})
    }

}

export default checkToken ; 