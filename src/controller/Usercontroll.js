import UserModel from "../model/user.js";
import validator from 'validator';

class userControll {
    //post 
    static register = async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;
    
            const errors = [];
    
            if (!name) errors.push("Name is required");
            if (!email) errors.push("Email is required");
            if (!validator.isEmail(email)) errors.push("Please enter a valid Email");
            if (!password) errors.push("Password is required");
            if (password !== confirmPassword) errors.push("Passwords do not match");
    
            if (errors.length > 0) {
                return res.status(422).json({ errors });
            }
    
            const newUser = new UserModel({ name, email, password });
            const savedUser = await newUser.save();
        
            return res.status(201).json({
                message: "Cadastro feito com sucesso",
                user: savedUser.toJSON()
            });
        
        } catch (error) {
            return res.status(500).send(`Error: ${error.message} - User registration failure`);
        }
    }
}

export default userControll;
