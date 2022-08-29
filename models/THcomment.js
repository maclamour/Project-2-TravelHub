const mongoose = require('mongoose');
const comments = require('./comment_model');

const commentSchema = new mongoose.Schema({
    body: String,
    post:mongoose.Types.ObjectId,
    ref:"Post",
},

{timestamps: true},

);

const Post = mongoose.model('Comment',commentSchema);

module.exports = Comment;

