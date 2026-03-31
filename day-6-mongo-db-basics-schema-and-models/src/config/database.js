const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect("mongodb+srv://Bharat:64hHZ3Y1UbMKxcl4@cluster0.p6d2qau.mongodb.net/notes")
        .then((e) => {
            console.log("db is connected");
        })

}

module.exports = connectToDB;