const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');

// express.json() and express.urlencoded is needed for POST and PUT requests to take in data payloads.
// built in method to recognize incoming request object as a JSON object
router.use(express.json());

// built in method to recognize incoming request object as strings or arrays
router.use(express.urlencoded({ extended: false }));

router.get('/login', (req, res) => {
    res.render('users/login.ejs');
})

router.get('/register', (req, res) => {
    res.render('users/register.ejs');
})

router.post('/login', async (req, res, next) => {
    try {
        let formData = req.body;
        let foundUser = await User.findOne({email: formData.email});
        if(!foundUser) {
            return res.redirect('/register')
        } else {
            const match = await bcrypt.compare(formData.password, foundUser.password);
            console.log(match);
            if(!match) return res.send("Email or password doesn't match!");
            req.session.currentUser = {
                id: foundUser._id,
                username: foundUser.username,
            };
            return res.redirect('/products');
        }

    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/register', async (req, res, next) => {
    try {
        let formData = req.body;
        // if(formData.password.length < 6) {
        //     return res.redirect('/somepagesayingIhateuserslikethis')
        // }
        let foundUser = await User.exists({email: formData.email});
        if(foundUser) {
            return res.redirect('/login')
        } else {
            // Industry standard of 12 rounds
            let salt = await bcrypt.genSalt(12);
            console.log(`My salt is ${salt}`)
            // Create a hash
            let hash = await bcrypt.hash(formData.password, salt);
            console.log(`My hash is ${hash}`)
            formData.password = hash;

            const newUser = await User.create(formData);
            console.log(`My new user is ${newUser}`)
            return res.redirect('/login')
        }
        
    } catch(err) {
        console.log(err);
        next();
    }
})

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