import Basket from '../services/Basket'

class RetrieveBaskets {
  static async run() {
		return await Basket.retrieveAll()
  }
}

export default RetrieveBaskets;
