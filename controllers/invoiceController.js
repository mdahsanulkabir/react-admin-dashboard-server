const INVOICE = require('../models/invoice/invoiceModel')

const createInvoice = async ( req, res ) => {
    console.log(req.body);
    const { 
        patientId,
        invoiceSerial,
        invoiceDate,
        guardianName,
        guardianUnit,
        guardianPhoneNumber,
        doctorName,
        preparedBy,
        billedServices
    } = req.body;
    //add doc to db
    try {
        const newInvoice = await INVOICE.create({
            patientId,
            invoiceSerial,
            invoiceDate,
            guardianName,
            guardianUnit,
            guardianPhoneNumber,
            doctorName,
            preparedBy,
            billedServices
        })
        res.status(200).json(newInvoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getInvoice = async ( req, res ) => {

    const { id } = req.params;
    try {
        const invoice = await INVOICE.find({}).where({invoiceSerial:id}).populate('patientId').populate('billedServices.serviceId')
        console.log(invoice);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get number of invoices
const getNumberOfInvoices = async ( req, res ) => {
    try {
        const invoiceNumber = await INVOICE.countDocuments({})
        res.status(200).json(invoiceNumber);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createInvoice,
    getInvoice,
    getNumberOfInvoices
}