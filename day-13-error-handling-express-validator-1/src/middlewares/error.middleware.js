import { configDotenv } from "dotenv";

configDotenv()

const handleError = (err,req,res,next) =>{
    const status = err.status;
    const response = {
        message : err.message
    }

    if(process.env.NODE_ENVIRONMENT === "development"){
        response.stack = err.stack
    }

    res.status(status).json(response)
}

export default handleError