const mongoose = require('mongoose');
require('dotenv').config();
const express = require("express");
const router = express.Router();



//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");


// index 
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