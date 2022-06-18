//const jwt=require('jsonwebtoken')


const authenticate = function(req, req, next) {
     //check the token in request header
    //validate this token
    try{
        let token=req.headers['x-Auth-token']
        if(!token) token=req.headers['x-auth-token']
        if(!token) return res.status(424).send({status:false,msg:"Token Must Be Present"})
        let decodedToken=jwt.verify(token,'functionup-thorium')
        if(!decodedToken) return res.status(400),send({status:false,msg:"Token Is Not Valid"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.send({ msg: "Error", error: err.message })
    }
    next()
}
   
    
const authorise = function(req, res, next) {
    try{

        let token=req.headers['x-Auth-token']
        if(!token) token=req.headers['x-auth-token']
        let decodedToken = jwt.verify(token, 'functionup-thorium')
        let userToBeModified=req.params.userId
        let userLoggedIn=decodedToken.userId
        if(userToBeModified !=userLoggedIn) return res.send({status:false,msg:"You Are Not Authorised Login First"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise
