const mongoose = require('mongoose');
//const validator = require('validator');

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"],
        trim:true
    },
    mobile: { 
        type: Number,
        required: true,
        unique: true,
        trim:true
    },

    collegeId: {
        type: mongoose.Types.ObjectId, 
        ref: 'College',
        trim:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamp: true })

module.exports = new mongoose.model('Intern', internSchema);



