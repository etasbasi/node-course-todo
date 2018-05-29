//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5ad0d6049c47272948f64727')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5ad0d6049c47272948f64727")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
