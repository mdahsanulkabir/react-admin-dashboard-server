const PATIENT = require('../models/patient/patientModel')

//create a new authorization role
const createPatient = async (req, res) => {
    console.log(req.body);
    const { 
        patientName,
        patientSerial,
        patientPhoneNumber,
        rtNumber,
        rank,
    } = req.body;
    //add doc to db
    try {
        const newPatient = await PATIENT.create({
            patientName,
            patientSerial,
            patientPhoneNumber,
            rtNumber,
            rank,
        })
        res.status(200).json(newPatient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all roles
const getPatients = async (req, res) => {
    
    try {
        const patients = await PATIENT.find({})
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get number of patients
const getNumberOfPatients = async ( req, res ) => {
    try {
        const patientNumber = await PATIENT.countDocuments({})
        res.status(200).json(patientNumber);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    createPatient,
    getPatients,
    getNumberOfPatients
}