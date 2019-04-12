import Product from '../../src/domain/Product'
import "@babel/polyfill";

describe("Product", () => {
	test('needs a CODE to be created', () => {
		const errorMessage = 'Cannot create a Procuct without a CODE'
		expect(() => {
			new Product()
		}).toThrowError(errorMessage)
	})

	test('if no description provided it matches CODE' , () => {
		const productCode = 'lightsaber'
		const product = new Product(productCode)

		expect(product.description).toBe(productCode)
	})

	test('if no price provided it defaults to 0' , () => {
		const productCode = 'lightsaber'
		const product = new Product(productCode)

		expect(product.price).toBe(0)
	})

	test('has no promotion applied by default', () => {
		const productCode = 'lightsaber'
		const product = new Product(productCode)

		expect(product.promotion).toBeNull()
	})

	test('can be created with code, description, price, promotion', () => {
		const product = new Product('LSBR', 'cool ass lightsaber', 100, '2for1')

		const expectedProduct = {
			code: 'LSBR',
			description: 'cool ass lightsaber',
			price: 100,
			promotion: '2for1'
		}

		expect(product).toMatchObject(expectedProduct)
	})
});
