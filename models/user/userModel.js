const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    password :{
        type : String,
        required: true
    },
    accessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "AUTHORIZATION",
        required: true
    },
}, { timestamps: true })


module.exports = mongoose.model('USER', userSchema)