const AdminModel = require("../model/adminModel");

exports.getAllBloggertoAdmin = async (req, res) => {
    try {
        let query = await AdminModel.find({});
        if (req.query._page && req.query._limit) {
            const pageSize = req.query._limit;
            const page = req.query._page;
            query = query.skip(pageSize * (page - 1)).limit(pageSize);
        }
        const allBlogger = await query.exec();
        res.status(201).json({ success: true, message: "All admins", data: allBlogger })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Fetch admins" });
        console.log("Admin get admins  error", error)
    }
}
// exports.addAdminDetails = async (req, res) => {
//     try {
//         const adminDetails = new AdminModel(req.body);
//         await adminDetails.save();
//         res.status(201).json({ success: false, message: "Add Admin Details Successfully" });


//     } catch (error) {
//         res.status(401).json({ success: false, message: "Failed to Add Admin Details Data" });
//         console.log("Admin add Details error", error)
//     }
// }
exports.editAdminDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await AdminModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json({
            success: true,
            message: "admin Profile updated Successfully",
            data: admin
        })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to update Admin Data" });
        console.log("Admin Update error", error)
    }
}
exports.deleteAdminDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await AdminModel.findByIdAndDelete({ _id: id });
        if (!admin) {
            res.status(201).json({
                success: false,
                message: "admin Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "admin deleted Successfully",
            adminDeletedID: admin._id
        })

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to delete Admin" });
        console.log("getBlog error", error)
    }
}