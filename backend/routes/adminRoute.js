const express = require("express");
const { getAllBloggertoAdmin, editAdminDetails, deleteAdminDetails } = require("../controller/adminCtrl");
const router = express.Router();

router.get("/", getAllBloggertoAdmin)
    .patch("/:id", editAdminDetails)
    .delete("/:id", deleteAdminDetails)

module.exports = router;