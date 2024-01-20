const UserModel = require("../model/userModel");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET_KEY;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //when we use frontend then we have to extract the token from frontend Header
opts.secretOrKey = SECRET_KEY;

const LocalStategy = new localStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            done(null, false, { message: 'no such user email' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            done(null, { message: "Password is wrong" });
        } else {
            const token = jwt.sign({ id: user._id, fullName: user.fullName, email: user.email, role: user.role }, SECRET_KEY)
            done(null, { token });
        }
    } catch (error) {
        done(error, false, { message: "there is an error in local startegy" })
    }
})
const jwtStrategy = new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        const user = await UserModel.findById(jwt_payload.id);
        if (user) {
            return done(null, { id: user._id, fullName: user.fullName, email: user.email, role: user.role }); //this call serilizer
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
})


module.exports = { LocalStategy, jwtStrategy }