import Basket from '../services/Basket'

class RemoveBasket {
  static async do(basketId) {
		const response = await Basket.remove(basketId)

		return response
  }
}

export default RemoveBasket;
