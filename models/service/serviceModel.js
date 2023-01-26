const mongoose = require('mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    serviceName: {
        type: String,
        required: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "DEPARTMENT",
        required: true
    },
    servicePrice: {
        type: Number,
        required: true
    },
}, { timestamps: true })


module.exports = mongoose.model('SERVICE', serviceSchema)