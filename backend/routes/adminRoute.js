const express = require("express");
const { getAllBloggers, addAdminDetails, editAdminDetails, deleteAdminDetails } = require("../controller/adminCtrl");
const router = express.Router();

router.get("/", getAllBloggers)
    .post("/", addAdminDetails)
    .patch("/:id", editAdminDetails)
    .delete("/:id", deleteAdminDetails)

module.exports = router;