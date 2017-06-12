/* jslint node:true */
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.enable('trust proxy');

app.get('/', function(req, res) {
  var ip = req.ip;  
  var lang = req.headers['accept-language'].split(',')[0];
  var software = req.headers['user-agent'].split('(')[1].split(')')[0];
  res.json({
    'ipaddress': ip,
    'language': lang,
    'software': software
  });
});

