import "@babel/polyfill";
import database from "../../src/database";
import RetrieveBaskets from "../../src/actions/RetrieveBaskets";
import Checkout from "../pageObjects/Checkout";

describe("RetrieveBaskets", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.drop().then(() => {
      database.disconnect();
    });
  });

  test("It should retrieve baskets", () => {
    RetrieveBaskets
      .run()
      .then(baskets => {
        expect(baskets).toBeDefined();
        expect(baskets.length).toBeDefined();
      });
  });

  test("It should retrieve a previously created baskets", async () => {
    const basket = await Checkout.createBasket();

    return RetrieveBaskets
      .run()
      .then(baskets => {
        const createdBasket = baskets.find(element => element.id === basket.id);
        expect(createdBasket).toBeDefined();
			})
  });
});
