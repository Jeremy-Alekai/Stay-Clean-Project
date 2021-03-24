const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pickupZones', { title: '' });
})

module.exports = router;