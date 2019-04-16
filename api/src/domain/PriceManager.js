
// TODO: Not sure if this should go here
export const PROMO_CODES = {
  twoForOne: "2X1",
  bulk: "BULK"
};

class PriceManager{
	static calculateTotal(products){
		let totalAmount = 0

		const productMap = this._generateProductMap(products)
		const productCodes = Object.keys(productMap)
		productCodes.forEach((code) => {
			const product = productMap[code]
			const {price, quantity} = product

			if(product.promotion === PROMO_CODES['twoForOne']){
				totalAmount += this._calculate2x1(quantity, price)
				return
			}

			if(product.promotion === PROMO_CODES['bulk']){
				totalAmount += this._calculateBulk(quantity, price)
				return
			}
			totalAmount += this._calculateRegular(product.price, product.quantity)
		})
		return totalAmount
	}

	static _generateProductMap(products){
		const productMap = {}

		for (let i = 0; i < products.length; i++) {
			const product = products[i]

			const productKey = productMap[product.code]
			const quantity = productKey && productKey.quantity

			productMap[product.code] = {
				price: product.price,
				promotion: product.promotion,
				quantity: quantity + 1 || 1,
			}

		}
		return productMap
	}

	static _calculateRegular(quantity, price){
		return quantity * price
	}

	static _calculate2x1(quantity, price){
		const freeUnits = parseInt(quantity / 2)
		const amount = (quantity * price) - (freeUnits * price)
		return amount
	}

	static _calculateBulk(quantity, price, minimumOrder = 3, discount = 1){
		let productPrice = price
		// Setting static discount since its not stablished
		if(quantity >= minimumOrder){
			productPrice = price - discount
		}
		const amount = quantity * productPrice
		return amount
	}

}

export default PriceManager
