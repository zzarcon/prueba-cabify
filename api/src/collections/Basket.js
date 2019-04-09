import Basket from "../models/Basket";

class BasketCollection {
	static drop(){
		Basket.collection.drop()
	}

  static saveBasket() {
    const basket = new Basket();
    return basket.save();
  }
}

export default BasketCollection;
