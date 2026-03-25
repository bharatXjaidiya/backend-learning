//server ko start krna
const app = require("./src/app");

const notes = [];

//end points or rest api's
app.get("/notes",(req,res)=>{
    res.send(notes)
}) 

app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.send("note added succesfully");
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfullly")
}) 

app.patch("/notes/:index",(req,res)=>{
    if(req.body.description === undefined)
    notes[req.params.index].title = req.body.title;
    else 
    notes[req.params.index].description = req.body.description

    res.send("note updated partially")
})

app.put("/notes/:index",(req,res)=>{
    notes[req.params.index] = req.body;
    res.send("node updated successfully")
})

app.listen(3000,()=>{
    console.log("Server running on PORT 3000")
})