const app = require("./src/app")

const notes = [];

app.get("/notes", (req, res) => {
    res.status(200).json({
        data: notes
    })
})

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "note created successfully"
    })
})

app.delete("/notes/:index", (req, res) => {
    if (!(req.params.index < notes.length)) return res.status(404).json({ message: "note does not exist" })
    delete notes[req.params.index];
    res.status(204).json({
        message: "note removed successfully"
    })
})

app.patch("/notes/:index", (req, res) => {
    if (req.params.index < notes.length && req.body.field === "title") {
        notes[req.params.index].title = req.body.title;
        res.status(200).json({
            message: "title updated successfully"
        })
    }
    else if (req.params.index < notes.length && req.body.field === "description") {
        notes[req.params.index].description = req.body.description;
        res.status(200).json({
            message: "descrition updated successfully"
        })
    }
    else {
        res.status(404).json({
            message: "note does not exist"
        })
    }
})

app.put("/notes/:index", ((req, res) => {
    if (!(req.params.index < notes.length)) return res.status(404).json({ message: "note does not exist" })
    notes[req.params.index] = req.body;
    res.status(200).json({
        message: "full note updated successfully"
    })
}))

app.listen(3000, () => {
    console.log("server running on port 3000")
})
