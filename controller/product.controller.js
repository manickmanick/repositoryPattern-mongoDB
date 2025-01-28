
const ProductRepository = require("../repositories/product.repository.js")
const BaseController = require("./base.controller.js")

class ProductController extends BaseController{

    constructor(){
        super(ProductRepository)
    }
}
module.exports = ProductController