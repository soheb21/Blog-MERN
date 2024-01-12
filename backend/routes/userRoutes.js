const express = require("express");
const { login, register } = require("../controller/userCtrl");
const router = express.Router();

router.post("/", register)
    .post("/", login)


module.exports = router;