import "@babel/polyfill";
import database from "../../src/infrastructure/Database";
import { AddProductsToBasket, CreateBasket } from "../../src/actions";
import ProductService from '../../src/services/Product'

// TODO: Mas tests para actions?
describe("AddProductsToBasket", () => {
  beforeAll(() => {
    database.connect();
  });

  afterAll(() => {
    database.disconnect();
  });

  test("It should add a single product to the basket", async () => {
		let basket = await CreateBasket.do();

		const aProduct = ['VOUCHER']

		const basketWithProducts = await AddProductsToBasket.do(basket.id, aProduct)

		const produdctInBasket = basketWithProducts.products[0]
		const expectedProductShape = {
			code: 'VOUCHER',
			description: 'Cabify Voucher',
			price: 5,
			promotion: {
				code: '2X1'
			}
		}

    expect(basketWithProducts.products.length).toBe(1);
    expect(produdctInBasket).toMatchObject(expectedProductShape);
	});

	xtest("It should add multiple products to the basket", async () => {
		let basket = await CreateBasket.do();

		// TODO: Should use Service or domain for this?
		const aProduct = ProductService.retrieve('VOUCHER')
		const products = [aProduct, aProduct, aProduct]

		const basketWithProducts = await AddProductsToBasket.do(basket.id, products)
    expect(basketWithProducts.products.length).toBe(3);
    expect(basketWithProducts.amount).toBe(300);
	})
});
