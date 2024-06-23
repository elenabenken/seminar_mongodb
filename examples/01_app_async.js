var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
'mongodb://127.0.0.1:27017/pcat',
 function(err, db) {

    if(err) throw err;

    db.collection('products').findOne({}, 
    function(err, doc) {
        console.dir(doc);
        db.close();
    });
    console.dir("Вызван метод findOne еще раз!");
});
