import {Schema, model} from  'mongoose'

const BasketSchema = Schema({
  products: {
    type: Array,
    default: []
  },
})

var BasketModel = model('Basket', BasketSchema)

export default BasketModel