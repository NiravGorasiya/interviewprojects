const mongoose = require("mongoose");

function dbConnection() {
    mongoose
        .connect('mongodb://127.0.0.1:27017/myapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected with database");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = { dbConnection };