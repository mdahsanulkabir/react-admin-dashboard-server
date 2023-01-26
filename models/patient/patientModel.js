const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    patientName: {
        type: String,
        required: true
    },
    patientSerial : {
        type: String,
        required : true
    },
    patientPhoneNumber : {
        type: Number,
        required: true
    },
    rtNumber: {
        type: String,
    },
    rank: {
        type: String,
    }
}, { timestamps: true })


module.exports = mongoose.model('PATIENT', patientSchema)