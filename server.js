var responder = require("./responder.js");
var router = require("./router.js");

responder.start(router.route); // we are passing our router instance function into the responder so it's available.