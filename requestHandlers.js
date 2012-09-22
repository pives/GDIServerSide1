/**
  * some functions used in a chat room
  */

function start() {
  console.log("Request handler 'start' was called.");
}

function login() {
  console.log("Request handler 'login' was called.");
}

function getChannels() {
	console.log("request for getChannels");
}
function joinChannel() {
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