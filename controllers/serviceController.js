const SERVICE = require('../models/service/serviceModel');

//create a new authorization role
const createService = async (req, res) => {
    console.log(req.body);
    const { serviceName,
            departmentId,
            servicePrice } = req.body;
    //add doc to db
    try {
        const newService = await SERVICE.create({
            serviceName,
            departmentId,
            servicePrice
        })
        res.status(200).json(newService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all services
const getServices = async (req, res) => {
    
    try {
        const services = await SERVICE.find({})
        .populate({
            path: 'departmentId'
        })
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createService,
    getServices
}