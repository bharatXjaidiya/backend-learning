//create and config the server
const express = require('express');
const cors = require('cors')
const todoModel = require('./models/todo.model');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))
//end-points / rest-api's

app.post("/api/todos",async(req,res)=>{
    try{
        const todo = await todoModel.create(req.body);
        res.status(201).json({
        success : true,
        message : "todo created successfully",
    })
    }
    catch(err){
        res.json({
            success : false,
            message : err.message
        })
        console.log(err)
    }
})

app.get("/api/todos",async (req,res)=>{
    try{
        const todos = await todoModel.find();
        res.status(200).json({
            success : true,
            data : todos
        })
    }
    catch(err){
        res.json({
            success : false,
            message : err.message
        })
        console.log(err)
    }
})

app.delete("/api/todos/:id",async(req,res)=>{
    try{
        await todoModel.findByIdAndDelete(req.params.id)
        res.status(204).json({
            success : true,
            message : "todo removed successfully"
        })
    }
    catch(err){
        res.json({
            success : false,
            message : err.message
        })
        console.log(err)
    }
})

app.put("/api/todos/:id",async(req,res)=>{
    try{
        await todoModel.findOneAndReplace({_id :req.params.id},req.body);
        res.status(200).json({
            success : true,
            message : "todo updated successfully"
        })
    }
    catch(err){
        res.json({
            success : false,
            message : err.message
        })
        console.log(err)
    }
})
module.exports = app;
