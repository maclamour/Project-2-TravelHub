require("../config/db.connection")

module.exports ={
    Post: require("./THPost"),
    Comment: require("./THComment"),
    User: require("./User"),
    // auth: require("./auth_controller"),
    
}