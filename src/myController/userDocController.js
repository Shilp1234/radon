const UserDocumentModel = require("../models/userDocumentModel")
const ProductDocumentModel = require("../models/productDocumentModel")
const OrderDocumentModel = require("../require/ orderDocumentModel")

const createUser = async function(req,res){
    let data = req.body
    let savedData = await UserDocumentModel.create(data)
    res.send({msg:savedData})
    
}

const createProduct = async function(req,res){
    let data = req.body
    console.log(data)
    if(typeof(data.price == "number") && typeof(data.name == "string")){
        let product = await ProductDocumentModel.create(data)
       }else return res.send({msg:product})
   
}

const createOrder = async function(req,res){
    let data = req.body
    let savedData = await OrderDocumentModel.create(data)
    res.send({msg:savedData})
}

module.exports.createUser = createUser
module.exports.createProduct = createProduct
 module.exports.createOrder = createOrder


