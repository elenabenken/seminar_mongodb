var http = require('http');
var server = http.createServer(
function (request, response) {
  response.writeHead(200,
   {"Content-Type": "text/plain"});
  response.end( "Это мой сайт");
});
server.listen(8000);
console.log("Сервер на http://localhost/");
