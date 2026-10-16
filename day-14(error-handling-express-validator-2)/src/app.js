import express from "express";
import authRoute from "./routes/auth.route.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());

app.use("/api/auth",authRoute);
app.use(errorHandler)


export default app;