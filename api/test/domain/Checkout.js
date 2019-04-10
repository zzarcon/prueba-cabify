import request from "supertest";
import app from '../../src/app'

class Checkout {
	static async createBasket(){
		let basket
		await request(app)
		.post('/api/checkout/')
		.then(response => {
			basket = response.body
		})
		return basket
	}

	static async getBaskets(){
		let baskets
		await request(app)
		.get('/api/checkout/')
		.then(response => {
			baskets = response.body
		})
		return baskets
	}
}

export default Checkout
