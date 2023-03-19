import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var codingSchema = new Schema({
  category: { type: String },
  domain: { type: String },
  name: { type: String },
  image: { type: String },
  desc: [{ type: String }],
});

var Coding = models.Coding || model("Coding", codingSchema);

export default Coding;
// module.exports = User = mongoose.model("User", UserSchema);
