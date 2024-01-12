const express = require("express");
const { getProfileDetails, addProfile, editProfile, deleteProfile } = require("../controller/blogProfileCtrl");
const router = express.Router();

router.get("/:id", getProfileDetails)
    .post("/", addProfile)
    .patch("/:id", editProfile)
    .delete("/:id", deleteProfile)

module.exports = router;