const router = require("express").Router()
const ProductController = require("../controller/product.controller")

const productController = new ProductController()

router.get("/getAllProducts",productController.getAll);
router.post("/addProducts",productController.add)
router.post("/update",productController.update)
router.post("/delete",productController.deleteById)
router.post("/getById",productController.getById)

module.exports = router