
const mongoose = require('mongoose');
const Posts = require('./travelHub_model');
//const comments = require('./comment_model');

const commentSchema = new mongoose.Schema({
    content:{
        body: String,
    },
    Posts: {
    type: mongoose.Types.ObjectId,
    ref: "Posts",
},
},
{timestamps: true},

);

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;

