const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    _id: Number,
    title : String,
    description : String
})

const noteModel =  mongoose.model("notes",noteSchema);

module.exports = noteModel;