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