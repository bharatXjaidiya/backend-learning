const express = require("express");
const userModel = require("./models/users.model")
const authRoute = require("./routes/auth.routes")
const cookie = require("cookie-parser")
const app = express();

app.use(express.json());
app.use(cookie())
app.use("/api/auth",authRoute);



module.exports = app;