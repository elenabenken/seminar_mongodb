rvar express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Привет');
});

app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});

app.listen(8000);
console.log('Express server started 8000');

