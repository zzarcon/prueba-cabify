import request from "supertest";
import app from "../../../src/app";

class Checkout {
	static async createBasket(){
		let basket
		await request(app)
		.post("/api/checkout/")
		.then(response => {
			basket = response.body
		})
		return basket
	}
}

export default Checkout
