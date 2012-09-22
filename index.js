var responder = require("./responder.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers");

//map some paths
var handle = {}

handle["/"] = requestHandlers.start; // map default path to start
handle["/start"] = requestHandlers.start;
handle["/index.html"] = requestHandlers.start; // just in case
handle["/login"] = requestHandlers.login;
handle["/getchannels"] = requestHandlers.getChannels;
handle["/joinchannel"] = requestHandlers.joinChannel;
handle["/getusers"] = requestHandlers.getChannelUsers;
handle["/say"] = requestHandlers.say;

 

responder.start(router.route, handle); // we are passing our router instance function into the responder so it's available.