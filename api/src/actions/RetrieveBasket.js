import Basket from '../services/Basket'

class RetrieveBasket {
	static async do(basketId){
		const basket = await Basket.retrieve(basketId)

		return basket
	}
}

export default RetrieveBasket
