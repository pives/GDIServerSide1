/** 
 * route paths in the http request appropriately
 *
 */
function route(handle, pathname) {
    console.log ("routing request for " + pathname) ;
    if(typeof handle[pathname] ==='function') {
    	return handle[pathname]();
    } else {
    	console.log("No request Handler defined for " + pathname);
    	return "404 Not Found";
    }

}

exports.route = route;
