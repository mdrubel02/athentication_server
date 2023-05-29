const Home = require('../model/home.schema')
exports.homeGet = async (req, res) => {
    try {
        const result = await Home.find({});
        res.status(201).json({
            status: 'success',
            data: result
        })

    } catch (error) {
        res.status(406).json({
            status: 'filed',
            message: error.message
        })
    }
}

exports.homePost = async (req, res) => {
    try {
        const {amount,description} = req.body;
        // console.log(user);
        // const result = await Home.create(user)
        // console.log(result);

        const transaction = new Home({
            amount,
            description,
        
        });
        console.log(transaction);
        const result = await transaction.save()
        res.status(401).json({
            status: 'success',
            message: 'data successfully inserted',
            data: result
        })
    } catch (error) {
        res.status(406).json({
            status: 'filed',
            message: 'data not inserted',
            err: error.message,
        })
    }
}