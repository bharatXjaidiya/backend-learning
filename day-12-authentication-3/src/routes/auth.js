const express = require("express");
const { registerUser, getMe, loginUser } = require("../controllers/authController");
const authRoute = express.Router();

authRoute.post("/register",registerUser);
authRoute.get("/getMe",getMe);
authRoute.post("/login",loginUser)


module.exports = authRoute