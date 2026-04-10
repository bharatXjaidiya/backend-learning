const express = require("express");
const authRoute = express.Router();
const {register,login} = require("../controllers/register")

authRoute.post("/register",register);
authRoute.post("/login",login)


module.exports = authRoute;