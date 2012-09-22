
/**
 * Very basic server that simply responds with hello world
 *
 **/

var http = require("http");
var url = require("url");

function start(route,handle) { 

    /**
     * onRequest will respond to all http requests
     */
    function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	var pathname = url.parse(request.url).pathname;
	console.log(" Request for pathname " + pathname );
	route(handle, pathname);
	response.write("Hello Wold\nThe url path was " + pathname);
	response.end();
    }

    http.createServer(onRequest).listen(8000);
    console.log("started");
}

exports.start = start;