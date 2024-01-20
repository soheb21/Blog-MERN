const passport = require("passport")
exports.isAuth = () => {
    return passport.authenticate('jwt');
};
exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};