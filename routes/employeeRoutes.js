// https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
const express = require('express');
const multer = require('multer');
const router = express.Router();

//Router
router.get('/addemployee', (req, res) => {
    res.render('createEmployee1', { title: 'Add Employee' })
})

router.post('/addemployee', (req, res) => {
    console.log(req.body)
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

router.post('/addemployee', upload.single('imageupload'), (req, res) => {
    try {
        console.log(req.file);
    } catch (err) {
        res.send(400);
    }
})

module.exports = router;