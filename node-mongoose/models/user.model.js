const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userId:{type:Schema.Types.ObjectId},
  email: { type: String },
  password: { type: String },
  name: { type: String },
  age: { type: Number, maxlength: 3 },
  gender: { type: String, enum: ["Male", "Female"] },
  isActive: {type:Boolean},
  userType: {type:String},
});

module.exports = mongoose.model("users", userSchema);
