const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        minlength :3,
        maxlength : 100,
    },
    description : {
        type : String,
        required : true,
        trim : true,
        maxlength : 500
    },
    isCompleted : {
        type : Boolean,
        default : false
    }
},   
    {
        timestamps : true
    }
)

const todoModel = mongoose.model("todos",todoSchema);

module.exports = todoModel;