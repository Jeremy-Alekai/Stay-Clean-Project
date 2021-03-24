const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', { title: 'Page Layout' });
})

module.exports = router;