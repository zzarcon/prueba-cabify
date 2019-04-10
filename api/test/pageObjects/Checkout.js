import request from "supertest";
import app from "../../src/app";

const checkoutRoute = "/api/checkout/";

class Checkout {
  static async createBasket() {
		const response = await request(app).post(checkoutRoute)
		const basket = response.body

    return basket;
  }

  static async retrieveBaskets() {
		const response = await request(app).get(checkoutRoute)
		const {baskets} = response.body

    return baskets;
  }

  static async isBasketInList(basketId) {
    const baskets = await this.retrieveBaskets();

		return !!baskets.find(basket => basket.id === basketId);
	}

	static async removeBasket(basketId){
		return await request(app).delete(`${checkoutRoute}/${basketId}`)
	}
}

export default Checkout;
