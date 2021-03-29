const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('createEmployee', { title: 'StayClean Employee Registration' });
})

router.post('/', (req, res) => {
    res.render('createEmployee', { title: 'StayClean Employee Registration' });
})

module.exports = router;