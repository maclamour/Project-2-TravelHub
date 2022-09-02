//importing statements
const express = require('express') 
const methodOverride = require('method-override');
const Post =require('./models/THPost')
const Posts = require('./models/travelHub_model');
require("./config/db.connection");


const app = express()
const PORT = 4000
app.set('view engine', 'ejs')



//CONTROLLER IMPORTS
const travelHubController = require('./controller/travelHub_controllers.js');
const commentController = require('./controller/comments_controllers')




// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use('/travelhub',travelHubController )
app.use('/comment',commentController )





// 404 Wildcard Route
app.get('/*',(req,res)=>{
    res.render('404')
})



// Post.insertMany(Posts,(err, Posts)=>{
//     if (err){ console.log(err)}
//     console.log("added provided  data", Posts)
//     // mongoose.connection.close();
// });

app.listen(4000, () => console.log('starting server at port:', PORT))