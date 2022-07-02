const collegeModel = require('../models/collegeModel')
const validUrl = require('valid-url')

/*****************************************CREATE COLLEGE***************************************/

const isValidReqBody = function(reqBody){
    return Object.keys(reqBody).length >0
}
const isValid = function(value){
    if(typeof value ==='undefined'||typeof value === null) return false;
    if(typeof value === 'string'&& value.trim().length ===0) return false;
    return true
}

const createCollege = async function(req, res) {
 try{
    if(!isValidReqBody(req.body)) return res.status(400).send({status:false,msg:"Invalid parameters.Please provide college details"})
    const nameRegex=/^[a-zA-Z ]{2,10}$/
     const data2 = req.body
        let{name,fullname,logoLink} = data2;

     req.body.fullname=fullname.split(' ').filter(word=>word).join(" ")  //remove space
    //console.log( req.body.fullname)
    
    if(!isValid(name)) return res.status(400).send({status:false,msg:"college name is required"})

    if(!nameRegex.test(name))  return res.status(400).send({status:false,msg:" name is required "})

    if(!isValid(fullname)) return res.status(400).send({status:false,msg:" fullname is required"})
    if(!isValid(logoLink)) return res.status(400).send({status:false,msg:"logoLink is required"})
    if(!validUrl.isWebUri(logoLink)) return res.status(400).send({status:false,msg:"logoLink url is invalid"})
    let findCollege = await collegeModel.findOne({name})
    if(findCollege) return res.status(400).send({status:false,msg:"college name is already exist"})
     let data = await collegeModel.create(req.body)
     res.status(201).send({status:true,msg:"college created successfull",data:data})
 }catch(err){
     res.status(500).send({status:false,error:err.message})
 }       
}


module.exports.createCollege=createCollege
















