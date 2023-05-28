const User = require("../model/user.schema");

exports.userCreateService = async (data)=>{
   const {email} = data;
   const user = await User.findOne({email})
   console.log(user);
}