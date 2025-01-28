
const ProductRepository = require("../repositories/product.repository.js")
const BaseController = require("./base.controller.js")


const productRepositoryInstance = new ProductRepository()
class ProductController extends BaseController{

    constructor(){
        super(ProductRepository)
    }

    async getProductWithCategory(req,res){
        try {
            const {id} = req.body;
            const product = await productRepositoryInstance.getProductWithCategory(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            return res.status(200).json(product);
        } catch (error) {
            console.error("Error fetching product with category:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
module.exports = ProductController