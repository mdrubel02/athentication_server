const pkg = require('passport-jwt');
const JwtStrategy = pkg.Strategy
const ExtractJwt = pkg.ExtractJwt;
const User = require('../model/user.schema')
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
const passport = (passport) => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log(jwt_payload.payload);
        User.findOne({ _id: jwt_payload.payload._id }, function (err, user) {
            // console.log(id);
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}

module.exports = passport;