import BasketCollection from "../collections/Basket";
import Basket from "../domain/Basket";

const retrieveBaskets = () => {
  return new Promise((resolve, reject) => {
    BasketCollection.retrieveBaskets()
      .then(response => {
        // TODO: Inneficient to iterate over the response??
        const baskets = response.map(basket => {
          const { id, products } = basket;
          return new Basket(id, products).serialize();
        });
        resolve(baskets);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default retrieveBaskets;
