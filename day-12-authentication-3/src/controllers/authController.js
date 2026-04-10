const userModel = require("../models/users.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //hasing the password
        const hash = crypto.createHash("md5").update(password).digest("hex")
        const user = await userModel.create({ name, email, password: hash })
        //generating a token and storing in the cookie
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, { expiresIn: "1hr" })

        res.cookie("token", token)
        res.status(201).json({
            message: "user created successfully",
            user
        })

    }
    catch (err) {
        console.log(err)
        res.status(404).json({
            message: err.message
        })
    }

}

const getMe = async (req, res) => {
    try {
        const token = req.cookie.token;
        const id = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({id})
        res.status(200).json({
            message : "user exists",
            user
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            message : err.message
        })
    }
    
    
}

const loginUser = async (req,res)=>{
    try{
        const {email , password} = req.body;
        const user = await userModel.findOne({email});

        if(!user){
            return res.status(404).json({
                message : "user dosn't exist"
            })
        }

        if(password !== crypto.createHash("md5").update(user.password).digest("hex")){
            return res.status(404).json({
                message : "invalid credentials"
            })
        }

        //creating a new token and resave it into the cookie storage
        const token = jwt.sign({
            id : user._id
        },process.env.JWT_SECRET,{expiresIn : "1hr"})

        res.cookie("token",token)
        res.status(200).json({
            message : "user logged in successfully",
            user
        })
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            message : err.message
        })
    }

}

module.exports = {registerUser , getMe , loginUser}