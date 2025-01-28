const router = require("express").Router()

router.use("/category",require("./category.routes"))
router.use("/product",require("./product.routes"))
router.use("/order",require("./order.routes"))


module.exports = router
