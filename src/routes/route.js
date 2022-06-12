const express = require('express');
const router = express.Router();
 const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


/*----------------------This is the Public Side Code-----------------------*/

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController.createAuthor)
router.get("/getBooksByChetanBhagat", BookController.getBooksByChetanBhagat)
router.get("/authorBooks", BookController.authorBooks)
router.get("/booksByAuthorId",BookController.booksByAuthorId)
router.get("/getAuthorByAge",BookController.getAuthorByAge)

module.exports = router;
