const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/authorModel")
const mongoose = require('mongoose')

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor = async function(req,res){
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res,send({msg:savedData})
}

const getBooksByChetanBhaga = async function (req, res) {
    let data= await AuthorModel.find( {author_name : "Chetan Bhagat" }).select("author_id")
    console.log(data)
    let bookData = await BookModel.find({author_id: data[0].author_id})
    res.send({msg:bookData})
}

let authorBooks = async function(req,res){
    let data = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.price
    res.send({msg:authorData,price})
}
 
module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.getBooksByChetanBhaga=getBooksByChetanBhaga
module.exports.authorBooks=authorBooks




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



