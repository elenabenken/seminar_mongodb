var http = require('http');
var server = http.createServer(
function (request, response) {
  response.writeHead(200,
   {"Content-Type": "text/plain"});
  response.end( "Наш сайт");
});
server.listen(8000);
console.log("Сервер работает на http://127.0.0.1:8000/");
