import "@babel/polyfill";
import database from "../src/database";
import Checkout from "./pageObjects/Checkout";
import Product from '../src/domain/Product';

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

	xtest('add products to a basket', async () => {
		const newBasket = await Checkout.createBasket();
		const basketId = newBasket.id
		const aProduct = new Product('LSBR', 'lightsaber', 100)
		const products = [aProduct, aProduct, aProduct]

		const basketWithProducts = await Checkout.addProductsToBasket(basketId, products)
		console.log({basketWithProducts})
		expect(basketWithProducts.products.length).toBe(3)
	})
});
