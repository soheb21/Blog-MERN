const express = require("express");
const { login, createUser, checkUser } = require("../controller/userCtrl");
const router = express.Router();
const passport = require("passport");

router.post("/register", createUser)
      .post("/login", passport.authenticate("local"), login)
      .get("/check", passport.authenticate('jwt', { session: false }), checkUser)



module.exports = router;