import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var DigitalSchema = new Schema({
  category: { type: String },
  domain: { type: String },
  name: { type: String },
  image: { type: String },
  desc: [{ type: String }]
});

var Digital = models.Digital || model("Digital", DigitalSchema);

export default Digital;
// module.exports = User = mongoose.model("User", UserSchema);
