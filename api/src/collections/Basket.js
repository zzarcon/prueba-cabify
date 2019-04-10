import Basket from "../models/Basket";

class BasketCollection {
	static drop(){
		Basket.collection.drop()
	}

  static saveBasket() {
    const basket = new Basket();
    return basket.save();
	}

	static retrieveBaskets(){
		return Basket.find({})
	}
}

export default BasketCollection;
