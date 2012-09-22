/**
  * some functions used in a chat room
  */
var exec = require("child_process").exec;

function start() {
	var content = "empty";
  console.log("Request handler 'start' was called.");
  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
  });

  return content;
  
}

function login(username, passwd) {
  console.log("Request handler 'login' was called.");
}

function logout() {
	console.log("log user out");
	return "loggin out";
}

function getChannels() {
	console.log("request for getChannels");
}
function joinChannel(channelname) {
	console.log("request for join Channel " + channelname);
}

function getChannelUsers() {
	console.log("request for join Channel " + channelname);	
}


exports.start = start;
exports.login = login;
exports.getChannels = getChannels;
exports.joinChannel = joinChannel;
exports.getChannelUsers  = getChannelUsers;