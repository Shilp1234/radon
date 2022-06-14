const mongoose = require('mongoose');

const userDocumentSchema = new mongoose.Schema({
    name:String,
    balance:{
        type:Number,
        default:100,
    },
    address:String,
    age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    }

},  { timestamps: true });

module.exports = mongoose.model('UserDocument', userDocumentSchema)