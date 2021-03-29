// https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
const express = require('express');
const multer = require('multer');
const router = express.Router();
const Employee = require('../Models/Employee')

//get and show the createEmployee.pug file
router.get('/', (req, res) => {
    res.render('createEmployee1', { title: 'Add Employee' })
})

// image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

router.post('/', upload.single('imageupload'), async(req, res) => {
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

module.exports = router;