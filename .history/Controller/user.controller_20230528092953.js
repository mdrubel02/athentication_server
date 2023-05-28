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
    const user = req.body;
    console.log(user);
}