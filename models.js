const mongooose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("UserModel", userSchema);
