import { Schema, model, models } from "mongoose";

var userCreditSchema = new Schema({
  Email: { type: String },
  Password: { type: String },
});

var UsersCredit = models.UsersCredit || model("UsersCredit", userCreditSchema);

export default UsersCredit;
