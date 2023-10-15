import express, { application } from 'express';
import userRoutes from './userRoutes.js';
import app from '../app.js';

//public route
const routes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send("REGISTER ON MY API ")
    });
    app.use(
        express.json(),
        userRoutes
    );
}

  
export default routes;