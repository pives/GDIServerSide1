var fs = require('fs'); // the file system library
/**
  * some functions used in a chat room
  */

function start(response) {
  console.log("Request handler 'start' was called.");
  fs.readFile('./main.html', function (err, html) {
    if (err) {
        throw err;
    }  
    
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(html);
      response.end();
    });
}

function login(response) {
  console.log("Request handler 'login' was called.");
}

function getChannels(response) {
	console.log("request for getChannels");
}
function joinChannel(response) {
	console.log("request for join Channel " + channelname);
}

function getChannelUsers(response) {
	console.log("request for join Channel " + channelname);	
}


exports.start = start;
exports.login = login;
exports.getChannels = getChannels;
exports.joinChannel = joinChannel;
exports.getChannelUsers  = getChannelUsers;