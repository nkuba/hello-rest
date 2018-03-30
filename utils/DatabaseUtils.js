exports.isDbConnected = function (mongoDbUrl, callback) {
    const mongodb       = require('mongodb').MongoClient

    var dbConnected;
    console.log("Check connection to MongoDB: " + mongoDbUrl)
    mongodb.connect(mongoDbUrl, (err, db) => {
        if (err) {
            dbConnected = false;
            console.warn("Connection to MongoDB failed: " + err.message)
        } else {
            dbConnected = true;
            db.close();
        }
        callback(dbConnected);
    });
}