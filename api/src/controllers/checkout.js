import { CreateBasket, RetrieveBaskets, RemoveBasket, RetrieveBasket } from "../actions";

// TODO: Problem with repeated naming between controllers and actions
exports.createNewBasket = async (req, res) => {
	const basket = await CreateBasket.run()

	res.json(basket)
};

exports.getAllBaskets = (req, res) => {
  RetrieveBaskets.run()
    .then(baskets => {
      res.json({
        baskets
      });
    })
    .catch(error => {
      res.status(500);
      res.send("Error retrieving baskets!");
    });
};

exports.getBasketAmount = async (req, res) => {
  const { basketId } = req.params;

	const basket = await RetrieveBasket.do(basketId)

	res.json(basket)
};

exports.removeBasket = async (req, res) => {
	const { basketId } = req.params;
	await RemoveBasket.run(basketId)

	res.sendStatus(204)
};

exports.addProductsToBasket = (req, res) => {
  const { basketId } = req.params;
  const { products } = req.body;

  res.json({
    message: "Adding products to basket",
    basketId,
    products
  });
};
