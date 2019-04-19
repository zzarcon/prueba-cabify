import "@babel/polyfill";
import database from "../src/infrastructure/Database";
import Checkout from "./pageObjects/Checkout";

// TODO: Since there are no db volumes, I assume db is empty on each execution?
describe("Tests from the README", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    // database.drop().then(() => {
    //   database.disconnect();
    // });
  });

	test('VOUCHER, TSHIRT, MUG', async () => {
		const basket = await Checkout.createBasket();

		const basketId = basket.id

		const products = ['VOUCHER', 'TSHIRT', 'MUG']

		await Checkout.addProductsToBasket(basketId, products)

		const basketWithProducts = await Checkout.getBasket(basketId)

		expect(basketWithProducts.products.length).toBe(3)
		expect(basketWithProducts.amount).toBe(32.5)
	})

	test('VOUCHER, TSHIRT, VOUCHER', async () => {
		const basket = await Checkout.createBasket();
		const basketId = basket.id

		const products = ['VOUCHER', 'TSHIRT', 'VOUCHER']

		await Checkout.addProductsToBasket(basketId, products)

		const basketWithProducts = await Checkout.getBasket(basketId)

		expect(basketWithProducts.products.length).toBe(3)
		expect(basketWithProducts.amount).toBe(25)
	})

	test('TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT', async () => {
		const basket = await Checkout.createBasket();
		const basketId = basket.id

		const products = ['TSHIRT', 'TSHIRT', 'TSHIRT']

		await Checkout.addProductsToBasket(basketId, products)
		await Checkout.addProductToBasket(basketId, 'VOUCHER')
		await Checkout.addProductToBasket(basketId, 'TSHIRT')

		const basketWithProducts = await Checkout.getBasket(basketId)

		expect(basketWithProducts.products.length).toBe(5)
		expect(basketWithProducts.amount).toBe(81)
	})

	test('VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT', async () => {
		const basket = await Checkout.createBasket();
		const basketId = basket.id

		const products = ['VOUCHER', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'MUG', 'TSHIRT', 'TSHIRT']

		await Checkout.addProductsToBasket(basketId, products)

		// await Checkout.addProductToBasket(basketId, 'TSHIRT')
		// await Checkout.addProductToBasket(basketId, 'TSHIRT')
		// await Checkout.addProductToBasket(basketId, 'VOUCHER')
		// await Checkout.addProductToBasket(basketId, 'TSHIRT')
		// await Checkout.addProductToBasket(basketId, 'VOUCHER')
		// await Checkout.addProductToBasket(basketId, 'VOUCHER')
		// await Checkout.addProductToBasket(basketId, 'MUG')

		const basketWithProducts = await Checkout.getBasket(basketId)

		expect(basketWithProducts.products.length).toBe(7)
		expect(basketWithProducts.amount).toBe(74.5)
	})

});
