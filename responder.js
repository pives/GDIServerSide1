/**
 * Very basic server that simply responds with hello world
 *
 **/

var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
    }).listen(8000);