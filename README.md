
<h1 align="center">We are TravelHub</h1>
<h3 align="center">General Assembly Students</h3>
<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

Deployed Website : https://travelhub3.herokuapp.com/login

# Project-2-TravelHub
This will be a social media forum where users can post and share information with other users, while interacting with eachothers posts and topics.


Wireframes & User Flow:


o       Home/Index
         List of Posts that shows the title, the post content and data posted
        You can click on the post and that will take you to the show page

![Screen Shot 2022-08-29 at 8 30 37 AM](https://user-images.githubusercontent.com/56799470/187265939-d68de01a-4c23-4de5-a56e-a03eed6d91d8.png)


o	Show –
    	Once you click on a post that has been created from the home page, It will take you to the post where you can edit the post or add a comment to the post 
	        If you add comment, you’ll stay on the show page and see your comment posted
        	Edited posted will either redirect to home page or stay on show. Both will show you the updated post

![Screen Shot 2022-08-29 at 8 21 55 AM](https://user-images.githubusercontent.com/56799470/187266141-c6f6b69c-6ac9-49ee-95b4-28365991c2b4.png)

o	New – 
    	You can create a post by clicking on the button in the nav bar. 
    	After posting, it takes you back to the index/home page and shows it on the top of the posts list
![Screen Shot 2022-08-29 at 8 25 31 AM](https://user-images.githubusercontent.com/56799470/187266016-44c9c6e0-73bb-4d53-82ee-c358c6465c12.png)



o ERD:

![Screen Shot 2022-08-29 at 12 08 33 PM](https://user-images.githubusercontent.com/56799470/187269182-22320ddf-9822-4c7c-a508-557dc39d98bc.png)


o MVP: 
Full MEN stack,
Restful Routing,
CRUD Posts,
 and CRUD Comments


o Post:
MVP,
User Profile,
and User Authorization


TravelHub Board : https://trello.com/b/x9TYeRLr/travelhub

☐ Breakdown of Responsibilities:
Alyssa - responsible for the server, database and controller/routing:
Mackenzie - responsible for the models, users authentication and registration:
Faiza - responsible for the views and the CSS

☐ Strengths:
Our biggest strengths as a group was our ability to organize and communicate amongst one another. Our initial planning really set us up for the rest of this project. Also, delegation and management of task, especially when our deadline was closing in, was handled very well.

☐ Weaknesses:
Our biggest weaknesses during this project were time management and our use of class resources. During the project we often spent too much time troubleshooting a bug before seeking help. Setting timers/deadlines for how long we work on an issue eariler in the project would have keep on task and in the long run saved us time. Also, using class resources are a baseline in the beginning of the project would have saved time as well. 

☐ Biggest challenge:
Our biggest challanges during this project would be implementing comments into the post show page, and troubleshooting filepaths. Adding the comments feature into the application was challenging, because it was similar to what we learned in class but not entirely; it took a bit of creativity and pushing ourselves and our knowledge of the material to add this feature. The filepaths were particularly tricky for us. Using the correct filepaths in our partials were a challenge and we also ran into trouble deploying to Heroku because of the model filenames.


☐ Key learnings/takeaways:
Key takeaways from this project would be structuring and planning of the website, including the filename/paths and the layers of the website are better done early in the project. During the project we learned a great deal about building a web application from the frontend, particularly CSS, and a great deal about backend and how these two disciplines work together. 

☐ Improvements:
Our group definitely wants to add a communities feature to this project, as well as, changing the navigation bar to hide the user registration and login after a user is logged into the website. 


o Highlight Code:
The Authentication was a stretch goal we where very proud to reach. Here is alittle bit of code we really like writing.

```
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
  