const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    authorName: String,
    bookName:{
        type : String,
        unique : true,
        required : true
    },
    Category: String,    
    Year:{
        type : Number,
        required : true
    }
},{ timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 


