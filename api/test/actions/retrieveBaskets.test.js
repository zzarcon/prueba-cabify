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
    return retrieveBaskets().then(response => {
		expect(response.baskets).toBeDefined()
		expect(response.baskets.length).toBeDefined()
	});
  });

  test("It should retrieve a previously created baskets", async () => {
    const basket = await Checkout.createBasket();

    return retrieveBaskets().then(response => {
      const createdBasket = response.baskets.find(
        element => element.id === basket.id
      );
      expect(createdBasket).toBeDefined();
    });
  });
});
