const pkg = require('passport-jwt');
const JwtStrategy = pkg.JwtStrategy
const ExtractJwt = pkg.ExtractJwt;
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
export default (passport) => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ id: jwt_payload.sub }, function (err, user) {
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
