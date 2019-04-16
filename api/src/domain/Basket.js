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

  _calculateAmount() {
    this.amount = PriceManager.calculateTotal(this.products);
  }
}

export default Basket;
