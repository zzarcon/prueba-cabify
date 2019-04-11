import Collection from "../collections/Basket";
import Basket from "../domain/Basket";

class BasketService {
	static async create(){
		const basket = await Collection.save()
		const { id, products } = basket;

		return new Basket(id, products)
	}

	static async remove(basketId) {
    return await Collection.removeBasket(basketId);
  }

  static async retrieve(basketId) {
    const basket = await Collection.retrieveOne(basketId);
    const { id, products } = basket;

    return new Basket(id, products).serialize();
  }

  static async retrieveAll() {
		const baskets = await Collection.retrieveAll();

		return baskets.map(basket => {
      return new Basket(basket.id, basket.products).serialize();
    });
	}

}

export default BasketService;
