import Basket from "../../src/domain/Basket";
import Product from "../../src/services/Product";
import "@babel/polyfill";

describe("Basket", () => {
  test("needs an ID to be created", () => {
    const errorMessage = "Cannot create a Basket without an ID";
    expect(() => {
      new Basket();
    }).toThrowError(errorMessage);
  });

  test("by default has no products", () => {
    const id = "1337";

    const aBasket = new Basket(id);
    const products = aBasket.products;

    expect(products.length).toEqual(0);
	});

  test("it can be serialized", () => {
    const id = "1337";
    const products = [];

    const epectedObject = {
      id: "1337",
      products: [],
      amount: 0
    };

    const aBasket = new Basket(id, products);
    expect(aBasket.serialize()).toMatchObject(epectedObject);
	});

  test("a product can be added", () => {
    const aProduct = Product.retrieve("VOUCHER");
    const basket = new Basket("1337");

    basket.addProduct(aProduct);

    const productInBasket = basket.products[0];

    expect(aProduct).toEqual(productInBasket);
	});

  test("products are added to the top of the basket", () => {
		const aProduct = Product.retrieve("VOUCHER");
		const anotherProduct = Product.retrieve("MUG");
    const basket = new Basket("1337");

    basket.addProduct(aProduct);
    basket.addProduct(anotherProduct);

		const firstProductInBasket = basket.products[0]
		const lastProductIndex = basket.products.length - 1
		const lastProductInBasket = basket.products[lastProductIndex];

    expect(firstProductInBasket).toEqual(aProduct);
    expect(lastProductInBasket).toEqual(anotherProduct);
	});

});
