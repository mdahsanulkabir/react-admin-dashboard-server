const USER = require('../models/user/userModel');
const AUTHORIZATION = require('../models/authorization/authorizationModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async ( req, res ) => {
    const { name, userId, accessId } = req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt.hash("cmhcc", 10)
    console.log(hashedPassword);
    try {
        const newUser = await USER.create({
            name, 
            userId, 
            accessId,
            password : hashedPassword
        })
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getusers = async ( req, res ) => {

}

const updateUser = async ( req, res ) => {

}

const login = async ( req, res ) => {
    const { userId, password } = req.body;
    console.log(req.body);
    try {
        const user = await USER.find({userId : userId})
        console.log(user);
        console.log("access id", user[0].accessId);
        const access = await AUTHORIZATION.findById({_id : user[0].accessId})
        const role = access.access;
        if( user && user.length > 0 ) {
            const isValidPass = await bcrypt.compare(password, user[0].password)
            if(isValidPass){
                const token = jwt.sign({
                    name : user[0].name,
                    userId : user[0].userId,
                    userRole : role
                }, process.env.JWT_SECRET, {
                    expiresIn :'1h'
                })
                res.status(200).json({
                    'access_token' : token,
                    'name': user[0].name,
                    'userRole' : role,
                    "message":"login Successful"
                })
            } else {
                res.status(401).json({
                    "error" : "Authentication Failed !"
                })
            }
        } else {
            res.status(401).json({
                "error" : "Authentication Failed !"
            })
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

module.exports = {
    createUser,
    getusers,
    updateUser,
    login
}