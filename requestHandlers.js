var fs = require('fs'); // the file system library
var querystring = require('querystring');
/**
  * some functions used in a chat room
  */

function start(response,postData) {
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

function login(response,postData) {
  console.log("Request handler 'login' was called.");
}

function getChannels(response,postData) {
	console.log("request for getChannels");
}
function joinChannel(response,postData) {
	console.log("request for join Channel " + channelname);
}

function getChannelUsers(response,postData) {
	console.log("request for join Channel " + channelname);	
}
function say(response, postData) {
	
	var data = querystring.parse(postData);
	console.log(data);
	response.writeHead(200, {"Content-Type": "text/plain" });
	response.write("hi"+data.chattext);
	response.end();
}


exports.start = start;
exports.login = login;
exports.getChannels = getChannels;
exports.joinChannel = joinChannel;
exports.getChannelUsers  = getChannelUsers;
exports.say = say;