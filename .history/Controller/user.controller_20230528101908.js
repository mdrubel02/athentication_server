const { userCreateService } = require("../Services/user.services");

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
    const result = await userCreateService(req.body);
    res.status(201).json({
        status : 'success',
        message: 'data insert successfully',
        data: result
    })
   } catch (error) {
    res.status(400).json({
        status: 'filed',
        message: 'data is not insert',
        error: error.message
    })
   }
}