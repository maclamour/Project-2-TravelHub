const mongoose = require('mongoose');
const Posts = require('./travelHub_model');

const postSchema = new mongoose.Schema({
    title: String,
    subject: String,
    body: String,
    date: {type: Date, default:Date.now},
},

{timestamps: true},

);

const Post = mongoose.model('Post',postSchema);

module.exports = Post;

