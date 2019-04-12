class Basket {
	constructor(id, products = []){
		if(!id){
			throw new Error('Cannot create a Basket without an ID')
		}
		this.id = id
		this.products = products
		this.amount = this._calculateAmount()
	}

	_calculateAmount(){
		return 0
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
