import BasketCollection from "../collections/Basket";

class RemoveBasket {
  static run(basketId) {
    return new Promise((resolve, reject) => {
      BasketCollection.removeBasket(basketId)
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default RemoveBasket;
