const express = require('express');

const app = express();

//api's or end points

app.get("/",(req,res)=>{
    res.send("get api")
})

app.post("/create-post",(req,res)=>{
    res.send("post api")
})


app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})