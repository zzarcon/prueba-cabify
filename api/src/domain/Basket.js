const PROMO_CODES = {
	twoForOne: '2X1',
	bulk : 'BULK'
}

class Basket {
	constructor(id, products = []){
		if(!id){
			throw new Error('Cannot create a Basket without an ID')
		}
		this.id = id
		this.products = products
		this.amount = 0
		this._calculateAmount()
	}

	_calculateAmount(){
		let totalAmount = 0
		let twoForOneCounter = 0
		// TODO: Refactor
		this.products.map((product, index) => {
			let productPrice = product.price
			if(product.promotion === PROMO_CODES.twoForOne){
				twoForOneCounter++
			}
			if(twoForOneCounter === 1){
				twoForOneCounter = 0
				productPrice = product.price/2
			}
			totalAmount = totalAmount + productPrice
		})
		this.amount = totalAmount
	}

	addProduct(product){
		this.products.push(product)
		this._calculateAmount()
	}

	serialize(){
		return {
			id: this.id,
			products: this.products,
			amount: 0
		}
	}
}

export default Basket
