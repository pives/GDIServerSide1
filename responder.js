
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
    	var postData="";
    	var pathname = url.parse(request.url).pathname;
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
          postData += postDataChunk;
          console.log("chunk");
        });

        request.addListener("end", function(postDataChunk) {
            
            postData += postDataChunk;
            console.log("---" +  postData);
          route(handle, pathname, response, postData);
        });
    	console.log(" Request for pathname " + pathname );
    	
	}

    http.createServer(onRequest).listen(8000);
    console.log("started");
}

exports.start = start;