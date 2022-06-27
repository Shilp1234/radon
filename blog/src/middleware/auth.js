const jwt = require("jsonwebtoken");
const authorModel = require('../models/authorModel')
const blogModel = require('../models/blogModel')

const authentication = async (req, res, next) => {
    try {
        let token = req.headers["x-api-key"]
        if (!token) {
            res.status(401).send({ status: false, msg: "Token Not Present" })
        } 

        let decodedToken = jwt.verify(token, "functionUp-radon")
        if (!decodedToken) {
            res.status(401).send({ status: false, msg: "Invalid Token" })
        }
        // console.log(decodedToken);
        // req.headers["x-api-key"] = decodedToken;
        next()
    }
     catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const authorisation = async (req, res, next) => {
    try {
        let token = req.headers["x-api-key"]        
        let decodedToken = jwt.verify(token, "functionUp-radon")

        let userId = decodedToken.authorId
        let blog = await blogModel.findOne({ _id: req.params.blogId });
      
        if (!blog) {
            return res.send({
                status: false,
                msg: "Blog not Found",
            });
        }

        if (blog.author_id != userId) {
            return res.status(403).send({ status: false, msg: "Cannot Proceed Further. You Are Not Authorize" })
        } else {
            return next();
        }

    } catch (err) {
        console.log(err);
    }
}

module.exports.authentication = authentication
module.exports.authorisation = authorisation
