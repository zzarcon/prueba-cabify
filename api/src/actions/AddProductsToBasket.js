import Basket from "../services/Basket";

class AddProductsToBasket {
  static async do(basket, products) {
		const updatedBasket = await Basket.addProducts(basket, products)

		return updatedBasket
  }
}

export default AddProductsToBasket;
