import express from 'express';
import userRoutes from './userRoutes.js';



//open route 
const routes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send("Registration")
    });
    app.use(
        express.json(),
        userRoutes
    );
}

  

export default routes;