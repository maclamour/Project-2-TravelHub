require("../config/db.connection")

module.exports ={
    Post: require("./thpost"),
    Comment: require("./thcomment"),
    User: require("./user"),
}


// mongoose.connect( process.env.MONGODB_URI)

