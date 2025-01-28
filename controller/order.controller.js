const OrderRepository = require("../repositories/order.repository.js")
const BaseController = require("./base.controller.js")

const orderRepo = new OrderRepository()

class OrderController extends BaseController{

    constructor(){
        super(OrderRepository)
    }

    async getPizzaOrders(req,res){
        try {
            const result = await orderRepo.getPizzaOrderBySize();
            return res.status(200).json(result);
            
        } catch (error) {
            console.error("Error in controller:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}


module.exports = OrderController