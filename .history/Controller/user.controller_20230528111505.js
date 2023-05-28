const { userCreateService } = require("../Services/user.services");
const bcrypt = require('bcryptjs');
const User = require("../model/user.schema");

exports.getUser = async (req,res)=>{
    
    res.status(201).json({
        status: 'success',
        message: 'user successfully loaded'
    })
   res.status(401).json({
    status: 'filed',
    message: 'not found user'
   })
}

exports.postUser = async(req,res)=>{
   try {
    const {email, password,firstName} =  (req.body);
    const userExists = await User.findOne({email})
    console.log(userExists);
    if(userExists){
     res.status(406).json({message: 'user already exists'})
     return;
    }
    const userName = await User.findOne({firstName})
    console.log(userName);
    if(userName){
     res.status(406).json({message: 'user name already exists'})
     return;
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hashedPassword = await bcrypt.hashSync(password,salt);
    console.log(hashedPassword);
    res.status(201).json({
        status : 'success',
        message: 'data insert successfully',
    })
   } catch (error) {
    res.status(400).json({
        status: 'filed',
        message: 'data is not insert',
        error: error.message
    })
   }
}