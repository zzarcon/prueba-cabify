import {PROMO_CODES} from './PriceManager'

const PRODUCTS = {
	VOUCHER: {
		price: 5,
		promotion: PROMO_CODES.twoForOne,
		description: 'Cabify Voucher'
	},
	MUG: {
		price: 7.5,
		description: 'Cabify Coffee Mug'
	},
	TSHIRT: {
		price: 20,
		promo: PROMO_CODES.bulk,
		description: 'Cabify T-Shirt'
	}
}

class Product{
	constructor(code, description, price = 0, promotion = null){
		if(!code){
			throw new Error('Cannot create a Procuct without a CODE')
		}

		this.code = code
		this.description = description || code
		this.price = price
		this.promotion = promotion
	}

	serialize(){
		return {
			code: this.code,
			description: this.description,
			price: this.price,
			promotion: this.promotion
		}
	}
}

export default Product
