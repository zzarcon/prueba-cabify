const PROMO_CODES = {
  twoForOne: "2X1",
  bulk: "BULK"
};

class PriceManager{
	static calculateTotal(products){
		const productMap = this._generateProductMap(products)
		const productCodes = Object.keys(productMap)
		let currentPrice = 0
		productCodes.forEach((code) => {
			const product = productMap[code]
			const {price, quantity} = product

			if(product.promotion === PROMO_CODES['twoForOne']){
				currentPrice += this._calculate2x1(quantity, price)
				return
			}

			if(product.promotion === PROMO_CODES['bulk']){
				currentPrice = this._calculateBulk()
				return
			}

			currentPrice += product.price * product.quantity
		})
		return currentPrice
	}

	static _calculate2x1(quantity, price){
		const freeUnits = parseInt(quantity / 2)
		return (quantity * price) - (freeUnits * price)
	}

	static _calculateBulk(quantity, price){

	}

	static _generateProductMap(products){
		const productMap = {}

    for (let i = 0; i < products.length; i++) {
			const currentProduct = products[i]
			const productKey = productMap[currentProduct.code]
			const currentQuantity = productKey && productKey.quantity
			productMap[currentProduct.code] = {
				price: currentProduct.price,
				promotion: currentProduct.promotion,
				quantity: currentQuantity + 1 || 1,
			}

		}
		return productMap
	}

}

export default PriceManager
