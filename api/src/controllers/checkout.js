exports.createBasket = (req, res) => {
  res.json({
    message: `create basket`
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