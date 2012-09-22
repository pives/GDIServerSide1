/**
  * some functions used in a chat room
  */

function start() {
  console.log("Request handler 'start' was called.");
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return "starting session";
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