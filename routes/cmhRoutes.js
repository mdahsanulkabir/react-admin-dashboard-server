const express = require('express');
const { 
    createRole, 
    getRoles 
} = require('../controllers/authorizationController');
const { 
    createDepartment,
    getDepartments
} = require('../controllers/departmentController');
const { 
    createDiscount, 
    getDiscounts 
} = require('../controllers/discountController');
const { 
    createPatient,
    getPatients,
    getNumberOfPatients
} = require('../controllers/patientController');
const { 
    createService, 
    getServices 
} = require('../controllers/serviceController');
const {
    createUser,
    getUsers,
    updateUser,
    login
} = require('../controllers/userController')
const {
    createInvoice,
    getInvoice,
    getAllInvoices,
    getNumberOfInvoices
} = require('../controllers/invoiceController')

const checkLogin = require('../middleware/checkLogin')
const router = express.Router();


//? authorization
// create a new authorization role
router.post('/createRole', createRole)
router.get('/getRoles', getRoles)

//? department
//create a new department
router.post('/createDepartment', createDepartment)
router.get('/getDepartments', getDepartments)

//? discount
// create a new discount policy
router.post('/createDiscount', createDiscount)
router.get('/getDiscounts', getDiscounts)

//? service

router.post('/createService', createService)
router.get('/getServices', getServices)

//?  user 
router.post('/createUser', createUser)
router.get('/getusers', getUsers)
router.patch('/updateUser', updateUser)
router.post('/login', login)

//? patient
router.post('/createPatient',createPatient)
router.get('/getPatients',getPatients)
router.get('/getNumberOfPatients',getNumberOfPatients)


//? invoice
router.post('/createInvoice',createInvoice)
router.get('/getInvoice/:id',getInvoice)
router.get('/getAllInvoices', getAllInvoices)
router.get('/getNumberOfInvoices',getNumberOfInvoices)


module.exports = router