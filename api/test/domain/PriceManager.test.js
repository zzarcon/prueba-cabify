import PriceManager from "../../src/domain/PriceManager";
import Product from "../../src/services/Product";
import "@babel/polyfill";

describe("PriceManager", () => {
	test('handles simple products price', () => {
		const aProduct = Product.retrieve('MUG')

		const products = Array(10).fill(aProduct)

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 75

		expect(totalAmount).toBe(expectedAmount)
	})

	test('handles 2x1 promotion', () => {
		const a2x1Product = Product.retrieve('VOUCHER')

		const products = Array(11).fill(a2x1Product)

		const totalAmount = PriceManager.calculateTotal(products)
		const expectedAmount = 30

		expect(totalAmount).toBe(expectedAmount)
	})

	// TODO: Minimum order is opaque to test
	test('handles bulk promotion when minimum order not reached', () => {
		const aBulkProduct = Product.retrieve('TSHIRT')
		const amountWithBulkDiscount = 40
		const products = Array(2).fill(aBulkProduct)

		const totalAmount = PriceManager.calculateTotal(products)

		expect(totalAmount).toBe(amountWithBulkDiscount)
	})

	test('handles bulk promotion when minimum order reached', () => {
		const aBulkProduct = Product.retrieve('TSHIRT')
		const expectedAmount = 190
		const products = Array(10).fill(aBulkProduct)

		const totalAmount = PriceManager.calculateTotal(products)

		expect(totalAmount).toBe(expectedAmount)
	})

	test('handles mixed orders', () => {
		const aBulkProduct = Product.retrieve('TSHIRT')
		const a2x1Product = Product.retrieve('VOUCHER')
		const aRegularProduct = Product.retrieve('MUG')
		const expectedAmount = 227.5

		const products = [
			...Array(10).fill(aBulkProduct),
			...Array(11).fill(a2x1Product),
			aRegularProduct,
		]
		const totalAmount = PriceManager.calculateTotal(products)

		expect(totalAmount).toBe(expectedAmount)

	})

});
