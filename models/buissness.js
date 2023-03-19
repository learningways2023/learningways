import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var BuisnessSchema = new Schema({
  category: { type: String },
  domain: { type: String },
  name: { type: String },
  image: { type: String },
  desc: [{ type: String }],
});

var Buisness = models.Buisness || model("Buisness", BuisnessSchema);

export default Buisness;
// module.exports = User = mongoose.model("User", UserSchema);
