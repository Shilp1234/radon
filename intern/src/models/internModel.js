const mongoose = require('mongoose');
const validator = require('validator');

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        },
        unique: [true, "Email already exists"],
    },
    mobile: { 
        type: String, 
        required: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Invalid Mobile No.')
            }
        },
        unique: [true, "Mobile No. already exists"],
    },
    collegeId: {
        type: mongoose.Types.ObjectId, 
        ref: 'College'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamp: true })

const Intern = new mongoose.model('Intern', internSchema);
module.exports = Intern;

// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}
