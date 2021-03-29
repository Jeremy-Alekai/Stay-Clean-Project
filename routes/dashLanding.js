const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('dashLanding', { title: 'StayClean DashBoard' });
})

module.exports = router;