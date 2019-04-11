import Basket from "../services/Basket";

class CreateBasket {
  static async do() {
		const basket = await Basket.create()

		return basket
  }
}

export default CreateBasket;
