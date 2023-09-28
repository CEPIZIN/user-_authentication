import UserModel from "../model/user.js";
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken'
import User from '../model/user.js';

class UserControll {
    //user registration - post 
    static register = async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;

            const errors = [];
    // validation field 
            if (!name) errors.push("Name is required");
            if (!email) errors.push("Email is required");
            if (!validator.isEmail(email)) errors.push("Please enter a valid Email");
            if (!password) errors.push("Password is required");
            if (password !== confirmPassword) errors.push("Passwords do not match");

            const userExist = await User.findOne({ email: email})
            if(userExist){
                return res.status(422).json({msg: 'User already exists'})
            }

            if (errors.length > 0) {
                return res.status(422).json({ errors });
            }

            const salt = await bcrypt.genSalt(12)
            const passwordHash= await bcrypt.hash(password, salt)
    // create user on DB        
            try {
                const newUser = new UserModel({
                    name, 
                    email, 
                    password:passwordHash
                });
                newUser.save()
                    .then((savedUser) => {
                        return res.status(201).send({ msg: 'User created successfully' });
                    })
                    .catch((error) => {
                        throw error;
                    });
            } catch (error) {
                return res.status(500).send(`Error: ${error.message} - User registration failure `);
            }

        } catch (error) {
            return res.status(500).send(`Error: ${error.message} - User registration failure`);
        }
    }
    
    //User login 
    static login = async (req, res) => {
        try {
        //valid field 
        const {email, password} = req.body

        if(!email){
            return res.status(422).json({"msg":"Email address cannot be empty"})
        }

        if(!password){
            return res.status(422).json({"msg": "Password can't be blank."})
        }

        // find the user in db and check for correct credentials
        const user = await UserModel.findOne({email:email})
        if(!user){
            return res.status(404).json({msg: ' usuario nao encontrado'})
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        
        if(!checkPassword){
            return res.status(404).json({msg: 'senha invalida'})
        }
    
        } catch (error) {
            return res.status(500).send(`Error: ${error.message} - User login failure`);
        }
    }
}

export default UserControll;
  