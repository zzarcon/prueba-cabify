import Basket from "../models/Basket";

class BasketCollection {
  static drop() {
    Basket.collection.drop();
  }

  static saveBasket() {
    const basket = new Basket();
    return basket.save();
  }

  static retrieveBaskets() {
    return Basket.find({});
  }

  static removeBasket(basketId) {
    return Basket.deleteOne({ _id: basketId });
  }
}

export default BasketCollection;
