import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var ProductSchema = new Schema({
  category: { type: String },
  domain: { type: String },
  name: { type: String },
  image: { type: String },
  desc: [{ type: String }],
});

var Product = models.Product || model("Product", ProductSchema);

export default Product;
// module.exports = User = mongoose.model("User", UserSchema);
