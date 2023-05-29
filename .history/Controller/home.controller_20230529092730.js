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