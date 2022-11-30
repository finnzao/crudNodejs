const mongoose=require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: ObjectId,
  title: String,
  descripition: String,
  price: Number
});

const ProductModel=mongoose.model('products',ProductSchema);

module.exports =ProductModel;