//  in prompt     ./mongod --dbpath /mongo-data
// reference      mongodb.github.io/node-mongodb-native/2.2/api/

// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    
    
    // db.close();
});