const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser(
    fullname.firstname,
    fullname.lastname,
    email,
    hashedPassword
  );
  const token = user.generateAuthToken();
  res.status(201).json({ user, token });
};
module.exports.loginUser=async(req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({error:errors.array()});
  }
  const{email,password}=req.body;
  const user=await userModel.findOne({email}).select("+password")
  if(!user){
    return res.status(401).json({message:"Invalid email or password"});
  }
  const isMatch=await user.comparePassword(password);
  if(!isMatch){
    return res.status(401).json({message:"Invalid email or password"});
  }
  const token=user.generateAuthToken();
  res.status(200).json({user,token});
};
module.exports.getUserProfile=async(req,res)=>{
  
}

