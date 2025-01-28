const BaseRepository = require("./base.repository")
const Order = require("../models/order.model")


class OrderRepository extends BaseRepository{
    constructor(){
        super(Order)
    }

    async getPizzaOrderBySize(){
        try {
            const result = await Order.aggregate([
                {
                    $match:{size:"medium"}
                },{
                    $group:{
                        _id:"$name",
                        totalQuantity:{$sum:"$quantity"}
                    }
                    
                },
                {
                    $project: { 
                        _id: 0, // Exclude the _id field from the output
                        name: "$_id", // Rename _id to name
                        totalQuantity: 1 // Keep the totalQuantity field
                    }
                }
            ])
            return result;
        } catch (error) {
            console.error("Error in aggregation:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = OrderRepository