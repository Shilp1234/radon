const authorModel = require('../models/authorModel')
const jwt = require("jsonwebtoken");

const createAuthor = async (req, res, next) => {
    try {
        const authordata = req.body
        const finalData = await authorModel.create(authordata);
        return res.status(201).send({ status:true, msg: finalData })
    } catch (error) {
        res.status(500).send({ status:false, msg: error.message })
    }    
}

const login = async (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        let author = await authorModel.findOne({ email: email, password: password });
        if (!author){
            return res.send({
                status: false,
                msg: "email or the password is not corerct",
            });
        }            
        let token = jwt.sign({
            authorId: author._id.toString(),
            // expireDate:"56d"                
        }, "functionUp-radon" );

        res.setHeader("x-api-key", token);
        res.status(201).send({ status: true, msg: token })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.createAuthor = createAuthor
module.exports.login = login