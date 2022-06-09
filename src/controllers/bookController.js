const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
//const publisher = require("../models/publisherModel")

const createBook= async function (req, res) {
    let bookData = req.body

//.............condition 1 .................
    let authorId = bookData.author_id
    if(!authorId)res.send("Author id is required")

//.............condition 2 .................
    let publisherId = bookData.publisher_id
    if(!publisherId)res.send("Publisher id is required")

//.............condition 3 .................
    let savedAuthorData = await authorModel.findById(authorId)
    if(!savedAuthorData)res.send("Invalid Author id")

//.............condition 4 .................
    let savedPublisherData = await publisherModel.findById(publisherId)
    if(!savedPublisherData)res.send("Invalid Publisher id")

    let savedData = await bookModel.create(bookData)
    res.send(savedData)
}
 
const getAllBooks = async function(req,res){
    let savedData = await bookModel.find().populate('author_id','publisher_id')
    res.send(savedData)
}

module.exports.createBook= createBook
module.exports.getAllBooks= getAllBooks


   


// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
