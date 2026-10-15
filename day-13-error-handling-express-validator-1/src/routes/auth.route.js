import express from "express";
import { registerController } from "../controllers/auth.controller.js";
import { body, validationResult } from "express-validator";

const authRoute = express.Router();

authRoute.post("/register",
    [
        body("username").isString().withMessage("username should be strict"),
        body("email").isEmail().withMessage("email should be a valid email address"),
        body("password").isLength({ min: 6, max: 12 }).withMessage("password should at least 6 charatcters"),
            ((req, res, next) => {
                const errors = validationResult(req)

                if (errors.isEmpty()) {
                    return next()
                }

                res.status(400).json({ errors: errors.array() })
            })



    ],
    registerController)


export default authRoute;