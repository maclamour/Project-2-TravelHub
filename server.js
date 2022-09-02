//importing statements
const express = require('express') 
const methodOverride = require('method-override');
const session = require("express-session");
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




// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use('/travelhub',travelHubController )
app.use('/comment',commentController )
app.use("/", authController);
// app.use(navLinks);

app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/sellitup" }),
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





// 404 Wildcard Route
app.get('/*',(req,res)=>{
    res.render('404')
})






app.listen(3000, () => console.log('starting server at port:', PORT))