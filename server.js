var ParseServer = require('parse-server').ParseServer;
var express = require('express');
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://backend:jlLAptw0349t@ds235411.mlab.com:35411/heroku_g17wsk3v',
  appId: process.env.APP_ID || 'mpr-fbu',
  masterKey: process.env.MASTER_KEY || 'fbu-mpr',
  liveQuery: {
  	classNames: ['Conversation', 'Message']
  }
});

// Initialize a LiveQuery server instance, app is the express app of your Parse Server
let httpServer = require('http').createServer(app);
httpServer.listen(1337);
var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);
