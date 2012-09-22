/** 
 * route paths in the http request appropriately
 *
 */
 var fs = require("fs");

function route(handle, pathname, response) {
    console.log ("routing request for " + pathname) ;
    if(typeof handle[pathname] ==='function') {
    	handle[pathname](response);
    } else {

    	console.log("No request Handler defined for " + pathname);
    	try {
    		stats = fs.lstatSync('.'+pathname);
    		if(stats.isFile()) {
    			fs.readFile('./main.css', function (err, text) {
	    			if (err) {
	        			throw err;
	    			}  
    				console.log(text);
				    response.writeHead(200, {"Content-Type": "text/css"});
				    response.write(text);
				    response.end();
    			});
    		} else {
    			response.writeHead(404, {"Content-Type": "text/plain"});
    			response.write("404 Not found");
    			response.end();
    
    		}
    	} catch(e) {
    		console.log(e);
    		response.writeHead(500, {"Content-Type": "text/plain"});
    		response.write("500 " + e);
    		response.end();
    	}
    }	

}

exports.route = route;
