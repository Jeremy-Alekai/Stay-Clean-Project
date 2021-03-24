const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('dashBoard', { title: 'StayClean Admin DashBoard' });
})

module.exports = router;