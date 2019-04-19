import Collection from "../collections/Basket";
import Basket from "../domain/Basket";

class BasketService {
  static async create() {
    const basket = await Collection.save();
    const { id, products } = basket;

    return new Basket(id, products);
  }

  static async remove(basketId) {
    return await Collection.remove(basketId);
  }
  // TODOL A los servicios le entra una basket o un basketId?
  static async retrieve(basketId) {
    const basket = await Collection.retrieveOne(basketId);
		if(!basket) throw new Error(`No basket with that id: ${basketId}`) // TODO: Correct error handling?
    const { id, products } = basket;
    return new Basket(id, products).serialize();
  }

  static async retrieveAll() {
    const baskets = await Collection.retrieveAll();

    return baskets.map(basket => {
      return new Basket(basket.id, basket.products).serialize();
    });
  }

  static async addProducts({ id, products }, productsToAdd) {
    const basket = new Basket(id, products);
    basket.addProducts(productsToAdd);

    const updatedBasket = await Collection.update(basket);
    const basketWithProducts = new Basket(
      updatedBasket.id,
      updatedBasket.products
    ).serialize();

    return basketWithProducts;
  }
}

export default BasketService;
