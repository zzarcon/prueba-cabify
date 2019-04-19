import "@babel/polyfill";
import database from '../../src/infrastructure/Database'
import {CreateBasket, RemoveBasket, RetrieveBaskets } from "../../src/actions";

describe("RemoveBasket", () => {
	beforeAll(() => {
		database.connect()
  });

  afterAll(() => {
		database.disconnect()
  });

  test("It should delete a basket", async () => {
		const basket = await CreateBasket.do()
		const basketID = basket.id
		await RemoveBasket.do(basketID)

		const baskets = await RetrieveBaskets.do()

		const foundBasket = baskets.find(element => element.id === basketID)

		expect(foundBasket).toBeUndefined()
  });
});
