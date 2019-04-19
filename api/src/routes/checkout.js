import express from "express";
import checkout from "../controllers/checkout";
import { catchErrors } from "../middlewares/errorHandler";

const router = express.Router();

//TODO: Relationship Service <> Controller?
//TODO: Cómo afrontar el plantemiento, primero lógico o rutas?
router.post("/", catchErrors(checkout.createBasket));
router.get("/", catchErrors(checkout.getAllBaskets));
router.get("/:basketId", catchErrors(checkout.getBasket));
router.delete("/:basketId", catchErrors(checkout.deleteBasket));
router.post("/:basketId", catchErrors(checkout.addProductsToBasket));

module.exports = router;
