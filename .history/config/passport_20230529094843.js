const pkg = require('passport-jwt');
const JwtStrategy = pkg.Strategy
const ExtractJwt = pkg.ExtractJwt;
const User = require('../model/user.schema')
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
export default (passport) => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ id: jwt_payload.sub }, function (err, user) {
           
        });
    }));
}
