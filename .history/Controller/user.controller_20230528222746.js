const { userCreateService } = require("../Services/user.services");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require("../model/user.schema");

exports.getUser = async (req, res) => {

    res.status(201).json({
        status: 'success',
        message: 'user successfully loaded'
    })
    res.status(401).json({
        status: 'filed',
        message: 'not found user'
    })
}

exports.postUser = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = (req.body);
        const userExists = await User.findOne({ email })
        console.log(userExists);
        if (userExists) {
            res.status(406).json({ message: 'user already exists' })
            return;
        }
        const userName = await User.findOne({ firstName })
        console.log(userName);
        if (userName) {
            res.status(406).json({ message: 'user name already exists' })
            return;
        }
        const saltRounds = 10;
        const salt = await bcrypt.genSaltSync(saltRounds)
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const user = await User({
            firstName,
            lastName,
            password: hashedPassword,
            email
        })
        const result = await user.save()
        res.status(201).json({
            status: 'success',
            message: 'data insert successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'filed',
            message: 'data is not insert',
            error: error.message
        })
    }
}

exports.postLogin = async (req, res) => {
   try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    console.log(user.password);
    if (!user) {
        return res.status(406).json({
            message: 'your credent not found'
        })
    }

    const matched = await bcrypt.compare(password, user.password)
    console.log(matched);
    if(!matched){
        res.status(406).json({
            message: 'Your Password is not correct'
        })
    }
    const payload = {
        email,
        id: user._id
    }
    const token = jwt.sign({payload}, process.env.SECRET_KEY, { expiresIn: '6d' } )
    console.log(token);
    res.status(201).json({
        status: 'success',
        data: token,
        user: user
    })
   } catch (error) {
    res.status(401).json({
        status: 'filed',
        message: error.message
    })
   }
}