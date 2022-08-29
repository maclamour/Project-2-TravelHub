
const express = require("express");
const router = express.Router();


//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");









module.exports = router;