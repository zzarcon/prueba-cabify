import BasketCollection from "../collections/Basket";
import Basket from "../domain/Basket";

class CreateBasket {
  static run() {
    return new Promise((resolve, reject) => {
      BasketCollection.saveBasket()
        .then(response => {
          const { id, products } = response;

          const basket = new Basket(id, products).serialize();

          resolve(basket);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }
}

export default CreateBasket;
