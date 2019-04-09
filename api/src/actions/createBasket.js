import BasketCollection from '../collections/Basket'

const createBasket = () => {
	return new Promise((resolve, reject) => {
		BasketCollection.saveBasket()
		.then(basket => {
			const {id, products} = basket
			resolve({
				id,
				products
			})
		})
		.catch(error => {
			console.error(error)
		})
	})
}

export default createBasket
