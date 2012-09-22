/** 
 * route paths in the http request appropriately
 *
 */
function route(handle, pathname) {
    console.log ("routing request for " + pathname) ;
    if(typeof handle[pathname] ==='function') {
    	handle[pathname]();
    } else {
    	console.log("No request Handler defined for " + pathname);
    }

}

exports.route = route;
