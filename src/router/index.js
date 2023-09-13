import express from 'express'
import user from './userRoutes.js'
import routes from './router/index.js'


const routes = (app)=>{
    app.get('/',(req,res) =>{
        res.status(200).send("Registration")
    })
    app.use(
        express.json(),
        user
        
    )
}

export default routes