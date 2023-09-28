import UserModel from "../model/user.js";
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken'
import User from '../model/user.js';

class UserControll {
    //post 
    //user registration 
    static register = async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;
    
        
            if (!name) errors.push("Name is required");
            if (!email) errors.push("Email is required");
            if (!validator.isEmail(email)) errors.push("Please enter a valid Email");
            if (!password) errors.push("Password is required");
            if (password !== confirmPassword) errors.push("Passwords do not match");

            const userExist = await User.findOne({ email: email})
            if(userExist){
                return res.status(422).json({msg: 'User already exists'})
            }
            
            try {
                const newUser = new UserModel({ name, email, password });
                newUser.save()
                    .then((savedUser) => {
                        return res.status(201).send({ msg: 'Usuário criado com sucesso' });
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
            const { email, password } = req.body;
            const errors = [];
    
            //validation field
            if (!email) errors.push("Email is required");
            if (!validator.isEmail(email)) errors.push("Please enter a valid Email");
            if (!password) errors.push("Password is required");
    
            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }
    
            //check if user exists 
            const user = await UserModel.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ msg: 'User not found' });
            }
    
            //check if password is valid 
            const checkPassword = await bcrypt.compare(password, user.password);
            if (!checkPassword) {
                return res.status(401).json({ msg: 'Invalid password' });
            }

            try {
                const secret = process.env.SECRET;
                const token = jwt.sign(
                    {
                    id: user._id,
                    }, 
                    secret,
                )
    
                res.status(200).json({ msg: 'Authentication successful', token });
    
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    msg: 'A server error occurred, please try again later'
                });
            }
    
        } catch (error) {
            return res.status(500).send(`Error: ${error.message} - User login failure`);
        }
    }
}

export default UserControll;
