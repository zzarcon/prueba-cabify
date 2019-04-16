import PriceManager from "../../src/domain/PriceManager";
import Product from "../../src/domain/Product";
import "@babel/polyfill";

describe("PriceManager", () => {
	test('handles simple products price', () => {
		const aProduct = new Product('LSBR', 'cool ass lightsaber', 100)
		const anotherProduct = new Product('DRD', 'a friendly looking droid', 200)

		const products = [
			...Array(10).fill(aProduct),
			...Array(5).fill(anotherProduct),
		]

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 2000

		expect(totalAmount).toBe(expectedAmount)
	})

	test('handles 2x1 promotion', () => {
		const aProduct = new Product('LSBR', 'cool ass lightsaber', 100, '2X1')
		const anotherProduct = new Product('DRD', 'a friendly looking droid', 200, '2X1')

		const products = [
			...Array(10).fill(aProduct),
			...Array(11).fill(anotherProduct),
		]

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 1700

		expect(totalAmount).toBe(expectedAmount)
	})

});
