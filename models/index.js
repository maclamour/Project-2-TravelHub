require("../config/db.connection")

module.exports ={
    Post: require("./THPost"),
    Comment: require("./thcomment"),
    User: require("./User"),
}


// mongoose.connect( process.env.MONGODB_URI)

