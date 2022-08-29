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
app.use('/travelhub',travelHubController )
app.use('/comment',commentController )












app.listen(4000, () => console.log('starting server at port:', PORT))