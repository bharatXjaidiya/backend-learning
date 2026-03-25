const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hey👋server is running and ready for deployement")
})

app.get('/about',(req,res)=>{
    res.send("My self Bharat Jaidiya 😎")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})