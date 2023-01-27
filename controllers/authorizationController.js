const AUTHORIZATION = require('../models/authorization/authorizationModel');

//create a new authorization role
const createRole = async (req, res) => {
    console.log(req.body);
    const { access } = req.body;
    //add doc to db
    try {
        const newRole = await AUTHORIZATION.create({
            access,
        })
        res.status(200).json(newRole);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all roles
const getRoles = async (req, res) => {
    // console.log("role in getroles", req.userRole);
    try {
        const roles = await AUTHORIZATION.find({})
        res.status(200).json(roles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createRole,
    getRoles
}