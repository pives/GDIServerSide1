
/**
 * Very basic server that simply responds with hello world
 *
 **/

var http = require("http");


/**
 * onRequest will respond to all http requests
 */
function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8000);
console.log("started");
