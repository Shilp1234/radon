const bookModel= require("../models/bookModel")

const createBook = async function (req, res) {
    const book = req.body
    let bookData = await bookModel.create(book)
    res.send({ msg:bookData })
}
const bookList = async function (req, res) {
    let lists = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: lists })
}
const getBooksInYear= async function (req, res) {
    let yearList= await bookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(yearList)
 }
 const getParticularBooks= async function (req, res) {
    let specificBooks = await bookModel.find(req.body)
    res.send({msg:specificBooks})
}
const getXINRBooks = async function(req,res){
    let list = await bookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}} ).select({bookName:1,_id:0})
    res.send({ msg: list })
}
const getRandomBooks= async function(req, res) {
    let allBooks = await bookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}

module.exports. createBook =  createBook
module.exports.bookList = bookList
module.exports. getBooksInYear =  getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports. getXINRBooks =  getXINRBooks
module.exports. getRandomBooks =  getRandomBooks






// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData