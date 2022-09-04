require("../config/db.connection")

module.exports = {
    Comment: require("./Comment"),
    User: require("./User"),
    Post: require('./Post'),
}