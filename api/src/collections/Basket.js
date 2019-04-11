import Basket from "../models/Basket";

class BasketCollection {
  static drop() {
    return Basket.collection.drop();
  }

  static save() {
    const basket = new Basket();
    return basket.save();
  }

  static retrieveAll() {
    return Basket.find({});
  }

  static removeBasket(basketId) {
    return Basket.deleteOne({ _id: basketId })
	}

	static retrieveOne(basketId){
		return Basket.findOne({ _id: basketId })
	}
}

export default BasketCollection;
