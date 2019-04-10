import request from "supertest";
import app from '../../src/app'

const checkoutRoute = '/api/checkout/'

class Checkout {
	static async createBasket(){
		let basket
		await request(app)
		.post(checkoutRoute)
		.then(response => {
			basket = response.body
		})
		return basket
	}

	static async retrieveBaskets(){
		let baskets
		await request(app)
		.get(checkoutRoute)
		.then(response => {
			baskets = response.body.baskets
		})
		return baskets
	}
}

export default Checkout
