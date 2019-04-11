import Basket from "../services/Basket";

class CreateBasket {
  static async run() {
		const basket = await Basket.create()

		return basket
  }
}

export default CreateBasket;
