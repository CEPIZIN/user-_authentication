import express from 'express';
import UserController from '../controller/Usercontroll.js';
import checkToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router
    .get("/user/:id",checkToken, UserController.privateRoute) 
    .post('/auth/register', UserController.register)
    .post('/auth/user', UserController.login)

export default router;