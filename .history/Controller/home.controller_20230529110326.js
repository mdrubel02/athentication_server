exports.homeGet = async (req,res)=>{
    try {
        res.json({message:'hello home route'})
        
    } catch (error) {
        res.status(406).json({
            status: 'filed',
            message: error.message
        })
    }
}

exports.homePost = async (req,res)=>{
    try {
        res.send('hello post user')
    } catch (error) {
        
    }
}