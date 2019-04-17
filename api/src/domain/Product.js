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
