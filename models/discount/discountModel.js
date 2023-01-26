const mongoose = require('mongoose')

const Schema = mongoose.Schema

const discountSchema = new Schema({
    discountName: {
        type: String,
        required: true
    },
    discountRate: {
        type: Number,
        min : 0,
        max : 100,
        required: true
    },
}, { timestamps: true })


module.exports = mongoose.model('DISCOUNT', discountSchema)