import "@babel/polyfill";
import database from '../../src/database'
import Checkout from "../domain/Checkout";

// TODO: Since there are no db volumes, I assume db is empty on each execution?
describe("Checkout", () => {
	beforeAll(() => {
		database.connect()
  });

  afterAll(() => {
		database.drop().then(() => {
			database.disconnect()
		})
  });

  test("Basket be created with a unique id", async () => {
		const firstBasket = await Checkout.createBasket()
		const secondBasket = await Checkout.createBasket()

		expect(firstBasket.id).toBeDefined()
		expect(firstBasket.id).not.toBe(secondBasket.id)
	});

});
