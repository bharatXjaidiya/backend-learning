const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    email : {type : String , unique : [true , "user exist with this email id"]},
    password : String
})

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;