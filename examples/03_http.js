var http = require('http');
var server = http.createServer(
function (request, response) {
  response.writeHead(200,
   {"Content-Type": "text/plain"});
  response.end( "Это наш сайт");
});
server.listen(8000);
console.log("Сервер новый текст на http://localhost/");
