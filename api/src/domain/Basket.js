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

	// TODO: Makes sense to use two methods for single an multiple params?
	addProduct(product){
		this.products.push(product)
		this._calculateAmount()
	}

	addProducts(products){
		const itsOnlyOneProduct = !products.length
		if(itsOnlyOneProduct){
			products = [products]
		}
		products.forEach((product) => { this.addProduct(product)})
	}

	serialize(){
		return {
			id: this.id,
			products: this._serializeProducts(),
			amount: 0
		}
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

	_serializeProducts(){
		const productCodesArray = this.products.map((product) => product.code)
		return productCodesArray
	}

}

export default Basket
