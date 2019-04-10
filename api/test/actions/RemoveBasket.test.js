import "@babel/polyfill";
import database from '../../src/database'
import {CreateBasket, RemoveBasket, RetrieveBaskets } from "../../src/actions";

describe("RemoveBasket", () => {
	beforeAll(() => {
		database.connect()
  });

  afterAll(() => {
		// TODO: La db me viene contaminada de otros tests
		database.drop().then(() => {
			database.disconnect()
		})
  });

  test("It should delete a basket", async () => {
		const basket = await CreateBasket.run()
		const basketID = basket.id
		await RemoveBasket.run(basketID)

		const baskets = await RetrieveBaskets.run()

		const foundBasket = baskets.find(element => element.id === basketID)

		expect(foundBasket).toBeUndefined()
  });
});
