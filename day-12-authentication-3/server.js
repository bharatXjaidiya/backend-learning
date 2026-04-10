//server ko start krna and db se connect krna
require("dotenv").config()
const app = require("./src/app")
const connectToDb = require("./src/config/database")

connectToDb()

app.listen(300,()=>{
    console.log("server is runnig on port 3000")
})