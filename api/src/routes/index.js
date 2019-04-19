const express = require('express')
const router = express.Router();
const checkout = require('./checkout')
import {catchErrors} from '../middlewares/errorHandler'

router.use('/api/checkout', checkout)

module.exports = router;
