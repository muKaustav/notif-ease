const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    optInStatus: {
        type: Number,
        required: true,
        enum: [0, 1, 2]
    }
})

module.exports = mongoose.model('User', userSchema)