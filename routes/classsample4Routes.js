const express = require('express');
const multer = require('multer');
const router = express.Router();
const Employee = require('../models/Employee')

//get and show the createEmployee.pug file
router.get('/createEmployee', (req, res) => {
    res.render('createEmployee', { title: 'Add Employee' })
})

// image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

// save data from the createEmployee pug file
router.post('/createEmployee', upload.single('imageupload'), async(req, res) => {
    try {
        const employee = new Employee(req.body);
        employee.imageupload = req.file.path;
        await employee.save()
        res.redirect('/employee')
    } catch (err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
})

// show Employee data from database on the employeelist pug file
router.get('/', async(req, res) => {
    try {
        // find all the data in the Employee collection
        const employeeDetails = await Employee.find();
        res.render('employeelist', { users: employeeDetails, title: 'Employee List' })
    } catch (err) {
        res.send('Failed to retrive employee details');
    }
})

// update record based on the _id from the database
// after adding the update button on the  employeelist
// renders the updateEmployee pug file where you can update
// add the `app.use('/public/images', express.static(__dirname + '/public/images'));`
// to index.js to make sure image is showing
router.get('/update/:id', async(req, res) => {
    try {
        const updateEmp = await Employee.findOne({ _id: req.params.id })
        res.render('updateEmployee', { user: updateEmp })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

// route to save the updated ddata
router.post('/update', async(req, res) => {
    try {
        await Employee.findOneAndUpdate({ _id: req.query.id }, req.body)
        res.redirect('/employee');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
})

//delete and employee record from the database
// add the delete code to the employeelist pug file
router.post('/delete', async(req, res) => {
    try {
        await Employee.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})

module.exports = router;