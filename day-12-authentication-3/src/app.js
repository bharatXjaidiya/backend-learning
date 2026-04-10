//server ko create krna and server ko config krna
const express = require("express")
const cookie = require("cookie-parser")
const authRoute = require("./routes/auth")
const app = express();

app.use(express.json())
app.use(cookie())

app.use("/api/auth/",authRoute)


module.exports = app;