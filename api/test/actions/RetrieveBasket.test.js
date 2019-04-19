import "@babel/polyfill";
import database from '../../src/infrastructure/Database'
import {RetrieveBasket, CreateBasket} from "../../src/actions";

describe("RetrieveBasket", () => {
	beforeAll(() => {
		database.connect()
  });

  afterAll(() => {
		database.disconnect()
  });

  test("It should get a basket", async () => {
		const createdBasket = await CreateBasket.do()

		const basket = await RetrieveBasket.do(createdBasket.id)

		expect(basket.id).toBe(createdBasket.id)
	});

});
