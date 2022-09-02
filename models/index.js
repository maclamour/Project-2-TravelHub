require("../config/db.connection")

module.exports ={
    Post: require("./THPost"),
    Comment: require("./THComment"),
}

// mongoose.connect( process.env.MONGODB_URI)