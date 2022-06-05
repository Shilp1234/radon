const express = require('express');
const routs = require('../util/helper.js')
const format = require ('../validator/formatter')
const players = require('../index')

const router = express.Router();
const logger = require('../logger/logger.js')

router.get('/test-me', function (req, res) {
    console.log(logger.welcome())

    console.log(routs.printDate())
    console.log(routs.printMonth())
    console.log(routs.getBatchInfo())

    console.log(format.trim())
    console.log(format.changetoLowerCase())
    console.log(format.changeToUpperCase())
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason