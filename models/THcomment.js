const mongoose = require('mongoose');
//const comments = require('./comment_model');

const commentSchema = new mongoose.Schema({
    body: String,
},

{timestamps: true},

);

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;

