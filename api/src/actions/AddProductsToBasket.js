import {RetrieveBasket} from './'
import Basket from "../services/Basket";

class AddProductsToBasket {
  static async do(basketId, products) {
		const basket = await Basket.retrieve(basketId)
		const updatedBasket = await Basket.addProducts(basket, products)

		return updatedBasket
  }
}

export default AddProductsToBasket;
