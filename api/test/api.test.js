import "@babel/polyfill";
import database from "../src/infrastructure/Database";
import Checkout from "./pageObjects/Checkout";

// TODO: Since there are no db volumes, I assume db is empty on each execution?
// TODO: Coverage of nearly 100%, how is it possible?
describe("Api", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.disconnect();
  });

  test("baskets are created with a unique id", async () => {
    const firstBasket = await Checkout.createBasket();
    const secondBasket = await Checkout.createBasket();

    expect(firstBasket.id).toBeDefined();
    expect(firstBasket.id).not.toBe(secondBasket.id);
  });

  test("created baskets can be retrieved", async () => {
    const newBasket = await Checkout.createBasket();
		// TODO: Esto repetido donde lo pongo?
		const isBasketInList = await Checkout.isBasketInList(newBasket.id)

    expect(isBasketInList).toBe(true)
	});

	test('remove a basket by id', async () => {
		const newBasket = await Checkout.createBasket();
		const newBasketID = newBasket.id

		await Checkout.removeBasket(newBasketID)

		const isBasketInList = await Checkout.isBasketInList(newBasketID)

		expect(isBasketInList).toBe(false)
	})

	//TODO: Fails non deterministic (check drop of database)
	test('get a specific basket by id', async () => {
		const newBasket = await Checkout.createBasket();

		const basket = await Checkout.getBasket(newBasket.id)

		expect(basket.id).toEqual(newBasket.id)
	})

	test('add products to a basket', async () => {
		// FIXME: This will fail if exam.test.js is run to. Concurrency problem?
		const basket = await Checkout.createBasket();
		const basketId = basket.id
		const aProduct = 'MUG'
		const a2x1Product = 'VOUCHER'
		const products = [aProduct, aProduct, aProduct, a2x1Product, a2x1Product, a2x1Product]
		await Checkout.addProductsToBasket(basketId, products)

		const basketWithProducts = await Checkout.getBasket(basketId)

		expect(basketWithProducts.products.length).toBe(6)
		expect(basketWithProducts.amount).toBe(32.5)
	})

	// TODO: Test error cases
});
