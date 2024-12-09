const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: string,
      require: true,
      minlength: [3, "First name must be at least 3 character long"],
    },
    lastname: {
      type: string,
      require: true,
      minlength: [3, "Last name must be at least 3 character long"],
    },
  },
  email: {
    type: string,
    require: true,
    unique: true,
    minlength: [6, "Email must be at least 6 character long"],
  },
  password: {
    type: string,
    require: true,
  },
  socketId: {
    type: string,
    require: true,
    select: false,
  },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.static.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};
const userModel=mongoose.model("user",userSchema);

module.exports=userModel;
