import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var DatascienceSchema = new Schema({
  category: { type: String },
  domain: { type: String },
  name: { type: String },
  image: { type: String },
  desc: [{ type: String }],
});

var Data = models.Data || model("Data", DatascienceSchema);

export default Data;
// module.exports = User = mongoose.model("User", UserSchema);
