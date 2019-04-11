import { CreateBasket, RetrieveBaskets, RemoveBasket, RetrieveBasket } from "../actions";

// TODO: Problem with repeated naming between controllers,actions,collections etc..
exports.createBasket = async (req, res) => {
	const basket = await CreateBasket.run()

	res.json(basket)
};

exports.getAllBaskets = async (req, res) => {
  const baskets = await RetrieveBaskets.run()

	res.json(
		{
			baskets,
		}
	)
};

exports.getBasket = async (req, res) => {
  const { basketId } = req.params;

	const basket = await RetrieveBasket.do(basketId)

	res.json(basket)
};

exports.deleteBasket = async (req, res) => {
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
