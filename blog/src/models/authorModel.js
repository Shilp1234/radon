const mongoose = require('mongoose');
const validator = require('validator');

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error('Invalid first name')
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error('Invalid last name')
            }
        }
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password: {
        type: String,
        required: true
    }
}, { timestamp: true })

const Author = new mongoose.model('Author', authorSchema);
module.exports = Author;