import express from "express";
import authRoute from "./routes/auth.route.js";
import handleError from "./middlewares/error.middleware.js";

 const app = express();

app.use(express.json())
app.use("/api/auth",authRoute);

app.use(handleError)
 


export default app