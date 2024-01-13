const express = require("express");
const { login, createUser } = require("../controller/userCtrl");
const router = express.Router();

router.post("/register", createUser)
    .post("/login", login)
    


module.exports = router;