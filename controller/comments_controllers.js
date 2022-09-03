
const express = require("express");
const { Post } = require("../models");
const router = express.Router();


//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");

//test


// index route
    router.get("/", async (req, res) => {
           try{
       const getComment = await db.Comment.find().populate("comment user").exec()
       const getPost= await db.Post.find()
       console.log(getComment);
       console.log(getPost);
                      // here we are adding the user to the populate command so we get both the product and user on a review
            }catch(err){
                console.log(err)
                next()
             }

    });
          


// //show route
router.get('/:id/', async (req, res, next) => {
    try{
        const foundComment = await db.Comment.findById(req.params.id).populate('post').exec()
        res.render('comment/show.ejs', {comment: foundComment})
    }catch(err){
       console.log(err)
       next()
    }
})

// create route 
//localhost:4000/travelhub/:id/
router.post('/:id', async (req, res, next) => {
    try{
         //res.send(req.body)
         
        const newComment = await db.Comment.create(req.body)
        const post = await db.Post.findById(newComment.post)
        post.comment.push(newComment.id)
        await post.save()
        // const id = req.params.id
        // newComment.push[{}]
        //push new comment into a post
       // console.log(newComment)
        res.redirect(`/travelhub/${newComment.post}`)
    }catch(err){
       console.log(err)
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
router.put('/:id', async (req, res, next)=>{
    try{
        const updatedComment = await db.Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
        //console.log(updatedComment)
        res.redirect(`/travelhub/${updatedComment.post}`)
    }catch(err){
       //console.log(err)
       next()
    }

})








module.exports = router;