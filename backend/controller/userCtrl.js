const UserModel = require("../model/userModel");

exports.createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const isUserThere = await UserModel.findOne({ email });
        if (isUserThere) return res.status(201).json({ success: false, message: "user Already Register" })
        const user = new UserModel({ fullName, email, password });
        await user.save();
        res.status(201).json({ success: true, message: "User Register Successfully" });

    } catch (error) {
        console.log("register error", error)
        res.status(401).json({ success: false, message: "Failed to Register Data" });
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(201).json({ success: false, message: "user not available" })
        user.password === password
            ? res.status(201).json({ success: true, message: "Login Successfully", data: user })
            : res.status(201).json({ success: false, message: "Login password weong" });


    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Fetch Data" });
        console.log("getBlog error", error)
    }
}
