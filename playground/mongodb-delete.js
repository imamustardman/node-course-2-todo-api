//  in prompt     ./mongod --dbpath /mongo-data
// reference      mongodb.github.io/node-mongodb-native/2.2/api/

// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Users').deleteMany({name: 'James'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectId('5be21c6b1336b72d0e8a2802')}).then((result) => {
        console.log(result);
    });

    // db.close();
});