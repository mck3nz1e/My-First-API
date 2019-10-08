var http = require("http");
var port = 3001;

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello Scott"
    response.end('Hello Scott\n');
 }).listen(port);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:3001/');