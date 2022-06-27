const express = require('express');
const router = express.Router();

// --Start Import Controllers--
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
// --End Import Controllers--

// --Start Import Middlewares--
const middleware = require("../middleware/auth.js")
// --End Import Middlewares--

// --Start Import Routes--
router.post("/authors", authorController.createAuthor) //create author 

router.post("/login", authorController.login) //author login 

router.get("/blogs", middleware.authentication, blogController.getBlogs) //get all blogs which are published and not deleted
router.post("/blogs", middleware.authentication, blogController.createBlog) //add blogs
router.put("/blogs/:blogId", middleware.authentication, middleware.authorisation, blogController.updateBlog) //update blog
router.delete("/blogs/:blogId", middleware.authentication, middleware.authorisation, blogController.deleteBlog) //delete blog
// --End Import Routes--

module.exports = router; //Export routes