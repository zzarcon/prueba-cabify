class Basket {
	constructor(id, products){
		this.id = id
		this.products = products
	}

	serialize(){
		return {
			id: this.id,
			products: this.products
		}
	}
}

export default Basket
