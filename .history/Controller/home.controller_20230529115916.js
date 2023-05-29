const Home = require('../model/home.schema')
exports.homeGet = async (req, res) => {
    try {
        const { amount, description, type } = req.body;
        console.log(type);
        console.log(req.User._id);
        // const transaction = new Transaction({
        //   amount,
        //   description,
        //   date,
        //   user_id: req.user._id,
        //   category_id,
        // });
        // await transaction.save();
        res.send('success');

    } catch (error) {
        res.status(406).json({
            status: 'filed',
            message: error.message
        })
    }
}

exports.homePost = async (req, res) => {
    try {
        const user = req.body;
        console.log(user);

        // const transaction = new Home({
        //     amount,
        //     description,
        // });
        // console.log(transaction);
        // const result = await transaction.save()
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