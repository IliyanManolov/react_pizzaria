const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    picture: {type: String, required: true},
    ingredients: [{type: String, required: true}],
    category: {type: String, required: true}
  }
)

module.exports = mongoose.model("Product", ProductSchema)