import "@babel/polyfill";
import database from '../../src/database'
import CreateBasket from "../../src/actions/CreateBasket";

describe("createBasket", () => {
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
		return CreateBasket
		.run()
		.then(basket => {
      expect(basket.id).toBeDefined();
      expect(basket.products.length).toEqual(0);
    });
  });
});
