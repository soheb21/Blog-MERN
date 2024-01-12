const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },

})

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel