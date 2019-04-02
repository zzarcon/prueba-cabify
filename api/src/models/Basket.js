import {Schema} from 'mongoose'

const BasketSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  products: {
    type: Array,
    default: []
  }
})

export default BasketSchema