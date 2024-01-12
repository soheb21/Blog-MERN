const express = require("express");
const { getAllBlogs, addBlog, getBlogDetails, editBlog, deleteBlog } = require("../controller/blogCtrl");
const router = express.Router();

router.get("/", getAllBlogs)
    .get("/:id", getBlogDetails)
    .post("/", addBlog)
    .patch("/:id", editBlog)
    .delete("/:id", deleteBlog)

module.exports = router;