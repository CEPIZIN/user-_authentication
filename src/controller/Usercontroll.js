import UserModel from "../model/user.js";
import validator from 'validator';

class userControll {
    //post 
    static register = async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;

            if (!name) {
                return res.status(422).json({ message: "Name is required" });
            }

            if (!email) {
                return res.status(422).json({ message: "Email is required" });
            }

            if(!validator.isEmail(email)){
                 return res.status(401).send("Please enter a valid Email");
             }

            if (!password) {
                return res.status(422).json({ message: "Password is required" });
            }

            if (password !== confirmPassword) {
                return res.status(422).json({ message: "Passwords do not match" });
            }

            const newUser = new UserModel({
                name,
                email,
                password,
            });

            const savedUser = await newUser.save();
            res.status(201).send(savedUser.toJSON());
        } catch (error) {
            res.status(500).send(`Error: ${error.message} - User registration failure`);
        }
    }
}

export default userControll;
