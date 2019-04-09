const express = require('express')
const router = express.Router();
const checkout = require('../controllers/checkout')

//TODO: Relationship Service <> Controller?
router.post('/', checkout.createBasket)
router.get('/:basketId', checkout.getBasketAmount)
router.delete('/:basketId', checkout.deleteBasket)
router.post('/:basketId', checkout.addProductsToBasket)

module.exports = router;
