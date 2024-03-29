const express = require("express");
const { getAllBlogs, addBlog, getBlogDetails, editBlog, deleteBlog, addComments } = require("../controller/blogCtrl");
const { isAuth } = require("../middleware/common");
const router = express.Router();

router.get("/", getAllBlogs)
    .get("/:id", getBlogDetails)
    .post("/:id", isAuth(), addBlog)
    .patch("/:id", isAuth(), editBlog)
    .delete("/:id", isAuth(), deleteBlog)
    .post("/comment/:id", isAuth(), addComments)


module.exports = router;