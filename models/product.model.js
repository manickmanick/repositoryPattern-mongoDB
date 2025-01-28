const mongoose = require("mongoose");
// const category = require("./category.model");
const objectId = mongoose.Schema.Types.ObjectId

const productSchema = mongoose.Schema({
    _id:{type:objectId,auto:true},
    name:{type:String,required:true},
    unitPrice:{type:Number,required:true},
    categoryId:{type:objectId,ref:"categories"}
},{
    versionKey:false
})

const products = mongoose.model("products",productSchema)
module.exports = products