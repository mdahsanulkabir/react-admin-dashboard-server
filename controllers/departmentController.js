const DEPARTMENT = require('../models/department/departmentModel');

//create a new department
const createDepartment = async (req, res) => {
    console.log(req.body);
    const { departmentName } = req.body;
    //add doc to db
    try {
        const newDepartment = await DEPARTMENT.create({
            departmentName,
        })
        res.status(200).json(newDepartment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all departments
const getDepartments = async (req, res) => {
    
    try {
        const departments = await DEPARTMENT.find({})
        res.status(200).json(departments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createDepartment,
    getDepartments
}