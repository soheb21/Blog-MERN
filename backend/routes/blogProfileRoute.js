const express = require("express");
const { getProfileDetails, addProfile, editProfile, deleteProfile } = require("../controller/blogProfileCtrl");
const { isAuth } = require("../middleware/common");
const router = express.Router();

router.get("/:id", isAuth(), getProfileDetails)
    .post("/", isAuth(), addProfile)
    .patch("/:id", isAuth(), editProfile)
    .delete("/:id", isAuth(), deleteProfile)

module.exports = router;