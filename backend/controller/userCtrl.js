const UserModel = require("../model/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const isUserThere = await UserModel.findOne({ email });
        if (isUserThere) return res.status(201).json({ success: false, message: "user Already Register" })
        const user = new UserModel({ fullName, email, password: passwordHash });
        const doc = await user.save();
        req.login({ id: doc._id, role: doc.role, email: doc.email, fullName: doc.fullName }, (err) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                let token = jwt.sign({ id: doc._id, role: doc.role, email: doc.email, fullName: doc.fullName }, SECRET_KEY);
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 3600000),
                    httpOnly: true,
                }).status(201).json({ success: true, message: "User Register Successfully", token })

            }
        })

    } catch (error) {
        console.log("register error", error)
        res.status(401).json({ success: false, message: "Failed to Register Data" });
    }
}
exports.login = async (req, res) => {
    //now save our token in cookie at frontend
    const token = req.user.token;
    res.cookie("jwt", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
    }).status(201).json(token)
}

exports.checkUser = async (req, res) => {
    const user = req.user;
    if (user) {
        return res.json(user);
    } else {
        return res.status(401);
    }
}