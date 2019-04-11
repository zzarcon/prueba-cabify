import Basket from '../services/Basket'

class RetrieveBaskets {
  static async do() {
		const baskets = await Basket.retrieveAll()

		return baskets
  }
}

export default RetrieveBaskets;
