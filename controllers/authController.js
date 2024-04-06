const User = require("../models/userModel"); // Importing the User model
const bcrypt = require("bcryptjs") // importing the ecryption for the password
// Controller function for user signup
exports.signUp = async (req, res) => {
    const {username, password} = req.body
   
    try {
        const hashpassword = await bcrypt.hash(password,12) // encrypting the password to be as 12 length string
        // Create a new user using the request body
        const newUser = await User.create({
            username,
            password: hashpassword
        });
        
        // Send success response with the created user
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        // Send error response if there's an error creating the user
        res.status(400).json({
            status: 'fail',
            message: error.message // Optionally, you can include the error message for debugging purposes
        });
    }
};


exports.login = async (req, res) => {
    const {username, password} = req.body
   
    try {
        const user = await User.findOne({username})
        if (!user){
            res.status(400).json({
                status: "fail",
                message: 'user not foudn'
            })
        }
        const isCorrect = await bcrypt.compare(password,user.password)

        if(isCorrect){
            res.status(200).json({
                status: 'success'
            })

        } else {
            res.status(400).json({
                status: 'fail',
                message: 'password doesnt match'
            })
        }

    } catch (error) {
        // Send error response if there's an error creating the user
        res.status(400).json({
            status: 'fail',
            message: error.message // Optionally, you can include the error message for debugging purposes
        });
    }
};
