const mongoose = require("mongoose");

const connect = (dbName, url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url || "mongodb://localhost:27017/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName
    })
    .then(() => console.info(`=> Connection to DB Node [${dbName}] estblished`))
}

module.exports = connect;