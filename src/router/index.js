import express from 'express'

const routes = (app)=>{
    app.get('/',(req,res) =>{
        res.status(200).send("Teste bem-sucedido")
    })
    app.use(
        express.json()
    )
}

export default routes