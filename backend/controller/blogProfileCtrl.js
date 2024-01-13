const { BlogProfileModel } = require("../model/blogModel");

exports.getProfileDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const blogger = await BlogProfileModel.findById({ _id: id });
        if (!blogger) {
            res.status(201).json({
                success: false,
                message: "Blogger Profile Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "Blogger Details fetched Successfully",
            data: blogger
        })
    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Fetch Blogger Details" });
        console.log("Blogger Details error", error)
    }
}
exports.addProfile = async (req, res) => {
    try {
        const { bloggerName } = req.body;
        const newbloggerName = await BlogProfileModel.find({ bloggerName });
        if (newbloggerName) return res.status(201).json({ success: false, message: "@bloggername is already exits!" });
        const bloggerprofile = new BlogProfileModel(req.body);
        await bloggerprofile.save();
        res.status(201).json({ success: true, message: "Blogger is Added Successfully" });

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Add Blogger Data" });
        console.log("addBlogger error", error)
    }
}
exports.editProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const blogger = await BlogProfileModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json({
            success: true,
            message: "Blogger Profile updated Successfully",
            data: blogger
        })

    } catch (error) {
        console.log("Update Blogger PRofile Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to update Profile"
        })
    }
}
exports.deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const blogger = await BlogProfileModel.findByIdAndDelete({ _id: id });
        if (!blogger) {
            res.status(201).json({
                success: false,
                message: "blogger Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "blogger deleted Successfully",
            bloggerDeletedID: blogger._id
        })
    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to delete blogger" });
        console.log("delete blogger error", error)
    }
}