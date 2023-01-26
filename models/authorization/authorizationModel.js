const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorizationSchema = new Schema({
    access: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('AUTHORIZATION', authorizationSchema)