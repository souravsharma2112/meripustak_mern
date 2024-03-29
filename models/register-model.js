const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    cpassword: {
        type: String,
        required: true
    }

})

module.exports = new mongoose.model("User", userSchema)