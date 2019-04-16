const PROMO_CODES = {
  twoForOne: "2X1",
  bulk: "BULK"
};

class PriceManager{
	static calculateTotal(products){
		const productCodes = Object.keys(products)
		let currentPrice = 0
		productCodes.forEach((code) => {
			const product = products[code]
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
}

export default PriceManager
