import { body, validationResult } from "express-validator"

const validate = (req, res, next) => {

        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json(error.array())
        }
        
        next()
    }

const validateInput = [
    body("username").isString().withMessage("the uesrname should be string"),
    body("email").isEmail().withMessage("invalid email address"),
    body("password").isStrongPassword().withMessage("not a strong password"),

    validate
]


export default validateInput;