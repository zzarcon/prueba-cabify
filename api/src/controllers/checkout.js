import CreateBasket from "../actions/CreateBasket";
import RetrieveBaskets from "../actions/RetrieveBaskets";

// TODO: Problem with repeated naming between controllers and actions
exports.createNewBasket = (req, res) => {
  CreateBasket.run()
    .then(basket => {
      res.json(basket);
    })
    .catch(error => {
      res.status(500);
      res.send("Error creating basket!");
    });
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

exports.getBasketAmount = (req, res) => {
  const { basketId } = req.params;

  res.json({
    message: `get basket amount`,
    basketId
  });
};

exports.deleteBasket = (req, res) => {
  const { basketId } = req.params;

  res.json({
    message: "delete basket!",
    basketId
  });
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
