//importing statements
const express = require('express') 
const methodOverride = require('method-override');

const app = express()
const PORT = 4000
app.set('view engine', 'ejs')
require("./config/db.connection");


//CONTROLLER IMPORTS
const travelHubController = require('./controller/travelHub_controllers.js');
const commentController = require('./controller/comments_controllers')




// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use('/travelhub',travelHubController )
app.use('/travelhub',commentController )





// 404 Wildcard Route
app.get('/*',(req,res)=>{
    res.render('404')
})






app.listen(4000, () => console.log('starting server at port:', PORT))