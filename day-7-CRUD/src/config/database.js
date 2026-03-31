const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.MONGO_URI;
async function connectToDb() {
    await mongoose.connect(db)
    console.log("db is connected")
}

module.exports = connectToDb;