import Product from '../domain/Product'
import {PROMO_CODES} from '../domain/PriceManager'

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
		promotion: PROMO_CODES.bulk,
		description: 'Cabify T-Shirt'
	}
}

class ProductCollection {

	static retrieveOne(productID){
		const product = PRODUCTS[productID]
		if(!product){
			throw new Error('No product in database')
		}
		return new Product(productID, product.description, product.price, product.promotion)
	}

}

export default ProductCollection;
