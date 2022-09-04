
const mongoose = require('mongoose');
// const Posts = require('./travelHub_model');
// //const comments = require('./comment_model');

const thCommentSchema = new mongoose.Schema({
    content: String,
    post: {type: mongoose.Types.ObjectId,ref: "Post"},
    user: {type: mongoose.Types.ObjectId,ref: "User"},
    
},
{timestamps: true},

);

const ThComment = mongoose.model('Comment',thCommentSchema);

module.exports = ThComment;

