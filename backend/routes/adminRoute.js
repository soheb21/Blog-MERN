const express = require("express");
const { getAllBloggertoAdmin, addAdminDetails, editAdminDetails, deleteAdminDetails } = require("../controller/adminCtrl");
const router = express.Router();

router.get("/", getAllBloggertoAdmin)
    .post("/", addAdminDetails)
    .patch("/:id", editAdminDetails)
    .delete("/:id", deleteAdminDetails)

module.exports = router;