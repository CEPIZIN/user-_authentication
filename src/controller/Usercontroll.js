import UserModel from "../model/user.js";
import validator from 'validator';

class UserControll {
    //post 
    //user registration 
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
                message: "Registration successful",
                user: savedUser.toJSON()
            });
        
        } catch (error) {
            return res.status(500).send(`Error: ${error.message} - User registration failure`);
        }
    }
    // user login 

    static login = async (req, res) => {
        try {
            const { email, password } = req.body;

            //validation 
            if (!email) errors.push("Email is required");
            if (!validator.isEmail(email)) errors.push("Please enter a valid Email");
            if (!password) errors.push("Password is required");

            //check if user existi 
            const user = await user.findOne({email:email})
            if( !user){
                return res.status(404).json({msg: 'User not found'})
            }

            //check id password exist 
            const checkPassword = await bcrypt.compare(password, user.password)
            if(!password){
                return res.status(404).json({msg: 'Invalid password '})
            }
            
            try{
                const secret = process.env.SECRET
                const token =  jwt.sing({
                    id: user._id
                }, secret,
                )
                   res.status(200).json({msg:'Authentication successful',token})                                                 

            } catch(error){
                console.log(error)
                res.ststus(500).json({
                    msg: '"A server error occurred, please try again later'
                })
            }

        } catch (error) {
            return res.status(500).send(`Error: ${error.message} - User login failure`);
        }
    }
}

export default UserControll;
