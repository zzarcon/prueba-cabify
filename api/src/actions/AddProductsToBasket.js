import Basket from "../services/Basket";
import Product from "../services/Product";

class AddProductsToBasket {
  static async do(basketId, productCodes) {
		const products = productCodes.map(productId => {
			return Product.retrieve(productId)
		})

		const basket = await Basket.retrieve(basketId)
		const updatedBasket = await Basket.addProducts(basket, products)

		return updatedBasket
  }
}

export default AddProductsToBasket;
