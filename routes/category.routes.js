const router = require("express").Router()
const CategoryController = require("../controller/category.controller")

const categoryController = new CategoryController()

router.get("/getAllCategories",categoryController.getAll);
router.post("/addCategory",categoryController.add)
router.post("/update",categoryController.update)
router.post("/delete",categoryController.deleteById)
router.post("/getById",categoryController.getById)

module.exports = router