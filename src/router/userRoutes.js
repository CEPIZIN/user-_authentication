import express from 'express';
import UserController from '../controller/Usercontroll.js';
import checkToken from "../middlewares/authMiddleware.js";
import fs from 'fs';
import yaml from 'js-yaml';
import swaggerUi from 'swagger-ui-express';

const router = express.Router();
const app = express()

router
    .get("/user/:id",checkToken, UserController.privateRoute) 
    .post('/auth/register', UserController.register)
    .post('/auth/user', UserController.login)

//swagger documentation

const swaggerDocument = yaml.load(fs.readFileSync('./src/docs/swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

 
export default router;