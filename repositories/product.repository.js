const BaseRepository = require("./base.repository")
const product = require("../models/product.model")


class ProductRepository extends BaseRepository{
    constructor(){
        super(product)
    }

    async getProductWithCategory(productId){
        try {
            return await product.findById(productId).populate("categoryId")
        } catch (error) {
            console.error("Error fetching product with category:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = ProductRepository