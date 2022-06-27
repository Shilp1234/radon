const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author_id: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Author' 
    },
    tag: String,
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    deletedAt: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: String,
    isPublished: {
        type: Boolean,
        default: false
    }
}, { timestamp: true })

const Blog = new mongoose.model('Blog', blogSchema);
module.exports = Blog;