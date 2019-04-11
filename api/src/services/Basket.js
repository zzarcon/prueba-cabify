import Collection from '../collections/Basket'
import Basket from '../domain/Basket'

class BasketService {
	static async retrieve(basketId){
		const basket = await Collection.retrieveOne(basketId)
		const {id, products} = basket

		return new Basket(id, products).serialize()
	}
}

export default BasketService
