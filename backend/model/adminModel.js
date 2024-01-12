const mongoose = require("mongoose");

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
const adminSchema = mongoose.Schema({
    Allblogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "blogProfile" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    aboutAdmin: Object

}, opts)

const AdminModel = mongoose.model("admin", adminSchema);
module.exports = AdminModel