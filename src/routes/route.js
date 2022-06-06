const express = require('express');
const router = express.Router();
const userModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookControllers")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createBook",bookController .createBook  )

router.get("/getBookData", bookController.getBookData)

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;