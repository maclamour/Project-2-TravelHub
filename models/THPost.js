const mongoose = require('mongoose');
const Posts = require('./travelHub_model');

const postSchema = new mongoose.Schema({
    title: String,
    subject: {type: String, default: null},
    body: String,
    comment: [{type: mongoose.Types.ObjectId,ref: "Comment"}],
    date: {type: Date, default:Date.now},
    image: {type:String},
},

{timestamps: true},

);

const Post = mongoose.model('Post',postSchema);

module.exports = Post;

