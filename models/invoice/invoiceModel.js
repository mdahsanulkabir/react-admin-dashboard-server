const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "PATIENT",
        required: true
    },
    invoiceSerial : {
        type : String,
        required : true
    },
    invoiceDate : {
        type : Date,
        required : true
    },
    guardianName: {
        type: String,
        required: true
    },
    guardianUnit : {
        type : String,
        required: true
    },
    guardianPhoneNumber : {
        type: Number,
        required: true
    },
    doctorName: {
        type: String,
        required : true
    },
    preparedBy : {
        type : String,
        required : true
    },
    billedServices : [{
        serviceId : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "SERVICE",
            required: true
        },
        serviceQuantity : {
            type : Number,
            default : 1
        },
        serviceUnitPrice : {
            type : Number,
            required : true,
        },
        discountRate: {
            type: Number,
            min : 0,
            max : 100,
            required: true
        },
        serviceStatus : {
            type : String,
            enum : ['Pending','Completed']
        }
    }],
}, { timestamps: true })


module.exports = mongoose.model('INVOICE', invoiceSchema)