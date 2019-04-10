import "@babel/polyfill";
import database from "../../src/database";
import retrieveBaskets from "../../src/actions/retrieveBaskets";
import Checkout from "../domain/Checkout";

describe("Checkout", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.drop().then(() => {
      database.disconnect();
    });
  });

  test("It should retrieve baskets", () => {
    return retrieveBaskets().then(baskets => {
		expect(baskets).toBeDefined()
		expect(baskets.length).toBeDefined()
	});
  });

  test("It should retrieve a previously created baskets", async () => {
    const basket = await Checkout.createBasket();

    return retrieveBaskets().then(baskets => {
      const createdBasket = baskets.find(
        element => element.id === basket.id
      );
      expect(createdBasket).toBeDefined();
    });
  });
});
