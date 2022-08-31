
const express = require("express");
const router = express.Router();


//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");


// index route
router.get('/', async (req, res, next) => {
    try{
        const allComment = await db.Comment.find().populate('post').exec()
        const allPost = await db.Post.find()
        // res.render('comment/show.ejs', {comments: allComment, posts: allPost})
        res.render('show.ejs', {comments: allComment, posts: allPost})
        
    }catch(err){
       console.log(err)
       next()
    }
});


// //show route
// router.get('/:id/', async (req, res, next) => {
//     try{
//         const foundComment = await db.Comment.findById(req.params.id).populate('post').exec()
//         res.render('show.ejs', {comment: foundComment})
//     }catch(err){
//        console.log(err)
//        next()
//     }
// })

// create route 
//localhost:4000/travelhub/:id/
router.post('/', async (req, res, next) => {
    try{
        // res.send(req.body)
        const newComment = await db.Comment.create(req.body)
        const context = {comments: newComment,}
        //push new comment into a post
        console.log(context)
        res.redirect('/:id/comment', context)
    }catch(err){
       //console.log(err)
       next()
    }

})

// // delete route
// router.delete('/:id', async (req,res, next)=>{
//     try{
//         const deleted = await db.Comment.findByIdAndDelete(req.params.id)
//         //console.log(deleted)
//         res.redirect(`/comment/`)
//     }catch(err){
//        //console.log(err)
//        next()
//     }
// })

// update route
// router.put('/:id', async (req, res, next)=>{
//     try{
//         const updatedComment = await db.Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
//         //console.log(updatedComment)
//         res.redirect(`/post/${updatedComment.post}`)
//     }catch(err){
//        //console.log(err)
//        next()
//     }

// })








module.exports = router;