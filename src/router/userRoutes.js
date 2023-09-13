import express from 'express'
import UserController from '../controller/Usercontroll.js'

const router = express.Router()

router
    .post('/auth/register', UserController.register )


export default router