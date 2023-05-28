const User = require("../model/user.schema");
const bcrypt = require('bcryptjs');
const saltRounds = bcrypt.genSaltSync(10);

exports.userCreateService = async (data)=>{
   const {email,password} = data;
   const userExists = await User.findOne({email})
   if(userExists){
    res.status(406).json({message: 'user already exists'})
    return;
   }

   const salt = await bcrypt.genSaltSync(saltRounds)
   const hashedPassword = await bcrypt.hashSync(password,salt);
   console.log(hashedPassword);

//    const user = await User({})
//    console.log(user);
//    const saveUser = User.create(data)
//    return saveUser;

}