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
		const a2x1Product = new Product('LSBR', 'cool ass lightsaber', 100, '2X1')
		const another2x1Product = new Product('DRD', 'a friendly looking droid', 200, '2X1')

		const products = [
			...Array(10).fill(a2x1Product),
			...Array(11).fill(another2x1Product),
		]

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 1700

		expect(totalAmount).toBe(expectedAmount)
	})

	test('handles bulk promotion', () => {
		const aBulkProduct = new Product('LSBR', 'cool ass lightsaber', 100, 'BULK')

		const products = Array(10).fill(aBulkProduct)

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 990

		expect(totalAmount).toBe(expectedAmount)
	})

	test('handles mixed orders', () => {
		const aBulkProduct = new Product('LSBR', 'cool ass lightsaber', 100, 'BULK')
		const a2x1Product = new Product('DRD', 'a friendly looking droid', 200, '2X1')
		const aRegularProduct = new Product('SHIP', 'shiny, shiny', 12000)

		const products = [
			...Array(15).fill(aBulkProduct),
			...Array(11).fill(a2x1Product),
			aRegularProduct,
		]

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 14685

		expect(totalAmount).toBe(expectedAmount)

	})

});
