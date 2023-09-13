import UserModel from "../model/user.js";

class userControll {
    static register = (req, res) => {
        const { name, email, password, confirmPassword } = new UserModel (req.body)

        if (!name) {
            return res.status(422).json({ message: "Name is required" });
        }

        if (!email) {
            return res.status(422).json({ message: "Email is required" });
        }

        if (!password) {
            return res.status(422).json({ message: "Password is required" });
        }

        if (!confirmPassword) {
            return res.status(422).json({ message: "Confirm Password is required" });
        }

        if (password !== confirmPassword) {
            return res.status(422).json({ message: "Passwords do not match" });
        }

      
        
        UserModel.save()
            .then(() => {
                res.status(201).json({ message: "User created successfully" });
            })
            .catch(error => {
                res.status(500).json({ message: `Error: ${error.message}` });
            });
    }
}

export default userControll;