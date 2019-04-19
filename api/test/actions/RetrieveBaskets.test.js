import "@babel/polyfill";
import database from "../../src/infrastructure/Database";
import {RetrieveBaskets, CreateBasket} from "../../src/actions";

//TODO: Mejorar estructura de tests, AAA?
describe("RetrieveBaskets", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.disconnect();
  });

  test("It should retrieve baskets", async () => {
		const baskets = await RetrieveBaskets.do();

		expect(baskets).toBeDefined();
    expect(baskets.length).toBeDefined();
  });

  test("It should retrieve a previously created baskets", async () => {
    const basket = await CreateBasket.do(); // TODO: Use action or endpoints?
		const baskets = await RetrieveBaskets.do();

		const createdBasket = baskets.find(element => element.id === basket.id);

    expect(createdBasket).toBeDefined();
  });
});
