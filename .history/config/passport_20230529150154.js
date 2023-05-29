const pkg = require('passport-jwt');
const JwtStrategy = pkg.Strategy
const ExtractJwt = pkg.ExtractJwt;
const User = require('../model/user.schema')
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
const passport = (passport) => {
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const email = (jwt_payload.payload.username);
            const user = await User.findOne({ email })
            if(user){
                return done (null, user)
            }
            else{
                return done(null, false)
            }
        } catch (error) {
            return done(error, false);
        }
    }));
}

module.exports = passport;