import "@babel/polyfill";
import database from "../../src/database";
import { CreateBasket } from "../../src/actions";

// TODO: Mas tests para actions?
describe("CreateBasket", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    // TODO: La db me viene contaminada de otros tests
    database.drop().then(() => {
      database.disconnect();
    });
  });

  test("It should create a basket", async () => {
    const basket = await CreateBasket.do();

    expect(basket.id).toBeDefined();
    expect(basket.products.length).toEqual(0);
  });
});
