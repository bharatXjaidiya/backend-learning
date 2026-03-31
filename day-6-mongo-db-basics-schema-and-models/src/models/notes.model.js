const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title : String,
    description : String
})

const noteModel = mongoose.model("note1",noteSchema);

module.exports = noteModel;