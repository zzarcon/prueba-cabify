import Basket from '../../src/domain/Basket'
import "@babel/polyfill";

describe("Basket", () => {
  test("it can be serialized", async () => {
		const id = '1337'
		const products = ['a','b']

		const epectedObject = {
			id: '1337',
			products: ['a','b']
		}

		const aBasket = new Basket(id, products)
		expect(aBasket.serialize()).toMatchObject(epectedObject)
  });
});
