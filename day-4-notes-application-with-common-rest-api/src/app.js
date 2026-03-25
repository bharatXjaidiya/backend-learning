//server ko create krna 
//server ko config krna

const express = require('express');
const app = express()

//middleware
app.use(express.json())

module.exports = app;