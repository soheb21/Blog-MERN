const mongoose = require("mongoose");

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
const blogProfileSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    Allblogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "blog" }],

}, opts)

const BlogProfileModel = mongoose.model("blogProfile", blogProfileSchema);

const blogSchema = mongoose.Schema({

    blog_Title: { type: String, required: true },
    category: { type: String, required: true },
    blog_details: [{ type: String, required: true }],
    blog_1_img: { type: String, required: true },
    blog_2_img: { type: String },
    blog_3_img: { type: String },
    userBlogId: { type: mongoose.Schema.Types.ObjectId, ref: "blogProfile", required: true },
    //In future we change this 2 field in sepaarte MODEl
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    comments: []


}, opts)

const BlogModel = mongoose.model("blog", blogSchema);


module.exports = { BlogProfileModel, BlogModel }