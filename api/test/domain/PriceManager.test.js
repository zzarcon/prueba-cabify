import PriceManager from "../../src/domain/PriceManager";
import "@babel/polyfill";

describe("PriceManager", () => {
	test('handles simple products price', () => {
		const products = {
			product1: {
				quantity: 10,
				price: 200
			},
			product2: {
				quantity: 20,
				price: 45
			}
		}

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 2900

		expect(totalAmount).toBe(expectedAmount)
	})

	test('handles 2x1 promotion', () => {
		const products = {
			product1: {
				quantity: 11,
				price: 100,
				promotion: '2X1'
			},
		}

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 600

		expect(totalAmount).toBe(expectedAmount)
	})

});
