import Basket from '../services/Basket'

class RemoveBasket {
  static async run(basketId) {
		return await Basket.remove(basketId)
  }
}

export default RemoveBasket;
