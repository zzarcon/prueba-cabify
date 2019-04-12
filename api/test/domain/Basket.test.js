import Basket from '../../src/domain/Basket'
import "@babel/polyfill";

describe("Basket", () => {

	test('needs an ID to be created', () => {
		const errorMessage = 'Cannot create a Basket without an ID'
		expect(() => {
			const aBasket = new Basket()
		}).toThrowError(errorMessage)

	})

	test("by default has no products", () => {
		const id = '1337'

		const aBasket = new Basket(id)
		const products = aBasket.products

		expect(products.length).toEqual(0)
	})
  test("it can be serialized", () => {
		const id = '1337'
		const products = []

		const epectedObject = {
			id: '1337',
			products: [],
			amount: 0
		}

		const aBasket = new Basket(id, products)
		expect(aBasket.serialize()).toMatchObject(epectedObject)
	});
});
