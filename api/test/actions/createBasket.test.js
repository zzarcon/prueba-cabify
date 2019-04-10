import "@babel/polyfill";
import database from '../../src/database'
import createBasket from "../../src/actions/createBasket";

describe("Checkout", () => {
	beforeAll(() => {
		database.connect()
  });

  afterAll(() => {
		// TODO: La db me viene contaminada de otros tests

		database.drop().then(() => {
			database.disconnect()
		})
  });

  test("It should create a basket", () => {
		return createBasket()
		.then(basket => {
      expect(basket.id).toBeDefined();
      expect(basket.products.length).toEqual(0);
    });
  });
});
