import express from "express";
import { registerController } from "../controllers/auth.controller.js";
import validateInput from "../middlewares/validate.middleware.js";


const authRoute = express.Router();

authRoute.post("/register",validateInput,registerController);


export default authRoute;