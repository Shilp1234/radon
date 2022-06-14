const mongoose = require('mongooge');

const userProductSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:{
        type:Number,
        required:true,
    }
}, { timestamps: true });

module.exports = mongoose.model('UserProduct', userProductSchema) 
