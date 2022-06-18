const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const auth1=require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users",userController.createUser)

router.get("/users/:userId", auth1.authorise,userController.getUserData)


router.post("/users/:userId/posts",auth1.authorise, userController.postMessage)


router.put("/users/:userId", auth1.authorise,userController.updateUser)

router.delete('/users/:userId',auth1.authorise, userController.deleteUser)

module.exports = router;