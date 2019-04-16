import PriceManager from './PriceManager'

class Basket {
  constructor(id, products = []) {
    if (!id) {
      throw new Error("Cannot create a Basket without an ID");
    }
    this.id = id;
    this.products = products;
    this.amount = 0;
    if (products.length) {
      this._calculateAmount();
    }
  }

  // TODO: Makes sense to use two methods for single an multiple params?
  addProduct(product) {
    this.products.push(product);
    this._calculateAmount();
  }

  addProducts(products) {
    const itsOnlyOneProduct = !products.length;
    if (itsOnlyOneProduct) {
      products = [products];
    }
    products.forEach(product => {
      this.addProduct(product);
    });
  }

  serialize() {
    return {
      id: this.id,
      products: this.products,
      amount: this.amount
    };
	}

	_generateProductMap(){
		const productMap = {}

    for (let i = 0; i < this.products.length; i++) {
			const currentProduct = this.products[i]

			const productKey = productMap[currentProduct.code]
			const currentQuantity = productKey && productKey.quantity

			productMap[currentProduct.code] = {
				price: currentProduct.price,
				promotion: currentProduct.promotion,
				quantity: currentQuantity + 1 || 1,
			}

		}
		return productMap
	}

  _calculateAmount() {
		const productMap = this._generateProductMap()
    this.amount = PriceManager.calculateTotal(productMap);
  }
}

export default Basket;
