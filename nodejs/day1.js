var http = require('http');
var url = require('url')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  const getvalue= url.parse(request.url,true).path
  console.error(request.url,getvalue)

  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');