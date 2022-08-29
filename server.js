//importing statements
const express = require('express') 
const methodOverride = require('method-override');

const app = express()
const PORT = 4000
app.set('view engine', 'ejs')

//CONTROLLER IMPORTS
const travelHubController = require('./controller/travelHub_controllers.js')


// MIDDLEWARE
app.use(methodOverride('_method'));
app.use('/travelhub',travelHubController )












app.listen(4000, () => console.log('starting server at port:', PORT))