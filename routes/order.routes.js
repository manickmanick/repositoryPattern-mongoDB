const router = require("express").Router()
const OrderController = require("../controller/order.controller")

const orderControler = new OrderController();

router.get("/getPizzaMedim",orderControler.getPizzaOrders);
router.post("/addPizza",orderControler.add);

module.exports = router