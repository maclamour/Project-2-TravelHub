//importing statements
const express = require('express') 
const methodOverride = require('method-override');
const session = require("express-session");
/* SECTION External modules */
const MongoStore = require("connect-mongo");




const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
require("./config/db.connection");


//CONTROLLER IMPORTS
const travelHubController = require('./controller/travelHub_controllers.js');
const commentController = require('./controller/comments_controllers')
const authController = require('./controller/auth_controllers')
// const navLinks = require('./navLinks');

kjdshljdsh

/* SECTION App Config */
// app.use(navLinks);
app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        // secret key is used to sign every cookie to say its is valid
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        // configure the experation of the cookie
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
       
        },
    })

    
);

// console.log(session);

/* SECTION Middleware */
app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
  });

  const authRequired = function (req, res, next) {
    if (req.session.currentUser) {
      return next();
    }
  
    return res.redirect("/login");
  };

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/travelhub',authRequired,travelHubController );
app.use('/comment',commentController );
app.use("/", authController);







// 404 Wildcard Route
app.get('/*',(req,res)=>{
    res.render('404')
})



// Post.insertMany(Posts,(err, Posts)=>{
//     if (err){ console.log(err)}
//     console.log("added provided  data", Posts)
//     // mongoose.connection.close();
// });

app.listen(process.env.PORT || 4000);
