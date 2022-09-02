require("../config/db.connection")

module.exports ={
    Post: require("./THPost"),
    Comment: require("./THComment"),
    User: require("./User"),
}


// mongoose.connect( process.env.MONGODB_URI)

