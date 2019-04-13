import { CreateBasket, RetrieveBaskets, RemoveBasket, RetrieveBasket, AddProductsToBasket } from "../actions";

// TODO: Problem with repeated naming between controllers,actions,collections etc..
exports.createBasket = async (req, res) => {
	const basket = await CreateBasket.do()

	res.json(basket)
};

exports.getAllBaskets = async (req, res) => {
  const baskets = await RetrieveBaskets.do()

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
	await RemoveBasket.do(basketId)

	res.sendStatus(204)
};

exports.addProductsToBasket = async (req, res) => {
	const { basketId } = req.params;
	const products = req.body

	const updatedBasket = await AddProductsToBasket.do(basketId, products)

	res.json(updatedBasket)
};
