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
        require: [true, 'email address is require'],
        validate:{
            validator: (value)=>
            validator.isStrongPassword(value,{
                minLength: 6,
                minLowercase:2,
                minNumbers:1,
                minUppercase: 1,
                minSymbol: 1,
            }),
            message: "Password {value} is not enough"
        }
    },
},
{
    timestamps: true,
}
)


const User = mongoose.model("User", userSchema);
module.exports = User;