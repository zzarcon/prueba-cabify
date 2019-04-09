import {Schema, model} from  'mongoose'
import uuid from 'uuid/v1'

const BasketSchema = Schema({
	_id: {
		type: String,
		default: () => uuid()
	},
	products: {
		type: Array,
		default: []
	},
})

var Basket = model('Basket', BasketSchema)

export default Basket
