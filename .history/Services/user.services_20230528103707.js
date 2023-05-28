const User = require("../model/user.schema");

exports.userCreateService = async (data)=>{
   const {email} = data;
   const userExists = await User.findOne({email})
   if(userExists){
    res.status(406).json({message: 'user already exists'})
    return;
   }
   const user = await User({})
   console.log(user);
   const saveUser = User.create()
   return saveUser;

}