const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('smoothLogin', { title: 'Login' });
})

module.exports = router;


// app.get('/driver', (req, res) => {
//     res.render('createEmployee1');
// })