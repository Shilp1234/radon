const mongoose = require('mongoose');
const validator = require('validator');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, "College name already exists"],
    },
    fullname: {
        type: String,
        required: true,
        unique: [true, "College name already exists"],
    },
    logoLink: { 
        type: String,
        required: true 
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamp: true })

module.exports = new mongoose.model('College', collegeSchema);

// { name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }
