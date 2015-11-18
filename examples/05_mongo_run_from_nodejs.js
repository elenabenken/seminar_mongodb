var MongoClient = require('mongodb').MongoClient;

// Соединение с сервером
MongoClient.connect('mongodb://127.0.0.1:27017/pcat', function(err, db) {
    if(err) throw err;

    // Поиск одного документа в коллекции
    db.collection('products').findOne({}, function(err, doc) {

        if(err) throw err;

        // Печать результата. 
        // Распечатает null , если в коллекции нет документов.
        console.dir(doc);

        // Закрываем соединение с базой данных
        db.close();
    });

    // Радуемся успеху
    console.dir("Вызван findOne!");
});
