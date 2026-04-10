const express = require("express");
const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken")
const authRoute = express.Router();

authRoute.post("/register", async (req, res) => {
    try {
        const user = await userModel.create(req.body)

        //generating a token and send to the user
        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET
        )
        res.cookie("jwt_token", token)
        res.status(201).json({
            message: "user created succesfully",
            user,
            token
        })
    }
    catch (err) {
        console.log(err.message)
        res.status(409).json({
            message: err.message
        })
    }
})


module.exports = authRoute; 