import createBasket from '../actions/createBasket'

// TODO: Problem with repeated naming between controllers and actions
exports.createNewBasket = (req, res) => {
		createBasket()
		.then(basket => {
			res.json(basket)
		})
		.catch(error => {
			res.status(500)
			res.send('Error creating basket!')
		})
}

exports.getBasketAmount = (req, res) => {
  const {basketId} = req.params

  res.json({
    message: `get basket amount`,
    basketId
  })
}

exports.deleteBasket = (req, res) => {
  const {basketId} = req.params

  res.json({
    message: 'delete basket!',
    basketId
  })
}

exports.addProductsToBasket = (req, res) => {
  const {basketId} = req.params
  const {products} = req.body

  res.json({
    message: 'Adding products to basket',
    basketId,
    products,
  })
}
