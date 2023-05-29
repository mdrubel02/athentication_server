const mongoose = require('mongoose');


const homeSchema = ({
    amount: Number,
    description: String,
    type: {
        type: String,
        enum: ["expense", "income", "transfer"],
        default: "expense",
    },
    User_id: mongoose.Types.ObjectId,
    createdAt: { type: Date, default: Date.now },
})

const Home = mongoose.model('Home', homeSchema)
module.exports = Home; 