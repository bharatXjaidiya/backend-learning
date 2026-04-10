const userModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //hasing the password
        const hash = crypto.createHash("md5").update(password).digest("hex");
        //storing data into the database
        const user = await userModel.create({ name, email, password: hash })
        //generating a token and storing into the cookie storage 
        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET
        )

        res.cookie("jwt_token", token)
        res.status(201).json({
            message: "user created successfully",
            user
        })

    }
    catch (err) {
        console.log(err.message)
        res.status(209).json({
            message: err.message
        })
    }
}


const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(404).json({
                message: "email adrress doesn't exist"
            })
        }

        if (user.password != crypto.createHash("md5").update(password).digest("hex")) {
            return res.status(404).json({
                message: "unvalid credentials"
            })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("jwt_token", token)
        res.status(200).json({
            message: "user logged in successfully"
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).json({
            message: err.meassage
        })
    }


}



module.exports = {register , login};