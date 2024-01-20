const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./config/DB");
const session = require("express-session")
const passport = require("passport");
const cookieParser = require("cookie-parser");
const { LocalStategy, jwtStrategy } = require("./utils/passport_strategy");


//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: "session-secret-key",
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.authenticate("session"))



//Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/blog", require("./routes/blogRoute"));
app.use("/api/v1/blogProfile", require("./routes/blogProfileRoute"));
app.use("/api/v1/admin", require("./routes/adminRoute"));


//passport
passport.use("local",LocalStategy)
passport.use('jwt',jwtStrategy );

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    })
});
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    })
});
//Connecting with Database
connectDB();

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))