import Collection from '../collections/Product'

class ProductService {
	static retrieve(productCode){
		return Collection.retrieveOne(productCode)
	}
}

export default ProductService
