import Basket from "../models/Basket";

class BasketCollection {
  static drop() {
    return Basket.collection.drop();
  }

  static save() {
    const basket = new Basket();
    return basket.save();
	}

	static retrieveOne(basketId){
		return Basket.findOne({ _id: basketId })
	}

  static retrieveAll() {
    return Basket.find({});
  }

  static remove(basketId) {
    return Basket.deleteOne({ _id: basketId })
	}

	static update({id, ...basketContent}) {
		return Basket.findOneAndUpdate(
			{_id: id},
			basketContent,
			{new: true},
			)
	}

}

export default BasketCollection;
