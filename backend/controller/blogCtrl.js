
const { BlogModel } = require("../model/blogModel");


exports.getAllBlogs = async (req, res) => {
    try {
        let query = BlogModel.find({});
        if (req.query.category) {
            query = query.find({ category: req.query.category })
        }
        if (req.query._page && req.query._limit) {
            const pageSize = req.query._limit;
            const page = req.query._page;
            query = query.skip(pageSize * (page - 1)).limit(pageSize);
        }
        const allBlogs = await query.exec();
        res.status(201).json({ success: true, messgae: "All Blogs", data: allBlogs })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Fetch Blogs" });
        console.log("getAllBlog error", error)
    }
}
exports.addBlog = async (req, res) => {
    try {
        const blog = new BlogModel(req.body);
        await blog.save();
        res.status(201).json({ success: true, message: "Blog is Added Successfully" });

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Add Blog" });
        console.log("addBlog error", error)
    }
}
exports.editBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json({
            success: true,
            message: "Blog updated Successfully",
            data: blog
        })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to update Blog" });
        console.log("Update Blog error", error)
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findByIdAndDelete({ _id: id });
        if (!blog) {
            res.status(201).json({
                success: false,
                message: "blog Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "blog deleted Successfully",
            blogDeletedID: blog._id
        })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Delete Blog" });
        console.log("Delete Blog error", error)
    }
}

exports.getBlogDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById({ _id: id });
        if (!blog) {
            res.status(201).json({
                success: false,
                message: "blog Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "blog Details fetched Successfully",
            data: blog
        })
    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to fetch Blog details Data" });
        console.log("Blog details error", error)
    }
}
exports.addComments = async (req, res) => {
    try {
        //blogDetails id
        const { id } = req.params;
        const { comments } = req.body;
        const blog = await BlogModel.findById({ _id: id });
        const comment = blog.comments;
        comment.push(comments)
        const data = await blog.save();
        res.status(201).json({ success: true, data })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to add Blog Commments details Data" });
        console.log("comment error", error)
    }
}
