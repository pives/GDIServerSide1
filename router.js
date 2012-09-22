/** 
 * route paths in the http request appropriately
 *
 */
 var fs = require("fs");

function route(handle, pathname, response, postData) {
    console.log ("routing request for " + pathname) ;
    if(typeof handle[pathname] ==='function') {
    	handle[pathname](response,postData);
    } else {
    	if(pathname!='/.users'){ //really bad security 
	    	console.log("No request Handler defined for " + pathname);
	    	try {
	    		stats = fs.lstatSync('.'+pathname);
	    		if(stats.isFile()) {
	    			fs.readFile('.'+pathname, function (err, text) {
		    			if (err) {
		        			throw err;
		    			}  
	    				//console.log(text);
	    				var ctype = "text/plain";
	    				if(pathname.indexOf(".css") > 0 ) {
	    					ctype="text/css";
	    				} else if (pathname.indexOf(".js")> 0 ) {
	    					ctype="application/javascript"
	    				} else if (pathname.indexOf(".html") > 0) {
	    					ctype = "text/html";
	    				}
					    response.writeHead(200, {"Content-Type": ctype });
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

}

exports.route = route;
