import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var UserSchema = new Schema({
  user: {},
});

var User = models.User || model("User", UserSchema);

export default User;
// module.exports = User = mongoose.model("User", UserSchema);
