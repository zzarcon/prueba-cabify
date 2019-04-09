import database from "../../src/database";
import "@babel/polyfill";
import createBasket from "../../src/actions/createBasket";

describe("Checkout", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.disconnect();
  });

  test("It should create a basket", async () => {
		return createBasket()
		.then(basket => {
      expect(basket.id).toBeDefined();
      expect(basket.products.length).toEqual(0);
    });
  });
});
