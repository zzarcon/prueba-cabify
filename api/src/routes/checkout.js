import express from 'express'
import checkout from '../controllers/checkout'

const router = express.Router();

//TODO: Relationship Service <> Controller?
//TODO: Cómo afrontar el plantemiento, primero lógico o rutas?
router.post('/', checkout.createNewBasket)
router.get('/', checkout.getAllBaskets)
router.get('/:basketId', checkout.getBasketAmount)
router.delete('/:basketId', checkout.deleteBasket)
router.post('/:basketId', checkout.addProductsToBasket)

module.exports = router;
