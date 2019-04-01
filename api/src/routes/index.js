const express = require('express')
const router = express.Router();
const checkout = require('./checkout')

router.use('/api/checkout', checkout)

module.exports = router;