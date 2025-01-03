const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true, 
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      required: true, // Fixed typo
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true, 
    unique: true,
    minlength: [6, "Email must be at least 6 characters long"],
  },
  password: {
    type: String,
    required: true, 
  },
  socketId: {
    type: String,
    select: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:'4d'});
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static methods
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
