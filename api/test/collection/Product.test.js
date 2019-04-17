import Collection from "../../src/collections/Product";
import "@babel/polyfill";

describe("Product collection", () => {
  test("it can retrieve a product", () => {
		const productCode = 'MUG'

		const product = Collection.retrieveOne(productCode)

		expect(product.code).toBe(productCode)
  });

	test("throws error on invalid product code", () => {
		const errorMessage = "Invalid product code";
		const invalidProductCode = 'INVALID'

    expect(() => {
			const product = Collection.retrieveOne(invalidProductCode)
			expect(product).toBeUndefined()
    }).toThrowError(errorMessage);
  });

});
