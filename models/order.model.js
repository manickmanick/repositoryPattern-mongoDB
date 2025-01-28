const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    name:{type:String,required:true},
    size:{type:String,required:true},
    quantity:{type:Number,required:true},
},{
    versonKey:false
})

const order = mongoose.model("Orders",orderSchema)

module.exports = order
