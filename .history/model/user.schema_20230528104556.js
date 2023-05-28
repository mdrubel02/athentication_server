const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
{
    firstName:{
        type: String,
        unique: true,
        require: [true, 'name must be require']
    },
    lastName:{
        type: String,
        unique: true,
        require: [true, 'name must be require']
    },
    email:{
        type: String,
        unique: true,
        require: [true, 'name must be require']
    },
    password:{
        type: String,
        unique: true,
        require: [true, 'password is require'],
    }
},
{
    timestamps: true,
}
)


const User = mongoose.model("User", userSchema);
module.exports = User;