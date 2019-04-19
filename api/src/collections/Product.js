import Product from '../domain/Product'
import {PROMO_CODES} from '../domain/PriceManager'

const PRODUCTS = {
	VOUCHER: {
		price: 5,
		promotion: {
			code: PROMO_CODES.twoForOne,
		},
		description: 'Cabify Voucher'
	},
	MUG: {
		price: 7.5,
		description: 'Cabify Coffee Mug'
	},
	TSHIRT: {
		price: 20,
		promotion: {
			code: PROMO_CODES.bulk,
			minimumOrder: 3,
			discount: 1,
		},
		description: 'Cabify T-Shirt'
	}
}

class ProductCollection {
	static retrieveOne(productID){
		const product = PRODUCTS[productID]
		if(!product){
			// TODO: Where is this tested??
			throw new Error(`Invalid product code: "${productID}"`)
		}
		return new Product(productID, product.description, product.price, product.promotion)
	}

}

export default ProductCollection;
