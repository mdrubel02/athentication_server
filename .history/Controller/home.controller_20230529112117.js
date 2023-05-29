exports.homeGet = async (req,res)=>{
    try {
       
        res.send('home get page')
        
    } catch (error) {
        res.status(406).json({
            status: 'filed',
            message: error.message
        })
    }
}

exports.homePost = async (req,res)=>{
    try {
        console.log(req.body);
        res.send('hello post user')
    } catch (error) {
        res.status(406).json({
            status: 'filed',
            message: 'data not inserted',
            err: error.message,
        })
    }
}