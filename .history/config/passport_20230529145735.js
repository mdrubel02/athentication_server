const pkg = require('passport-jwt');
const JwtStrategy = pkg.Strategy
const ExtractJwt = pkg.ExtractJwt;
const User = require('../model/user.schema')
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
const passport = (passport) => {
    passport.use(new JwtStrategy(opts, async function (jwt_payload, next) {
        const email =(jwt_payload.payload.username);
        console.log(email);
        const user = await User.findOne({email})
        console.log(user);
    }));
}

module.exports = passport;