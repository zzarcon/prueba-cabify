import {Schema, model} from  'mongoose'
import { uuidv3 } from 'uuid'

const BasketSchema = Schema({
	_id: {
		type: String,
		default: () => uuidv3('basket.')
	},
  products: {
    type: Array,
    default: []
  },
})

var BasketModel = model('Basket', BasketSchema)

export default BasketModel
