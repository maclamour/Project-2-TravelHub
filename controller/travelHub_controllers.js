const mongoose = require('mongoose');
require('dotenv').config();
const express = require("express");
const router = express.Router();



//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");


//new route
router.get("/new", (req, res) => {
    res.render("new.ejs");
  });
  // create route 
router.post("/", async (req, res) => {
    const createdPost = req.body;
    // post.push(createdPost);
    try {
      const newProduct = await db.Product.create(createdPost);
  
      // console.log(newProduct);
  
      res.redirect(`/products`);
    } catch (err) {
      console.log(err);
      res.redirect("/404");
      // throw new Error(err);
    }
  });

// index route
router.get("/", async (req, res) => {
    try {
      const allPost = await db.Post.find();
      const context = { post: allPost };
      // console.log(allPost)
      res.render("index.ejs", context);
    } catch (err) {
      console.log(err);
      res.redirect("/404");
    }
  });



module.exports = router;