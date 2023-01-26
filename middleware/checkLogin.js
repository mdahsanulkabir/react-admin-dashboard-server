const jwt = require('jsonwebtoken')
const checkLogin = ( req, res, next ) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { name, userId, userRole } = decoded;
        req.name = name;
        req.userId = userId;
        req.userRole = userRole
        console.log("Name :", req.name);
        console.log("user id :", req.userId);
        console.log("Role :", req.userRole);
        next();
    } catch ( error ) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = checkLogin;