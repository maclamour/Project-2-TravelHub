const mongoose = require('mongoose');
// const Posts = require('./travelHub_model');

const thPostSchema = new mongoose.Schema({
    title: String,
    subject: {type: String, default: null},
    body: String,
    comment: [{type: mongoose.Types.ObjectId,ref: "Comment"}],
    date: {type: Date, default:Date.now},
    image: {type: String, default: null},
},

{timestamps: true},

);

const ThPost = mongoose.model('Post',thPostSchema);

module.exports = ThPost;

