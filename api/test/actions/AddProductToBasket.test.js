import "@babel/polyfill";
import database from "../../src/database";
import { AddProductsToBasket, CreateBasket } from "../../src/actions";
import Product from "../../src/domain/Product";

// TODO: Mas tests para actions?
describe("AddProductsToBasket", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    // TODO: La db me viene contaminada de otros tests
    database.drop().then(() => {
      database.disconnect();
    });
  });

  test("It should add a single product to the basket", async () => {
		let basket = await CreateBasket.do();

		const aProductCode = 'LSBR'
		const aProduct = new Product(aProductCode, 'cool ass lightsaber', 100, '2for1')

		basket = await AddProductsToBasket.do(basket, aProduct)

		const produdctInBasket = basket.products[0]

    expect(basket.products.length).toBe(1);
    expect(produdctInBasket).toBe(aProductCode);
	});

	test("It should add multiple products to the basket", async () => {
		let basket = await CreateBasket.do();

		const aProductCode = 'LSBR'
		const aProduct = new Product(aProductCode, 'cool ass lightsaber', 100, '2for1')
		const products = [aProduct, aProduct, aProduct]

		basket = await AddProductsToBasket.do(basket, products)

		const produdctInBasket = basket.products[0]

    expect(basket.products.length).toBe(3);
	})
});