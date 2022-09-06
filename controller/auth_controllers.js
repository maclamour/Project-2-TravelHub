const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");


//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
router.get("/login", function (req, res) {
    res.render("auth/login");
  });

router.get("/register", function (req, res) {
    return res.render("auth/register");
  });

  router.post("/register", async function (req, res) {
    try {

      const foundUser = await User.exists({ email: req.body.email });
      if (foundUser) {
        return res.redirect("/login");
      }
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(req.body.password, salt);
  
      req.body.password = hash;
  
      const newUser = await User.create(req.body);
  
      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  });

  router.post("/login", async function (req, res) {
    try {
      let userInfo =req.body
      const foundUser = await User.findOne({ email: req.body.email });
      console.log(foundUser);
      if (!foundUser) return res.redirect("/register");
      const match = await bcrypt.compare(userInfo.password, foundUser.password);
      if (!match) return res.send("password invalid");
      req.session.currentUser = {
        id: foundUser._id,
        username: foundUser.username,
      };

      console.log(req.session.currentUser)
  
      return res.redirect("/travelhub");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  router.get("/logout", async function (req, res) {
    try {
      await req.session.destroy();
      return res.redirect("/login");
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  });

module.exports = router;