import "@babel/polyfill";
import database from "../../src/database";
import Checkout from "../pageObjects/Checkout";

// TODO: Since there are no db volumes, I assume db is empty on each execution?
describe("/checkout/", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.drop().then(() => {
      database.disconnect();
    });
  });

  test("Basket be created with a unique id", async () => {
    const firstBasket = await Checkout.createBasket();
    const secondBasket = await Checkout.createBasket();

    expect(firstBasket.id).toBeDefined();
    expect(firstBasket.id).not.toBe(secondBasket.id);
  });

  test("Baskets can be retrieved", async () => {
    const newBasket = await Checkout.createBasket();
		const baskets = await Checkout.retrieveBaskets();

		const foundBasket = baskets.find((element) => element.id === newBasket.id)

    expect(foundBasket).toBeDefined()
  });
});
