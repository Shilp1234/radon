const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
        name: {
        type: String,
        required: true,
        unique: [true, "College name already exists"],
        trim:true
    },
    fullName: {
        type: String,
        required: true,
        unique: [true, "College name already exists"],
        trim:true
    },
    logoLink: { 
        type: String,
        required: true,
        trim:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamp: true })

module.exports = new mongoose.model('College', collegeSchema);

