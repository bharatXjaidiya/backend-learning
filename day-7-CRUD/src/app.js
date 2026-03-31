//server ko create krna and server ko config krna
const express = require('express');
const noteModel = require('./models/notes.model')
const app = express();

app.use(express.json());

app.post("/notes",async (req,res)=>{
    const {_id,title,description} = req.body;
    const note = await noteModel.create({
        _id,
        title,
        description
    })

    res.status(201).json({
        message : "note created successfully",
        note
    })
})

app.get("/notes",async(req,res)=>{
    const note = await noteModel.find();
    res.status(200).json({
        note
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const deleteHandler = await noteModel.findByIdAndDelete(req.params.id);
    res.status(204).json(deleteHandler)
})
app.patch("/notes/:id",async(req,res)=>{
    const changeHandler = await noteModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.status(200).json(changeHandler)
})

app.put("/notes/:id",async(req,res)=>{
    const updateHandler = await noteModel.findOneAndReplace(
        { _id: req.params.id },
        req.body,
        { returnDocument: "after" }
    );

    res.json(updateHandler);
})


module.exports = app;