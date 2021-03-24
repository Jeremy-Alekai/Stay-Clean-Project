const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('contactUs', { title: 'Contact us Page' });
})

module.exports = router;